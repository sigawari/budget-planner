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
      class="max-w-5xl mx-auto px-6 py-16 md:py-24 relative z-10 space-y-24"
    >
      <!-- HERO -->
      <section class="text-center space-y-10 animate-fade-in">
        <h1
          class="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-center"
        >
          STOP LOSING MONEY.<br />
          <span class="text-red-600 italic font-black"
            >START CONTROLLING IT.</span
          >
        </h1>

        <p
          class="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-tight"
        >
          A practical budgeting eBook that teaches you how to plan your money
          before it disappears. Clear steps. Simple worksheets. Real progress.
        </p>

        <div
          class="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6"
        >
          <button
            @click="scrollTo('#offer')"
            class="px-10 py-5 bg-slate-900 text-white text-sm font-black rounded-2xl hover:bg-red-600 transition-all shadow-2xl hover:-translate-y-1 uppercase tracking-wider"
          >
            Get the eBook
          </button>
          <button
            @click="scrollTo('#inside')"
            class="px-10 py-5 bg-white text-slate-900 text-sm font-bold rounded-2xl border-2 border-slate-100 hover:border-slate-300 transition-all uppercase tracking-wider"
          >
            What’s inside
          </button>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 justify-center text-xs">
          <span
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-100 bg-white shadow-sm"
          >
            ✅ Works on phone / tablet / laptop
          </span>
          <span
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-100 bg-white shadow-sm"
          >
            ✅ Beginner-friendly budgeting
          </span>
          <span
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-100 bg-white shadow-sm"
          >
            ✅ Instant access after purchase
          </span>
        </div>
      </section>

      <!-- PROBLEM -> SOLUTION -->
      <section id="problem" class="space-y-12">
        <div class="text-center space-y-4">
          <h2 class="text-4xl md:text-5xl font-black tracking-tighter">
            The problem isn’t your income.
          </h2>
          <p class="text-slate-500 max-w-2xl mx-auto">
            It’s the lack of a simple system.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
            <p
              class="text-xs font-black uppercase tracking-[0.2em] text-red-600"
            >
              If this sounds familiar
            </p>
            <ul class="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Payday comes → money disappears fast</li>
              <li>• You “try to save”, but nothing is left</li>
              <li>• Bills feel random and stressful</li>
              <li>• You track once… then stop</li>
              <li>• Small spending leaks add up</li>
            </ul>
          </div>

          <div
            class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm"
          >
            <p
              class="text-xs font-black uppercase tracking-[0.2em] text-slate-900"
            >
              The solution
            </p>
            <p class="mt-4 text-sm text-slate-600 leading-relaxed">
              This eBook gives you a repeatable budgeting framework: plan first,
              track simply, and review weekly. No overwhelm—just clear steps you
              can follow.
            </p>

            <div class="mt-6 flex justify-center md:justify-start">
              <button
                @click="scrollTo('#offer')"
                class="px-8 py-4 bg-slate-900 text-white text-sm font-black rounded-2xl hover:bg-red-600 transition-all uppercase tracking-wider"
              >
                Get the system
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- INSIDE (CHAPTERS WITH IMAGES) -->
      <section id="inside" class="space-y-12">
        <div class="text-center space-y-4">
          <h2
            class="text-4xl md:text-5xl font-black tracking-tighter uppercase italic"
          >
            What you’ll learn (4 chapters)
          </h2>
          <p class="text-slate-500 max-w-2xl mx-auto">
            Practical lessons that help you manage money consistently.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            class="rounded-[2.5rem] border border-slate-100 overflow-hidden bg-white shadow-sm"
          >
            <img
              src="/1.png"
              alt="Chapter 1 preview"
              class="w-full h-48 object-cover bg-slate-100"
              loading="lazy"
            />
            <div class="p-8 space-y-2">
              <p
                class="text-xs font-black uppercase tracking-[0.2em] text-red-600"
              >
                Chapter 1
              </p>
              <h3 class="text-xl font-black">Build Your Monthly Money Plan</h3>
              <p class="text-sm text-slate-600">
                Set priorities and decide where your money goes before the month
                starts.
              </p>
            </div>
          </div>

          <div
            class="rounded-[2.5rem] border border-slate-100 overflow-hidden bg-white shadow-sm"
          >
            <img
              src="/2.png"
              alt="Chapter 2 preview"
              class="w-full h-48 object-cover bg-slate-100"
              loading="lazy"
            />
            <div class="p-8 space-y-2">
              <p
                class="text-xs font-black uppercase tracking-[0.2em] text-red-600"
              >
                Chapter 2
              </p>
              <h3 class="text-xl font-black">Find Leaks & Stop Waste</h3>
              <p class="text-sm text-slate-600">
                Identify the silent budget killers and fix them without feeling
                restricted.
              </p>
            </div>
          </div>

          <div
            class="rounded-[2.5rem] border border-slate-100 overflow-hidden bg-white shadow-sm"
          >
            <img
              src="/3.png"
              alt="Chapter 3 preview"
              class="w-full h-48 object-cover bg-slate-100"
              loading="lazy"
            />
            <div class="p-8 space-y-2">
              <p
                class="text-xs font-black uppercase tracking-[0.2em] text-red-600"
              >
                Chapter 3
              </p>
              <h3 class="text-xl font-black">Emergency Fund & Debt Strategy</h3>
              <p class="text-sm text-slate-600">
                Build a safety buffer and follow a clear plan to handle debt
                calmly.
              </p>
            </div>
          </div>

          <div
            class="rounded-[2.5rem] border border-slate-100 overflow-hidden bg-white shadow-sm"
          >
            <img
              src="/4.png"
              alt="Chapter 4 preview"
              class="w-full h-48 object-cover bg-slate-100"
              loading="lazy"
            />
            <div class="p-8 space-y-2">
              <p
                class="text-xs font-black uppercase tracking-[0.2em] text-red-600"
              >
                Chapter 4
              </p>
              <h3 class="text-xl font-black">A Simple Weekly Routine</h3>
              <p class="text-sm text-slate-600">
                A quick habit to stay on track and make budgeting automatic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- BONUS (ENGLISH) -->
      <section id="bonus" class="space-y-10">
        <div
          class="bg-slate-900 text-white rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 w-96 h-96 bg-red-600/20 blur-[120px] -ml-40 -mt-40"
          ></div>

          <div class="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div class="space-y-3">
              <p
                class="text-xs font-black uppercase tracking-[0.2em] text-red-400"
              >
                Bonus included
              </p>
              <h3 class="text-3xl md:text-4xl font-black tracking-tighter">
                Spreadsheet Templates (Planner Pack)
              </h3>
              <p class="text-slate-300">
                Ready-to-use spreadsheets to organize your money, your week, and
                your habits—so you stay consistent.
              </p>
            </div>

            <ul
              class="space-y-3 text-sm text-slate-200 font-medium bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <li class="flex items-center gap-3">
                <span
                  class="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px]"
                  >✓</span
                >
                Financial Planner
              </li>
              <li class="flex items-center gap-3">
                <span
                  class="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px]"
                  >✓</span
                >
                Weekly Planner
              </li>
              <li class="flex items-center gap-3">
                <span
                  class="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px]"
                  >✓</span
                >
                Habit Planner
              </li>
              <li class="flex items-center gap-3">
                <span
                  class="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px]"
                  >✓</span
                >
                Task Planner
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- OFFER + TIMER + CTA -->
      <section id="offer" class="space-y-10">
        <div class="text-center space-y-3">
          <h2
            class="text-4xl md:text-5xl font-black tracking-tighter uppercase italic"
          >
            Limited Launch Deal
          </h2>
          <p class="text-slate-500 max-w-2xl mx-auto">
            Big discount for a limited time. When the timer ends, the price
            returns to normal.
          </p>
        </div>

        <div
          class="bg-slate-900 text-white rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 w-96 h-96 bg-red-600/20 blur-[120px] -mr-48 -mt-48"
          ></div>

          <div class="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div class="space-y-6">
              <img
                src="/ebook.png"
                alt="Budgeting eBook"
                class="w-full max-w-xs mx-auto md:mx-0 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]"
                loading="lazy"
              />

              <div class="text-center md:text-left space-y-2">
                <p
                  class="text-xs font-black uppercase tracking-[0.2em] text-red-400"
                >
                  eBook + Spreadsheet Bonus Pack
                </p>
                <h3 class="text-4xl md:text-5xl font-black tracking-tighter">
                  Budgeting Made Simple<br />
                  <span class="text-red-600 italic">and Actually Doable</span>
                </h3>
              </div>
            </div>

            <div class="space-y-6">
              <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div class="flex items-end justify-between gap-4">
                  <div class="flex items-baseline gap-3">
                    <p class="text-6xl font-black tracking-tighter">
                      ${{ displayPrice }}
                    </p>
                    <p
                      v-if="saleActive"
                      class="text-xl text-slate-500 line-through font-normal"
                    >
                      $29
                    </p>
                  </div>

                  <span
                    v-if="saleActive"
                    class="text-[10px] px-3 py-2 rounded-full bg-red-600/20 border border-red-500/30 uppercase tracking-widest font-black"
                  >
                    96% OFF
                  </span>

                  <span
                    v-else
                    class="text-[10px] px-3 py-2 rounded-full bg-white/10 border border-white/10 uppercase tracking-widest font-black"
                  >
                    Regular price
                  </span>
                </div>

                <div
                  v-if="saleActive"
                  class="mt-5 bg-white text-slate-900 rounded-2xl p-5"
                >
                  <div class="flex items-center justify-between gap-4">
                    <div class="text-left">
                      <p
                        class="text-[10px] font-black uppercase tracking-widest text-red-600"
                      >
                        Promo ends in
                      </p>
                      <p class="text-xs font-bold text-slate-500">
                        Price returns to $29 after the timer ends
                      </p>
                    </div>
                    <div
                      class="font-black text-2xl tabular-nums tracking-tight"
                    >
                      {{ pad(hours) }}:{{ pad(minutes) }}:{{ pad(seconds) }}
                    </div>
                  </div>
                </div>

                <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    :href="gumroadUrl"
                    target="_blank"
                    class="py-5 bg-red-600 hover:bg-red-700 text-white text-center font-black rounded-2xl transition-all shadow-xl active:scale-95 text-xs uppercase tracking-widest"
                  >
                    Buy on Gumroad
                  </a>

                  <a
                    :href="etsyUrl"
                    target="_blank"
                    class="py-5 bg-white text-slate-900 text-center font-black rounded-2xl transition-all active:scale-95 text-xs uppercase tracking-widest"
                  >
                    Buy on Etsy
                  </a>
                </div>

                <p class="mt-4 text-[11px] text-slate-300 leading-relaxed">
                  Instant download after purchase.
                </p>
              </div>

              <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p
                  class="text-xs font-black uppercase tracking-[0.2em] text-red-400"
                >
                  How it works
                </p>
                <ol class="mt-3 space-y-2 text-sm text-slate-200 font-medium">
                  <li>1) Click Buy (Gumroad or Etsy)</li>
                  <li>2) Complete payment</li>
                  <li>3) Receive the download instantly</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TESTIMONIALS -->
      <section id="testimonials" class="space-y-10">
        <div class="text-center space-y-3">
          <h2 class="text-4xl md:text-5xl font-black tracking-tighter">
            Testimonials
          </h2>
          <p class="text-slate-500 max-w-2xl mx-auto">
            Clearer spending. Better decisions. Less stress.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            class="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm"
          >
            <p class="text-sm text-slate-600 leading-relaxed">
              “I finally know how much I can spend without guilt. The monthly
              plan makes everything feel controlled.”
            </p>
            <div class="mt-5">
              <p class="font-black">Alya</p>
              <p class="text-xs text-slate-500 font-bold">Employee</p>
            </div>
          </div>

          <div
            class="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm"
          >
            <p class="text-sm text-slate-600 leading-relaxed">
              “I used to quit budgeting after a week. This system is simple, so
              I stayed consistent for the first time.”
            </p>
            <div class="mt-5">
              <p class="font-black">Rizky</p>
              <p class="text-xs text-slate-500 font-bold">Freelancer</p>
            </div>
          </div>

          <div
            class="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm"
          >
            <p class="text-sm text-slate-600 leading-relaxed">
              “The spreadsheet bonus is huge. I can see my cashflow clearly and
              stop leaks that used to ruin my month.”
            </p>
            <div class="mt-5">
              <p class="font-black">Nadia</p>
              <p class="text-xs text-slate-500 font-bold">
                Small business owner
              </p>
            </div>
          </div>
        </div>

        <div class="text-center">
          <button
            @click="scrollTo('#offer')"
            class="px-10 py-5 bg-slate-900 text-white text-sm font-black rounded-2xl hover:bg-red-600 transition-all shadow-2xl hover:-translate-y-1 uppercase tracking-wider"
          >
            Get the deal
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useRuntimeConfig } from "#imports";

const config = useRuntimeConfig();
const gumroadUrl = config.public.gumroadUrl;
const etsyUrl = config.public.etsyUrl;

const scrollTo = (id) =>
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

const remainingMs = ref(0);
const SALE_DURATION = 48 * 60 * 60 * 1000;
const COOKIE_KEY = "wallet_planner_promo_end_v1";

const saleActive = computed(() => remainingMs.value > 0);

const hours = computed(() =>
  Math.floor((remainingMs.value % (24 * 3600000)) / 3600000)
);
const minutes = computed(() =>
  Math.floor((remainingMs.value % 3600000) / 60000)
);
const seconds = computed(() => Math.floor((remainingMs.value % 60000) / 1000));
const pad = (n) => String(n).padStart(2, "0");

const displayPrice = computed(() => (saleActive.value ? 1 : 29));

function getCookie(name) {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="));
  return match ? decodeURIComponent(match.split("=")[1]) : null;
}

function setCookie(name, value, days = 30) {
  if (typeof document === "undefined") return;
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}

let timerInterval;
onMounted(() => {
  let end = getCookie(COOKIE_KEY);

  if (!end) {
    end = String(Date.now() + SALE_DURATION);
    setCookie(COOKIE_KEY, end, 30);
  }

  const updateTimer = () => {
    const endMs = parseInt(end || "0");
    remainingMs.value = Math.max(0, endMs - Date.now());
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
