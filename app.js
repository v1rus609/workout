const STORAGE_KEY = "omar-workout-system-v2";

const workouts = [
  {
    id: 1,
    short: "Day 1",
    title: "Push Power",
    focus: "Chest, shoulders, triceps",
    exercises: [
      {
        name: "Barbell Bench Press",
        group: "Chest",
        cue: "Drive your feet into the floor, keep your shoulder blades tight, and lower the bar under control.",
        sets: [6, 8, 10],
        rest: 90,
        video: "videos/barbell-bench-press.mp4"
      },
      {
        name: "Incline Dumbbell Press",
        group: "Chest",
        cue: "Keep your chest high, control the dumbbells on the way down, and press without locking too hard.",
        sets: [8, 10, 12],
        rest: 90,
        video: "videos/incline-dumbbell-press.mp4"
      },
      {
        name: "Overhead Shoulder Press",
        group: "Shoulders",
        cue: "Brace your core, keep the bar path straight, and avoid over-arching your lower back.",
        sets: [6, 8, 10],
        rest: 90,
        video: "videos/overhead-shoulder-press.mp4"
      },
      {
        name: "Lateral Raises",
        group: "Shoulders",
        cue: "Lead with the elbows, raise to shoulder level, and keep the motion smooth.",
        sets: [12, 12, 15],
        rest: 60,
        video: "videos/lateral-raises.mp4"
      },
      {
        name: "Tricep Dips",
        group: "Triceps",
        cue: "Stay upright, lower only as far as your shoulders feel stable, and press up with control.",
        sets: [10, 10, 12],
        rest: 75,
        video: "videos/tricep-dips.mp4"
      },
      {
        name: "Skull Crushers",
        group: "Triceps",
        cue: "Keep your upper arms stable and bend only at the elbows to load the triceps.",
        sets: [10, 12, 12],
        rest: 75,
        video: "videos/skull-crushers.mp4"
      }
    ]
  },
  {
    id: 2,
    short: "Day 2",
    title: "Leg Drive",
    focus: "Quads, hamstrings, glutes, calves, abs",
    exercises: [
      {
        name: "Barbell Squats",
        group: "Quads",
        cue: "Brace hard, push the floor away, and keep your knees tracking over your toes.",
        sets: [6, 8, 10],
        rest: 120,
        video: "videos/barbell-squats.mp4"
      },
      {
        name: "Romanian Deadlifts",
        group: "Hamstrings",
        cue: "Hinge from the hips, keep the bar close, and feel the stretch through the back of your legs.",
        sets: [8, 10, 10],
        rest: 90,
        video: "videos/romanian-deadlifts.mp4"
      },
      {
        name: "Leg Press",
        group: "Quads",
        cue: "Control the lowering phase, keep your feet planted, and avoid bouncing out of the bottom.",
        sets: [10, 12, 12],
        rest: 75,
        video: "videos/leg-press.mp4"
      },
      {
        name: "Walking Lunges",
        group: "Glutes",
        cue: "Take a long step, stay balanced, and keep your torso tall through each rep.",
        sets: [10, 10, 12],
        rest: 75,
        video: "videos/walking-lunges.mp4"
      },
      {
        name: "Standing Calf Raises",
        group: "Calves",
        cue: "Pause at the top, stretch at the bottom, and do not bounce through the reps.",
        sets: [15, 15, 20],
        rest: 45,
        video: "videos/standing-calf-raises.mp4"
      },
      {
        name: "Leg Raises",
        group: "Abs",
        cue: "Keep your lower back controlled, avoid swinging, and lift with your core.",
        sets: [12, 15, 15],
        rest: 45,
        video: "videos/leg-raises.mp4"
      }
    ]
  },
  {
    id: 3,
    short: "Day 3",
    title: "Pull Strength",
    focus: "Back, biceps, rear delts",
    exercises: [
      {
        name: "Deadlifts",
        group: "Back",
        cue: "Set your lats, drive through the floor, and keep the bar close to your legs.",
        sets: [5, 6, 8],
        rest: 120,
        video: "videos/deadlifts.mp4"
      },
      {
        name: "Pull-Ups",
        group: "Back",
        cue: "Pull your elbows down, keep your body tight, and control the lowering phase.",
        sets: [6, 8, 10],
        rest: 90,
        video: "videos/pull-ups.mp4"
      },
      {
        name: "Bent Over Rows",
        group: "Back",
        cue: "Hinge strong, keep your torso fixed, and row toward your lower chest.",
        sets: [8, 10, 10],
        rest: 90,
        video: "videos/bent-over-rows.mp4"
      },
      {
        name: "Lat Pulldowns",
        group: "Back",
        cue: "Pull to the upper chest, keep the ribs down, and avoid leaning too far back.",
        sets: [10, 10, 12],
        rest: 75,
        video: "videos/lat-pulldowns.mp4"
      },
      {
        name: "Dumbbell Bicep Curls",
        group: "Biceps",
        cue: "Keep the elbows still, curl fully, and lower slowly without swinging.",
        sets: [10, 12, 12],
        rest: 60,
        video: "videos/dumbbell-bicep-curls.mp4"
      },
      {
        name: "Face Pulls",
        group: "Rear Delts",
        cue: "Pull toward your face, flare the elbows out, and squeeze your upper back.",
        sets: [12, 15, 15],
        rest: 60,
        video: "videos/face-pulls.mp4"
      }
    ]
  }
];

const welcomeScreen = document.getElementById("welcomeScreen");
const daySelectScreen = document.getElementById("daySelectScreen");
const workoutScreen = document.getElementById("workoutScreen");

const startBtn = document.getElementById("startBtn");
const continueWrap = document.getElementById("continueWrap");
const continueBtn = document.getElementById("continueBtn");
const resetBtn = document.getElementById("resetBtn");
const selectionSubtext = document.getElementById("selectionSubtext");
const dayButtons = document.querySelectorAll(".day-btn");

const backBtn = document.getElementById("backBtn");
const prevDayBtn = document.getElementById("prevDayBtn");
const nextDayBtn = document.getElementById("nextDayBtn");
const resetCycleBtn = document.getElementById("resetCycleBtn");

const workoutDaySmall = document.getElementById("workoutDaySmall");
const workoutTitle = document.getElementById("workoutTitle");
const workoutFocus = document.getElementById("workoutFocus");
const groupFilters = document.getElementById("groupFilters");

const currentGroupLabel = document.getElementById("currentGroupLabel");
const currentExerciseName = document.getElementById("currentExerciseName");
const currentExerciseCue = document.getElementById("currentExerciseCue");
const exerciseCounter = document.getElementById("exerciseCounter");
const exerciseVideo = document.getElementById("exerciseVideo");
const videoFallback = document.getElementById("videoFallback");



const setDisplay = document.getElementById("setDisplay");
const setActionBtn = document.getElementById("setActionBtn");
const countdownBubble = document.getElementById("countdownBubble");
const dayProgressBar = document.getElementById("dayProgressBar");
const progressText = document.getElementById("progressText");
const exerciseChips = document.getElementById("exerciseChips");

function buildDayState(day) {
  return {
    selectedGroup: "All",
    selectedExercise: 0,
    exerciseStates: day.exercises.map(() => ({
      doneSets: 0,
      started: false,
      restEndAt: null
    }))
  };
}

function buildInitialState() {
  return {
    selectedDay: null,
    lastSelectedDay: null,
    days: Object.fromEntries(workouts.map(day => [day.id, buildDayState(day)]))
  };
}

function getSavedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return buildInitialState();
    return normalizeState(JSON.parse(raw));
  } catch (error) {
    return buildInitialState();
  }
}

function normalizeState(raw) {
  const fresh = buildInitialState();

  if (!raw || typeof raw !== "object") {
    return fresh;
  }

  return {
    selectedDay: raw.selectedDay ?? null,
    lastSelectedDay: raw.lastSelectedDay ?? null,
    days: Object.fromEntries(
      workouts.map(day => {
        const loadedDay = raw.days?.[day.id];
        if (!loadedDay) {
          return [day.id, buildDayState(day)];
        }

        return [
          day.id,
          {
            selectedGroup: typeof loadedDay.selectedGroup === "string" ? loadedDay.selectedGroup : "All",
            selectedExercise: Number.isInteger(loadedDay.selectedExercise) ? loadedDay.selectedExercise : 0,
            exerciseStates: day.exercises.map((_, index) => {
              const loadedExercise = loadedDay.exerciseStates?.[index];
              return {
                doneSets: Number.isInteger(loadedExercise?.doneSets) ? loadedExercise.doneSets : 0,
                started: Boolean(loadedExercise?.started),
                restEndAt: typeof loadedExercise?.restEndAt === "number" ? loadedExercise.restEndAt : null
              };
            })
          }
        ];
      })
    )
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function clearState() {
  localStorage.removeItem(STORAGE_KEY);
  state = buildInitialState();
}

function showScreen(name) {
  welcomeScreen.classList.remove("active");
  daySelectScreen.classList.remove("active");
  workoutScreen.classList.remove("active");
  document.body.classList.remove("workout-mode");

  if (name === "welcome") welcomeScreen.classList.add("active");
  if (name === "daySelect") daySelectScreen.classList.add("active");
  if (name === "workout") {
    workoutScreen.classList.add("active");
    document.body.classList.add("workout-mode");
  }
}

function getWorkoutById(dayId) {
  return workouts.find(day => day.id === Number(dayId));
}

function getUniqueGroups(day) {
  return ["All", ...new Set(day.exercises.map(ex => ex.group))];
}

function isExerciseComplete(dayState, exerciseIndex, day) {
  return dayState.exerciseStates[exerciseIndex].doneSets >= day.exercises[exerciseIndex].sets.length;
}

function getFilteredIndices(day, selectedGroup) {
  return day.exercises
    .map((exercise, index) => ({ exercise, index }))
    .filter(item => selectedGroup === "All" || item.exercise.group === selectedGroup)
    .map(item => item.index);
}

function clearTransientStates(dayState) {
  dayState.exerciseStates.forEach(ex => {
    ex.started = false;
    ex.restEndAt = null;
  });
}

function cleanupExpiredRest(dayState) {
  const now = Date.now();
  dayState.exerciseStates.forEach(ex => {
    if (ex.restEndAt && ex.restEndAt <= now) {
      ex.restEndAt = null;
      ex.started = false;
    }
  });
}

function getFirstIncompleteInFilter(day, dayState) {
  const filtered = getFilteredIndices(day, dayState.selectedGroup);
  return filtered.find(index => !isExerciseComplete(dayState, index, day));
}

function ensureActiveExercise(day, dayState) {
  cleanupExpiredRest(dayState);

  const filtered = getFilteredIndices(day, dayState.selectedGroup);
  if (!filtered.length) {
    dayState.selectedExercise = 0;
    return 0;
  }

  const current = dayState.selectedExercise;
  const currentValid = filtered.includes(current) && !isExerciseComplete(dayState, current, day);

  if (currentValid) {
    return current;
  }

  const next = getFirstIncompleteInFilter(day, dayState);
  dayState.selectedExercise = next ?? filtered[0];
  return dayState.selectedExercise;
}

function getDayProgressPercent(day, dayState) {
  const totalSets = day.exercises.reduce((sum, ex) => sum + ex.sets.length, 0);
  const doneSets = dayState.exerciseStates.reduce((sum, ex) => sum + ex.doneSets, 0);
  return Math.min(100, Math.round((doneSets / totalSets) * 100));
}

function getNextIncompleteExerciseName(day, dayState, fromIndex) {
  const filtered = getFilteredIndices(day, dayState.selectedGroup);
  const next = filtered.find(index => index > fromIndex && !isExerciseComplete(dayState, index, day));
  return next !== undefined ? day.exercises[next].name : null;
}

function isEntireDayComplete(day, dayState) {
  return day.exercises.every((_, index) => isExerciseComplete(dayState, index, day));
}

function isCurrentFilterComplete(day, dayState) {
  const filtered = getFilteredIndices(day, dayState.selectedGroup);
  return filtered.every(index => isExerciseComplete(dayState, index, day));
}

function secondsLeft(restEndAt) {
  if (!restEndAt) return 0;
  return Math.max(0, Math.ceil((restEndAt - Date.now()) / 1000));
}

function renderDaySelect() {
  if (state.lastSelectedDay) {
    continueWrap.classList.remove("hidden");
    resetBtn.classList.remove("hidden");
    continueBtn.textContent = `Continue Day ${state.lastSelectedDay}`;
    selectionSubtext.textContent = `Last selected workout: Day ${state.lastSelectedDay}`;
  } else {
    continueWrap.classList.add("hidden");
    resetBtn.classList.add("hidden");
    selectionSubtext.textContent = "Choose the workout day you want to start.";
  }
}

function openDaySelect() {
  renderDaySelect();
  showScreen("daySelect");
}

function openWorkout(dayId) {
  state.selectedDay = Number(dayId);
  state.lastSelectedDay = Number(dayId);

  const day = getWorkoutById(state.selectedDay);
  const dayState = state.days[state.selectedDay];

  ensureActiveExercise(day, dayState);
  currentVideoSrc = "";
  saveState();
  renderWorkout();
  showScreen("workout");
}

function renderGroupFilters(day, dayState) {
  const groups = getUniqueGroups(day);

  groupFilters.innerHTML = groups
    .map(group => {
      const activeClass = group === dayState.selectedGroup ? "active" : "";
      return `<button class="filter-chip ${activeClass}" data-group="${group}">${group}</button>`;
    })
    .join("");

  document.querySelectorAll(".filter-chip").forEach(button => {
    button.addEventListener("click", () => {
      const newGroup = button.dataset.group;
      clearTransientStates(dayState);
      dayState.selectedGroup = newGroup;

      const firstIncomplete = getFirstIncompleteInFilter(day, dayState);
      const fallback = getFilteredIndices(day, dayState.selectedGroup)[0] ?? 0;
      dayState.selectedExercise = firstIncomplete ?? fallback;

      currentVideoSrc = "";
	  saveState();
      renderWorkout();
    });
  });
}

function renderExerciseChips(day, dayState, currentIndex) {
  const filtered = getFilteredIndices(day, dayState.selectedGroup);

  exerciseChips.innerHTML = filtered
    .map(index => {
      const exercise = day.exercises[index];
      const activeClass = index === currentIndex ? "active" : "";
      const doneClass = isExerciseComplete(dayState, index, day) ? "done" : "";
      return `<button class="exercise-chip ${activeClass} ${doneClass}" data-ex-index="${index}">${exercise.name}</button>`;
    })
    .join("");

  document.querySelectorAll(".exercise-chip").forEach(button => {
    button.addEventListener("click", () => {
      clearTransientStates(dayState);
      dayState.selectedExercise = Number(button.dataset.exIndex);
	  currentVideoSrc = "";
      saveState();
      renderWorkout();
    });
  });
}

let currentVideoSrc = "";

function loadExerciseVideo(src) {
  exerciseVideo.classList.remove("hidden");
  videoFallback.classList.add("hidden");

  if (!src) {
    currentVideoSrc = "";
    exerciseVideo.pause();
    exerciseVideo.removeAttribute("src");
    exerciseVideo.load();
    exerciseVideo.classList.add("hidden");
    videoFallback.classList.remove("hidden");
    return;
  }

  if (currentVideoSrc === src) {
    return;
  }

  currentVideoSrc = src;
  exerciseVideo.pause();
  exerciseVideo.src = src;
  exerciseVideo.load();

  exerciseVideo.onloadeddata = () => {
    exerciseVideo.classList.remove("hidden");
    videoFallback.classList.add("hidden");

    const playPromise = exerciseVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log("Autoplay was blocked by the browser.");
      });
    }
  };

  exerciseVideo.onerror = () => {
    exerciseVideo.classList.add("hidden");
    videoFallback.classList.remove("hidden");
  };
}

function renderWorkout() {
  const day = getWorkoutById(state.selectedDay);
  if (!day) return;

  const dayState = state.days[day.id];
  const currentIndex = ensureActiveExercise(day, dayState);
  const currentExercise = day.exercises[currentIndex];
  const currentExerciseState = dayState.exerciseStates[currentIndex];

  workoutDaySmall.textContent = day.short;
  workoutTitle.textContent = day.title;
  workoutFocus.textContent = day.focus;

  renderGroupFilters(day, dayState);
  renderExerciseChips(day, dayState, currentIndex);

  currentGroupLabel.textContent = `${currentExercise.group} focus`;
  currentExerciseName.textContent = currentExercise.name;
  currentExerciseCue.textContent = currentExercise.cue;
  exerciseCounter.textContent = `${getFilteredIndices(day, dayState.selectedGroup).indexOf(currentIndex) + 1} / ${getFilteredIndices(day, dayState.selectedGroup).length}`;

  loadExerciseVideo(currentExercise.video);

  const completedSets = currentExerciseState.doneSets;
  const totalSetsThisExercise = currentExercise.sets.length;
  const restRemaining = secondsLeft(currentExerciseState.restEndAt);
  const inRest = restRemaining > 0;
  const exerciseDone = isExerciseComplete(dayState, currentIndex, day);

  const totalDaySets = day.exercises.reduce((sum, ex) => sum + ex.sets.length, 0);
  const doneDaySets = dayState.exerciseStates.reduce((sum, ex) => sum + ex.doneSets, 0);
  const progress = Math.min(100, Math.round((doneDaySets / totalDaySets) * 100));

  dayProgressBar.style.width = `${progress}%`;
  progressText.textContent = `${progress}% of workout completed`;

  countdownBubble.classList.add("hidden");
  setActionBtn.classList.remove("hidden");

  if (isCurrentFilterComplete(day, dayState)) {
    setDisplay.textContent = "Focus block complete";
    setActionBtn.classList.add("hidden");
    progressText.textContent = isEntireDayComplete(day, dayState)
      ? "Workout day completed"
      : `${progress}% of workout completed`;
    saveState();
    return;
  }

  if (exerciseDone) {
    setDisplay.textContent = `${currentExercise.name} complete`;
    setActionBtn.classList.add("hidden");
    saveState();
    return;
  }

  const nextSetNumber = completedSets + 1;
  const nextReps = currentExercise.sets[completedSets];

  setDisplay.textContent = `Set ${nextSetNumber} - ${nextReps} Reps`;

  if (inRest) {
    setActionBtn.classList.add("hidden");
    countdownBubble.classList.remove("hidden");
    countdownBubble.textContent = `Rest ${restRemaining}s`;
  } else if (currentExerciseState.started) {
    setActionBtn.textContent = "Done";
  } else {
    setActionBtn.textContent = `Start Set ${nextSetNumber}`;
  }

  saveState();
}

function goToPreviousDay() {
  if (!state.selectedDay) return;
  const newDay = state.selectedDay === 1 ? 3 : state.selectedDay - 1;
  openWorkout(newDay);
}

function goToNextDay() {
  if (!state.selectedDay) return;
  const newDay = state.selectedDay === 3 ? 1 : state.selectedDay + 1;
  openWorkout(newDay);
}

function startCurrentSet() {
  const day = getWorkoutById(state.selectedDay);
  const dayState = state.days[day.id];
  const currentIndex = ensureActiveExercise(day, dayState);
  const currentExerciseState = dayState.exerciseStates[currentIndex];

  if (currentExerciseState.restEndAt) return;
  if (isExerciseComplete(dayState, currentIndex, day)) return;

  clearTransientStates(dayState);
  currentExerciseState.started = true;

  saveState();
  renderWorkout();
}

function completeCurrentSet() {
  const day = getWorkoutById(state.selectedDay);
  const dayState = state.days[day.id];
  const currentIndex = ensureActiveExercise(day, dayState);
  const currentExercise = day.exercises[currentIndex];
  const currentExerciseState = dayState.exerciseStates[currentIndex];

  if (!currentExerciseState.started) return;

  currentExerciseState.started = false;
  currentExerciseState.doneSets += 1;

  if (currentExerciseState.doneSets < currentExercise.sets.length) {
    currentExerciseState.restEndAt = Date.now() + currentExercise.rest * 1000;
  } else {
    currentExerciseState.restEndAt = null;

    if (isEntireDayComplete(day, dayState)) {
      const nextDay = day.id === 3 ? 3 : day.id + 1;
      state.lastSelectedDay = nextDay;
      state.selectedDay = nextDay;
      saveState();

      if (day.id !== 3) {
        renderWorkout();
      } else {
        renderWorkout();
      }
      return;
    }

    const nextInFilter = getFirstIncompleteInFilter(day, dayState);
    if (nextInFilter !== undefined) {
      dayState.selectedExercise = nextInFilter;
    }
  }

  saveState();
  renderWorkout();
}

function handleResetCycle() {
  clearState();
  renderDaySelect();
  showScreen("daySelect");
}

startBtn.addEventListener("click", () => {
  openDaySelect();
});

continueBtn.addEventListener("click", () => {
  if (state.lastSelectedDay) {
    openWorkout(state.lastSelectedDay);
  }
});

resetBtn.addEventListener("click", () => {
  handleResetCycle();
});

dayButtons.forEach(button => {
  button.addEventListener("click", () => {
    openWorkout(Number(button.dataset.day));
  });
});

backBtn.addEventListener("click", () => {
  openDaySelect();
});

prevDayBtn.addEventListener("click", () => {
  goToPreviousDay();
});

nextDayBtn.addEventListener("click", () => {
  goToNextDay();
});

resetCycleBtn.addEventListener("click", () => {
  handleResetCycle();
});

setActionBtn.addEventListener("click", () => {
  const day = getWorkoutById(state.selectedDay);
  if (!day) return;

  const dayState = state.days[day.id];
  const currentIndex = ensureActiveExercise(day, dayState);
  const currentExerciseState = dayState.exerciseStates[currentIndex];

  if (currentExerciseState.restEndAt) return;

  if (currentExerciseState.started) {
    completeCurrentSet();
  } else {
    startCurrentSet();
  }
});

const musicPlayer = document.getElementById("musicPlayer");
const closePlayerButton = document.getElementById("closePlayer");
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");
const songTitle = document.getElementById("songTitle");

// Array of song files (you can add more here)
const songs = [
  { file: "1.mp3", title: "Song 1" },
  { file: "2.mp3", title: "Song 2" },
  { file: "3.mp3", title: "Song 3" }
];

let currentSongIndex = 0;

// Function to play the current song
function playSong() {
  audioSource.src = songs[currentSongIndex].file; // Set the current song file
  songTitle.textContent = "Now Playing: " + songs[currentSongIndex].title; // Set the song title
  audioPlayer.load(); // Reload the player with the new song
  audioPlayer.play(); // Automatically play the new song
}

// Open the music player and play the first song by default
function openMusicPlayer() {
  musicPlayer.style.display = "block";
  playSong();
}

// Close the music player when the close button is clicked
closePlayerButton.addEventListener("click", () => {
  musicPlayer.style.display = "none"; // Hide the music player
  audioPlayer.pause(); // Pause the audio
});

// Change to the next song
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop back to the first song after the last one
  playSong();
}

// Optionally add a "Next" button if you want the user to control the song switch
const nextButton = document.createElement("button");
nextButton.textContent = "Next Song";
document.body.appendChild(nextButton); // Add the button to the page

nextButton.addEventListener("click", nextSong);

// Example: open the player when needed
openMusicPlayer(); // Uncomment to test opening the player on page load

setInterval(() => {
  if (!state.selectedDay || !workoutScreen.classList.contains("active")) return;

  const day = getWorkoutById(state.selectedDay);
  const dayState = state.days[day.id];
  const before = JSON.stringify(dayState.exerciseStates);

  cleanupExpiredRest(dayState);

  if (JSON.stringify(dayState.exerciseStates) !== before) {
    saveState();
  }

  renderWorkout();
}, 1000);

let state = getSavedState();
showScreen("welcome");
renderDaySelect();