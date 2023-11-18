const cover = document.querySelector(".cover");
const title = document.querySelector(".title");
const artist = document.querySelector(".artist");
const prev = document.querySelector("#prev");
const play = document.querySelector("#play");
const next = document.querySelector("#next");
const download = document.querySelector("#download");

const audio = new Audio();

const songs = [
    {
        src: "After Midnight.mp3",
        cover: "logo-bg.jpg",
        title: "After Midnight",
        artist: "Desconhecido"
    },
    {
        src: "Bad Moon Rising (Remastered 1985).mp3",
        cover: "logo-bg.jpg",
        title: "Bad Moon Rising (Remastered 1985)",
        artist: "Desconhecido"
    },
    {
        src: "Bruce Springsteen - 7 Rooms Of Gloom.mp3",
        cover: "logo-bg.jpg",
        title: "7 Rooms Of Gloom",
        artist: "Bruce Springsteen"
    },

    {
      src: "Bruce Springsteen - I Forgot To Be Your Lover.mp3",
      cover: "logo-bg.jpg",
      title: "I Forgot To Be Your Lover",
      artist: "Bruce Springsteen"
  },
  {
      src: "Bruce Springsteen - I'm On Fire.mp3",
      cover: "logo-bg.jpg",
      title: "I'm On Fire",
      artist: "Bruce Springsteen"
  },
  {
      src: "Bryan Adams - Please Stay.mp3",
      cover: "logo-bg.jpg",
      title: "Please Stay",
      artist: "Bryan Adams"
  },

  {
    src: "Bryan Adams - You Belong To Me.mp3",
    cover: "logo-bg.jpg",
    title: "You Belong To Me",
    artist: "Bryan Adams"
},
{
    src: "Bye Bye Johnny.mp3",
    cover: "logo-bg.jpg",
    title: "Bye Bye Johnny",
    artist: "Desconhecido"
},
{
    src: "Crazy Little Thing Called Love (Remastered 2011).mp3",
    cover: "logo-bg.jpg",
    title: "Crazy Little Thing Called Love (Remastered 2011)",
    artist: "Desconhecido"
},

{
  src: "Creedence Clearwater Revival - Commotion.mp3",
  cover: "logo-bg.jpg",
  title: "Commotion",
  artist: "Creedence Clearwater Revival"
},
{
  src: "Creedence Clearwater Revival - Down On The Corner.mp3",
  cover: "logo-bg.jpg",
  title: "Down On The Corner",
  artist: "Creedence Clearwater Revival"
},
{
  src: "Creedence Clearwater Revival - Lookin Out My Back Door.mp3",
  cover: "logo-bg.jpg",
  title: "Lookin Out My Back Door",
  artist: "Creedence Clearwater Revival"
},

{
  src: "Creedence Clearwater Revival - Travelin' Band.mp3",
  cover: "logo-bg.jpg",
  title: "Travelin' Band",
  artist: "Creedence Clearwater Revival"
},
{
  src: "Creedence Clearwater Revival - Up Around The Bend.mp3",
  cover: "logo-bg.jpg",
  title: "Up Around The Bend",
  artist: "Creedence Clearwater Revival"
},
{
  src: "Creedence Clearwater Revival - Who'll Stop The Rain.mp3",
  cover: "logo-bg.jpg",
  title: "Who'll Stop The Rain",
  artist: "Creedence Clearwater Revival"
},

{
  src: "Dreamboat Annie.mp3",
  cover: "logo-bg.jpg",
  title: "Dreamboat Annie",
  artist: "Desconhecido"
},
{
  src: "First Of May.mp3",
  cover: "logo-bg.jpg",
  title: "First Of May",
  artist: "Desconhecido"
},
{
  src: "Fortunate Son.mp3",
  cover: "logo-bg.jpg",
  title: "Fortunate Son",
  artist: "Creedence Clearwater Revival"
},

{
  src: "Green River (Remastered 1985).mp3",
  cover: "logo-bg.jpg",
  title: "Green River (Remastered 1985)",
  artist: "Desconhecido"
},
{
  src: "I Can Bring Love.mp3",
  cover: "logo-bg.jpg",
  title: "I Can Bring Love",
  artist: "Desconhecido"
},
{
  src: "I Get Excited.mp3",
  cover: "logo-bg.jpg",
  title: "I Get Excited",
  artist: "Desconhecido"
},

{
  src: "I.O.I.O..mp3",
  cover: "logo-bg.jpg",
  title: "I.O.I.O.",
  artist: "Desconhecido"
},
{
  src: "I've Done Everything For You.mp3",
  cover: "logo-bg.jpg",
  title: "I've Done Everything For You",
  artist: "Desconhecido"
},
{
  src: "Massachusetts.mp3",
  cover: "logo-bg.jpg",
  title: "Massachusetts",
  artist: "Desconhecido"
},

{
  src: "The Clash - Brand New Cadillac.mp3",
  cover: "logo-bg.jpg",
  title: "Brand New Cadillac",
  artist: "The Clash"
},
{
  src: "The Clash - I Fought the Law.mp3",
  cover: "logo-bg.jpg",
  title: "I Fought the Law",
  artist: "The Clash"
},
{
  src: "Workin For A Livin.mp3",
  cover: "logo-bg.jpg",
  title: "Workin For A Livin",
  artist: "Desconhecido"
},

{
  src: "You Ca.mp3",
  cover: "logo-bg.jpg",
  title: "You Ca...",
  artist: "Desconhecido"
},
{
  src: "You Really Got Me (2015 Remaster).mp3",
  cover: "logo-bg.jpg",
  title: "You Really Got Me (2015 Remaster)",
  artist: "Desconhecido"
},
{
  src: "You're the One That I Want.mp3",
  cover: "logo-bg.jpg",
  title: "You're the One That I Want",
  artist: "Desconhecido"
}
    
];

let currentSong = 0;

function loadSong() {
    audio.src = songs[currentSong].src;
    cover.src = songs[currentSong].cover;
    title.textContent = songs[currentSong].title;
    artist.textContent = songs[currentSong].artist;
}

function playSong() {
    audio.play();
    play.innerHTML = `<svg class="icon" viewBox="0 0 24 24">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </svg>`;
}

function pauseSong() {
    audio.pause();
    play.innerHTML = `<svg class="icon play" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>`;
}

function prevSong() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    loadSong();
    playSong();
}

function nextSong() {
    currentSong++;
    if (currentSong > songs.length - 1) {
        currentSong = 0;
    }
    loadSong();
    playSong();
}

function downloadSong() {
    const link = document.createElement("a");
    link.href = songs[currentSong].src;
    link.download = songs[currentSong].title + ".mp3";
    link.click();
}

play.addEventListener("click", () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prev.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);
download.addEventListener("click", downloadSong);

loadSong();

audio.autoplay = true;


const progressBar = document.getElementById("progress-bar");
const timeDisplay = document.getElementById("time-display");

let duration = 0;

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
}

audio.addEventListener("loadedmetadata", function() {
  duration = audio.duration;
  timeDisplay.textContent = formatTime(duration);
});

audio.addEventListener("timeupdate", function() {
  let currentTime = audio.currentTime;
  let progress = (currentTime / duration) * 100;
  progressBar.style.width = progress + "%";
  timeDisplay.textContent = formatTime(duration - currentTime);
});
