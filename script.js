const questions = {
    Mudah: [
        { q: "Di mana janin tumbuh?", a: [{t: "Rahim", c: true}, {t: "Lambung", c: false}, {t: "Ovarium", c: false}] },
        { q: "Hormon utama perempuan adalah...", a: [{t: "Estrogen", c: true}, {t: "Testosteron", c: false}, {t: "Insulin", c: false}] },
        { q: "Siklus bulanan sel telur luruh disebut...", a: [{t: "Menstruasi", c: true}, {t: "Evolusi", c: false}, {t: "Ovulasi", c: false}] },
        { q: "Sel telur diproduksi di...", a: [{t: "Ovarium", c: true}, {t: "Vagina", c: false}, {t: "Serviks", c: false}] },
        { q: "Saluran telur disebut...", a: [{t: "Tuba Falopi", c: true}, {t: "Uretra", c: false}, {t: "Buli", c: false}] },
        { q: "Mulut rahim disebut...", a: [{t: "Serviks", c: true}, {t: "Labia", c: false}, {t: "Klitoris", c: false}] },
        { q: "Alat reproduksi luar disebut...", a: [{t: "Vulva", c: true}, {t: "Uterus", c: false}, {t: "Oviduk", c: false}] },
        { q: "Sel telur matang disebut...", a: [{t: "Ovum", c: true}, {t: "Sperma", c: false}, {t: "Zigot", c: false}] },
        { q: "Lapisan rahim terdalam adalah...", a: [{t: "Endometrium", c: true}, {t: "Miometrium", c: false}, {t: "Perimetrium", c: false}] },
        { q: "Berapa jumlah ovarium normal?", a: [{t: "Dua", c: true}, {t: "Satu", c: false}, {t: "Empat", c: false}] },
        { q: "Masa berakhirnya haid selamanya disebut...", a: [{t: "Menopause", c: true}, {t: "Pubertas", c: false}, {t: "Ovulasi", c: false}] },
        { q: "Cairan pelumas alami diproduksi di...", a: [{t: "Kelenjar Bartholin", c: true}, {t: "Ginjal", c: false}, {t: "Hati", c: false}] }
    ],
    Sedang: [
        { q: "Bakteri Treponema pallidum menyebabkan?", a: [{t: "Sifilis", c: true}, {t: "Gonore", c: false}, {t: "Kutil", c: false}] },
        { q: "Penyebab utama kanker serviks adalah virus...", a: [{t: "HPV", c: true}, {t: "HIV", c: false}, {t: "H5N1", c: false}] },
        { q: "Infeksi jamur putih dan gatal disebut...", a: [{t: "Kandidiasis", c: true}, {t: "Herpes", c: false}, {t: "Sifilis", c: false}] },
        { q: "Penyebab kencing nanah?", a: [{t: "Gonore", c: true}, {t: "Klamidia", c: false}, {t: "Diabetes", c: false}] },
        { q: "Siklus haid normal rata-rata berapa hari?", a: [{t: "21-35 hari", c: true}, {t: "7 hari", c: false}, {t: "60 hari", c: false}] },
        { q: "Pelepasan sel telur dari ovarium disebut?", a: [{t: "Ovulasi", c: true}, {t: "Menstruasi", c: false}, {t: "Fertilisasi", c: false}] },
        { q: "IMS akibat protozoa adalah...", a: [{t: "Trikomoniasis", c: true}, {t: "HIV", c: false}, {t: "Kutil", c: false}] },
        { q: "Keputihan abnormal biasanya berwarna...", a: [{t: "Hijau/Kuning & Bau", c: true}, {t: "Bening", c: false}, {t: "Putih susu", c: false}] },
        { q: "Bakteri Gonore menyerang bagian...", a: [{t: "Selaput lendir", c: true}, {t: "Tulang", c: false}, {t: "Rambut", c: false}] },
        { q: "Virus HSV tipe 2 menyebabkan...", a: [{t: "Herpes Genital", c: true}, {t: "Cacar Air", c: false}, {t: "Flu", c: false}] },
        { q: "Sifilis tahap awal ditandai dengan...", a: [{t: "Luka tanpa nyeri", c: true}, {t: "Demam tinggi", c: false}, {t: "Muntah", c: false}] },
        { q: "Radang panggul kronis disingkat...", a: [{t: "PID", c: true}, {t: "PCOS", c: false}, {t: "HIV", c: false}] }
    ],
    Sulit: [
        { q: "HIV menghancurkan sel darah putih tipe...", a: [{t: "CD4", c: true}, {t: "Trombosit", c: false}, {t: "Eritrosit", c: false}] },
        { q: "Pemeriksaan IVA bertujuan mendeteksi...", a: [{t: "Kanker Serviks", c: true}, {t: "Kista", c: false}, {t: "Kehamilan", c: false}] },
        { q: "Vaksin HPV sebaiknya diberikan saat...", a: [{t: "Usia Remaja", c: true}, {t: "Usia Lansia", c: false}, {t: "Saat Sakit", c: false}] },
        { q: "Endometriosis adalah gangguan pada...", a: [{t: "Jaringan endometrium", c: true}, {t: "Otot jantung", c: false}, {t: "Paru-paru", c: false}] },
        { q: "Hormon yang memicu lonjakan ovulasi?", a: [{t: "LH", c: true}, {t: "TSH", c: false}, {t: "Kortisol", c: false}] },
        { q: "Sindrom ovarium polikistik disingkat...", a: [{t: "PCOS", c: true}, {t: "PMS", c: false}, {t: "PPD", c: false}] },
        { q: "AIDS adalah kumpulan gejala akibat virus...", a: [{t: "HIV", c: true}, {t: "Hepatitis", c: false}, {t: "HPV", c: false}] },
        { q: "Organ kecil di atas uretra yang sensitif?", a: [{t: "Klitoris", c: true}, {t: "Hymen", c: false}, {t: "Serviks", c: false}] },
        { q: "Kanker ovarium sulit dideteksi dini karena...", a: [{t: "Gejala tidak khas", c: true}, {t: "Sangat nyeri", c: false}, {t: "Tampak luar", c: false}] },
        { q: "Sifilis yang menyerang otak disebut...", a: [{t: "Neurosifilis", c: true}, {t: "Stroke", c: false}, {t: "Meningitis", c: false}] },
        { q: "Kelenjar yang menjaga pH vagina adalah...", a: [{t: "Kelenjar Skene", c: true}, {t: "Kelenjar Adrenal", c: false}, {t: "Pituitari", c: false}] },
        { q: "Pertemuan sel telur dan sperma terjadi di...", a: [{t: "Tuba Falopi", c: true}, {t: "Vagina", c: false}, {t: "Uretra", c: false}] }
    ]
};

let levels = ["Mudah", "Sedang", "Sulit"];
let currentLevelIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let timer;
let isMuted = false;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameArea = document.getElementById('game-area');
const certContainer = document.getElementById('certificate-container');
const timerEl = document.getElementById('time-left');
const scoreEl = document.getElementById('current-score');
const levelSelect = document.getElementById('level-select');

// Sound Control
function playSound(id) {
    if (isMuted) return;
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play().catch(() => {});
}

document.getElementById('mute-btn').onclick = function() {
    isMuted = !isMuted;
    this.innerText = isMuted ? "🔇 Off" : "🔊 On";
};

document.getElementById('start-btn').onclick = function() {
    startScreen.classList.add('hide');
    gameArea.classList.remove('hide');
    score = 0;
    scoreEl.innerText = score;
    showQuestion();
};

levelSelect.onchange = function(e) {
    currentLevelIndex = parseInt(e.target.value);
    currentQuestionIndex = 0;
    showQuestion();
};

function startTimer() {
    let timeLeft = 15;
    timerEl.innerText = timeLeft;
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerEl.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            playSound('sound-timeout');
            selectAnswer(false);
        }
    }, 1000);
}

function showQuestion() {
    resetState();
    let levelName = levels[currentLevelIndex];
    let qData = questions[levelName][currentQuestionIndex];
    document.getElementById('question').innerText = qData.q;
    
    qData.a.forEach(ans => {
        const btn = document.createElement('button');
        btn.innerText = ans.t;
        btn.onclick = () => selectAnswer(ans.c);
        document.getElementById('answer-buttons').appendChild(btn);
    });
    startTimer();
}

function selectAnswer(correct) {
    clearInterval(timer);
    if (correct) {
        score += 10;
        playSound('sound-correct');
        document.body.style.backgroundColor = "#c8e6c9";
    } else {
        playSound('sound-wrong');
        document.body.style.backgroundColor = "#ffcdd2";
    }
    scoreEl.innerText = score;

    setTimeout(() => {
        document.body.style.backgroundColor = "#fce4ec";
        currentQuestionIndex++;
        let levelName = levels[currentLevelIndex];
        
        if (currentQuestionIndex < questions[levelName].length) {
            showQuestion();
        } else {
            finishLevel();
        }
    }, 600);
}

function resetState() {
    const btnContainer = document.getElementById('answer-buttons');
    while (btnContainer.firstChild) btnContainer.removeChild(btnContainer.firstChild);
}

function finishLevel() {
    if (score >= 100) {
        gameArea.classList.add('hide');
        certContainer.classList.remove('hide');
        document.getElementById('final-score-cert').innerText = score;
        document.getElementById('date-cert').innerText = new Date().toLocaleDateString('id-ID');
        let name = prompt("Hebat! Masukkan namamu untuk sertifikat:");
        document.getElementById('player-name').innerText = name || "Pakar Medis";
    } else {
        alert("Level Selesai! Skor: " + score + ". Capai 100 poin untuk mendapatkan Sertifikat!");
        currentQuestionIndex = 0;
        showQuestion();
    }
}
