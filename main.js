const audiElement = new Audio("/music/1.mp3");
const masterPlay = document.getElementById("masterPlay");
const myProgressBar = document.getElementById("myProgressBar");
const gif = document.getElementById("gif");
const masterMusicName = document.getElementById("masterMusicName");

let musicIndex = 0; // Müzik dizisindeki hangi şarkının çalındığını izlemek için kullanılır.



const music = [{
        musicName: "Let me Love You",
        filePath: "/music/1.mp3",
        imagesPath: "/images/1.jpg"
    }, {
        musicName: "Cielo - Huma-Huma",
        filePath: "/music/2.mp3",
        imagesPath: "/images/2.jpg"
    },
    {
        musicName: "DEAF KEV - Invincible [NCS Release]-320k",
        filePath: "/music/3.mp3",
        imagesPath: "/images/3.jpg"
    },
    {
        musicName: "Different Heaven & EH!DE - My Heart [NCS Release]",
        filePath: "/music/4.mp3",
        imagesPath: "/images/4.jpg"
    },
    {
        musicName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
        filePath: "/music/5.mp3",
        imagesPath: "/images/5.jpg"
    },
    {
        musicName: "Rabba - Salam-e-Ishq",
        filePath: "/music/6.mp3",
        imagesPath: "/images/6.jpg"
    },
    {
        musicName: "Sakhiyaan - Salam-e-Ishq",
        filePath: "/music/7.mp3",
        imagesPath: "/images/7.jpg"
    },
    {
        musicName: "Bhula Dena - Salam-e-Ishq",
        filePath: "/music/8.mp3",
        imagesPath: "/images/8.jpg"
    },
    {
        musicName: "Tumhari Kasam - Salam-e-Ishq",
        filePath: "/music/9.mp3",
        imagesPath: "/images/9.jpg"
    },
    {
        musicName: "Na Jaana - Salam-e-Ishq",
        filePath: "/music/10.mp3",
        imagesPath: "/images/10.jpg"
    },

];
// console.log(music)

const musicItems = Array.from(document.getElementsByClassName("musicItem"));


musicItems.forEach((element, i) => {
    element.querySelector("img").src = music[i].imagesPath;
    element.querySelector(".musicName").innerText = music[i].musicName;
});
// console.log(musicItems)

// Oynat/duraklat kliklerini kullanımı
masterPlay.addEventListener("click", () => {
    if (audiElement.paused || audiElement.currentTime <= 0) {
        audiElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 0;
    } else {
        audiElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
});
// console.log("OYNAT>>>"+masterPlay)

// Etkinlikleri Dinle
audiElement.addEventListener("timeupdate", () => {
    const progress = parseInt((audiElement.currentTime / audiElement.duration) * 100);
    myProgressBar.value = progress;
});
// console.log(audiElement)

myProgressBar.addEventListener('change', () => {
    audiElement.currentTime = myProgressBar.value * audiElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("musicListPlay")).forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    });
};

Array.from(document.getElementsByClassName("musicListPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        musicIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audiElement.src = music[musicIndex].filePath;
        masterMusicName.innerText = music[musicIndex].musicName; //  Müzik adını burada güncelleyin
        audiElement.currentTime = 0;
        audiElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    });
});

document.getElementById("next").addEventListener("click", () => {
    musicIndex = (musicIndex + 1) % music.length;
    audiElement.src = music[musicIndex].filePath;
    masterMusicName.innerText = music[musicIndex].musicName; 
    audiElement.currentTime = 0;
    audiElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previos").addEventListener("click", () => {
    musicIndex = (musicIndex - 1 + music.length) % music.length;
    audiElement.src = music[musicIndex].filePath;
    masterMusicName.innerText = music[musicIndex].musicName; 
    audiElement.currentTime = 0;
    audiElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
});