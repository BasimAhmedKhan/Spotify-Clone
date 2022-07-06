console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: "Blinding Lights-TheWeeknd", filePath: "songs/4.mp3", coverPath: "covers/Blinding Lights - The Weeknd.jpg" },
    { songName: "Call Out My Name-TheWeeknd", filePath: "songs/5.mp3", coverPath: "covers/Call Out My Name - The Weeknd.jpg" },
    { songName: "Die For You-TheWeeknd", filePath: "songs/28.mp3", coverPath: "covers/Die For You-TheWeeknd.jpg" },
    { songName: "Starboy - The Weeknd", filePath: "songs/63.mp3", coverPath: "covers/Starboy - The Weeknd.jpg" },

    { songName: "Afsanay-Young Stunners", filePath: "songs/11.mp3", coverPath: "covers/Afsanay-Young Stunners.jpg" },
    { songName: "Agency-Young Stunners", filePath: "songs/12.mp3", coverPath: "covers/Agency-Young Stunners.jpg" },
    { songName: "Asli Hai-Young Stunners", filePath: "songs/17.mp3", coverPath: "covers/Asli Hai-Young Stunners.jpg" },
    { songName: "Don't Mind-Young Stunners", filePath: "songs/31.mp3", coverPath: "covers/Don't Mind-Young Stunners.jpg" },

    { songName: "Ajab Si(Om SHanti Om)-K.K", filePath: "songs/13.mp3", coverPath: "covers/Ajab Si-K.K.jpg" },
    { songName: "Kya Mujhe Pyar Hai-K.K", filePath: "songs/43.mp3", coverPath: "covers/Kya Mujhe Pyar Hai -K.K.jpg" },
    { songName: "Labon Ko(Bhool Bhulaiya) -KK", filePath: "songs/44.mp3", coverPath: "covers/Labon Ko-KK.jpg" },
    { songName: "Sach Keh Raha Hai-KK", filePath: "songs/60.mp3", coverPath: "covers/Sach Keh Raha Hai-KK.jpg" },

    { songName: "AisayKaisay-Hasan Raheem", filePath: "songs/1.mp3", coverPath: "covers/Aisay Kaisay - Hasan Raheem.jpg" },
    { songName: "JOONA-Hasan Raheem", filePath: "songs/9.mp3", coverPath: "covers/JOONA -Hasan Raheem.jpg" },
    { songName: "Piche Hut - Hassan Raheem", filePath: "songs/58.mp3", coverPath: "covers/Piche Hut - Hassan Raheem.jpg" },

    { songName: "Attention-Charlie Puth", filePath: "songs/2.mp3", coverPath: "covers/Attention - Charlie Puth.jpg" },
    { songName: "We Don't Talk-Charlie Puth", filePath: "songs/68.mp3", coverPath: "covers/We Don't Talk Anymore - Charlie Puth.jpg" },
    { songName: "Light Switch-Charlie Puth", filePath: "songs/10.mp3", coverPath: "covers/Light Switch -Charlie Puth.jpg" },

    { songName: "Blow Your Mind-Dua Lipa", filePath: "songs/21.mp3", coverPath: "covers/Blow Your Mind-Dua Lipa.jpg" },
    { songName: "Levitating-Dua Lipa", filePath: "songs/45.mp3", coverPath: "covers/Levitating-Dua Lipa.jpg" },
    { songName: "No Lie -Dua Lipa,Sean Paul", filePath: "songs/55.mp3", coverPath: "covers/No Lie-Dua Lipa.jpg" },

    { songName: "Bad Guy-Billie Eilish", filePath: "songs/19.mp3", coverPath: "covers/Bad Guy-Billie Eilish.jpg" },
    { songName: "Bellyache-Billie Eilish", filePath: "songs/20.mp3", coverPath: "covers/Bellyache-Billie Eilish.jpg" },
    { songName: "Lovely - Billie Eilish,Khalid", filePath: "songs/48.mp3", coverPath: "covers/Lovely-Billie Eilish.jpg" },

    { songName: "Closer-The Chainsmokers", filePath: "songs/24.mp3", coverPath: "covers/Closer-The Chainsmokers.jpg" },
    { songName: "Takeaway-The Chainsmokers", filePath: "songs/65.mp3", coverPath: "covers/Takeaway-The Chainsmokers.jpg" },
    { songName: "Dont Let Me Down-Chainsmokers", filePath: "songs/30.mp3", coverPath: "covers/Don't Let Me Down-The Chainsmokers.jpg" },

    { songName: "Cake By The Ocean-DNCE", filePath: "songs/23.mp3", coverPath: "covers/Cake By The Ocean-DNCE.jpg" },
    { songName: "Dancing Feet-DNCE", filePath: "songs/26.mp3", coverPath: "covers/Dancing Feet-DNCE.jpg" },

    { songName: "Hymn For - Coldplay", filePath: "songs/39.mp3", coverPath: "covers/Hymn For The Weekend-Coldplay.jpg" },
    { songName: "My Universe-Coldplay", filePath: "songs/53.mp3", coverPath: "covers/My Universe-Coldplay.jpg" },

    { songName: "In the Dark - Swae Lee", filePath: "songs/40.mp3", coverPath: "covers/In the Dark-Swae Lee.jpg" },
    { songName: "Sunflower-Swae Lee", filePath: "songs/64.mp3", coverPath: "covers/Sunflower-Swae Lee.jpg" },

    { songName: "Let Me Kiss You - 1D", filePath: "songs/42.mp3", coverPath: "covers/Kiss You-1D.jpg" },
    { songName: "What Makes You Beautiful-1D", filePath: "songs/70.mp3", coverPath: "covers/What Makes You Beautiful-1D.jpg" },

    { songName: "Lucid Dreams-Juice WRLD", filePath: "songs/50.mp3", coverPath: "covers/Lucid Dreams-Juice WRLD.jpg" },
    { songName: "Smile - Juice WRLD", filePath: "songs/61.mp3", coverPath: "covers/Smile-Juice WRLD.jpg" },

    { songName: "Sorry - Justin Bieber", filePath: "songs/62.mp3", coverPath: "covers/Sorry-Justin Bieber.jpg" },
    { songName: "Do You Mean-Justin Bieber", filePath: "songs/69.mp3", coverPath: "covers/What Do You Mean-Justin Bieber.jpg" },

    { songName: "Copines-Aya Nakamura", filePath: "songs/25.mp3", coverPath: "covers/Copines-Aya Nakamura.jpg" },
    { songName: "Djadja-Aya Nakamura", filePath: "songs/29.mp3", coverPath: "covers/Djadja-Aya Nakamura.jpg" },

    { songName: "Bikhra-Abdul Hannan", filePath: "songs/3.mp3", coverPath: "covers/Bikhra - Abdul Hannan.jpg" },
    { songName: "Harleys In Hawaii-Katy Perry", filePath: "songs/6.mp3", coverPath: "covers/Harleys In Hawaii - Katy Perry.jpg" },
    { songName: "Heat Waves-Glass Animals", filePath: "songs/7.mp3", coverPath: "covers/Heat Waves - Glass Animals.jpg" },
    { songName: "Hope-XXXTENTACION", filePath: "songs/8.mp3", coverPath: "covers/Hope -XXXTENTACION.jpg" },   
    { songName: "Akhiyaan - Mitraz", filePath: "songs/14.mp3", coverPath: "covers/Akhiyaan - Mitraz.jpg" },
    { songName: "Anjaan - Jani,Talha Yonus", filePath: "songs/15.mp3", coverPath: "covers/Anjaan-Jani.jpg" },
    { songName: "Ashes(2020) - Stellar", filePath: "songs/16.mp3", coverPath: "covers/Ashes-Stellar.jpg" },
    { songName: "Back To The Future-Bastille", filePath: "songs/18.mp3", coverPath: "covers/Back To The Future-Bastille.jpg" },  
    { songName: "Burning Down - EYK", filePath: "songs/22.mp3", coverPath: "covers/Burning Down-Everyone You Know.jpg" },       
    { songName: "Desire-Years & Years", filePath: "songs/27.mp3", coverPath: "covers/Desire-Years & Years.jpg" },
    { songName: "El Melouk-Ahmed Saad", filePath: "songs/32.mp3", coverPath: "covers/El Melouk-Ahmed Saad.jpg" },
    { songName: "Excuses-Ap Dhillon", filePath: "songs/33.mp3", coverPath: "covers/Excuses-Ap Dhillon.jpg" },
    { songName: "Formula - Labrinth", filePath: "songs/34.mp3", coverPath: "covers/Formula-Labrinth.jpg" },
    { songName: "Goosebumps-Travis Scott", filePath: "songs/35.mp3", coverPath: "covers/Goosebumps-Travis Scott.jpg" },
    { songName: "Head First-Christian French", filePath: "songs/36.mp3", coverPath: "covers/Head First-Christian French.jpg" },
    { songName: "Heartburn(Remix) - Wafia", filePath: "songs/37.mp3", coverPath: "covers/Heartburn-Wafia.jpg" },
    { songName: "Honeypie - JAWNY", filePath: "songs/38.mp3", coverPath: "covers/Honeypie-JAWNY.jpg" },    
    { songName: "Kana Yaari Kaifi Khalil", filePath: "songs/41.mp3", coverPath: "covers/Kana Yaari Kaifi Khalil.jpg" },
    { songName: "Lights Down Low-MAX", filePath: "songs/46.mp3", coverPath: "covers/Lights Down Low-MAX.jpg" },
    { songName: "Love Nwantiti-CKay", filePath: "songs/47.mp3", coverPath: "covers/Love Nwantiti-CKay.jpg" },
    { songName: "Michael Jackson-Lovin You", filePath: "songs/49.mp3", coverPath: "covers/Loving You-Michael Jackson.jpg" },
    { songName: "Maikada - M. Samie", filePath: "songs/51.mp3", coverPath: "covers/Maikada-Muhammad Samie.jpg" },
    { songName: "Mushk OST-Ali Zafar", filePath: "songs/52.mp3", coverPath: "covers/Mushk OST-Ali Zafar.jpg" },
    { songName: "Mystery of Love-Sufjan Stevens", filePath: "songs/54.mp3", coverPath: "covers/Mystery of Love-Sufjan Stevens.jpg" },
    { songName: "Passive-The Perfect Circle", filePath: "songs/56.mp3", coverPath: "covers/Passive-The Perfect Circle.jpg" },
    { songName: "Peaky Blinder-Otnicka", filePath: "songs/57.mp3", coverPath: "covers/Peaky Blinder-Otnicka.jpg" },
    { songName: "The Hot Stepper-Ini Kamoze", filePath: "songs/66.mp3", coverPath: "covers/The Hot Stepper-Ini Kamoze.jpg" },
    { songName: "Vibe(2021) -Herman", filePath: "songs/67.mp3", coverPath: "covers/Vibe-Herman.jpg" },
    { songName: "World Is Mine-Samm Henshaw", filePath: "songs/71.mp3", coverPath: "covers/World Is Mine-Samm Henshaw.jpg" },
    { songName: "Без тебя я не я-JONY", filePath: "songs/72.mp3", coverPath: "covers/Без тебя я не я-JONY.jpg" },
    { songName: "Right Round - Flo Rida", filePath: "songs/59.mp3", coverPath: "covers/Right Round - Flo Rida.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    ProgressBar.value = progress;
})

ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 71) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})