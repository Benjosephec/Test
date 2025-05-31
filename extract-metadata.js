const mm = require('music-metadata');
const fs = require('fs');
const path = require('path');

const basePath = './public/music';
const outputPath = './src/data/albums.js';

const albums = [];

// Détecte la première image trouvée dans le dossier de l'album
function findAlbumCover(folderPath) {
  const files = fs.readdirSync(folderPath);
  const imageFile = files.find(f =>
    /\.(jpe?g|png|webp)$/i.test(f)
  );
  return imageFile ? path.join(folderPath, imageFile).replace('./public', '') : '';
}

function walkDir(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (file.toLowerCase().endsWith('.mp3')) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  try {
    const metadata = mm.parseFile(filePath);
    metadata.then((data) => {
      const relPath = filePath.replace('./public', '');
      const { title, artist, album } = data.common;

      let albumEntry = albums.find(
        (a) => a.title === album && a.artist === artist
      );

      if (!albumEntry) {
        const folderPath = path.dirname(filePath);
        const coverPath = findAlbumCover(folderPath);

        albumEntry = {
          title: album || 'Unknown Album',
          artist: artist || 'Unknown Artist',
          cover: coverPath,
          tracks: []
        };
        albums.push(albumEntry);
      }

      albumEntry.tracks.push({
        title: title || path.basename(filePath),
        file: relPath
      });
    });
  } catch (err) {
    console.error(`Erreur avec ${filePath}:`, err.message);
  }
}

// Exécution principale
console.log('⏳ Lecture des fichiers musicaux...');
walkDir(basePath);

// Attendre que tous les fichiers soient traités avant d’écrire
setTimeout(() => {
  const fileContent = 'export const albums = ' + JSON.stringify(albums, null, 2) + ';';
  fs.writeFileSync(outputPath, fileContent);
  console.log(`✅ Données générées : ${outputPath}`);
}, 3000);
