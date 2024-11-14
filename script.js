// Données des albums
const albums = {
    album1: {
        title: "Never Apologize v1",
        cover: "images/Capture d'écran 2024-11-07 180833.jpg",
        tracklist: [
            { title: "Go Off", url: "https://pillowcase.su/f/b9809ab2cfdd866ad20eada0de677035" },
            { title: "Count My Guap", url: "https://example.com/count-my-guap" },
            { title: "Against The Rope", url: "https://example.com/against-the-rope" },
            { title: "After Dark", url: "https://example.com/after-dark" }
        ]
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

            const link = document.createElement("a"); // Créer un élément <a>
            link.href = track.url; // Assigner l'URL
            link.innerText = track.title; // Assigner le titre
            link.target = "_blank"; // Ouvrir le lien dans un nouvel onglet

            li.appendChild(link); // Ajouter le lien à l'élément <li>
            tracklistEl.appendChild(li); // Ajouter l'élément <li> à la liste
        });
    } else {
        document.getElementById("album-title").innerText = "Album introuvable";
    }
}

// Charger les détails de l'album au chargement de la page
window.onload = displayAlbum;
