<template>
  <div
    class="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-100 overflow-x-hidden relative"
  >
    <div
      v-for="n in 15"
      :key="n"
      class="cash text-5xl text-red-500/10 font-black"
    >
      $
    </div>

    <main
      class="max-w-5xl mx-auto px-6 py-16 md:py-24 relative z-10 space-y-28"
    >
      <section class="text-center space-y-10 animate-fade-in">
        <h1
          class="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter"
        >
          PLAN YOUR WEALTH, <br />
          <span class="text-red-600 italic font-black">NOT JUST BILLS.</span>
        </h1>

        <p
          class="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-tight"
        >
          A minimalist budget planner for people who hate complicated
          spreadsheets. Stop tracking the past and
          <span
            class="text-slate-900 underline decoration-red-500 underline-offset-4 font-bold"
            >start planning your future</span
          >.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <button
            @click="goToGumroad"
            class="px-10 py-5 bg-slate-900 text-white text-sm font-black rounded-2xl hover:bg-red-600 transition-all shadow-2xl hover:-translate-y-1 uppercase tracking-wider"
          >
            GET THE PLANNER
          </button>
          <button
            @click="scrollTo('#benefits')"
            class="px-10 py-5 bg-white text-slate-900 text-sm font-bold rounded-2xl border-2 border-slate-100 hover:border-slate-300 transition-all uppercase tracking-wider"
          >
            Why it works
          </button>
        </div>
      </section>

      <section id="benefits" class="space-y-16">
        <div class="text-center space-y-4">
          <h2
            class="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-slate-900"
          >
            Finally, a budget you'll stick to.
          </h2>
          <p class="text-slate-500 max-w-xl mx-auto">
            Most budgets fail because they are too strict. Our system is built
            for real life, flexibility, and results.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-10">
          <div
            class="bg-slate-50 p-8 rounded-[2.5rem] space-y-4 border border-transparent hover:border-red-200 transition-all group"
          >
            <div
              class="text-3xl group-hover:scale-110 transition-transform inline-block"
            >
              🎯
            </div>
            <h3 class="text-xl font-black uppercase tracking-tight">
              Purposeful Spending
            </h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              Tell every dollar where to go before the month starts. No more
              "I'll save what's left." You'll save first, and spend the rest
              guilt-free.
            </p>
          </div>

          <div
            class="bg-slate-50 p-8 rounded-[2.5rem] space-y-4 border border-transparent hover:border-red-200 transition-all group"
          >
            <div
              class="text-3xl group-hover:scale-110 transition-transform inline-block"
            >
              🚀
            </div>
            <h3 class="text-xl font-black uppercase tracking-tight">
              Debt-Killing Power
            </h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              Clearly visualize your "Financial Leaks." Our planner exposes
              hidden subscriptions and impulse buys that eat your savings.
            </p>
          </div>

          <div
            class="bg-slate-50 p-8 rounded-[2.5rem] space-y-4 border border-transparent hover:border-red-200 transition-all group"
          >
            <div
              class="text-3xl group-hover:scale-110 transition-transform inline-block"
            >
              ⚡
            </div>
            <h3 class="text-xl font-black uppercase tracking-tight">
              5-Minute Rituals
            </h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              Built for busy people. You don't need 3 hours a week. A quick
              5-minute check-in keeps you on track for your house, car, or
              vacation goals.
            </p>
          </div>
        </div>
      </section>

      <section id="offer" class="relative">
        <div
          class="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative"
        >
          <div
            class="absolute top-0 right-0 w-96 h-96 bg-red-600/20 blur-[120px] -mr-48 -mt-48"
          ></div>

          <div class="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div class="relative group">
              <div
                class="absolute -inset-4 bg-red-600/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
              <img
                src="/ebook.png"
                alt="Wallet Panic Budget Planner"
                class="relative w-full rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] transform -rotate-3 group-hover:rotate-0 transition-transform duration-700"
              />
            </div>

            <div class="space-y-8">
              <div class="space-y-3 text-center md:text-left">
                <h3
                  class="text-5xl md:text-6xl font-black italic uppercase leading-none tracking-tighter"
                >
                  BUDGET <br /><span class="text-red-600">PLANNER</span>
                </h3>
                <p
                  class="text-slate-400 font-medium text-lg uppercase tracking-widest text-sm"
                >
                  The Ultimate Budgeting Blueprint
                </p>
              </div>

              <div
                class="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4"
              >
                <p
                  class="text-xs font-bold uppercase tracking-[0.2em] text-red-500"
                >
                  What's included in the $1 pack:
                </p>
                <ul class="space-y-3 text-sm text-slate-200 font-medium">
                  <li class="flex items-center gap-3">
                    <span
                      class="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px]"
                      >✓</span
                    >
                    The Core "Wallet Panic" Budget System (PDF)
                  </li>
                  <li class="flex items-center gap-3">
                    <span
                      class="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px]"
                      >✓</span
                    >
                    Quick-Start 7-Day Implementation Plan
                  </li>
                  <li class="flex items-center gap-3">
                    <span
                      class="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px]"
                      >✓</span
                    >
                    Bonus: Emergency Fund & Debt Tracker
                  </li>
                </ul>
              </div>

              <div
                class="pt-2 flex items-center justify-center md:justify-start gap-4"
              >
                <div class="flex items-baseline gap-2">
                  <p class="text-6xl font-black tracking-tighter text-white">
                    $1
                  </p>
                  <p class="text-xl text-slate-500 line-through font-normal">
                    $8
                  </p>
                </div>
                <div class="h-10 w-[1px] bg-slate-700 mx-2"></div>
                <p
                  class="text-[10px] text-slate-400 leading-tight uppercase font-bold"
                >
                  Limited <br />Launch Price
                </p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  :href="gumroadUrl"
                  target="_blank"
                  class="group py-5 bg-red-600 hover:bg-red-700 text-white text-center font-black rounded-2xl transition-all shadow-xl active:scale-95 text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  Grab it on Gumroad
                </a>

                <a
                  :href="etsyUrl"
                  target="_blank"
                  class="py-5 bg-white text-slate-900 text-center font-black rounded-2xl transition-all active:scale-95 text-xs uppercase tracking-widest"
                >
                  Buy on Etsy
                </a>
              </div>
            </div>
          </div>
        </div>

        <div v-if="saleActive" class="mt-12 flex justify-center">
          <div
            class="bg-white border-2 border-slate-900 px-8 py-4 rounded-3xl shadow-2xl flex gap-8 items-center"
          >
            <div class="text-left">
              <p
                class="text-[10px] font-black uppercase tracking-widest text-red-600"
              >
                Offer closing soon
              </p>
              <p class="text-xs font-bold text-slate-400">
                Price will return to $8.00
              </p>
            </div>
            <div class="h-10 w-[2px] bg-slate-100"></div>
            <div
              class="flex gap-4 font-black text-2xl tabular-nums tracking-tight text-slate-900"
            >
              <span
                >{{ pad(hours) }}:{{ pad(minutes) }}:{{ pad(seconds) }}</span
              >
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useRuntimeConfig } from "#imports";

const config = useRuntimeConfig();
const gumroadUrl = config.public.gumroadUrl; // ← dari .env
const etsyUrl = config.public.etsyUrl; // ← dari .env

const remainingMs = ref(0);
const saleActive = computed(() => remainingMs.value > 0);
const SALE_DURATION = 48 * 60 * 60 * 1000;
const STORAGE_KEY = "wallet_planner_v1";

const hours = computed(() =>
  Math.floor((remainingMs.value % (24 * 3600000)) / 3600000)
);
const minutes = computed(() =>
  Math.floor((remainingMs.value % 3600000) / 60000)
);
const seconds = computed(() => Math.floor((remainingMs.value % 60000) / 1000));

const pad = (n) => String(n).padStart(2, "0");
const scrollTo = (id) =>
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

// fungsi buat tombol GET THE PLANNER
const goToGumroad = () => {
  if (!gumroadUrl) {
    console.warn("GUMROAD URL missing. Check .env or Vercel env.");
    return;
  }
  window.open(gumroadUrl, "_blank");
};

let timerInterval;
onMounted(() => {
  let end = localStorage.getItem(STORAGE_KEY);
  if (!end) {
    end = String(Date.now() + SALE_DURATION);
    localStorage.setItem(STORAGE_KEY, end);
  }
  const updateTimer = () => {
    remainingMs.value = Math.max(0, parseInt(end) - Date.now());
  };
  updateTimer();
  timerInterval = window.setInterval(updateTimer, 1000);
});
onBeforeUnmount(() => clearInterval(timerInterval));
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,800;1,800&display=swap");
body {
  font-family: "Plus Jakarta Sans", sans-serif;
  background-color: #fff;
  scroll-behavior: smooth;
}

.cash {
  position: absolute;
  top: -100px;
  animation: fall linear infinite;
  z-index: 0;
  user-select: none;
}

@keyframes fall {
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0;
  }
}

.cash:nth-child(1) {
  left: 5%;
  animation-duration: 7s;
}
.cash:nth-child(2) {
  left: 15%;
  animation-duration: 10s;
  animation-delay: 2s;
}
.cash:nth-child(3) {
  left: 25%;
  animation-duration: 8s;
  animation-delay: 4s;
}
.cash:nth-child(4) {
  left: 55%;
  animation-duration: 12s;
}
.cash:nth-child(5) {
  left: 75%;
  animation-duration: 9s;
  animation-delay: 1s;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
