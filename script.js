// Données des albums
const albums = {
    album1: {
        title: "Album 1",
        cover: "path/to/album1.jpg",
        description: "Description de l'Album 1.",
        tracklist: ["Chanson 1", "Chanson 2", "Chanson 3"]
    },
    album2: {
        title: "Album 2",
        cover: "path/to/album2.jpg",
        description: "Description de l'Album 2.",
        tracklist: ["Chanson A", "Chanson B", "Chanson C"]
    }
    // Ajouter plus d'albums ici
};

// Fonction pour récupérer le paramètre d'URL
function getAlbumParam() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("album");
}

// Afficher les détails de l'album
function displayAlbum() {
    const albumKey = getAlbumParam();
    const album = albums[albumKey];

    if (album) {
        document.getElementById("album-title").innerText = album.title;
        document.getElementById("album-cover").src = album.cover;
        document.getElementById("album-description").innerText = album.description;

        const tracklistEl = document.getElementById("tracklist");
        album.tracklist.forEach(track => {
            const li = document.createElement("li");
            li.innerText = track;
            tracklistEl.appendChild(li);
        });
    } else {
        document.getElementById("album-title").innerText = "Album introuvable";
    }
}

// Charger les détails de l'album au chargement de la page
window.onload = displayAlbum;
