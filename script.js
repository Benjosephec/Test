// Données des albums
const albums = {
    album1: {
        title: "Never Apologize v1",
        cover: "images/Capture d'écran 2024-11-07 180833.jpg",
        description: "Neuille.",
        tracklist: ["Go Off", "Chanson 2", "Chanson 3"]
    },
    album2: {
        title: "Never Apologize v2",
        cover: "path/to/album2.jpg",
        description: "Description de l'Album 2.",
        tracklist: ["Chanson A", "Chanson B", "Chanson C"]
    },
    album3: {
        title: "Never Apologize v3",
        cover: "path/to/album3.jpg",
        description: "Description de l'Album 3.",
        tracklist: ["Chanson A", "Chanson B", "Chanson C"]
    },
    album4: {
        title: "B4War",
        cover: "path/to/album4.jpg",
        description: "Description de l'Album 4.",
        tracklist: ["Chanson A", "Chanson B", "Chanson C"]
    },
    album5: {
        title: "War2",
        cover: "path/to/album5.jpg",
        description: "Description de l'Album 5.",
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
        document.getElementById("album-description").innerText = album.description;

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
