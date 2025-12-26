<template>
    <div class="min-h-screen bg-white text-slate-800 font-sans selection:bg-red-200 overflow-x-hidden relative">
      <div v-for="n in 30" :key="n" class="cash text-6xl text-red-500 font-black">$</div>
  
      <main class="max-w-4xl mx-auto px-6 py-16 md:py-24 relative z-10 space-y-32">
        
        <section class="text-center space-y-8 animate-fade-in">
          <h1 class="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-slate-900">
            CAPEK KERJA,<br/> 
            <span class="text-red-600 italic">TAPI UANGNYA MANA?</span>
          </h1>
  
          <p class="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto">
            Nggak usah bohong, kita semua pernah di posisi ini. Kerja bagai kuda sebulan penuh, tapi pas pertengahan bulan, kita bingung sendiri: <span class="text-red-600 font-bold underline decoration-2 underline-offset-4 font-italic">"Kemarin gue beli apa aja ya?"</span>
          </p>
          
          <div class="flex justify-center pt-4">
            <button @click="scrollTo('#why')" class="group flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1 shadow-xl">
              KENAPA BISA BEGITU?
              <svg class="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </button>
          </div>
        </section>
  
        <section id="why" class="space-y-12 bg-white p-8 md:p-16 rounded-[3rem] border-2 border-slate-100 shadow-sm">
          <div class="text-center space-y-4">
            <h2 class="text-3xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter">Kenapa Lo Butuh Ini Sekarang?</h2>
            <p class="text-slate-500 max-w-lg mx-auto">Karena nambah penghasilan itu percuma kalau lo nggak punya sistem yang bener. Ini alasannya:</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4 p-8 bg-red-50 rounded-3xl border border-red-100">
              <h3 class="text-xl font-black text-red-600 uppercase italic">1. Kebocoran Alus</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Lo sering ngerasa nggak belanja apa-apa, tapi saldo berkurang terus? Itu namanya kebocoran alus. Top-up dikit-dikit, biaya admin, langganan yang lupa di-cancel.
              </p>
            </div>
            <div class="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-red-500 transition-colors">
              <h3 class="text-xl font-black text-slate-800 uppercase italic group-hover:text-red-600">2. Kebanyakan Self Reward</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Capek dikit, jajan. Sedih dikit, belanja. Kita sering pakai alasan "self-reward" padahal itu cuma impulsif. Reward-nya cuma bikin seneng 5 menit, pusingnya 2 minggu.
              </p>
            </div>
            <div class="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 class="text-xl font-black text-slate-800 uppercase italic">3. Nabung Nunggu Sisa</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Nabung itu di awal, bukan nunggu sisa akhir bulan. Masalahnya, sisa gaji itu cuma mitos. Kalau lo nggak punya sistem, lo nggak bakal pernah punya tabungan.
              </p>
            </div>
            <div class="space-y-4 p-8 bg-red-50 rounded-3xl border border-red-100">
              <h3 class="text-xl font-black text-red-600 uppercase italic">4. Inflasi Gaya Hidup</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Gaji naik, tapi kenapa tabungan tetep segitu aja? Itu karena gaya hidup lo ikutan naik. Lo butuh "rem" yang pas biar masa depan lo nggak jadi korban gaya hidup hari ini.
              </p>
            </div>
          </div>
        </section>
  
        <section class="text-center space-y-10 py-10">
          <h2 class="text-4xl font-black italic">MAU PILIH MANA?</h2>
          <div class="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto items-center">
            <div class="p-8 bg-white border-2 border-slate-100 rounded-3xl opacity-60">
              <p class="text-slate-400 font-bold uppercase text-[10px] mb-2 tracking-widest">Opsi A</p>
              <p class="text-lg font-black text-slate-400">Jajan Kopi & Parkir</p>
              <p class="text-3xl font-black text-slate-300 mt-2">Rp15.000</p>
              <p class="text-xs text-slate-400 mt-4 italic">Senengnya cuma sejam.</p>
            </div>
            <div class="p-8 bg-slate-900 text-white rounded-3xl shadow-2xl scale-105">
              <p class="text-red-600 font-black uppercase text-[10px] mb-2 tracking-widest animate-pulse">Opsi B</p>
              <p class="text-lg font-black">Sistem Anti-Panic</p>
              <p class="text-3xl font-black text-red-500 mt-2">Rp15.000</p>
              <p class="text-xs text-slate-400 mt-4 italic">Stop pusing seumur hidup.</p>
            </div>
          </div>
        </section>
  
        <section class="max-w-3xl mx-auto pb-20">
          <div class="bg-white border-4 border-slate-900 rounded-[3rem] p-8 md:p-12 shadow-[20px_20px_0px_0px_rgba(15,23,42,1)] space-y-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <div class="relative group">
                <img 
                  src="/ebook.png" 
                  alt="Panduan Dompet Panic" 
                  class="relative w-full rounded-2xl shadow-xl transform group-hover:rotate-0 -rotate-3 transition-transform duration-500"
                />
              </div>
              
              <div class="space-y-6 text-center md:text-left">
                <div class="space-y-2">
                  <p class="text-[10px] font-black uppercase text-red-600 tracking-widest">Panduan Praktis</p>
                  <h3 class="text-3xl font-black text-slate-900 leading-tight italic uppercase">Dompet Panic</h3>
                  <p class="text-xs text-slate-400">Cara simpel buat lo yang capek gajinya cuma numpang lewat.</p>
                </div>
  
                <div class="space-y-1">
                  <p class="text-xs font-bold text-slate-300 line-through">Normal: Rp35.000</p>
                  <div class="text-7xl font-black text-slate-900 tracking-tighter">15K</div>
                </div>
  
                <button class="w-full py-5 bg-red-600 hover:bg-slate-900 text-white font-black rounded-2xl shadow-xl transition-all active:scale-95 text-lg">
                  YUK, BISA BERUBAH!
                </button>
              </div>
            </div>
  
            <div v-if="saleActive" class="pt-8 border-t border-slate-50 text-center space-y-4">
              <p class="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em]">Penawaran Terbatas:</p>
              <div class="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                <div v-for="(val, unit) in { JAM: hours, MENIT: minutes, DETIK: seconds }" :key="unit" class="bg-slate-50 p-3 rounded-xl">
                  <div class="text-2xl font-black text-slate-800 tabular-nums">{{ pad(val) }}</div>
                  <div class="text-[8px] font-bold text-slate-400 tracking-widest uppercase">{{ unit }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  
      <footer class="py-12 text-center opacity-30">
        <p class="text-slate-400 text-[9px] font-black tracking-[0.5em] uppercase px-4">Dompet.Panic &copy; 2025</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  
  const promoSlots = ref(8)
  const remainingMs = ref(0)
  const saleActive = computed(() => remainingMs.value > 0)
  const SALE_DURATION = 48 * 60 * 60 * 1000 
  const STORAGE_KEY = 'panic_v5_session'
  
  const hours = computed(() => Math.floor((remainingMs.value % (24 * 3600000)) / 3600000))
  const minutes = computed(() => Math.floor((remainingMs.value % 3600000) / 60000))
  const seconds = computed(() => Math.floor((remainingMs.value % 60000) / 1000))
  const pad = (n) => String(n).padStart(2, '0')
  
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  
  let timerInterval = null
  onMounted(() => {
    let end = localStorage.getItem(STORAGE_KEY)
    if (!end) {
      end = Date.now() + SALE_DURATION
      localStorage.setItem(STORAGE_KEY, end)
    }
    const updateTimer = () => { remainingMs.value = Math.max(0, parseInt(end) - Date.now()) }
    updateTimer()
    timerInterval = setInterval(updateTimer, 1000)
    
    setInterval(() => {
      if (promoSlots.value > 1) promoSlots.value--
    }, 45000)
  })
  
  onBeforeUnmount(() => { if (timerInterval) clearInterval(timerInterval) })
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,800;1,800&display=swap');
  
  body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #ffffff; scroll-behavior: smooth; }
  
  .money-rain { overflow: hidden; }
  .cash { position: absolute; top: -100px; user-select: none; animation: fall linear infinite; opacity: 0; }
  @keyframes fall {
    0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
    20% { opacity: 0.3; }
    80% { opacity: 0.3; }
    100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
  }
  
  .cash:nth-child(2) { left: 10%; animation-duration: 8s; animation-delay: 1s; }
  .cash:nth-child(4) { left: 30%; animation-duration: 12s; animation-delay: 3s; }
  .cash:nth-child(6) { left: 50%; animation-duration: 10s; animation-delay: 0s; }
  .cash:nth-child(8) { left: 70%; animation-duration: 14s; animation-delay: 2s; }
  .cash:nth-child(10) { left: 90%; animation-duration: 9s; animation-delay: 4s; }
  .cash:nth-child(12) { left: 20%; animation-duration: 11s; animation-delay: 5s; }
  
  .animate-fade-in { animation: fadeIn 1s ease-out; }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  </style>