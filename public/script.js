document.addEventListener("DOMContentLoaded", () => {
  let points = parseInt(localStorage.getItem('points')) || 0;
  let unlockedThemes = JSON.parse(localStorage.getItem('unlockedThemes')) || [];
  
  // Update points display
  function updatePointsDisplay() {
    document.querySelector('.points-display').textContent = `Points: ${points}`;
    localStorage.setItem('points', points);
  }

  // Task Completion and Points
  document.querySelectorAll('.task').forEach(task => {
    task.addEventListener('click', () => {
      points += 10;
      displayGoodJobMessage(task);
      updatePointsDisplay();
      checkUnlockThemes();
    });
  });

  // Display 'Good Job' message
  function displayGoodJobMessage(task) {
    const message = document.createElement('div');
    message.classList.add('good-job-message');
    message.textContent = "Good Job!";
    task.appendChild(message);
    setTimeout(() => message.remove(), 2000);
  }

  // Check if themes should be unlocked
  function checkUnlockThemes() {
    if (points >= 50 && !unlockedThemes.includes("Minimalist")) {
      unlockedThemes.push("Minimalist");
      alert("You've unlocked the Minimalist Theme!");
    }
    if (points >= 100 && !unlockedThemes.includes("Nature")) {
      unlockedThemes.push("Nature");
      alert("You've unlocked the Nature Theme!");
    }
    localStorage.setItem('unlockedThemes', JSON.stringify(unlockedThemes));
  }

  // Timer functionality (Pomodoro)
  const startTimerButton = document.querySelector('.start-timer');
  startTimerButton.addEventListener('click', () => {
    startPomodoroTimer(25 * 60);
  });

  function startPomodoroTimer(duration) {
    let timer = duration;
    const countdownDisplay = document.querySelector('.timer-display');
    const interval = setInterval(() => {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
      countdownDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
      if (timer <= 0) {
        clearInterval(interval);
        alert("Time's up! Take a break.");
      }
      timer--;
    }, 1000);
  }

  // Break functionality
  let breakCount = parseInt(localStorage.getItem('breakCount')) || 0;
  document.querySelector('.take-break').addEventListener('click', () => {
    if (breakCount < 3) {
      breakCount++;
      localStorage.setItem('breakCount', breakCount);
      alert(`Break ${breakCount} taken!`);
    } else {
      alert("You've reached the max number of breaks.");
    }
  });

  // Music functionality
  const musicButton = document.querySelector('.music-button');
  const audio = new Audio('your-audio-file.mp3');
  musicButton.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      musicButton.textContent = "Pause Music";
    } else {
      audio.pause();
      musicButton.textContent = "Play Music";
    }
  });

  // Initialize points display
  updatePointsDisplay();
});
