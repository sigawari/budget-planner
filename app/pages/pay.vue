<template>
  <div
    class="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-100"
  >
    <main class="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-10">
      <div class="flex items-center justify-between">
        <NuxtLink
          to="/checkout"
          class="text-sm font-black text-slate-700 hover:text-red-600"
          >← Back</NuxtLink
        >
        <p class="text-xs text-slate-400 font-bold uppercase tracking-widest">
          Payment
        </p>
      </div>

      <div
        v-if="!order"
        class="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8"
      >
        <p class="font-black">No order found</p>
        <p class="text-sm text-slate-600 mt-2">
          Please go back to checkout and submit the form.
        </p>
        <NuxtLink
          to="/checkout"
          class="inline-block mt-6 px-6 py-3 bg-slate-900 text-white rounded-xl font-black"
        >
          Go to Checkout
        </NuxtLink>
      </div>

      <div v-else class="space-y-8">
        <div
          class="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm"
        >
          <div class="flex items-start justify-between gap-6">
            <div>
              <p
                class="text-xs font-black uppercase tracking-[0.2em] text-red-600"
              >
                Order
              </p>
              <p class="text-2xl font-black tracking-tighter mt-1">
                {{ order.orderId }}
              </p>
              <p class="text-sm text-slate-500 mt-2">
                Status:
                <span class="font-black" :class="statusClass">{{
                  order.status.toUpperCase()
                }}</span>
              </p>
            </div>

            <div class="text-right">
              <p
                class="text-xs text-slate-400 font-bold uppercase tracking-widest"
              >
                Total
              </p>
              <p class="text-4xl font-black">${{ order.total }}</p>
              <p class="text-xs text-slate-500 font-bold mt-1">
                {{ order.paymentMethod }}
              </p>
            </div>
          </div>

          <div class="mt-6 bg-slate-50 border border-slate-100 rounded-2xl p-6">
            <p class="font-black">Payment instructions</p>
            <p class="text-sm text-slate-600 mt-2">
              This is a realistic demo flow. In real production, you would
              redirect to a payment gateway, then receive a callback/webhook to
              confirm payment.
            </p>

            <ul class="text-sm text-slate-600 mt-4 space-y-2">
              <li>• Check your email for the invoice (simulated)</li>
              <li>
                • Complete payment using <b>{{ order.paymentMethod }}</b>
              </li>
              <li>
                • After payment is confirmed, you’ll be redirected to success
              </li>
            </ul>
          </div>

          <div class="mt-8 grid sm:grid-cols-2 gap-4">
            <button
              @click="simulatePaid"
              class="px-6 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-red-600 transition-all uppercase tracking-wider"
            >
              I’ve paid (simulate)
            </button>

            <button
              @click="simulateFailed"
              class="px-6 py-4 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-black hover:border-slate-300 transition-all uppercase tracking-wider"
            >
              Payment failed (simulate)
            </button>
          </div>
        </div>

        <div class="bg-slate-900 text-white rounded-[2.5rem] p-8">
          <div class="flex items-center justify-between gap-6">
            <div>
              <p
                class="text-xs font-black uppercase tracking-[0.2em] text-red-400"
              >
                Instant access
              </p>
              <p class="text-2xl font-black tracking-tighter mt-1">
                Delivered to your email
              </p>
              <p class="text-sm text-slate-300 mt-2">
                We’ll send the download link to: <b>{{ order.email }}</b>
              </p>
            </div>
            <img
              src="/ebook.png"
              alt="Budgeting eBook"
              class="w-28 rounded-xl shadow-lg hidden sm:block"
            />
          </div>
        </div>

        <div class="text-center text-xs text-slate-400 font-medium">
          Need help? Add your WhatsApp support link later on the success page.
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useOrder } from "~/composables/useOrder";

const { readOrder, setStatus } = useOrder();

const order = ref(readOrder());

onMounted(() => {
  order.value = readOrder();
});

const statusClass = computed(() => {
  if (!order.value) return "text-slate-500";
  if (order.value.status === "paid") return "text-green-600";
  if (order.value.status === "failed") return "text-red-600";
  return "text-amber-600";
});

const simulatePaid = () => {
  const updated = setStatus("paid");
  order.value = updated;
  navigateTo("/success");
};

const simulateFailed = () => {
  const updated = setStatus("failed");
  order.value = updated;
  navigateTo("/failed");
};
</script>
