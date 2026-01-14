// 1. KONFIGURASI FIREBASE (Ganti dengan kode dari Firebase Console kamu)
const firebaseConfig = {
    apiKey: "PASTE_API_KEY_KAMU_DI_SINI",
    authDomain: "PROJECT_ID_KAMU.firebaseapp.com",
    databaseURL: "https://PROJECT_ID_KAMU-default-rtdb.firebaseio.com",
    projectId: "PROJECT_ID_KAMU",
    storageBucket: "PROJECT_ID_KAMU.appspot.com",
    messagingSenderId: "NOMOR_SENDER_ID",
    appId: "APP_ID_KAMU"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// 2. BANK SOAL (7 JURUSAN)
const questions = {
    TKJ: { 
        10: [{q:"Alat untuk mengetes kabel jaringan UTP adalah...", a:[{t:"LAN Tester",c:true},{t:"Tang Kombinasi",c:false},{t:"Multimeter",c:false},{t:"Obeng Plus",c:false}], p:"LAN Tester digunakan untuk mengecek koneksi urutan kabel RJ45."}] 
    },
    RPL: { 
        10: [{q:"Tag HTML untuk membuat baris baru adalah...", a:[{t:"<br>",c:true},{t:"<hr>",c:false},{t:"<lb>",c:false},{t:"<p>",c:false}], p:"<br> singkatan dari break, digunakan untuk pindah baris."}] 
    },
    DKV: { 
        10: [{q:"Warna primer pada monitor digital adalah...", a:[{t:"RGB",c:true},{t:"CMYK",c:false},{t:"RYB",c:false},{t:"Grayscale",c:false}], p:"RGB (Red, Green, Blue) adalah model warna untuk layar digital."}] 
    },
    TBSM: { 
        10: [{q:"Komponen yang berfungsi memercikkan api adalah...", a:[{t:"Busi",c:true},{t:"Piston",c:false},{t:"Karburator",c:false},{t:"Rantai",c:false}], p:"Busi menerima tegangan tinggi untuk memicu pembakaran."}] 
    },
    TKRO: { 
        10: [{q:"Alat untuk mengangkat mobil saat ganti ban...", a:[{t:"Dongkrak",c:true},{t:"Kunci Inggris",c:false},{t:"Kompresor",c:false},{t:"Tang",c:false}], p:"Dongkrak digunakan untuk mengangkat beban kendaraan."}] 
    },
    TPM: { 
        10: [{q:"Alat ukur dengan ketelitian 0.02mm adalah...", a:[{t:"Jangka Sorong",c:true},{t:"Micrometer",c:false},{t:"Penggaris",c:false},{t:"Meteran",c:false}], p:"Jangka sorong (Vernier Caliper) umum digunakan di bengkel mesin."}] 
    },
    TITL: { 
        10: [{q:"Satuan dari Arus Listrik adalah...", a:[{t:"Ampere",c:true},{t:"Volt",c:false},{t:"Watt",c:false},{t:"Ohm",c:false}], p:"Arus listrik diukur dalam satuan Ampere (A)."}] 
    }
};

// 3. VARIABEL STATE GAME
let curJ, curK, qIdx = 0, score = 0, timer, isDuel = false, isP1 = false, roomRef;

// 4. FUNGSI NAVIGASI & UI
function toggleGuide() { 
    document.getElementById('guide-modal').classList.toggle('hide'); 
}

function startSolo() {
    isDuel = false;
    curJ = document.getElementById('jurusan-select').value;
    curK = document.getElementById('kelas-select').value;
    if(!questions[curJ] || !questions[curJ][curK]) return alert("Soal belum tersedia untuk kelas ini!");
    begin();
}

// 5. LOGIKA DUEL (FIREBASE)
function initBattle(host) {
    const rid = document.getElementById('room-id').value;
    if(!rid) return alert("Masukkan Kode Room dulu!");
    
    isDuel = true;
    isP1 = host;
    roomRef = database.ref('rooms/' + rid);

    if(host) {
        roomRef.set({
            status: 'wait',
            p1S: 0,
            p2S: 0,
            j: document.getElementById('jurusan-select').value,
            k: document.getElementById('kelas-select').value
        });
        alert("Room dibuat! Berikan kode '" + rid + "' ke temanmu.");
    } else {
        roomRef.update({ status: 'start' });
    }

    // Mendengarkan perubahan data di Firebase secara Real-time
    roomRef.on('value', snap => {
        const d = snap.val();
        if(!d) return;
        
        // Update skor lawan di layar
        document.getElementById('opp-live-score').innerText = isP1 ? d.p2S : d.p1S;
        
        // Mulai game jika status berubah jadi 'start'
        if(d.status === 'start' && qIdx === 0) {
            curJ = d.j; curK = d.k;
            begin();
        }
    });
}

// 6. LOGIKA PERMAINAN
function begin() {
    document.getElementById('start-screen').classList.add('hide');
    document.getElementById('game-area').classList.remove('hide');
    if(isDuel) document.getElementById('battle-stats').classList.remove('hide');
    showQ();
}

function showQ() {
    const qList = questions[curJ][curK];
    if(qIdx >= qList.length) return done();

    const data = qList[qIdx];
    document.getElementById('question-text').innerText = data.q;
    document.getElementById('feedback-box').classList.add('hide');
    
    const list = document.getElementById('ans-list');
    list.innerHTML = '';

    ['A','B','C','D'].forEach((label, i) => {
        if(data.a[i]) {
            const btn = document.createElement('button');
            btn.className = 'ans-btn';
            btn.innerHTML = `<span class="label">${label}</span> ${data.a[i].t}`;
            btn.onclick = () => checkAns(data.a[i].c, data.p);
            list.appendChild(btn);
        }
    });
    startTimer();
}

function startTimer() {
    let t = 5;
    const disp = document.getElementById('timer-display');
    disp.innerText = t;
    disp.classList.remove('blink');
    clearInterval(timer);
    
    timer = setInterval(() => {
        t--;
        disp.innerText = t;
        if(t <= 2) disp.classList.add('blink');
        if(t <= 0) {
            clearInterval(timer);
            checkAns(false, "Waktu habis!");
        }
    }, 1000);
}

function checkAns(isCorrect, info) {
    clearInterval(timer);
    const fb = document.getElementById('feedback-box');
    fb.classList.remove('hide');
    
    if(isCorrect) {
        score += 20;
        fb.innerText = "BENAR! 🚀";
        fb.className = "feedback correct";
    } else {
        fb.innerText = "SALAH! " + (info || "");
        fb.className = "feedback wrong";
    }
    
    document.getElementById('my-live-score').innerText = score;
    
    // Update skor ke Firebase jika sedang Duel
    if(isDuel) {
        roomRef.update(isP1 ? {p1S: score} : {p2S: score});
    }

    // Jeda sebelum soal berikutnya (Duel lebih cepat agar seru)
    setTimeout(() => {
        qIdx++;
        showQ();
    }, isDuel ? 1000 : 3000);
}

function done() {
    document.getElementById('game-area').classList.add('hide');
    document.getElementById('result-screen').classList.remove('hide');
    document.getElementById('total-score').innerText = score;
    
    const msg = document.getElementById('motivation-text');
    const title = document.getElementById('result-title');

    if(isDuel) {
        const oppS = parseInt(document.getElementById('opp-live-score').innerText);
        if(score > oppS) { title.innerText = "🏆 KAMU MENANG!"; msg.innerText = "Selamat! Kamu lebih unggul hari ini."; }
        else if(score < oppS) { title.innerText = "🏁 KAMU KALAH"; msg.innerText = "Jangan menyerah, ayo balas di ronde berikutnya!"; }
        else { title.innerText = "🤝 HASIL SERI"; msg.innerText = "Kalian berdua sama-sama hebat!"; }
    } else {
        msg.innerText = score >= 80 ? "Luar biasa! Kamu menguasai materi ini." : "Ayo belajar lagi agar lebih paham!";
    }
}
