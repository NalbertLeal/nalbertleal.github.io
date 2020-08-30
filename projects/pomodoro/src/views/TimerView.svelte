<script>
  askNotificationPermition();

  let pomodoroRound = 0;
  let todoTasks = [];
  let finishedTasks = [];
  let minutes = 0;
  let seconds = 0;
  let isRestTime = false;
  let pause = true;

  setInterval(() => {
    if (pause) return;

    seconds += 1;
    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
    }

    if (isRestTime) {
      if (minutes == 5 && pomodoroRound < 4) {
        isRestTime = false;
        resetTimer();
        notifyRestEnd();
      } else if (minutes == 15 && pomodoroRound === 4) {
        isRestTime = false;
        resetTimer();
        notifyRestEnd();
        pomodoroRound = 0;
      }
      return;
    }

    if (minutes == 25 && !isRestTime) {
      resetTimer();
      notifyPomodoroEnd();
      pomodoroRound += 1;
      isRestTime = true;
    }
  }, 1000);

  // help functions

  function renderMin2Digits(time) {
    if (time < 10) return `0${time}`;
    return `${time}`;
  }

  function resetTimer() {
    seconds = 0;
    minutes = 0;
  }

  async function askNotificationPermition() {
    if (!("Notification" in window)) {
      alert("This device does not support desktop notification");
      return;
    }

    if (Notification.permission === "granted") return;
    if (Notification.permission === "denied") {
      try {
        const permition = await Notification.requestPermission();
        if (permition === "granted") {
          const notification = new Notification("Notifications activated!");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  function notifyPomodoroEnd() {
    if (Notification.permission === "denied") return;
    new Notification(`Pomodoro ${pomodoroRound} of 4 is done`);
  }

  function notifyRestEnd() {
    if (Notification.permission === "denied") return;
    new Notification(`The rest ended, go back to work!!!`);
  }

  function onClickPause() {
    pause = !pause;
  }

  function onClickReset() {
    resetTimer();
  }
</script>

<style>
  #timer-view {
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: tomato;
    font-weight: bold;
    font-family: cursive;
    color: white;
  }

  .stats {
    height: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5rem;
  }

  .timer {
    height: 12rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .timer-time {
    height: 10rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
  }

  .timer-controls-row {
    height: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .timer-controls {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .timer-controls a {
    color: white;
  }

  .btn-add-task {
    width: 3rem;
    height: 3rem;
    position: fixed;
    bottom: 2rem;
    left: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0rem 0rem 1rem black;
    background-color: tomato;
    font-size: 2rem;
  }

  .btn-add-task a {
    height: 3rem;
    width: 3rem;
    text-align: center;
    color: white;
  }
</style>

<section id="timer-view">
  <article class="stats">
    <div>{pomodoroRound}/4</div>
    <div>{finishedTasks.length}/{todoTasks.length}</div>
  </article>
  <article class="timer">
    <div class="timer-time">
      {renderMin2Digits(minutes)}:{renderMin2Digits(seconds)}
    </div>
    <div class="timer-controls-row">
      <div class="timer-controls">
        <a class="pause" href="/" on:click|preventDefault={onClickPause}>
          play/pause
        </a>
        <a class="reset" href="/" on:click|preventDefault={onClickReset}>
          reset
        </a>
      </div>
    </div>
  </article>
  <article class="todo-list" />
  <div class="btn-add-task">
    <a href="">+</a>
  </div>
</section>
