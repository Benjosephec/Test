// Données des albums
const albums = {
    album1: {
        title: "Never Apologize v1",
        cover: "images/Capture d'écran 2024-11-07 180833.jpg",
        tracklist: [
            { title: "Go Off", url: "https://pillowcase.su/f/b9809ab2cfdd866ad20eada0de677035" },
            { title: "Count My Guap", url: "https://pillowcase.su/f/681f5a34fec75386f770f2c5924ea796" },
            { title: "Against The Rope", url: "https://pillowcase.su/f/d0170598a9b0a5f5cf0f0d45165fd6be" },
            { title: "After Dark", url: "https://krakenfiles.com/view/ETUht5PxDb/file.html" },
            { title: "Woke Up", url: "https://pillowcase.su/f/dd65869c108bb8ecfec1220b7511a068" },
            { title: "Right Now", url: "https://pillowcase.su/f/fbfad93aac94d983f29d07d451da038e" },
            { title: "Blessings", url: "https://soundcloud.com/drugsheal/blessings?si=d58f5a19dd6c48c4b33f93a9b0fcbbcd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { title: "Climb", url: "https://youtu.be/jzlLPQ_3OJY" },
            { title: "Walking Thru Hell", url: "https://pillowcase.su/f/6924ef53556841b5f6717ff38379b99b" },
            { title: "Nightlife", url: "https://pillowcase.su/f/5457b5e048d88199ba080d9f88d71294" },
            { title: "Pockets Loaded", url: "https://pillowcase.su/f/557237fc24b6cbc4b0e86f7eea65a1b5" },
            { title: "All Day", url: "https://pillowcase.su/f/7668c1b84a5731f38a08122b3a65fc40" },
            { title: "Call Up The Troops", url: "https://pillowcase.su/f/4b037e642dff719943220520a088bacb" },
            { title: "Rolling", url: "https://pillowcase.su/f/7596133c3b773a2ec6aa950e9c907b00" },
            { title: "New York", url: "https://pillowcase.su/f/95e3461bd8f12a6e11f2fe470b3af2ec" },
            { title: "See Me Shine", url: "https://pillowcase.su/f/3f5f8c6272423c1fd1d4a80f85a8f05f" }
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
