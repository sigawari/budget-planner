// Ga kepake
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

export function usePromoTimer() {
  const remainingMs = ref(0);
  const saleActive = computed(() => remainingMs.value > 0);

  const SALE_DURATION = 48 * 60 * 60 * 1000;
  const COOKIE_KEY = "wallet_planner_promo_end_v1";

  const hours = computed(() =>
    Math.floor((remainingMs.value % (24 * 3600000)) / 3600000)
  );
  const minutes = computed(() =>
    Math.floor((remainingMs.value % 3600000) / 60000)
  );
  const seconds = computed(() =>
    Math.floor((remainingMs.value % 60000) / 1000)
  );

  const pad = (n: number) => String(n).padStart(2, "0");

  function getCookie(name: string) {
    if (typeof document === "undefined") return null;
    const match = document.cookie
      .split("; ")
      .find((row) => row.startsWith(name + "="));
    return match ? decodeURIComponent(match.split("=")[1]) : null;
  }

  function setCookie(name: string, value: string, days = 30) {
    if (typeof document === "undefined") return;
    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
  }

  const promoEndText = computed(() => {
    const end = Date.now() + remainingMs.value;
    try {
      return new Date(end).toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return new Date(end).toString();
    }
  });

  let timerInterval: number | undefined;

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

  onBeforeUnmount(() => {
    if (timerInterval) clearInterval(timerInterval);
  });

  return { saleActive, hours, minutes, seconds, pad, promoEndText };
}
