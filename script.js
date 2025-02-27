const targetDate = new Date('2025-12-31T23:59:59'); // Цільова дата

function updateCountdown() {
  const currentTime = new Date();
  const difference = targetDate - currentTime;

  if (difference < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerText = "The event has started!";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// Запустити одразу після завантаження сторінки
updateCountdown();

// Оновлювати кожну секунду
const interval = setInterval(updateCountdown, 1000);