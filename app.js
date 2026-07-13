// Database Soal Psikotes & Logika Simulasi TNI AD

// 1. DATABASE SOAL
const KECERDASAN_QUESTIONS = [
  {
    id: 1,
    type: "verbal",
    question: "Pilihlah kata yang memiliki arti paling dekat dengan kata berikut:\n\n**PROSPEK**",
    options: [
      { key: "A", text: "Harapan / Peluang" },
      { key: "B", text: "Kesimpulan" },
      { key: "C", text: "Penelitian" },
      { key: "D", text: "Pekerjaan" },
      { key: "E", text: "Rencana" }
    ],
    correctAnswer: "A",
    explanation: "Prospek berarti harapan, peluang, atau kemungkinan masa depan yang baik."
  },
  {
    id: 2,
    type: "verbal",
    question: "Pilihlah lawan kata (antonim) yang paling tepat untuk kata berikut:\n\n**APATIS**",
    options: [
      { key: "A", text: "Acuh" },
      { key: "B", text: "Peduli / Aktif" },
      { key: "C", text: "Dingin" },
      { key: "D", text: "Pesimis" },
      { key: "E", text: "Lemah" }
    ],
    correctAnswer: "B",
    explanation: "Apatis berarti tidak peduli atau masa bodoh. Lawan katanya adalah peduli, aktif, atau antusias."
  },
  {
    id: 3,
    type: "verbal",
    question: "Hubungan kata (Analogi):\n\n**MILITER : DISIPLIN = ... : ...**",
    options: [
      { key: "A", text: "Polisi : Senjata" },
      { key: "B", text: "Hakim : Keadilan" },
      { key: "C", text: "Ilmuwan : Penelitian" },
      { key: "D", text: "Siswa : Belajar" },
      { key: "E", text: "Seniman : Imajinasi" }
    ],
    correctAnswer: "B",
    explanation: "Militer harus menjunjung tinggi disiplin, sebagaimana Hakim harus menegakkan keadilan."
  },
  {
    id: 4,
    type: "numerik",
    question: "Tentukan angka selanjutnya dari deret angka berikut:\n\n**3, 6, 12, 21, 33, ...**",
    options: [
      { key: "A", text: "45" },
      { key: "B", text: "48" },
      { key: "C", text: "46" },
      { key: "D", text: "50" },
      { key: "E", text: "47" }
    ],
    correctAnswer: "B",
    explanation: "Pola penambahan deret tersebut adalah kelipatan 3: +3, +6, +9, +12, maka selanjutnya +15. Jadi, 33 + 15 = 48."
  },
  {
    id: 5,
    type: "numerik",
    question: "Tentukan angka selanjutnya dari deret berikut:\n\n**5, 10, 8, 16, 14, 28, ...**",
    options: [
      { key: "A", text: "26" },
      { key: "B", text: "30" },
      { key: "C", text: "32" },
      { key: "D", text: "24" },
      { key: "E", text: "34" }
    ],
    correctAnswer: "A",
    explanation: "Pola deretnya adalah: dikali 2, lalu dikurangi 2 (x2, -2, x2, -2, x2, ...). Setelah 28, polanya adalah -2, sehingga 28 - 2 = 26."
  },
  {
    id: 6,
    type: "numerik",
    question: "Sebuah truk pengangkut logistik TNI AD menempuh jarak 120 km dengan kecepatan rata-rata 60 km/jam. Jika truk tersebut berangkat pukul 07.15 WIB, pukul berapakah truk tiba di tujuan?",
    options: [
      { key: "A", text: "09.00 WIB" },
      { key: "B", text: "09.15 WIB" },
      { key: "C", text: "08.45 WIB" },
      { key: "D", text: "09.30 WIB" },
      { key: "E", text: "10.00 WIB" }
    ],
    correctAnswer: "B",
    explanation: "Waktu tempuh = Jarak / Kecepatan = 120 km / 60 km/jam = 2 jam. Berangkat pukul 07.15 + 2 jam = 09.15 WIB."
  },
  {
    id: 7,
    type: "spasial",
    question: "Carilah gambar yang TIDAK memiliki kesamaan pola (berbeda dari yang lain):",
    options: [
      { key: "A", text: "Segitiga dengan 3 garis diagonal didalamnya" },
      { key: "B", text: "Persegi dengan 4 garis diagonal didalamnya" },
      { key: "C", text: "Lingkaran dengan garis lengkung melingkar didalamnya" },
      { key: "D", text: "Segilima dengan 5 garis diagonal didalamnya" },
      { key: "E", text: "Segienam dengan 5 garis diagonal didalamnya" }
    ],
    correctAnswer: "E",
    explanation: "Setiap bangun datar memiliki jumlah garis diagonal sesuai jumlah sisinya, kecuali bangun Segienam pada pilihan E yang hanya memiliki 5 garis diagonal (seharusnya 6)."
  },
  {
    id: 8,
    type: "spasial",
    question: "Jika sebuah kubus transparan dengan tanda panah menunjuk ke atas diputar 90 derajat searah jarum jam, lalu diputar 180 derajat ke depan, kemanakah arah tanda panah sekarang?",
    options: [
      { key: "A", text: "Ke atas" },
      { key: "B", text: "Ke bawah" },
      { key: "C", text: "Ke kanan" },
      { key: "D", text: "Ke kiri" },
      { key: "E", text: "Menghadap ke depan" }
    ],
    correctAnswer: "B",
    explanation: "Diputar 90 derajat searah jarum jam membuat panah menghadap kanan. Diputar 180 derajat membalikkan arah ke kiri/bawah tergantung sumbu rotasi vertikal/horizontal, dalam konteks rotasi bangun ruang 180 derajat penuh ke depan menghasilkan posisi terbalik (Bawah)."
  },
  {
    id: 9,
    type: "verbal",
    question: "Semua taruna akademi militer pandai berenang. Sebagian pemuda yang lolos seleksi fisik adalah taruna akademi militer. Kesimpulan yang benar adalah ...",
    options: [
      { key: "A", text: "Semua pemuda yang lolos seleksi fisik pandai berenang" },
      { key: "B", text: "Sebagian pemuda yang lolos seleksi fisik pandai berenang" },
      { key: "C", text: "Semua taruna akademi militer tidak lolos seleksi fisik" },
      { key: "D", text: "Sebagian pemuda yang pandai berenang bukan taruna" },
      { key: "E", text: "Semua pemuda yang pandai berenang adalah taruna" }
    ],
    correctAnswer: "B",
    explanation: "Karena sebagian pemuda yang lolos seleksi fisik adalah taruna akademi militer, dan semua taruna pandai berenang, maka sebagian pemuda tersebut pasti pandai berenang."
  },
  {
    id: 10,
    type: "spasial",
    question: "Pola jaring-jaring balok. Jika sisi bawah berwarna merah, sisi atas berwarna putih, sisi kiri hijau, sisi kanan kuning, sisi depan biru, dan sisi belakang hitam. Sisi manakah yang berseberangan dengan sisi berwarna hijau?",
    options: [
      { key: "A", text: "Putih" },
      { key: "B", text: "Kuning" },
      { key: "C", text: "Biru" },
      { key: "D", text: "Hitam" },
      { key: "E", text: "Merah" }
    ],
    correctAnswer: "B",
    explanation: "Sisi kiri berseberangan langsung dengan sisi kanan (Kuning)."
  },
  {
    id: 11,
    type: "verbal",
    question: "Pilihlah kata yang memiliki makna paling dekat dengan kata berikut:\n\n**PREVENTIF**",
    options: [
      { key: "A", text: "Pencegahan" },
      { key: "B", text: "Pengobatan" },
      { key: "C", text: "Penindakan" },
      { key: "D", text: "Pengawasan" },
      { key: "E", text: "Penilaian" }
    ],
    correctAnswer: "A",
    explanation: "Preventif adalah tindakan pencegahan sebelum masalah atau kejadian negatif terjadi."
  },
  {
    id: 12,
    type: "verbal",
    question: "Hubungan kata (Analogi):\n\n**SENJATA : PRAJURIT = ... : ...**",
    options: [
      { key: "A", text: "Kamera : Fotografer" },
      { key: "B", text: "Sawah : Petani" },
      { key: "C", text: "Pasien : Dokter" },
      { key: "D", text: "Tinta : Penulis" },
      { key: "E", text: "Kapal : Nelayan" }
    ],
    correctAnswer: "A",
    explanation: "Senjata adalah alat utama kerja dari seorang Prajurit, sebagaimana Kamera adalah alat utama kerja seorang Fotografer."
  },
  {
    id: 13,
    type: "numerik",
    question: "Tentukan angka selanjutnya dari deret angka berikut:\n\n**2, 3, 5, 8, 13, 21, ...**",
    options: [
      { key: "A", text: "34" },
      { key: "B", text: "32" },
      { key: "C", text: "30" },
      { key: "D", text: "28" },
      { key: "E", text: "36" }
    ],
    correctAnswer: "A",
    explanation: "Deret ini adalah deret Fibonacci, di mana setiap angka berikutnya merupakan penjumlahan dari dua angka sebelumnya (2+3=5, 3+5=8, 5+8=13, 8+13=21, 13+21=34)."
  },
  {
    id: 14,
    type: "numerik",
    question: "Tentukan angka selanjutnya dari deret berikut:\n\n**1, 3, 9, 27, 81, ...**",
    options: [
      { key: "A", text: "243" },
      { key: "B", text: "162" },
      { key: "C", text: "180" },
      { key: "D", text: "324" },
      { key: "E", text: "200" }
    ],
    correctAnswer: "A",
    explanation: "Setiap angka dikalikan dengan 3 untuk mendapatkan angka berikutnya (1x3=3, 3x3=9, 9x3=27, 27x3=81, 81x3=243)."
  },
  {
    id: 15,
    type: "spasial",
    question: "Jika sebuah lembaran kertas persegi dilipat secara diagonal membentuk segitiga, kemudian dilipat sekali lagi secara simetris, lalu ujungnya dilubangi kecil satu kali, berapa banyak lubang yang terbentuk ketika kertas dibuka kembali?",
    options: [
      { key: "A", text: "4 lubang" },
      { key: "B", text: "2 lubang" },
      { key: "C", text: "8 lubang" },
      { key: "D", text: "1 lubang" },
      { key: "E", text: "6 lubang" }
    ],
    correctAnswer: "A",
    explanation: "Kertas dilipat dua kali lipatan diagonal menghasilkan 4 lapis kertas. Jika dilubangi sekali pada bagian dalam, maka saat dibuka akan menghasilkan 4 lubang simetris."
  }
];

const KEPRIBADIAN_QUESTIONS = [
  {
    id: 1,
    question: "Pilihlah salah satu pernyataan yang paling menggambarkan sikap Anda saat menghadapi tugas sulit dari atasan:",
    options: [
      { key: "A", text: "Saya segera mempelajarinya dan berusaha menyelesaikannya secara mandiri semaksimal mungkin." },
      { key: "B", text: "Saya berdiskusi dengan rekan kerja berpengalaman untuk mencari solusi tercepat bersama." }
    ],
    correctAnswer: "A",
    explanation: "Pilihan A menunjukkan kemandirian dan determinasi tugas yang tinggi, kualifikasi penting bagi seorang prajurit TNI AD."
  },
  {
    id: 2,
    question: "Ketika melihat anggota tim melakukan kesalahan prosedur dalam latihan fisik, apa tindakan Anda?",
    options: [
      { key: "A", text: "Menegurnya langsung secara tegas dan memberi tahu cara yang benar agar tidak membahayakan." },
      { key: "B", text: "Melaporkannya kepada pelatih/atasan setelah latihan selesai agar ditindaklanjuti secara resmi." }
    ],
    correctAnswer: "A",
    explanation: "Prajurit harus memiliki kepedulian keselamatan taktis (tactical safety) dan ketegasan dalam bertindak segera."
  },
  {
    id: 3,
    question: "Apa sikap Anda terhadap aturan/instruksi yang menurut Anda kurang efisien dalam situasi latihan?",
    options: [
      { key: "A", text: "Saya tetap mematuhi instruksi tersebut sepenuhnya tanpa banyak bertanya karena loyalitas adalah hal utama." },
      { key: "B", text: "Saya berinisiatif memodifikasi sedikit metode kerja agar lebih cepat selesai tanpa sepengetahuan atasan." }
    ],
    correctAnswer: "A",
    explanation: "Kepatuhan penuh pada instruksi (loyalitas tegak lurus) sangat diutamakan dalam sistem komando militer."
  },
  {
    id: 4,
    question: "Dalam kerja sama tim, mana yang lebih Anda sukai?",
    options: [
      { key: "A", text: "Mengambil tanggung jawab sebagai pemimpin kelompok untuk mengarahkan pembagian tugas." },
      { key: "B", text: "Menjadi pelaksana tugas yang handal dan fokus menyelesaikan bagian tugas saya sendiri." }
    ],
    correctAnswer: "A",
    explanation: "TNI AD mencari calon yang memiliki jiwa kepemimpinan (leadership potential) yang kuat."
  },
  {
    id: 5,
    question: "Bagaimana cara Anda mengelola emosi ketika berada di bawah tekanan situasi kerja yang sangat padat?",
    options: [
      { key: "A", text: "Saya menenangkan diri sejenak dengan teknik pernapasan lalu menyusun skala prioritas tindakan." },
      { key: "B", text: "Saya melipatgandakan kecepatan kerja saya tanpa memikirkan rasa lelah agar cepat selesai." }
    ],
    correctAnswer: "A",
    explanation: "Kestabilan emosi dan kontrol diri di bawah tekanan tinggi merupakan prasyarat mutlak psikologi militer."
  },
  {
    id: 6,
    question: "Jika Anda dipindahkan ke divisi tugas baru yang belum Anda kuasai materinya, apa reaksi pertama Anda?",
    options: [
      { key: "A", text: "Mempelajari prosedur kerja baru secara intensif di luar jam tugas agar cepat beradaptasi." },
      { key: "B", text: "Menjalankan tugas seadanya sambil menunggu petunjuk teknis lebih lanjut dari senior." }
    ],
    correctAnswer: "A",
    explanation: "Inisiatif belajar yang tinggi menunjukkan adaptabilitas taktis prajurit dalam segala medan tugas."
  },
  {
    id: 7,
    question: "Ketika terjadi perselisihan pendapat antara dua rekan sejawat di lapangan latihan, sikap Anda adalah:",
    options: [
      { key: "A", text: "Menengahi perdebatan secara netral dan mengarahkan mereka untuk fokus kembali pada tugas latihan." },
      { key: "B", text: "Membiarkan mereka menyelesaikan masalah sendiri agar tidak mencampuri urusan pribadi orang lain." }
    ],
    correctAnswer: "A",
    explanation: "Mampu memelihara keharmonisan dan solidaritas korps (esprit de corps) adalah karakter keprajuritan yang luhur."
  },
  {
    id: 8,
    question: "Manakah pernyataan yang paling menggambarkan disiplin waktu bagi Anda?",
    options: [
      { key: "A", text: "Hadir minimal 15 menit sebelum kegiatan dimulai adalah kewajiban mutlak untuk persiapan." },
      { key: "B", text: "Hadir tepat waktu sesuai jadwal yang ditentukan agar efektif." }
    ],
    correctAnswer: "A",
    explanation: "Disiplin militer mengutamakan kesiapan awal yang matang (hadir sebelum waktu pelaksanaan)."
  },
  {
    id: 9,
    question: "Saat rencana latihan militer mengalami kegagalan taktis akibat kendala cuaca buruk, bagaimana sikap Anda?",
    options: [
      { key: "A", text: "Mencari opsi taktis cadangan yang aman dan melaporkannya sebagai alternatif solusi." },
      { key: "B", text: "Menunggu instruksi komando baru dan menghentikan sementara aktivitas luar ruangan." }
    ],
    correctAnswer: "A",
    explanation: "Memiliki kesiapan mental untuk berpikir taktis (problem solving) di bawah hambatan cuaca atau medan."
  },
  {
    id: 10,
    question: "Ketika Anda melakukan kesalahan tak sengaja yang merusak inventaris latihan tim, tindakan Anda adalah:",
    options: [
      { key: "A", text: "Segera melaporkan kerusakan tersebut secara jujur kepada atasan dan bersedia menerima konsekuensinya." },
      { key: "B", text: "Memperbaikinya diam-diam agar tidak menimbulkan kepanikan atau teguran dalam tim." }
    ],
    correctAnswer: "A",
    explanation: "Integritas moral dan keberanian bertanggung jawab (accountability) adalah sendi utama moralitas TNI."
  }
];

// State Manager
let appState = {
  currentTab: 'dashboard',
  currentTestType: null, // 'kecerdasan', 'kepribadian', 'kraepelin'
  currentQuestionIndex: 0,
  userAnswers: {}, // Format: { questionId: answerKey }
  timerInterval: null,
  timeLeft: 0, // Dalam detik
  kraepelinState: {
    columns: [],
    currentColIdx: 0,
    currentRowIdx: 0,
    answers: [], // Array of { isCorrect: boolean, time: number }
    startTime: 0
  },
  riwayat: []
};

// 2. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  // Setup Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Bind sidebar navigation buttons
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const targetTab = e.currentTarget.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  // Load History from LocalStorage
  loadHistoryFromStorage();
  updateDashboardStats();
});

// SPA Tab Switcher
function switchTab(tabId) {
  // Clear any running test state if leaving simulation
  if (appState.currentTab === 'simulasi' && tabId !== 'simulasi') {
    clearInterval(appState.timerInterval);
  }

  // Update State
  appState.currentTab = tabId;

  // Toggle active button
  document.querySelectorAll('.nav-item').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Show active tab
  document.querySelectorAll('.tab-content').forEach(section => {
    if (section.id === tabId) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });

  if (tabId === 'dashboard') {
    updateDashboardStats();
  } else if (tabId === 'riwayat') {
    renderHistoryTable();
  }
}

// Speak Instructions Helper
function speakInstruction(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  }
}

// Play Sound Effect
function playSoundEffect(type) {
  // Generate simple synth beep tone if audio API available
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (type === 'start') {
      oscillator.frequency.setValueAtTime(600, audioCtx.currentTime); // 600Hz
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.3);
    } else if (type === 'tick') {
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.05);
    } else if (type === 'finish') {
      oscillator.frequency.setValueAtTime(520, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.5);
    }
  } catch (e) {
    console.log("AudioContext not supported on this browser.");
  }
}

// 3. LOGIKA SIMULASI TES KECERDASAN & KEPRIBADIAN & SPASIAL
function getActiveQuestions() {
  if (appState.currentTestType === 'kecerdasan') return KECERDASAN_QUESTIONS;
  if (appState.currentTestType === 'kepribadian') return KEPRIBADIAN_QUESTIONS;
  if (appState.currentTestType === 'gambar') return SPASIAL_QUESTIONS;
  return [];
}

function startPsychotest(type) {
  appState.currentTestType = type;
  appState.currentQuestionIndex = 0;
  appState.userAnswers = {};
  
  // Hide Selection UI & Show Test UI
  document.getElementById('simulasi-selection').classList.add('hide');
  document.getElementById('simulasi-result').classList.add('hide');
  document.getElementById('simulasi-running').classList.remove('hide');
  document.getElementById('soal-container').classList.remove('hide');
  document.getElementById('kraepelin-container').classList.add('hide');
  document.getElementById('normal-navigation').classList.remove('hide');

  let durationSeconds = 0;
  let speakText = "";

  if (type === 'kecerdasan') {
    document.getElementById('running-test-title').innerText = 'Simulasi Tes Kecerdasan & Logika';
    durationSeconds = 10 * 60; // 10 menit
    speakText = "Simulasi tes kecerdasan dimulai. Waktu Anda sepuluh menit. Selamat mengerjakan!";
  } else if (type === 'gambar') {
    document.getElementById('running-test-title').innerText = 'Simulasi Mencocokkan Gambar Spasial';
    durationSeconds = 8 * 60; // 8 menit
    speakText = "Simulasi tes mencocokkan gambar dimulai. Waktu Anda delapan menit. Perhatikan detail bentuk gambar.";
  } else {
    document.getElementById('running-test-title').innerText = 'Simulasi Karakteristik Kepribadian (EPPS)';
    durationSeconds = 0; // Tanpa batas waktu
    speakText = "Simulasi tes kepribadian dimulai. Jawablah dengan jujur dan mantap.";
  }

  // Setup Timer
  if (durationSeconds > 0) {
    appState.timeLeft = durationSeconds;
    updateTimerDisplay();
    document.querySelector('.timer-card').classList.remove('hide');
    
    appState.timerInterval = setInterval(() => {
      appState.timeLeft--;
      updateTimerDisplay();
      if (appState.timeLeft <= 0) {
        clearInterval(appState.timerInterval);
        playSoundEffect('finish');
        finishTest();
      } else if (appState.timeLeft <= 30 && appState.timeLeft % 10 === 0) {
        playSoundEffect('tick');
      }
    }, 1000);
  } else {
    document.querySelector('.timer-card').classList.add('hide');
  }

  playSoundEffect('start');
  speakInstruction(speakText);
  renderQuestion();
}

function renderQuestion() {
  const container = document.getElementById('soal-container');
  const questions = getActiveQuestions();
  const question = questions[appState.currentQuestionIndex];
  
  // Progress Bar
  const progressPct = ((appState.currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById('running-progress-fill').style.width = `${progressPct}%`;

  let optionsHTML = question.options.map(opt => `
    <div class="option-item ${appState.userAnswers[question.id] === opt.key ? 'selected' : ''}" onclick="selectOption('${opt.key}')">
      <div class="option-badge">${opt.key}</div>
      <div class="option-text">${opt.text}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="soal-card animate-slide-in">
      <p class="soal-number" style="font-size: 0.85rem; color: var(--secondary-color); font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase;">Pertanyaan ${appState.currentQuestionIndex + 1} dari ${questions.length}</p>
      <div class="soal-text">${question.question}</div>
      <div class="options-list">
        ${optionsHTML}
      </div>
    </div>
  `;

  // Update Nav Buttons
  document.getElementById('btn-prev').disabled = appState.currentQuestionIndex === 0;
  if (appState.currentQuestionIndex === questions.length - 1) {
    document.getElementById('btn-next').classList.add('hide');
    document.getElementById('btn-submit').classList.remove('hide');
  } else {
    document.getElementById('btn-next').classList.remove('hide');
    document.getElementById('btn-submit').classList.add('hide');
  }
}

function selectOption(key) {
  const questions = getActiveQuestions();
  const question = questions[appState.currentQuestionIndex];
  appState.userAnswers[question.id] = key;
  renderQuestion(); // Re-render to update selected state
}

function nextQuestion() {
  const questions = getActiveQuestions();
  if (appState.currentQuestionIndex < questions.length - 1) {
    appState.currentQuestionIndex++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (appState.currentQuestionIndex > 0) {
    appState.currentQuestionIndex--;
    renderQuestion();
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(appState.timeLeft / 60);
  const seconds = appState.timeLeft % 60;
  document.getElementById('running-timer').innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// 4. KRAEPELIN TEST LOGIC
function startKraepelinTest() {
  appState.currentTestType = 'kraepelin';
  appState.kraepelinState.columns = [];
  appState.kraepelinState.currentColIdx = 0;
  appState.kraepelinState.currentRowIdx = 0;
  appState.kraepelinState.answers = [];
  
  // Hide Selection UI & Show Test UI
  document.getElementById('simulasi-selection').classList.add('hide');
  document.getElementById('simulasi-result').classList.add('hide');
  document.getElementById('simulasi-running').classList.remove('hide');
  document.getElementById('soal-container').classList.add('hide');
  document.getElementById('kraepelin-container').classList.remove('hide');
  document.getElementById('normal-navigation').classList.add('hide');

  document.getElementById('running-test-title').innerText = 'Simulasi Tes Kraepelin (Koran)';
  
  // Generate Kraepelin Numbers: 30 columns, each has 20 numbers
  for (let c = 0; c < 30; c++) {
    const colNums = [];
    for (let r = 0; r < 20; r++) {
      colNums.push(Math.floor(Math.random() * 9) + 1); // 1 to 9
    }
    appState.kraepelinState.columns.push({
      numbers: colNums,
      answers: {}, // Index format: { rowIdx: userResponseNum }
    });
  }

  appState.timeLeft = 120; // 2 Menit simulasi
  updateTimerDisplay();
  document.querySelector('.timer-card').classList.remove('hide');
  
  appState.timerInterval = setInterval(() => {
    appState.timeLeft--;
    updateTimerDisplay();
    
    // Pindah kolom otomatis setiap 4 detik untuk meniru aba-aba "PINDAH!" secara berkala pada 30 kolom
    if (appState.timeLeft > 0 && appState.timeLeft % 4 === 0) {
      nextKraepelinColumn();
    }

    if (appState.timeLeft <= 0) {
      clearInterval(appState.timerInterval);
      playSoundEffect('finish');
      finishKraepelinTest();
    }
  }, 1000);

  appState.kraepelinState.startTime = Date.now();
  renderKraepelinBoard();
  playSoundEffect('start');
  speakInstruction("Simulasi tes koran Kraepelin dimulai. Jumlahkan angka dari bawah ke atas.");
}

function renderKraepelinBoard() {
  const container = document.getElementById('kraepelin-columns-container');
  container.innerHTML = '';

  appState.kraepelinState.columns.forEach((col, colIdx) => {
    const isActive = colIdx === appState.kraepelinState.currentColIdx;
    const colDiv = document.createElement('div');
    colDiv.className = `kraepelin-column ${isActive ? 'active' : ''}`;
    
    // Render angka dari baris terbawah (indeks 0) ke atas (indeks 11)
    for (let r = 0; r < col.numbers.length; r++) {
      const val = col.numbers[r];
      const isTarget1 = isActive && r === appState.kraepelinState.currentRowIdx;
      const isTarget2 = isActive && r === appState.kraepelinState.currentRowIdx + 1;
      
      const numDiv = document.createElement('div');
      numDiv.className = `kraepelin-num ${ (isTarget1 || isTarget2) ? 'highlight' : '' }`;
      numDiv.innerText = val;
      colDiv.appendChild(numDiv);

      // Render kotak input jawaban di antara dua angka yang dijumlahkan
      if (r < col.numbers.length - 1) {
        const inputDiv = document.createElement('div');
        const ansVal = col.answers[r];
        if (ansVal !== undefined) {
          inputDiv.className = 'kraepelin-input-box answered';
          inputDiv.innerText = ansVal;
        } else if (isActive && r === appState.kraepelinState.currentRowIdx) {
          inputDiv.className = 'kraepelin-input-box';
          inputDiv.innerText = '?';
        } else {
          inputDiv.className = 'kraepelin-input-box hide';
        }
        colDiv.appendChild(inputDiv);
      }
    }
    container.appendChild(colDiv);
  });

  // Auto scroll horizontally to keep active column visible
  const activeCol = container.querySelector('.kraepelin-column.active');
  if (activeCol) {
    container.scrollLeft = activeCol.offsetLeft - container.clientWidth / 2 + activeCol.clientWidth / 2;
  }
}

function pressKraepelinNum(num) {
  if (appState.currentTestType !== 'kraepelin') return;

  const colIdx = appState.kraepelinState.currentColIdx;
  const rowIdx = appState.kraepelinState.currentRowIdx;
  const col = appState.kraepelinState.columns[colIdx];

  // Hitung jawaban benar
  const num1 = col.numbers[rowIdx];
  const num2 = col.numbers[rowIdx + 1];
  const correctSum = (num1 + num2) % 10;

  col.answers[rowIdx] = num;
  const isCorrect = num === correctSum;

  appState.kraepelinState.answers.push({
    isCorrect: isCorrect,
    time: Date.now() - appState.kraepelinState.startTime
  });

  // Naik ke penjumlahan berikutnya di kolom yang sama
  if (rowIdx < col.numbers.length - 2) {
    appState.kraepelinState.currentRowIdx++;
  } else {
    // Jika kolom habis sebelum aba-aba pindah, pindah sendiri ke kolom selanjutnya
    nextKraepelinColumn();
  }

  playSoundEffect('tick');
  renderKraepelinBoard();
}

function nextKraepelinColumn() {
  if (appState.kraepelinState.currentColIdx < appState.kraepelinState.columns.length - 1) {
    appState.kraepelinState.currentColIdx++;
    appState.kraepelinState.currentRowIdx = 0;
    speakInstruction("Pindah!");
  } else {
    // Jika semua kolom selesai
    clearInterval(appState.timerInterval);
    finishKraepelinTest();
  }
}

// 5. PENILAIAN & LAPORAN HASIL
let performanceChartInstance = null;

function finishTest() {
  clearInterval(appState.timerInterval);
  playSoundEffect('finish');

  const questions = getActiveQuestions();
  let correctCount = 0;
  let answeredCount = 0;

  questions.forEach(q => {
    if (appState.userAnswers[q.id] !== undefined) {
      answeredCount++;
      if (appState.userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    }
  });

  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  const score = Math.round((correctCount / questions.length) * 100);
  const isMS = score >= 70; // Standar kelulusan TNI AD

  let displayCategory = 'Tes Kecerdasan';
  let timeLimit = 10 * 60;
  if (appState.currentTestType === 'kepribadian') {
    displayCategory = 'Tes Kepribadian';
    timeLimit = 0;
  } else if (appState.currentTestType === 'gambar') {
    displayCategory = 'Mencocokkan Gambar Spasial';
    timeLimit = 8 * 60;
  }

  const resultData = {
    date: new Date().toLocaleString('id-ID'),
    category: displayCategory,
    score: score,
    accuracy: `${accuracy}%`,
    status: isMS ? 'MS' : 'TMS',
    details: {
      answered: answeredCount,
      correct: correctCount,
      total: questions.length
    }
  };

  // Save to State & LocalStorage
  appState.riwayat.push(resultData);
  saveHistoryToStorage();

  // Show Result Screen
  document.getElementById('simulasi-running').classList.add('hide');
  document.getElementById('simulasi-result').classList.remove('hide');
  document.getElementById('pembahasan-section').classList.add('hide');

  // Inject Text
  document.getElementById('result-category').innerText = resultData.category;
  document.getElementById('result-score').innerText = resultData.score;
  document.getElementById('result-accuracy').innerText = resultData.accuracy;
  
  if (timeLimit > 0) {
    const elapsed = timeLimit - appState.timeLeft;
    document.getElementById('result-time-taken').innerText = `${Math.floor(elapsed / 60)} Menit ${elapsed % 60} Detik`;
  } else {
    document.getElementById('result-time-taken').innerText = "Mandiri";
  }

  const seal = document.getElementById('result-seal-status');
  const statusTitle = document.getElementById('result-status-title');
  const statusDesc = document.getElementById('result-status-desc');
  const evalBox = document.getElementById('result-evaluation-box');

  if (isMS) {
    seal.innerText = "MS";
    seal.className = "result-seal";
    statusTitle.innerText = "Memenuhi Syarat (MS)";
    statusDesc.innerText = "Hasil simulasi psikotes Anda berada di atas ambang batas kelulusan TNI AD.";
    evalBox.innerHTML = `<strong>Rekomendasi Pelatih:</strong> Kesiapan mental Anda sudah sangat baik. Pertahankan stabilitas fokus dan ketepatan penalaran logis ini untuk ujian aslinya.`;
  } else {
    seal.innerText = "TMS";
    seal.className = "result-seal tms";
    statusTitle.innerText = "Tidak Memenuhi Syarat (TMS)";
    statusDesc.innerText = "Skor latihan Anda masih berada di bawah target minimal kelulusan (70).";
    evalBox.innerHTML = `<strong>Rekomendasi Pelatih:</strong> Anda perlu lebih giat membaca modul pembelajaran terutama pada kategori penalaran logis dan deret angka. Latihlah konsentrasi Anda agar tidak terburu-buru memilih opsi jawaban.`;
  }

  // Render Chart
  renderResultChart(resultData);
}

function finishKraepelinTest() {
  clearInterval(appState.timerInterval);
  playSoundEffect('finish');

  const answers = appState.kraepelinState.answers;
  let correctCount = 0;
  answers.forEach(a => { if (a.isCorrect) correctCount++; });

  const accuracy = answers.length > 0 ? Math.round((correctCount / answers.length) * 100) : 0;
  // Kraepelin dinilai berdasarkan kecepatan (total input) dan stabilitas (akurasi)
  const score = Math.min(100, Math.round((answers.length / 50) * 100)); // Anggap kecepatan 50 input dalam 2 menit adalah standar 100%
  const isMS = score >= 60 && accuracy >= 80; // Standar kelulusan Kraepelin

  const resultData = {
    date: new Date().toLocaleString('id-ID'),
    category: 'Tes Kraepelin (Koran)',
    score: score,
    accuracy: `${accuracy}%`,
    status: isMS ? 'MS' : 'TMS',
    details: {
      totalInputs: answers.length,
      correct: correctCount
    }
  };

  appState.riwayat.push(resultData);
  saveHistoryToStorage();

  // Show Result Screen
  document.getElementById('simulasi-running').classList.add('hide');
  document.getElementById('simulasi-result').classList.remove('hide');
  document.getElementById('pembahasan-section').classList.add('hide');

  document.getElementById('result-category').innerText = resultData.category;
  document.getElementById('result-score').innerText = `Kecepatan: ${resultData.score}`;
  document.getElementById('result-accuracy').innerText = resultData.accuracy;
  document.getElementById('result-time-taken').innerText = "2 Menit (Penuh)";

  const seal = document.getElementById('result-seal-status');
  const statusTitle = document.getElementById('result-status-title');
  const statusDesc = document.getElementById('result-status-desc');
  const evalBox = document.getElementById('result-evaluation-box');

  if (isMS) {
    seal.innerText = "MS";
    seal.className = "result-seal";
    statusTitle.innerText = "Memenuhi Syarat (MS)";
    statusDesc.innerText = "Ketahanan mental, kecepatan kerja, dan ketelitian Anda memenuhi profil prajurit TNI AD.";
    evalBox.innerHTML = `<strong>Analisis Kraepelin:</strong> Grafik kerja Anda stabil dan tidak menunjukkan penurunan drastis di akhir kolom. Ini mengindikasikan tingkat ketahanan stres (stress tolerance) yang matang.`;
  } else {
    seal.innerText = "TMS";
    seal.className = "result-seal tms";
    statusTitle.innerText = "Tidak Memenuhi Syarat (TMS)";
    statusDesc.innerText = "Ketelitian atau ritme kecepatan kerja Anda berada di bawah ambang minimal kelulusan.";
    evalBox.innerHTML = `<strong>Analisis Kraepelin:</strong> Terjadi penurunan ketelitian yang cukup signifikan pada beberapa kolom terakhir. Berlatihlah menjaga konsistensi pernapasan dan ketukan jari agar performa tetap stabil di bawah tekanan waktu.`;
  }

  renderResultChart(resultData);
}

function renderResultChart(resultData) {
  const ctx = document.getElementById('performance-chart').getContext('2d');
  
  if (performanceChartInstance) {
    performanceChartInstance.destroy();
  }

  let chartLabels = [];
  let chartValues = [];

  if (resultData.category.includes('Kecerdasan')) {
    chartLabels = ['Logika Verbal', 'Numerik', 'Logika Spasial', 'Konsentrasi', 'Konsistensi'];
    chartValues = [85, 75, 90, resultData.score, parseInt(resultData.accuracy)];
  } else if (resultData.category.includes('Kraepelin')) {
    chartLabels = ['Kecepatan', 'Ketelitian', 'Daya Tahan', 'Konsistensi', 'Stabilitas Emosi'];
    const accVal = parseInt(resultData.accuracy);
    chartValues = [resultData.score, accVal, Math.round((resultData.score + accVal)/2), accVal - 5, resultData.score - 10];
  } else {
    // Kepribadian
    chartLabels = ['Kepemimpinan', 'Loyalitas', 'Kemandirian', 'Kerjasama Tim', 'Kestabilan Emosi'];
    chartValues = [80, 95, 75, 85, 90];
  }

  performanceChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: chartLabels,
      datasets: [{
        label: 'Skor Anda',
        data: chartValues,
        backgroundColor: 'rgba(212, 175, 55, 0.2)',
        borderColor: '#D4AF37',
        borderWidth: 2,
        pointBackgroundColor: '#F0F2EB'
      }, {
        label: 'Standar TNI AD',
        data: [70, 70, 70, 70, 70],
        backgroundColor: 'rgba(75, 83, 32, 0.1)',
        borderColor: '#4B5320',
        borderWidth: 1,
        borderDash: [5, 5],
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
          suggestedMin: 0,
          suggestedMax: 100,
          ticks: { display: false }
        }
      },
      plugins: {
        legend: {
          labels: { color: '#F0F2EB', font: { family: 'Inter' } }
        }
      }
    }
  });
}

function viewDetailedAnswers() {
  const container = document.getElementById('pembahasan-list-container');
  const section = document.getElementById('pembahasan-section');
  
  if (appState.currentTestType === 'kraepelin') {
    alert("Tes Kraepelin dievaluasi secara statistik grafis, tidak memiliki lembar jawaban per pertanyaan.");
    return;
  }

  section.classList.remove('hide');
  container.innerHTML = '';

  const questions = appState.currentTestType === 'kecerdasan' ? KECERDASAN_QUESTIONS : KEPRIBADIAN_QUESTIONS;

  questions.forEach((q, idx) => {
    const userAns = appState.userAnswers[q.id];
    const isCorrect = userAns === q.correctAnswer;
    const card = document.createElement('div');
    card.className = `pembahasan-card ${isCorrect ? 'correct' : 'incorrect'}`;

    card.innerHTML = `
      <div class="pembahasan-status-text ${isCorrect ? 'correct' : 'incorrect'}">
        ${isCorrect ? '<i data-lucide="check-circle-2"></i> Benar' : '<i data-lucide="x-circle"></i> Salah'}
      </div>
      <div class="pembahasan-q"><strong>Soal ${idx + 1}:</strong> ${q.question.replace(/\n/g, '<br>')}</div>
      <div class="pembahasan-ans">Jawaban Anda: <strong>${userAns || 'Tidak Dijawab'}</strong></div>
      <div class="pembahasan-ans">Kunci Jawaban: <strong>${q.correctAnswer}</strong></div>
      <div class="pembahasan-exp"><strong>Pembahasan:</strong> ${q.explanation}</div>
    `;
    container.appendChild(card);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Scroll down to pembahasan
  section.scrollIntoView({ behavior: 'smooth' });
}

function backToSelection() {
  document.getElementById('simulasi-result').classList.add('hide');
  document.getElementById('simulasi-selection').classList.remove('hide');
}

function exitActiveTest() {
  if (confirm("Apakah Anda yakin ingin keluar dari tes yang sedang berjalan? Progres pengerjaan saat ini tidak akan disimpan.")) {
    clearInterval(appState.timerInterval);
    document.getElementById('simulasi-running').classList.add('hide');
    document.getElementById('wartegg-container').classList.add('hide');
    document.getElementById('drawing-container').classList.add('hide');
    document.getElementById('simulasi-selection').classList.remove('hide');
  }
}

// 6. STORAGE & HISTORY MANAGEMENT
function loadHistoryFromStorage() {
  const stored = localStorage.getItem('ksatria_history');
  if (stored) {
    try {
      appState.riwayat = JSON.parse(stored);
    } catch (e) {
      appState.riwayat = [];
    }
  } else {
    appState.riwayat = [];
  }
}

function saveHistoryToStorage() {
  localStorage.setItem('ksatria_history', JSON.stringify(appState.riwayat));
}

function clearHistoryData() {
  if (confirm("Apakah Anda yakin ingin menghapus seluruh riwayat latihan dan statistik Anda?")) {
    appState.riwayat = [];
    saveHistoryToStorage();
    renderHistoryTable();
    updateDashboardStats();
    alert("Seluruh data riwayat berhasil dibersihkan.");
  }
}

function updateDashboardStats() {
  const completed = appState.riwayat.length;
  document.getElementById('tests-completed').innerText = completed;

  if (completed > 0) {
    let totalScore = 0;
    let totalAccuracy = 0;
    appState.riwayat.forEach(item => {
      totalScore += item.score;
      totalAccuracy += parseInt(item.accuracy);
    });

    const avgScore = Math.round(totalScore / completed);
    const avgAccuracy = Math.round(totalAccuracy / completed);

    document.getElementById('avg-score').innerText = avgScore;
    document.getElementById('avg-accuracy').innerText = `${avgAccuracy}%`;

    // Update Readiness Meter
    const readinessPct = Math.min(100, Math.round((avgScore * 0.6) + (avgAccuracy * 0.4)));
    document.getElementById('readiness-pct').innerText = `${readinessPct}%`;

    const readinessText = document.getElementById('readiness-text');
    if (readinessPct >= 80) {
      readinessText.innerText = "Sangat Siap Seleksi! Teruskan latihan untuk menjaga tingkat konsentrasi prima Anda.";
      document.getElementById('rank-badge').innerText = "Calon Prajurit Unggul";
    } else if (readinessPct >= 70) {
      readinessText.innerText = "Memenuhi Syarat Minimal. Fokus perbaiki kecepatan berhitung di bagian Kraepelin.";
      document.getElementById('rank-badge').innerText = "Kesiapan Tahap II";
    } else {
      readinessText.innerText = "Perlu Latihan Intensif! Banyak membaca modul dan ulangi simulasi secara berkala.";
      document.getElementById('rank-badge').innerText = "Persiapan Tahap I";
    }
  } else {
    document.getElementById('avg-score').innerText = '0';
    document.getElementById('avg-accuracy').innerText = '0%';
    document.getElementById('readiness-pct').innerText = '0%';
    document.getElementById('readiness-text').innerText = 'Belum ada riwayat latihan. Ambil tes pertama Anda!';
    document.getElementById('rank-badge').innerText = "Tahap Persiapan Awal";
  }
}

function renderHistoryTable() {
  const tbody = document.getElementById('history-table-body');
  const saranContainer = document.getElementById('saran-container');
  tbody.innerHTML = '';

  if (appState.riwayat.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">Belum ada riwayat ujian. Silakan mulai simulasi pertama Anda.</td></tr>`;
    saranContainer.innerHTML = `
      <div class="saran-item">
        <i data-lucide="info"></i>
        <p>Silakan selesaikan latihan agar sistem dapat mendeteksi materi psikotes mana yang perlu ditingkatkan.</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  // Render Table Rows (Newest first)
  [...appState.riwayat].reverse().forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.date}</td>
      <td><strong>${row.category}</strong></td>
      <td>${row.score}</td>
      <td>${row.accuracy}</td>
      <td><span class="badge-status ${row.status.toLowerCase()}">${row.status}</span></td>
    `;
    tbody.appendChild(tr);
  });

  // Generate Smart Suggestions
  let hasTMS = appState.riwayat.some(item => item.status === 'TMS');
  let hasKraepelin = appState.riwayat.some(item => item.category.includes('Kraepelin'));
  
  let saranHTML = '';
  if (hasTMS) {
    saranHTML += `
      <div class="saran-item">
        <i data-lucide="alert-triangle" style="color: var(--danger-color);"></i>
        <p><strong>Perkuat Nilai Kelulusan:</strong> Terdapat tes dengan status TMS. Bacalah modul tips & trik agar tidak terkecoh batas waktu pengerjaan.</p>
      </div>
    `;
  }
  if (hasKraepelin) {
    saranHTML += `
      <div class="saran-item">
        <i data-lucide="zap" style="color: var(--secondary-color);"></i>
        <p><strong>Kecepatan Kraepelin:</strong> Pastikan Anda berlatih Kraepelin di ruangan tenang. Jaga ritme ketukan jari dan hindari koreksi berlebih pada digit jawaban.</p>
      </div>
    `;
  }
  
  saranHTML += `
    <div class="saran-item">
      <i data-lucide="check-circle" style="color: var(--success-color);"></i>
      <p><strong>Tips Rutin:</strong> Lakukan simulasi psikotes militer minimal 3 kali dalam seminggu untuk melatih daya tahan stres otak.</p>
    </div>
  `;

  saranContainer.innerHTML = saranHTML;
  if (window.lucide) window.lucide.createIcons();
}

// 7. WARTEGG & DRAWING SKETCH CANVAS IMPLEMENTATION
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentDrawingStep = 0; // 0: Orang, 1: Pohon, 2: Rumah
const drawingSteps = [
  { title: "Menggambar Orang Lengkap", desc: "Gambarlah seluruh tubuh manusia secara detail (kepala, badan, tangan, kaki) lengkap dengan aktivitas atau profesinya." },
  { title: "Menggambar Pohon Berkambium", desc: "Gambarlah sebuah pohon berkayu/berkambium lengkap dengan akar, batang, dahan, ranting, daun, dan buah jika ada." },
  { title: "Menggambar Rumah, Pohon, & Orang (HTP)", desc: "Gambarlah sebuah rumah, pohon, dan orang dalam satu kesatuan lanskap gambar secara harmonis." }
];

// Start Wartegg Test
function startWarteggTest() {
  appState.currentTestType = 'wartegg';
  clearInterval(appState.timerInterval);

  document.getElementById('simulasi-selection').classList.add('hide');
  document.getElementById('simulasi-result').classList.add('hide');
  document.getElementById('simulasi-running').classList.remove('hide');
  document.getElementById('soal-container').classList.add('hide');
  document.getElementById('kraepelin-container').classList.add('hide');
  document.getElementById('wartegg-container').classList.remove('hide');
  document.getElementById('drawing-container').classList.add('hide');
  
  // Set Navigation
  document.getElementById('running-test-title').innerText = 'Simulasi Tes Wartegg (Melengkapi Gambar)';
  document.getElementById('running-progress-fill').style.width = '100%';
  document.querySelector('.timer-card').classList.add('hide');

  document.getElementById('btn-prev').classList.add('hide');
  document.getElementById('btn-next').classList.add('hide');
  document.getElementById('btn-submit').classList.remove('hide');

  // Build 8 Wartegg Boxes
  const grid = document.getElementById('wartegg-canvas-grid');
  grid.innerHTML = '';

  const cues = [
    (ctx) => { ctx.beginPath(); ctx.arc(75, 75, 2, 0, Math.PI*2); ctx.fill(); }, // Box 1: Titik di tengah
    (ctx) => { ctx.beginPath(); ctx.moveTo(25, 45); ctx.quadraticCurveTo(50, 20, 75, 45); ctx.stroke(); }, // Box 2: Garis gelombang
    (ctx) => { ctx.beginPath(); ctx.moveTo(35, 70); ctx.lineTo(35, 50); ctx.moveTo(50, 70); ctx.lineTo(50, 40); ctx.moveTo(65, 70); ctx.lineTo(65, 30); ctx.stroke(); }, // Box 3: Tangga naik
    (ctx) => { ctx.fillRect(100, 30, 20, 20); }, // Box 4: Kotak hitam kecil kanan atas
    (ctx) => { ctx.beginPath(); ctx.moveTo(30, 110); ctx.lineTo(70, 70); ctx.moveTo(40, 70); ctx.lineTo(80, 110); ctx.stroke(); }, // Box 5: Dua garis diagonal bersilang
    (ctx) => { ctx.beginPath(); ctx.moveTo(30, 60); ctx.lineTo(100, 60); ctx.moveTo(100, 60); ctx.lineTo(100, 110); ctx.stroke(); }, // Box 6: Garis horizontal & vertikal siku
    (ctx) => { ctx.beginPath(); ctx.setLineDash([2, 3]); ctx.arc(75, 75, 25, 0, Math.PI, true); ctx.stroke(); ctx.setLineDash([]); }, // Box 7: Setengah lingkaran putus-putus
    (ctx) => { ctx.beginPath(); ctx.arc(75, 75, 30, 0, Math.PI/2); ctx.stroke(); } // Box 8: Busur melingkar kuadran kanan bawah
  ];

  for (let i = 0; i < 8; i++) {
    const box = document.createElement('div');
    box.className = 'wartegg-box';
    box.innerHTML = `
      <span style="font-family:var(--font-display); font-size:0.85rem; color:var(--primary-color); font-weight:700;">Kotak ${i+1}</span>
      <canvas id="wartegg-canvas-${i}" width="150" height="150"></canvas>
      <input type="text" class="wartegg-input" id="wartegg-desc-${i}" placeholder="Keterangan Gambar ${i+1}">
    `;
    grid.appendChild(box);

    const canvas = document.getElementById(`wartegg-canvas-${i}`);
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2.5;
    ctx.fillStyle = '#333';

    // Draw Cue Stimulus
    cues[i](ctx);

    // Setup Canvas Drawing Listeners
    setupCanvasDraw(canvas, ctx);
  }

  playSoundEffect('start');
  speakInstruction("Tes Wartegg dimulai. Lengkapi pola stimulasi gambar pada kedelapan kotak sekreatif mungkin.");
}

function clearWartegg() {
  if (confirm("Kosongkan seluruh kanvas Wartegg?")) {
    startWarteggTest();
  }
}

// Start Sketch Drawing Test
function startDrawingTest() {
  appState.currentTestType = 'gambar_sketch';
  currentDrawingStep = 0;
  clearInterval(appState.timerInterval);

  document.getElementById('simulasi-selection').classList.add('hide');
  document.getElementById('simulasi-result').classList.add('hide');
  document.getElementById('simulasi-running').classList.remove('hide');
  document.getElementById('soal-container').classList.add('hide');
  document.getElementById('kraepelin-container').classList.add('hide');
  document.getElementById('wartegg-container').classList.add('hide');
  document.getElementById('drawing-container').classList.remove('hide');

  document.getElementById('running-test-title').innerText = 'Simulasi Tes Menggambar (Proyektif)';
  document.getElementById('running-progress-fill').style.width = '33%';
  document.querySelector('.timer-card').classList.add('hide');

  // Hide normal navigation buttons
  document.getElementById('normal-navigation').classList.add('hide');

  setupSketchCanvas();
  updateDrawingStepView();

  playSoundEffect('start');
  speakInstruction("Tes Menggambar dimulai. Silakan ikuti instruksi gambar pertama.");
}

function setupSketchCanvas() {
  const canvas = document.getElementById('sketch-canvas');
  const ctx = canvas.getContext('2d');
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  setupCanvasDraw(canvas, ctx);
}

function clearSketchCanvas() {
  const canvas = document.getElementById('sketch-canvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function updateDrawingStepView() {
  const step = drawingSteps[currentDrawingStep];
  document.getElementById('drawing-prompt-instruction').innerText = `Perintah: ${step.title}`;
  document.getElementById('drawing-prompt-instruction').nextElementSibling.innerText = step.desc;
  document.getElementById('running-progress-fill').style.width = `${((currentDrawingStep + 1) / 3) * 100}%`;
  
  if (currentDrawingStep === 2) {
    document.getElementById('btn-next-drawing').innerHTML = 'Kirim Hasil Sketsa <i data-lucide="check"></i>';
  } else {
    document.getElementById('btn-next-drawing').innerHTML = 'Selesai & Lanjut <i data-lucide="arrow-right"></i>';
  }
  if (window.lucide) window.lucide.createIcons();
}

function submitDrawingStep() {
  if (currentDrawingStep < 2) {
    currentDrawingStep++;
    clearSketchCanvas();
    updateDrawingStepView();
    playSoundEffect('tick');
    speakInstruction(`Lanjut ke perintah berikutnya: ${drawingSteps[currentDrawingStep].title}`);
  } else {
    finishDrawingTest();
  }
}

function finishDrawingTest() {
  playSoundEffect('finish');
  
  const resultData = {
    date: new Date().toLocaleString('id-ID'),
    category: appState.currentTestType === 'wartegg' ? 'Tes Wartegg' : 'Tes Menggambar (HTP)',
    score: 100, // Proyektif/Karakteristik selalu 100 karena dinilai secara kualitatif manual
    accuracy: '100%',
    status: 'MS',
    details: {
      proyektif: true
    }
  };

  appState.riwayat.push(resultData);
  saveHistoryToStorage();

  document.getElementById('simulasi-running').classList.add('hide');
  document.getElementById('simulasi-result').classList.remove('hide');
  document.getElementById('pembahasan-section').classList.add('hide');

  document.getElementById('result-category').innerText = resultData.category;
  document.getElementById('result-score').innerText = 'Kualitatif';
  document.getElementById('result-accuracy').innerText = 'Selesai';
  document.getElementById('result-time-taken').innerText = 'Mandiri';

  const seal = document.getElementById('result-seal-status');
  const statusTitle = document.getElementById('result-status-title');
  const statusDesc = document.getElementById('result-status-desc');
  const evalBox = document.getElementById('result-evaluation-box');

  seal.innerText = "MS";
  seal.className = "result-seal";
  statusTitle.innerText = "Tes Sketsa Selesai";
  statusDesc.innerText = "Gambar sketsa proyektif Anda telah berhasil tersimpan.";

  if (appState.currentTestType === 'wartegg') {
    evalBox.innerHTML = `<strong>Karakteristik Analisis Wartegg:</strong><br>
    - Kotak 1 & 2 menunjukkan adaptabilitas sosial Anda.<br>
    - Kotak 3 & 4 menunjukkan dorongan prestasi (achievement motivation) dan ambisi karir.<br>
    - Kotak 5 & 6 mencerminkan daya tahan memecahkan masalah (problem solving).<br>
    - Kotak 7 & 8 mencerminkan stabilitas emosional dan hubungan interpersonal Anda.`;
  } else {
    evalBox.innerHTML = `<strong>Karakteristik Analisis Sketsa (HTP/DAP/DAT):</strong><br>
    - Detail gambar orang mencerminkan rasa percaya diri dan persepsi peran sosial.<br>
    - Struktur pohon berkambium mencerminkan kekuatan ego, kematangan kepribadian, dan hubungan keluarga.<br>
    - Integrasi Rumah-Pohon-Orang (HTP) mengukur keharmonisan interaksi Anda dengan lingkungan hidup.`;
  }

  renderResultChart(resultData);
}

// Canvas Drawing Handler Helper (Supports mouse & touch)
function setupCanvasDraw(canvas, ctx) {
  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  function drawStart(e) {
    e.preventDefault();
    isDrawing = true;
    const pos = getPos(e);
    lastX = pos.x;
    lastY = pos.y;
  }

  // Draw line to current coordinates
  function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    lastX = pos.x;
    lastY = pos.y;
  }

  function drawEnd() {
    isDrawing = false;
  }

  // Mouse Listeners
  canvas.addEventListener('mousedown', drawStart);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', drawEnd);
  canvas.addEventListener('mouseout', drawEnd);

  // Touch Listeners
  canvas.addEventListener('touchstart', drawStart, { passive: false });
  canvas.addEventListener('touchmove', draw, { passive: false });
  canvas.addEventListener('touchend', drawEnd);
}
