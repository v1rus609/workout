const audio = new Audio();
let isPlaying = false;
let currentSongIndex = 0;
const songs = [
  { title: "Rosenrot", artist: "Rammstein", src: "1.mp3", albumArt: "arts/Rosenrot_high-res.jpg" },
  { title: "Ich will", artist: "Rammstein", src: "2.mp3", albumArt: "arts/icch will.jpg" },
  { title: "ATWA", artist: "System Of A Down", src: "3.mp3", albumArt: "arts/atwa.jpg" },
  { title: "Chop Suey!", artist: "System Of A Down", src: "4.mp3", albumArt: "arts/Chop Suey!.jpg" },
  { title: "Toxicity", artist: "System Of A Down", src: "5.mp3", albumArt: "arts/atwa.jpg" },
  { title: "Aerials", artist: "System Of A Down", src: "6.mp3", albumArt: "arts/Aerials.jpg" },
  {title: "Like a Stone", artist: "Audioslave", src: "7.mp3", albumArt: "arts/Like a Stone.jpg" },
  {title: "Smells Like Teen Spirit", artist: "Nirvana", src: "8.mp3", albumArt: "arts/Smells Like Teen Spirit.jpg" },
  {title: "The Kill", artist: "Thirty Seconds To Mars", src: "9.mp3", albumArt: "arts/The Kill.jpg" },
  {title: "Pyro", artist: "Kings Of Leon", src: "10.mp3", albumArt: "arts/Pyro.jpg" },
  {title: "Teardrop", artist: "Massive Attack", src: "11.mp3", albumArt: "arts/Teardrop.jpg" },
  {title: "Aaoge Tum Kabhi", artist: "The Local Train", src: "12.mp3", albumArt: "arts/Aaoge Tum Kabhi.jpg" },
  {title: "Seven Nation Army", artist: "The White Stripes", src: "13.mp3", albumArt: "arts/Seven Nation Army.jpg" }
  // Add more songs here
];

const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const albumCover = document.getElementById('album-cover');
const playPauseBtn = document.getElementById('play-pause');
const playIcon = document.getElementById('play-icon');
const songProgress = document.getElementById('song-progress');
const currentTime = document.getElementById('current-time');
const songDuration = document.getElementById('song-duration');
const volumeControl = document.getElementById('volume-control'); // Volume control element

// Load the song into the player
function loadSong(songIndex) {
  const song = songs[songIndex];
  songTitle.textContent = song.title;
  artistName.textContent = song.artist;
  albumCover.src = song.albumArt;
  audio.src = song.src;
  audio.load(); // Preload the audio to prevent delay
  songProgress.value = 0; // Reset progress bar to start
}

// Toggle play/pause functionality
function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
    playIcon.src = "play-icon.png"; // Switch to play icon
  } else {
    audio.play().then(() => {
      playIcon.src = "pause-icon.png"; // Switch to pause icon
    }).catch((err) => {
      console.log('Autoplay failed:', err); // Handle the case where autoplay is blocked
      playIcon.src = "play-icon.png"; // Let user click to play
    });
  }
  isPlaying = !isPlaying;
}

// Update progress bar and current time
function updateProgress() {
  if (!isNaN(audio.duration)) {
    const progress = (audio.currentTime / audio.duration) * 100;
    songProgress.value = progress;
    currentTime.textContent = formatTime(audio.currentTime);
    songDuration.textContent = formatTime(audio.duration);
  }
}

// Format the time correctly (in mm:ss format)
function formatTime(time) {
  if (isNaN(time)) {
    return "0:00";  // If time is invalid, return a default time
  }
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Update song progress as the user drags the progress bar
songProgress.addEventListener('input', () => {
  audio.currentTime = (songProgress.value / 100) * audio.duration;
});

// Volume control functionality
volumeControl.addEventListener('input', () => {
  audio.volume = volumeControl.value;  // Set volume based on the range input value
});

// Event listeners for song state changes
audio.addEventListener('timeupdate', updateProgress);  // Update progress bar and time
audio.addEventListener('ended', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);  // Load the next song
  audio.play(); // Automatically play next song
});

// Ensure song duration is set when it is ready to play
audio.addEventListener('canplay', () => {
  songDuration.textContent = formatTime(audio.duration);
});

// Next button functionality
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', () => {
  // Move to the next song in the list, loop back to the first song when at the end
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);  // Load the next song
  audio.play(); // Play the new song
  playIcon.src = "pause-icon.png"; // Change play icon to pause
  isPlaying = true; // Update the playing state
});

// Previous button functionality
const prevBtn = document.getElementById('prev');
prevBtn.addEventListener('click', () => {
  // Move to the previous song in the list, loop back to the last song when at the beginning
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);  // Load the previous song
  audio.play(); // Play the new song
  playIcon.src = "pause-icon.png"; // Change play icon to pause
  isPlaying = true; // Update the playing state
});

// Function to load a song into the player
function loadSong(songIndex) {
  const song = songs[songIndex];
  songTitle.textContent = song.title;
  artistName.textContent = song.artist;
  albumCover.src = song.albumArt;
  audio.src = song.src;
  audio.load(); // Preload the audio to prevent delay
  songProgress.value = 0; // Reset progress bar to start
  songDuration.textContent = formatTime(audio.duration); // Display the duration of the new song
  currentTime.textContent = "0:00"; // Reset current time
}

// Format the time correctly (in mm:ss format)
function formatTime(time) {
  if (isNaN(time)) {
    return "0:00";  // If time is invalid, return a default time
  }
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Replay Button functionality
const replayBtn = document.getElementById('replay');
replayBtn.addEventListener('click', () => {
  audio.currentTime = 0;  // Reset the song to the beginning
  audio.play(); // Play the song again
  playIcon.src = "pause-icon.png"; // Change the play icon to pause
  isPlaying = true; // Update the playing state
});

// Shuffle Button functionality
const shuffleBtn = document.getElementById('shuffle');
shuffleBtn.addEventListener('click', () => {
  // Generate a random song index from the list
  const randomIndex = Math.floor(Math.random() * songs.length);
  currentSongIndex = randomIndex; // Update the current song index to the random index
  loadSong(currentSongIndex); // Load the randomly chosen song
  audio.play(); // Play the new song
  playIcon.src = "pause-icon.png"; // Change the play icon to pause
  isPlaying = true; // Update the playing state
});

// Function to load a song into the player
function loadSong(songIndex) {
  const song = songs[songIndex];
  songTitle.textContent = song.title;
  artistName.textContent = song.artist;
  albumCover.src = song.albumArt;
  audio.src = song.src;
  audio.load(); // Preload the audio to prevent delay
  songProgress.value = 0; // Reset progress bar to start
  songDuration.textContent = formatTime(audio.duration); // Display the duration of the new song
  currentTime.textContent = "0:00"; // Reset current time
}

// Format the time correctly (in mm:ss format)
function formatTime(time) {
  if (isNaN(time)) {
    return "0:00";  // If time is invalid, return a default time
  }
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Ensure that play is called on first click
playPauseBtn.addEventListener('click', togglePlayPause);

// Initial song load
loadSong(currentSongIndex);
