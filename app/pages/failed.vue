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
            class="w-12 h-12 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center font-black"
          >
            !
          </div>
          <div>
            <p
              class="text-xs font-black uppercase tracking-[0.2em] text-red-700"
            >
              Payment not completed
            </p>
            <h1 class="text-3xl md:text-4xl font-black tracking-tighter mt-1">
              Try again
            </h1>
          </div>
        </div>

        <p class="text-slate-600 text-sm mt-6">
          Your payment was not confirmed. You can go back and try again.
        </p>

        <div class="mt-8 grid sm:grid-cols-2 gap-4">
          <NuxtLink
            to="/checkout"
            class="px-6 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-red-600 transition-all text-center uppercase tracking-wider"
          >
            Back to checkout
          </NuxtLink>
          <NuxtLink
            to="/"
            class="px-6 py-4 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-black hover:border-slate-300 transition-all text-center uppercase tracking-wider"
          >
            Back to home
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>
