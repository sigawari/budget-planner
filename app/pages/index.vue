<template>
    <div class="min-h-screen bg-[#FFF5F5] text-slate-900 font-sans selection:bg-red-200 overflow-x-hidden relative">
      
      <Head>
        <title>Dompet Panic | Mengapa Kerja Keras Saja Tidak Cukup?</title>
        <meta name="description" content="Temukan alasan mengapa gaji Anda selalu numpang lewat dan cara membangun sistem finansial yang anti-bocor.">
        <meta property="og:title" content="Dompet Panic - Berhenti Bertanya Ke Mana Uang Anda">
      </Head>
  
      <div class="money-rain pointer-events-none absolute inset-0 z-0 opacity-10">
        <div v-for="n in 12" :key="n" class="cash font-bold text-3xl text-red-500">$</div>
      </div>
  
      <main class="max-w-4xl mx-auto px-6 py-16 md:py-24 relative z-10 space-y-32">
        
        <section class="text-center space-y-8 animate-fade-in">
          <div class="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full shadow-lg">
            <span class="text-[10px] font-black uppercase tracking-[0.2em]">Financial Awareness Study</span>
          </div>
  
          <h1 class="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter text-slate-900">
            BEKERJA KERAS,<br/> 
            <span class="text-red-600 underline decoration-8 underline-offset-[12px] italic">TAPI STUCK?</span>
          </h1>
  
          <p class="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Sudah berjuang habis-habisan sebulan penuh, tapi saat melihat saldo, rasanya seperti <span class="text-red-600 font-bold italic border-b-2 border-red-200">kembali ke titik nol</span>. Bukan gajimu yang kurang, tapi sistemmu yang sedang "bocor".
          </p>
          
          <div class="flex justify-center pt-4">
            <button @click="scrollTo('#relate')" class="group flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1">
              MENGAPA SIKLUS INI TERULANG?
              <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </button>
          </div>
        </section>
  
        <section id="relate" class="space-y-16">
          <div class="text-center space-y-4">
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tighter">Siklus yang Melelahkan:</h2>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="(p, i) in behavior" :key="i" class="p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm space-y-4 relative group">
              <div class="h-10 w-10 bg-red-600 text-white rounded-lg flex items-center justify-center font-black italic shadow-lg shadow-red-200">-</div>
              <h3 class="text-lg font-black uppercase leading-tight text-slate-800">{{ p.title }}</h3>
              <p class="text-sm text-slate-500 leading-relaxed">{{ p.desc }}</p>
            </div>
          </div>
        </section>
  
        <section class="bg-slate-900 rounded-[4rem] p-10 md:p-20 text-white text-center space-y-10 relative overflow-hidden">
          <div class="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 class="text-4xl md:text-5xl font-black italic leading-tight uppercase">Bukan soal berapa banyak airnya...</h2>
            <p class="text-slate-400 text-lg md:text-xl leading-relaxed">
              Menambah gaji tanpa memperbaiki sistem pengelolaan ibarat <span class="text-white font-bold">menuang air ke ember bocor</span>. Kamu akan selalu lelah, dan embernya akan selalu kosong.
            </p>
            <div class="h-1 w-20 bg-red-600 mx-auto"></div>
            <p class="text-red-400 font-bold uppercase tracking-widest text-sm italic">Sudah saatnya menambal bocornya.</p>
          </div>
        </section>
  
        <section class="max-w-3xl mx-auto space-y-16 pb-20">
          <div class="text-center space-y-4">
            <h2 class="text-4xl md:text-6xl font-black leading-none italic tracking-tighter uppercase">
              TAMBAL <span class="text-red-600">SEKARANG.</span>
            </h2>
            <p class="text-slate-500 max-w-md mx-auto leading-relaxed text-sm">
              Kami merangkum langkah praktis untuk menghentikan "kebocoran alus" ini ke dalam satu panduan sistematis.
            </p>
          </div>
  
          <div class="bg-white border-4 border-slate-900 rounded-[3rem] p-8 md:p-12 shadow-[20px_20px_0px_0px_rgba(220,38,38,1)] space-y-8 relative">
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <div class="relative group">
                <img 
                  src="/ebook.png" 
                  alt="Panduan Dompet Panic" 
                  class="relative w-full rounded-2xl shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out"
                  @error="handleImgError"
                />
                <div class="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-xl font-black text-xs uppercase shadow-xl">Best Seller</div>
              </div>
              
              <div class="space-y-6 text-center md:text-left">
                <div class="space-y-2">
                  <h3 class="text-2xl font-black text-slate-900 leading-tight">Sistem Anti-Panic: <br/> Kelola Gaji 101</h3>
                  <p class="text-xs text-slate-400 leading-relaxed font-medium">Bukan teori ekonomi rumit. Hanya langkah praktis untuk menyelamatkan kerja kerasmu sebulan ini.</p>
                </div>
  
                <div class="space-y-1 border-y border-slate-50 py-4">
                  <p class="text-xs font-bold text-slate-400 line-through">Normal: Rp35.000</p>
                  <div class="text-6xl font-black text-red-600 tracking-tighter animate-pulse-slow">15K</div>
                  <p class="text-[10px] text-slate-400 italic">*Setara harga parkir, untuk ilmu seumur hidup.</p>
                </div>
  
                <button class="w-full py-5 bg-red-600 hover:bg-slate-900 text-white font-black rounded-2xl shadow-xl transition-all active:scale-95 text-lg uppercase">
                  Ambil Alih Kendali
                </button>
              </div>
            </div>
  
            <div v-if="saleActive" class="pt-10 border-t border-slate-50">
              <div class="flex justify-between items-end mb-4 px-2">
                <span class="text-[10px] font-black uppercase text-slate-400">Penawaran Eksklusif Berakhir Dalam:</span>
                <span class="text-[10px] font-black text-red-600">{{ promoSlots }} Slot Sisa</span>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div v-for="(val, unit) in { JAM: hours, MENIT: minutes, DETIK: seconds }" :key="unit" class="bg-slate-50 p-4 rounded-2xl text-center">
                  <div class="text-3xl font-black text-slate-900 tabular-nums">{{ pad(val) }}</div>
                  <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{{ unit }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  
      <footer class="py-12 text-center opacity-40 border-t border-red-50">
        <p class="text-slate-400 text-[9px] font-bold tracking-[0.5em] uppercase">Built for Smarter Finance &copy; 2025</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  
  const behavior = [
    { title: "Misteri Gaji", desc: "Baru masuk beberapa hari, tapi jumlahnya sudah berkurang banyak tanpa ada aset fisik yang terlihat." },
    { title: "Mental 'Nanti'", desc: "Menunda menabung demi gaya hidup saat ini, dengan janji palsu akan mulai bulan depan." },
    { title: "Kebocoran Alus", desc: "Top-up kecil, biaya langganan terlupakan, dan jajan impulsif yang memakan 30% pendapatanmu." }
  ]
  
  const promoSlots = ref(7)
  const remainingMs = ref(0)
  const saleActive = computed(() => remainingMs.value > 0)
  const SALE_DURATION = 48 * 60 * 60 * 1000 // 48 jam
  const STORAGE_KEY = 'panic_user_session_v4' // Berperan sebagai 'Cookie' sistem
  
  const hours = computed(() => Math.floor((remainingMs.value % (24 * 3600000)) / 3600000))
  const minutes = computed(() => Math.floor((remainingMs.value % 3600000) / 60000))
  const seconds = computed(() => Math.floor((remainingMs.value % 60000) / 1000))
  const pad = (n) => String(n).padStart(2, '0')
  
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  
  const handleImgError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x500/dc2626/ffffff?text=MANUAL+FINANSIAL'
  }
  
  let timerInterval = null
  onMounted(() => {
    // Persistence Logic (Cookie-like behavior using LocalStorage)
    let end = localStorage.getItem(STORAGE_KEY)
    if (!end) {
      end = Date.now() + SALE_DURATION
      localStorage.setItem(STORAGE_KEY, end)
    }
    
    const updateTimer = () => { 
      remainingMs.value = Math.max(0, parseInt(end) - Date.now()) 
    }
    updateTimer()
    timerInterval = setInterval(updateTimer, 1000)
    
    // Scarcity Slot simulation
    const slotInterval = setInterval(() => {
      if (promoSlots.value > 1) promoSlots.value--
      else clearInterval(slotInterval)
    }, 45000)
  })
  
  onBeforeUnmount(() => { if (timerInterval) clearInterval(timerInterval) })
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,800;1,800&display=swap');
  
  body { 
    font-family: 'Plus Jakarta Sans', sans-serif; 
    background-color: #FFF5F5; 
    scroll-behavior: smooth;
  }
  
  .money-rain { overflow: hidden; }
  .cash { position: absolute; top: -100px; user-select: none; animation: fall linear infinite; opacity: 0; }
  @keyframes fall {
    0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
    20% { opacity: 0.4; }
    80% { opacity: 0.4; }
    100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
  }
  
  /* Staggered Money Rain */
  .cash:nth-child(2) { left: 15%; animation-duration: 12s; animation-delay: 1s; }
  .cash:nth-child(4) { left: 35%; animation-duration: 9s; animation-delay: 4s; }
  .cash:nth-child(6) { left: 55%; animation-duration: 11s; animation-delay: 2s; }
  .cash:nth-child(8) { left: 75%; animation-duration: 10s; animation-delay: 5s; }
  .cash:nth-child(10) { left: 90%; animation-duration: 8s; animation-delay: 0.5s; }
  
  .animate-fade-in { animation: fadeIn 1.2s ease-out; }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes pulse-slow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  .animate-pulse-slow { animation: pulse-slow 3s infinite; }
  </style>