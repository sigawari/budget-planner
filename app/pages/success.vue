<template>
  <div
    class="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-100"
  >
    <main class="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-10">
      <div
        class="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm"
      >
        <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center font-black"
          >
            ✓
          </div>
          <div>
            <p
              class="text-xs font-black uppercase tracking-[0.2em] text-green-700"
            >
              Payment received
            </p>
            <h1 class="text-3xl md:text-4xl font-black tracking-tighter mt-1">
              You’re all set.
            </h1>
          </div>
        </div>

        <div
          v-if="order"
          class="mt-6 bg-slate-50 border border-slate-100 rounded-2xl p-6"
        >
          <p class="font-black">Order details</p>
          <p class="text-sm text-slate-600 mt-2">
            Order ID: <b>{{ order.orderId }}</b
            ><br />
            Email: <b>{{ order.email }}</b
            ><br />
            Total: <b>${{ order.total }}</b>
          </p>
        </div>

        <div
          class="mt-6 bg-slate-900 text-white rounded-2xl p-6 flex items-center justify-between gap-6"
        >
          <div>
            <p
              class="text-xs font-black uppercase tracking-[0.2em] text-red-400"
            >
              Next step
            </p>
            <p class="text-xl font-black mt-1">
              Check your email for the download link
            </p>
            <p class="text-sm text-slate-300 mt-2">
              If you don’t see it, check Promotions/Spam.
            </p>
          </div>
          <img
            src="/ebook.png"
            alt="Budgeting eBook"
            class="w-20 rounded-xl shadow-lg"
          />
        </div>

        <div class="mt-8 grid sm:grid-cols-2 gap-4">
          <NuxtLink
            to="/"
            class="px-6 py-4 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-black hover:border-slate-300 transition-all text-center uppercase tracking-wider"
          >
            Back to Home
          </NuxtLink>

          <a
            :href="gumroadUrl"
            target="_blank"
            class="px-6 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-red-600 transition-all text-center uppercase tracking-wider"
          >
            View purchase on Gumroad
          </a>
        </div>

        <p class="text-[11px] text-slate-400 mt-6">
          This is a demo “success” page. Replace the button with your real
          download/WA support flow.
        </p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRuntimeConfig } from "#imports";
import { useOrder } from "~/composables/useOrder";

const config = useRuntimeConfig();
const gumroadUrl = config.public.gumroadUrl; // keep env

const { readOrder } = useOrder();
const order = ref(readOrder());

onMounted(() => {
  order.value = readOrder();
});
</script>
