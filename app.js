:root {
  --bg: #0b0d10;
  --bg-2: #12161b;
  --panel: #151a21;
  --panel-2: #1b222b;
  --panel-3: #202932;
  --line: rgba(255, 255, 255, 0.08);
  --line-strong: rgba(255, 255, 255, 0.12);
  --text: #edf2f7;
  --text-soft: #a0acbb;
  --text-muted: #7d8a9a;
  --accent: #8b5cf6;
  --accent-2: #22c55e;
  --accent-3: #fbbf24;
  --danger: #f87171;
  --shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
  --radius: 18px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(139, 92, 246, 0.12), transparent 20%),
    linear-gradient(180deg, #0a0d11 0%, #0f1419 100%);
  color: var(--text);
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  color: inherit;
}

.app-shell {
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  min-height: 100vh;
  gap: 24px;
  padding: 20px;
}

.sidebar,
.main-panel {
  background: rgba(17, 21, 27, 0.92);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.sidebar {
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-header {
  padding-bottom: 14px;
  border-bottom: 1px solid var(--line);
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(34, 197, 94, 0.15));
  border: 1px solid rgba(139, 92, 246, 0.35);
  color: #d8c6ff;
  font-size: 1.2rem;
}

.eyebrow {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  margin-bottom: 6px;
}

h1,
h2,
h3,
p {
  margin: 0;
}

h1 {
  font-size: 1.45rem;
  font-weight: 700;
}

.habit-summary {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.summary-block {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.summary-block .label {
  color: var(--text-muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.summary-block strong {
  font-size: 1.2rem;
  font-weight: 700;
}

.habit-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.habit-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px 12px;
  transition: 0.2s ease;
}

.habit-item:hover {
  border-color: rgba(139, 92, 246, 0.25);
  transform: translateY(-1px);
}

.habit-left {
  display: flex;
  align-items: center;
  gap: 11px;
}

.habit-emoji {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  font-size: 1.1rem;
}

.habit-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
}

.habit-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-soft);
  font-size: 0.72rem;
}

.habit-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-2);
  box-shadow: 0 0 12px rgba(34, 197, 94, 0.75);
}

.sidebar-footer {
  margin-top: auto;
}

.ghost-button,
.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-weight: 600;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.ghost-button {
  width: 100%;
  padding: 11px 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  color: var(--text);
}

.primary-button {
  padding: 11px 16px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.18), rgba(34, 197, 94, 0.12));
  border: 1px solid rgba(139, 92, 246, 0.28);
  color: var(--text);
}

.ghost-button:hover,
.primary-button:hover {
  transform: translateY(-1px);
}

.main-panel {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 8px;
}

.topbar h2 {
  font-size: clamp(1.6rem, 2vw, 2.1rem);
  font-weight: 800;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 18px;
  min-height: 158px;
}

.stat-card.accent {
  background:
    linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(255, 255, 255, 0.02));
}

.stat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: var(--text-soft);
  margin-bottom: 20px;
}

.pill {
  display: inline-flex;
  align-items: center;
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  border: 1px solid var(--line);
}

.pill.success {
  color: #bdf7d4;
  background: rgba(34, 197, 94, 0.08);
  border-color: rgba(34, 197, 94, 0.2);
}

.pill.neutral {
  color: #d7e1ee;
  background: rgba(255, 255, 255, 0.025);
}

.stat-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-body strong {
  font-size: clamp(2rem, 3vw, 2.7rem);
  font-weight: 800;
}

.stat-body small {
  color: var(--text-muted);
  font-size: 0.82rem;
}

.ring-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.ring {
  --progress: 0;
  width: 122px;
  height: 122px;
  border-radius: 50%;
  background:
    conic-gradient(var(--accent) calc(var(--progress) * 1%), rgba(255,255,255,0.06) 0);
  display: grid;
  place-items: center;
  position: relative;
  box-shadow: inset 0 0 24px rgba(139, 92, 246, 0.18);
}

.ring::before {
  content: "";
  position: absolute;
  inset: 12px;
  border-radius: 50%;
  background: rgba(11, 13, 16, 0.96);
  border: 1px solid var(--line);
}

.ring-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--text);
  font-size: 1.2rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 18px;
}

.calendar-panel,
.insights-panel,
.analysis-panel {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 18px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.section-header h3 {
  font-size: 1.08rem;
  font-weight: 700;
}

.calendar-wrapper {
  overflow-x: auto;
  padding-bottom: 8px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(180px, 1fr));
  gap: 12px;
  min-width: 660px;
}

.week-group {
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.week-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-soft);
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 2px;
}

.day-cells {
  display: grid;
  gap: 8px;
}

.day-cell {
  width: 100%;
  min-height: 42px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.015);
  color: var(--text-soft);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  transition: all 0.18s ease;
}

.day-cell:hover {
  border-color: rgba(139, 92, 246, 0.22);
}

.day-cell.checked {
  background: rgba(34, 197, 94, 0.12);
  border-color: rgba(34, 197, 94, 0.35);
  color: #dffbe9;
}

.day-number {
  font-size: 0.8rem;
  font-weight: 600;
}

.day-check {
  width: 18px;
  height: 18px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.01);
  font-size: 0.7rem;
  color: var(--text);
}

.day-cell.checked .day-check {
  background: rgba(34, 197, 94, 0.22);
  border-color: rgba(34, 197, 94, 0.3);
  color: #ddffe9;
}

.bar-chart {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 10px;
}

.bar-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.bar-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-soft);
  font-size: 0.78rem;
}

.bar-shell {
  position: relative;
  height: 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--line);
  overflow: hidden;
}

.bar-fill {
  position: absolute;
  inset: 0 auto 0 0;
  width: 0%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--accent), #5eead4);
  box-shadow: 0 8px 18px rgba(139, 92, 246, 0.2);
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 720px;
}

thead th {
  text-align: left;
  padding: 14px 12px;
  color: var(--text-soft);
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-bottom: 1px solid var(--line);
}

tbody td {
  padding: 14px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  color: var(--text);
}

.habit-cell {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
}

.habit-mini {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  font-size: 0.9rem;
}

.progress-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}

.progress-track {
  position: relative;
  width: 120px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--line);
  overflow: hidden;
}

.progress-fill {
  position: absolute;
  inset: 0 auto 0 0;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #22c55e, #6ee7b7);
}

@media (max-width: 1080px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    order: 1;
  }

  .main-panel {
    order: 2;
  }
}

@media (max-width: 700px) {
  body {
    background: #0a0d11;
  }

  .app-shell {
    padding: 12px;
    gap: 14px;
  }

  .sidebar,
  .main-panel,
  .calendar-panel,
  .insights-panel,
  .analysis-panel {
    border-radius: 14px;
  }

  .stats-grid,
  .content-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .calendar-grid {
    min-width: 560px;
  }

  .primary-button {
    width: 100%;
  }
}