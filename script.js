// 要素取得
const subjectSelect = document.getElementById("subject");
const unitSelect = document.getElementById("unit");
const modeSelect = document.getElementById("mode");
const startBtn = document.getElementById("startBtn");
const reviewBtn = document.getElementById("reviewBtn");
const historyBtn = document.getElementById("historyBtn");
const retryWrongBtn = document.getElementById("retryWrongBtn");
const retryBtn = document.getElementById("retryBtn");
const selectBtn = document.getElementById("selectBtn");
const backToHomeBtn = document.getElementById("backToHomeBtn");
const backToHomeBtn2 = document.getElementById("backToHomeBtn2");
const backToHomeBtn3 = document.getElementById("backToHomeBtn3");
const unitFilter = document.getElementById("unitFilter");
const saveGoalBtn = document.getElementById("saveGoalBtn");

const quizSection = document.getElementById("quiz");
const questionElem = document.getElementById("question");
const choicesElem = document.getElementById("choices");
const feedbackElem = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const reviewSection = document.getElementById("review");
const resultSection = document.getElementById("result");
const historySection = document.getElementById("history");
const reviewList = document.getElementById("reviewList");
const currentSubjectElem = document.getElementById("currentSubject");
const currentUnitElem = document.getElementById("currentUnit");
const progressElem = document.getElementById("progress");
const resultText = document.getElementById("resultText");
const timerElem = document.getElementById("timer");
const totalSolved = document.getElementById("totalSolved");
const weeklySolved = document.getElementById("weeklySolved");
const weakCount = document.getElementById("weakCount");
const streakDays = document.getElementById("streakDays");
const weeklyGoalInput = document.getElementById("weeklyGoal");
const goalProgress = document.getElementById("goalProgress");
const goalPercent = document.getElementById("goalPercent");

let currentQuestions = [];
let currentIndex = 0;
let currentMode = "random";
let wrongQuestions = JSON.parse(localStorage.getItem("wrongQuestions") || "[]");
let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
let questionStats = JSON.parse(localStorage.getItem("questionStats") || "{}");
let correctCount = 0;
let challengeBest = parseInt(localStorage.getItem("challengeBest") || "0");
let totalSolvedCount = parseInt(localStorage.getItem("totalSolvedCount") || "0");
let weeklySolvedCount = parseInt(localStorage.getItem("weeklySolvedCount") || "0");
let lastSolvedDate = localStorage.getItem("lastSolvedDate") || "";
let streak = parseInt(localStorage.getItem("streak") || "0");
let weeklyGoal = parseInt(localStorage.getItem("weeklyGoal") || "50");
let timer;
let startTime;
let timeLimit = 60;

function showView(view) {
  document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(view).classList.remove('hidden');
}

subjectSelect.addEventListener("change", () => {
  const selectedSubject = subjectSelect.value;
  const units = Array.from(new Set(allQuestions.filter(q => q.subject === selectedSubject).map(q => q.unit)));
  unitSelect.innerHTML = "";
  units.forEach(unit => {
    const opt = document.createElement("option");
    opt.value = unit;
    opt.textContent = unit;
    unitSelect.appendChild(opt);
  });
});

startBtn.addEventListener("click", () => {
  currentIndex = 0;
  correctCount = 0;
  feedbackElem.textContent = "";
  const selectedSubject = subjectSelect.value;
  const selectedUnit = unitSelect.value;
  currentMode = modeSelect.value;

  if (currentMode === "assistant") {
    currentQuestions = allQuestions.filter(q => {
      const qid = q.id;
      const stat = questionStats[qid];
      // 修正版: すでに出題履歴があり、かつ復習期日が来ているものだけ
      return stat && stat.nextReview && new Date(stat.nextReview) <= new Date();
    });
  } else if (currentMode === "favorites") {
    currentQuestions = favorites;
  } else {
    if (!selectedSubject || !selectedUnit) {
      alert("科目と単元を選択してください。");
      return;
    }
    currentQuestions = allQuestions.filter(q =>
      q.subject.trim() === selectedSubject.trim() &&
      q.unit.trim() === selectedUnit.trim()
    );
  }

  if (currentQuestions.length === 0) {
    alert("出題する問題がありません。");
    return;
  }

  shuffleArray(currentQuestions);

  if (currentMode === "random") {
    currentQuestions = currentQuestions.slice(0, 10);
  }

  showView('quiz');

  if (currentMode === "timeattack") {
    startTime = Date.now();
    timerElem.textContent = `残り時間: ${timeLimit}秒`;
    timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const remaining = timeLimit - elapsed;
      timerElem.textContent = `残り時間: ${remaining}秒`;
      if (remaining <= 0) {
        clearInterval(timer);
        showTimeAttackResult();
      }
    }, 500);
  } else {
    timerElem.textContent = "";
  }

  displayQuestion();
});

saveGoalBtn.addEventListener("click", () => {
  weeklyGoal = parseInt(weeklyGoalInput.value) || 50;
  localStorage.setItem("weeklyGoal", weeklyGoal);
  updateDashboard();
  alert("目標を保存しました！");
});

reviewBtn.addEventListener("click", () => {
  showView('review');
  renderReviewList();
});

historyBtn.addEventListener("click", () => {
  showView('history');
  renderHistory();
});

unitFilter.addEventListener("change", () => {
  renderHistory();
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  feedbackElem.textContent = "";
  if (["challenge", "timeattack", "assistant"].includes(currentMode)) {
    displayQuestion();
  } else if (currentIndex < currentQuestions.length) {
    displayQuestion();
  } else {
    showResult();
  }
});

function displayQuestion() {
  const q = currentQuestions[currentIndex % currentQuestions.length];
  questionElem.textContent = q.questionText;
  const choices = [q.option1, q.option2, q.option3, q.option4];
  const shuffledChoices = shuffleArray([...choices]);
  choicesElem.innerHTML = "";
  shuffledChoices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => handleAnswer(btn, choice === q.correctAnswerIndex, q);
    choicesElem.appendChild(btn);
  });

  if (currentMode === "challenge") {
    progressElem.textContent = `連続正解数: ${correctCount}`;
  } else if (currentMode === "timeattack") {
    progressElem.textContent = `正解数: ${correctCount}`;
  } else if (currentMode === "assistant") {
    progressElem.textContent = `復習中: ${currentIndex + 1} / ${currentQuestions.length}`;
  } else {
    progressElem.textContent = `問題 ${currentIndex + 1} / ${currentQuestions.length}`;
  }
  nextBtn.classList.add("hidden");
}
function handleAnswer(button, isCorrect, question) {
  const buttons = choicesElem.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);

  const qid = question.id;
  if (!questionStats[qid]) {
    questionStats[qid] = { shown: 0, correct: 0, nextReview: null };
  }
  questionStats[qid].shown++;

  if (isCorrect) {
    questionStats[qid].correct++;
    button.classList.add("correct");
    feedbackElem.textContent = "正解です！";
    correctCount++;
    removeFromWrongList(question);

    // 間隔反復: 正解→間隔を伸ばす
    if (currentMode === "assistant") {
      const days = Math.min(30, questionStats[qid].shown);
      const next = new Date();
      next.setDate(next.getDate() + days);
      questionStats[qid].nextReview = next.toISOString();
    }
  } else {
    button.classList.add("incorrect");
    feedbackElem.textContent = `間違いです。正解: ${question.correctAnswerIndex}`;
    addToWrongList(question);

    // 間隔反復: 不正解→翌日
    if (currentMode === "assistant") {
      const next = new Date();
      next.setDate(next.getDate() + 1);
      questionStats[qid].nextReview = next.toISOString();
    }
  }

  // ✅ 正答率保存
  saveQuestionStats();

  // ✅ 回答カウントはここで増やす
  if (["challenge", "timeattack", "assistant", "random", "all"].includes(currentMode)) {
    totalSolvedCount++;
    weeklySolvedCount++;
    const today = new Date().toISOString().slice(0,10);
    const last = lastSolvedDate.slice(0,10);
    if (today !== last) {
      if (new Date(today) - new Date(last) === 86400000) {
        streak++;
      } else {
        streak = 1;
      }
      lastSolvedDate = today;
    }
    localStorage.setItem("totalSolvedCount", totalSolvedCount);
    localStorage.setItem("weeklySolvedCount", weeklySolvedCount);
    localStorage.setItem("lastSolvedDate", lastSolvedDate);
    localStorage.setItem("streak", streak);
  }

  updateDashboard();
  nextBtn.classList.remove("hidden");
}

function saveQuestionStats() {
  localStorage.setItem("questionStats", JSON.stringify(questionStats));
}

function showResult() {
  showView('result');
  const percent = Math.round((correctCount / currentQuestions.length) * 100);
  resultText.textContent = `正解数: ${correctCount} / ${currentQuestions.length} (${percent}%)`;
  saveHistory(percent);
}

function showTimeAttackResult() {
  showView('result');
  const totalTime = Math.min(timeLimit, Math.floor((Date.now() - startTime) / 1000));
  const avgTime = correctCount > 0 ? (totalTime / correctCount).toFixed(1) : "-";
  resultText.textContent = `正解数: ${correctCount}\n平均解答時間: ${avgTime}秒`;
}

function saveHistory(percent) {
  if (["challenge", "timeattack", "favorites", "assistant"].includes(currentMode)) return;

  const history = JSON.parse(localStorage.getItem("history") || "[]");
  const selectedSubject = currentMode === "retry" ? "苦手問題モード" : subjectSelect.value;
  const selectedUnit = currentMode === "retry" ? "-" : unitSelect.value;
  history.push({
    date: new Date().toLocaleString(),
    subject: selectedSubject,
    unit: selectedUnit,
    correct: correctCount,
    total: currentQuestions.length,
    percent
  });
  localStorage.setItem("history", JSON.stringify(history));
}

function addToWrongList(q) {
  const found = wrongQuestions.find(w => w.id === q.id);
  if (!found) {
    wrongQuestions.push({ ...q, streak: 0 });
  } else {
    found.streak = 0;
  }
  saveWrongList();
}

function removeFromWrongList(q) {
  const found = wrongQuestions.find(w => w.id === q.id);
  if (found) {
    found.streak++;
    if (found.streak >= 3) {
      wrongQuestions = wrongQuestions.filter(w => w.id !== q.id);
    }
    saveWrongList();
  }
}

function saveWrongList() {
  localStorage.setItem("wrongQuestions", JSON.stringify(wrongQuestions));
}

function updateDashboard() {
  totalSolved.textContent = `総解答数: ${totalSolvedCount}`;
  weeklySolved.textContent = `今週の解答数: ${weeklySolvedCount}`;
  weakCount.textContent = `苦手問題数: ${wrongQuestions.length}`;
  streakDays.textContent = `連続学習日数: ${streak}日`;

  const percent = Math.min(100, Math.round((weeklySolvedCount / weeklyGoal) * 100));
  goalProgress.value = percent;
  goalPercent.textContent = `${percent}%`;
}

function renderReviewList() {
  reviewList.innerHTML = "";
  wrongQuestions.forEach(q => {
    const div = document.createElement("div");
    const stats = questionStats[q.id] || { shown: 0, correct: 0 };
    div.innerHTML = `
      <p>${q.questionText}</p>
      <p>正答率: ${stats.shown ? Math.round((stats.correct / stats.shown) * 100) : 0}% (${stats.correct}/${stats.shown})</p>
    `;
    reviewList.appendChild(div);
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

window.addEventListener("load", () => {
  const subjects = Array.from(new Set(allQuestions.map(q => q.subject)));
  subjectSelect.innerHTML = "";
  subjects.forEach(subject => {
    const opt = document.createElement("option");
    opt.value = subject;
    opt.textContent = subject;
    subjectSelect.appendChild(opt);
  });
  subjectSelect.dispatchEvent(new Event("change"));
  updateDashboard();
  showView('home');
});
