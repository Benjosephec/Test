// Données des albums
const albums = {
    album1: {
        title: "Never Apologize v1",
        cover: "images/Capture d'écran 2024-11-07 180833.jpg",
        tracklist: ["Go Off", "Chanson 2", "Chanson 3"]
    },
    album2: {
        title: "Never Apologize v2",
        cover: "path/to/album2.jpg",
        tracklist: ["Chanson A", "Chanson B", "Chanson C"]
    },
    album3: {
        title: "Never Apologize v3",
        cover: "path/to/album3.jpg",
        tracklist: ["Chanson A", "Chanson B", "Chanson C"]
    },
    album4: {
        title: "B4War",
        cover: "path/to/album4.jpg",
        tracklist: ["Chanson A", "Chanson B", "Chanson C"]
    },
    album5: {
        title: "War2",
        cover: "path/to/album5.jpg",
        tracklist: ["Chanson A", "Chanson B", "Chanson C"]
    }
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

        const tracklistEl = document.getElementById("tracklist");
        tracklistEl.innerHTML = ""; // Vider la liste avant d'ajouter les éléments
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
