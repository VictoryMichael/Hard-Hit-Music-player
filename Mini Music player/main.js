const playBtn = document.querySelector('.play');
const nextBtn = document.querySelector('.skip-forward');
const previousBtn = document.querySelector('.skip-back');
const img = document.querySelector('img');
const title = document.querySelector('.audio-title');
const singer = document.querySelector('.audio-singer');
const progressContainer = document.querySelector('.progress')
const progressBar = document.querySelector('.progress-bar'); 
const progressHead = document.querySelector('.progress-head');
const audioTime = document.querySelector('.current-time');
const audioDuration = document.querySelector('.duration');
const playIcon = document.querySelector('.fa-play');


this.tracks = [
{
name: "Machala",
artist: "Tiga-Ft-Carter-Efe",
cover: "https://us.123rf.com/450wm/andrey1978/andrey19781507/andrey1978150700010/42526185-vectorial-illustration-funny-chimpanzee-in-colored-glasses-and-headphones.jpg?ver=6",
source: "audio/Berri-Tiga-Ft-Carter-Efe-Machala-(TrendyBeatz.com).mp3",
},

{
name: "Terminator",
artist: "Asake",
cover: "https://i0.wp.com/sololoaded.com/wp-content/uploads/2022/08/Asake-Terminator-1.webp?fit=300%2C226&ssl=1",
source: "audio/Asake-Terminator-(TrendyBeatz.com).mp3",

},

{
name: "In-my-mind",
artist: "Bnxn",
cover: "https://cdn5.vectorstock.com/i/1000x1000/84/94/funny-cartoon-brain-listening-to-music-vector-35838494.jpg",
source: "audio/Bnxn-In-My-Mind-(TrendyBeatz.com).mp3",
},

{
name: "call-me-every-day",
artist: "Wizkid",
cover: "https://www.wizkidofficial.com/assets/icons/OGIMAGE.jpg",
source: "audio/call-me-every-day-audio-ft-wizkid.mp3",
},

{
name: "Peace_Be_Unto",
artist: "Asake",
cover: "https://itsxclusive.com/wp-content/uploads/2022/02/Asake-Ft.-Olamide-%E2%80%93-Trabaye.jpg",
source: "audio/Asake_-_Peace_Be_Unto_You.mp3",
},

{
name: "Woman_no_cry", 
artist: "Tems", 
cover: "https://naijapower.com/wp-content/uploads/2022/07/Tems-No-Woman-No-Cry-540x370.jpg",
source:"audio/no-woman-no-cry-from-black-panther-wakanda-forever-prologue.mp3",
}, 

{
name: "Adulthood",
 artist: "Lade",
 cover: "https://i1.sndcdn.com/avatars-000551705169-lylz5a-t500x500.jpg",
 source: "audio/Lade_-_Adulthood_Anthem.mp3",
},

{
name: "Divine",
artist: "Rema",
cover: "https://guardian.ng/wp-content/uploads/2022/03/Rema.jpg",
source: "audio/Rema-Divine-(JustNaija.com).mp3",
},

{
name: "It's_plenty",
artist: "Burna-Boy",
cover: "https://wallpapercave.com/wp/wp2326979.jpg",
source: "audio/Burna_Boy_-_It_s_Plenty.mp3",
},
    
{
name: "Jaiye",
artist: "Zinoleesy-ft-tiwa-savage",
cover: "https://2.bp.blogspot.com/-3J1XzK_00Fk/W0IEv8ZShmI/AAAAAAAADVI/_u4HrrHerJM05-1lRLZX6J2RDBZ4LwutACLcBGAs/s1600/android-music-player-apps-10.jpg",
source: "audio/Zinoleesky-feat.Tiwa-Savage-Jaiye-Foreign--[TrendyBeatz.com].mp3",
},
    
{
name: "Common_Person",
artist: "Burna-Boy",
cover: "https://cdn.vanguardngr.com/wp-content/uploads/2022/07/FW7aFdnXgAUP2Vl.webp",
source: "audio/Burna_boy_-_Common_Person.mp3",
},
    
{
name: "Overload",
artist: "The-mavin",
cover: "https://guardian.ng/wp-content/uploads/2022/03/Rema.jpg",
source: "audio/The_Mavins_Ft_Don_Jazzy_Rema_Ayra_Starr_Magixx_Boy_spyce_Crayon_-_Overdose.mp3",
},
    
{
name: "For_My_Hand",
artist: "Burna-Boy",
cover: "https://cdn.vanguardngr.com/wp-content/uploads/2022/07/FW7aFdnXgAUP2Vl.webp",
source: "audio/Burna-Boy-Ft-Ed-Sheeran-For-My-Hand-(TrendyBeatz.com).mp3",
},
    
{
name: "Soundgasm",
artist: "Rema",
cover: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/flx3kzg28qdldkgozldf/rema-raves-and-roses-interview-rema-raves-and-roses-interview?fimg-client-default",
source: "audio/Rema-Soundgasm-file-1-(JustNaija.com).mp3",
},

{
name: "",
artist: "",
cover: "",
source: "",
},
    
];



// Initial values

let audio = null;
let barwidth = null;
let duration = null;
let currentTime = null;
let isTimerPlaying = false;
let currentTrackIndex = 0;
let currentTrack = tracks[0];


// set initial state value

audio = new Audio();
audio.src = currentTrack.source
img.src = currentTrack.cover;
title.innerText = currentTrack.name;
singer.innerText = currentTrack.artist;



playBtn.addEventListener('click', () => {
 if(audio.paused){
    audio.play();
    isTimerPlaying = true;
 } else{
    audio.pause()
    isTimerPlaying = false;
 }

});


progressContainer.addEventListener("click",(x) => {
  let maxduration = audio.duration;
  let position = x.pageX - progressContainer.offsetLeft;
  let percentage = (100 * position)/ progressContainer.offsetWidth;
  if (percentage > 100) percentage = 100;
  if (percentage < 0) percentage = 0;

  audio.currentTime = (maxduration * percentage) / 100;

  barwidth = percentage + "%";
  progressBar.style.width = `${barwidth}`;
  progressHead.style.setProperty('left', `${barwidth}`);




})


nextBtn.addEventListener("click", () => {
  if (currentTrackIndex < tracks.length - 1) {
    currentTrackIndex++;
  }else{
    currentTrackIndex = 0;
  }

  currentTrack = tracks[currentTrackIndex]

 
  audio.src = currentTrack.source;
  img.src = currentTrack.cover;
  title.innerText = currentTrack.name;
  singer.innerText = currentTrack.artist;


  barwidth = 0;
  progressBar.style.width = `${barwidth}%`;
  progressHead.style.setProperty('left', `${barwidth}%`);
  audioTime.innerText = `00:00`;
  audioDuration.innerText = `00:00`;

  audio.currentTime = 0;
  audio.src = currentTrack.source;

  setTimeout(() => {
    if (isTimerPlaying) {
        audio.play();
    }else {audio.pause() }
  }, 300)

});


previousBtn.addEventListener("click", () => {
    if (currentTrackIndex >0) {
      currentTrackIndex--;
    }else{
      currentTrackIndex = this.tracks.length -1;
    }
  
    currentTrack = tracks[currentTrackIndex]
  
   
    audio.src = currentTrack.source;
    img.src = currentTrack.cover;
    title.innerText = currentTrack.name;
    singer.innerText = currentTrack.artist;
  
  
    barwidth = 0;
    progressBar.style.width = `${barwidth}%`;
    progressHead.style.setProperty('left', `${barwidth}%`);
    audioTime.innerText = `00:00`;
    audioDuration.innerText = `00:00`;
  
    audio.currentTime = 0;
    audio.src = currentTrack.source;
  
    setTimeout(() => {
      if (isTimerPlaying) {
          audio.play();
      }else {audio.pause() }
    }, 300)
  
  });
  







audio.ontimeupdate = function(){
    if (audio.duration) {
      barwidth = (100 / audio.duration) * audio.currentTime;

   let durmin = Math.floor(audio.duration / 60);
   let dursec = Math.floor(audio.duration - durmin * 60);
   let curmin = Math.floor(audio.currentTime / 60);
   let cursec = Math.floor(audio.currentTime - curmin * 60);

   if (durmin < 10) durmin = "0" + durmin;
   if (dursec < 10) dursec = "0" + dursec;
   if (curmin < 10) curmin = "0" + curmin;
   if (cursec < 10) cursec = "0" + cursec;

   duration = durmin + ":" + dursec;
   currentTime = curmin + ":" + cursec;


    progressBar.style.width = `${barwidth}%`;
     progressHead.style.setProperty('left', `${barwidth}%`);
     audioTime.innerText = `${currentTime}`;
     audioDuration.innerText = `${duration}`;

 if(isTimerPlaying){
   playIcon.classList.remove('fa-play') 
   playIcon.classList.add('fa-pause') 
 }else{
    playIcon.classList.add('fa-play')
    playIcon.classList.remove('fa-pause')
 }

    }

}
  






