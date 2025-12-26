<template>
  <main class="max-w-6xl mx-auto px-4 py-10">

    <!-- HERO -->
    <section class="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p class="text-sm font-semibold bg-purple-100 text-purple-700 inline-block px-3 py-1 rounded-full">
          Budget Planner • Untuk semua kalangan
        </p>

        <h1 class="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
          Atur Uang Bulanan Tanpa Ribet
        </h1>

        <p class="text-gray-600 mt-4 leading-relaxed">
          Budget Planner yang bantu kamu tahu uang pergi ke mana, kontrol pengeluaran, dan nabung
          lebih konsisten. Cocok buat pelajar, karyawan, dan freelancer.
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <a
            href="https://example.com"
            class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold"
          >
            Coba Sekarang
          </a>

          <a
            href="#preview"
            class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold"
          >
            Lihat Contoh
          </a>
        </div>

        <div class="mt-4 flex gap-3 text-sm text-gray-600">
          <span class="bg-gray-100 px-3 py-1 rounded-full">⭐ 4.8/5 Rating</span>
          <span class="bg-gray-100 px-3 py-1 rounded-full">⏳ Input &lt; 10 detik</span>
        </div>
      </div>

      <div class="bg-gray-900 text-white rounded-2xl p-6 shadow-xl">
        <h3 class="text-lg font-semibold mb-1">Preview Budget Planner</h3>
        <p class="text-gray-300 text-sm mb-4">
          Tampilan dummy — nanti bisa kamu ganti dengan screenshot asli.
        </p>

        <div class="grid gap-3">
          <div class="bg-gray-800 p-4 rounded-xl flex justify-between">
            <span class="text-gray-400">Penghasilan</span>
            <span class="font-semibold">Rp 5.000.000</span>
          </div>
          <div class="bg-gray-800 p-4 rounded-xl flex justify-between">
            <span class="text-gray-400">Sisa Budget</span>
            <span class="text-green-400 font-semibold">Rp 1.250.000</span>
          </div>
          <div class="bg-gray-800 p-4 rounded-xl flex justify-between">
            <span class="text-gray-400">Progress Tabungan</span>
            <span class="font-semibold">60%</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION PROBLEM -->
    <section class="mt-20">
      <h2 class="text-2xl font-bold">Kenapa merasa hemat, tapi tetap boncos?</h2>
      <p class="text-gray-600 mt-2 max-w-2xl">
        Masalahnya bukan cuma kurang hemat—tapi karena pengeluaran kecil nggak pernah tercatat.
      </p>

      <div class="grid md:grid-cols-3 gap-6 mt-8">
        <div class="p-6 border rounded-xl">
          <h3 class="font-semibold mb-2">Pengeluaran kecil numpuk</h3>
          <p class="text-gray-600 text-sm">
            Ongkir, jajan, kopi—kecil tapi sering. Di sini semuanya tercatat.
          </p>
        </div>
        <div class="p-6 border rounded-xl">
          <h3 class="font-semibold mb-2">Gaji tanpa aturan</h3>
          <p class="text-gray-600 text-sm">
            Set limit per kategori biar jelas mana kebutuhan, mana keinginan.
          </p>
        </div>
        <div class="p-6 border rounded-xl">
          <h3 class="font-semibold mb-2">Nabung pakai sisa?</h3>
          <p class="text-gray-600 text-sm">
            Sisihkan dulu untuk tabungan, baru sisanya buat kebutuhan.
          </p>
        </div>
      </div>
    </section>

    <!-- PREVIEW -->
    <section id="preview" class="mt-20">
      <h2 class="text-2xl font-bold">Contoh Tampilan (dummy)</h2>
      <p class="text-gray-600 mt-2">Nanti bisa kamu ganti screenshot asli.</p>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div class="border rounded-xl p-6 text-center text-gray-500">Dashboard</div>
        <div class="border rounded-xl p-6 text-center text-gray-500">Kategori</div>
        <div class="border rounded-xl p-6 text-center text-gray-500">Ringkasan</div>
        <div class="border rounded-xl p-6 text-center text-gray-500">Goal</div>
      </div>
    </section>

    <!-- CTA AKHIR -->
    <section class="mt-20 bg-gradient-to-r from-purple-600 to-green-500 text-white p-10 rounded-2xl flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 class="text-xl font-bold">Mulai rapihin budget kamu hari ini mang ea</h2>
        <p class="text-sm text-white/80 mt-1">Lebih jelas, lebih tenang, nabung lebih konsisten.</p>
      </div>

      <a
        href="https://example.com"
        class="bg-white text-purple-700 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold"
      >
        Coba Sekarang
      </a>
    </section>

  </main>
</template>

<script setup>
import { useSeoMeta } from '#imports'

useSeoMeta({
  title: 'Budget Planner — Tailwind Version',
  description: 'Landing page Budget Planner menggunakan TailwindCSS.'
})
</script>
