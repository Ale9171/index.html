// ===============================================
// Habit Tracker Dashboard
// ===============================================

const appState = {
  habits: [],
  selectedHabitId: null
};

const STORAGE_KEY = "habit-tracker-data";

function normalizeNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function saveHabits() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState.habits));
}

function loadHabits() {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    appState.habits = [];
    return;
  }

  try {
    const parsed = JSON.parse(stored);
    appState.habits = Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    appState.habits = [];
  }
}

function findHabitById(id) {
  return appState.habits.find(habit => String(habit.id) === String(id));
}

function calculateProgress(habit) {
  if (!habit) return 0;

  const goal = Math.max(0, normalizeNumber(habit.goal, 0));
  const actual = Math.max(0, normalizeNumber(habit.actual, 0));

  if (goal <= 0) return 0;

  return Math.min(100, Math.round((actual / goal) * 100));
}

function getProgressColor(percent) {
  if (percent < 25) return "#ef4444";
  if (percent < 50) return "#f59e0b";
  if (percent < 75) return "#3b82f6";
  return "#22c55e";
}

function getTotalGoal() {
  return appState.habits.reduce((sum, habit) => sum + Math.max(0, normalizeNumber(habit.goal, 0)), 0);
}

function getActiveHabitsCount() {
  return appState.habits.length;
}

function getAverageProgress() {
  if (appState.habits.length === 0) return 0;

  const total = appState.habits.reduce((sum, habit) => sum + calculateProgress(habit), 0);
  return Math.round(total / appState.habits.length);
}

function getOverallProgress() {
  if (appState.habits.length === 0) return 0;

  const total = appState.habits.reduce((sum, habit) => sum + calculateProgress(habit), 0);
  return Math.round(total / appState.habits.length);
}

function createHabit(name, goal) {
  const cleanName = String(name || "").trim();
  const cleanGoal = Math.max(0, normalizeNumber(goal, 0));

  if (!cleanName || cleanGoal <= 0) return null;

  const newHabit = {
    id: Date.now() + Math.random(),
    name: cleanName,
    goal: cleanGoal,
    actual: 0
  };

  appState.habits.unshift(newHabit);
  saveHabits();
  return newHabit;
}

function updateHabitActual(id, value) {
  const habit = findHabitById(id);

  if (!habit) return;

  habit.actual = Math.max(0, normalizeNumber(value, 0));
  saveHabits();
}

function deleteHabit(id) {
  appState.habits = appState.habits.filter(habit => String(habit.id) !== String(id));
  saveHabits();
}

function renderSidebarList() {
  const habitList = document.getElementById("habitList");
  if (!habitList) return;

  if (appState.habits.length === 0) {
    habitList.innerHTML = '<div class="empty-state">No hay hábitos</div>';
    return;
  }

  habitList.innerHTML = appState.habits
    .map(habit => {
      const progress = calculateProgress(habit);
      const color = getProgressColor(progress);
      const left = Math.max(0, normalizeNumber(habit.goal, 0) - normalizeNumber(habit.actual, 0));

      return `
        <div class="habit-item ${appState.selectedHabitId === habit.id ? "selected" : ""}" data-id="${habit.id}">
          <div class="habit-item-header">
            <span>${habit.name}</span>
            <span>${progress}%</span>
          </div>
          <div class="progress-bar">
            <span style="width:${progress}%; background:${color};"></span>
          </div>
          <div class="habit-meta">
            <small>${habit.actual}/${habit.goal}</small>
            <small>Falta: ${left}</small>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderSummaryStats() {
  const activeHabitCount = document.getElementById("activeHabitCount");
  const totalGoal = document.getElementById("totalGoal");
  const dailyProgressValue = document.getElementById("dailyProgressValue");
  const overallPercent = document.getElementById("overallPercent");

  if (activeHabitCount) activeHabitCount.textContent = String(getActiveHabitsCount());
  if (totalGoal) totalGoal.textContent = String(getTotalGoal());
  if (dailyProgressValue) dailyProgressValue.textContent = `${getAverageProgress()}%`;
  if (overallPercent) overallPercent.textContent = `${getOverallProgress()}%`;

  const ring = document.querySelector(".ring");
  if (ring) {
    const percent = getOverallProgress();
    ring.setAttribute("data-progress", String(percent));
    ring.style.setProperty("--progress", percent);
  }
}

function renderCalendar() {
  const calendarGrid = document.getElementById("calendarGrid");
  if (!calendarGrid) return;

  const totalDays = 31;
  let html = "";

  for (let day = 1; day <= totalDays; day++) {
    const intensity = (day % 5) * 20;
    const tint = `rgba(34,197,94,${Math.min(0.85, intensity / 100)})`;

    html += `
      <div class="calendar-day" style="background:${tint};">
        <span>${day}</span>
      </div>
    `;
  }

  calendarGrid.innerHTML = html;
}

function renderDailyBarChart() {
  const dailyBarChart = document.getElementById("dailyBarChart");
  if (!dailyBarChart) return;

  const values = [30, 45, 68, 55, 80, 35, 90];

  dailyBarChart.innerHTML = `
    <div class="bars">
      ${values
        .map(
          (value, index) => `
          <div class="bar-group">
            <div class="bar" style="height:${value}%;"></div>
            <span>${["L", "M", "X", "J", "V", "S", "D"][index]}</span>
          </div>
        `
        )
        .join("")}
    </div>
  `;
}

function renderAnalysisTable() {
  const tableBody = document.getElementById("analysisTableBody");
  if (!tableBody) return;

  if (appState.habits.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center; padding: 20px;">No hay hábitos</td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = appState.habits
    .map(habit => {
      const percent = calculateProgress(habit);
      const left = Math.max(0, normalizeNumber(habit.goal, 0) - normalizeNumber(habit.actual, 0));

      return `
        <tr>
          <td>${habit.name}</td>
          <td>${habit.goal}</td>
          <td>${habit.actual}</td>
          <td>${left}</td>
          <td>
            <div class="mini-progress">
              <span style="width:${percent}%; background:${getProgressColor(percent)};"></span>
            </div>
          </td>
          <td>${percent}%</td>
        </tr>
      `;
    })
    .join("");
}

function renderDashboard() {
  renderSidebarList();
  renderSummaryStats();
  renderCalendar();
  renderDailyBarChart();
  renderAnalysisTable();
}

function handleAddHabit() {
  const name = prompt("Nombre del hábito:");
  if (!name) return;

  const goal = prompt("Meta del hábito:");
  if (!goal) return;

  const habit = createHabit(name, goal);
  if (!habit) {
    alert("No se pudo crear el hábito. Verifica el nombre y la meta.");
    return;
  }

  appState.selectedHabitId = habit.id;
  renderDashboard();
}

function handleManageHabits() {
  if (appState.habits.length === 0) {
    alert("No hay hábitos para gestionar.");
    return;
  }

  const options = appState.habits
    .map((habit, index) => `${index + 1}. ${habit.name}`)
    .join("\n");

  const answer = prompt(`Selecciona un hábito para eliminar:\n\n${options}`);

  if (answer === null) return;

  const index = Number(answer) - 1;
  if (Number.isNaN(index) || index < 0 || index >= appState.habits.length) {
    alert("Selección no válida.");
    return;
  }

  deleteHabit(appState.habits[index].id);
  renderDashboard();
}

function handleSidebarClick(event) {
  const item = event.target.closest(".habit-item");
  if (!item) return;

  const id = item.dataset.id;
  appState.selectedHabitId = id;

  const habit = findHabitById(id);
  if (!habit) return;

  const value = prompt(`Actualiza el progreso de "${habit.name}"`, habit.actual);

  if (value === null) return;

  updateHabitActual(id, value);
  renderDashboard();
}

function bindEvents() {
  const addHabitBtn = document.getElementById("addHabitBtn");
  if (addHabitBtn) addHabitBtn.addEventListener("click", handleAddHabit);

  const manageHabitsBtn = document.getElementById("manageHabitsBtn");
  if (manageHabitsBtn) manageHabitsBtn.addEventListener("click", handleManageHabits);

  const habitList = document.getElementById("habitList");
  if (habitList) habitList.addEventListener("click", handleSidebarClick);
}

function init() {
  loadHabits();
  renderDashboard();
  bindEvents();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}