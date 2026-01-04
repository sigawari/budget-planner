// Kepake kalau bikin form
type OrderStatus = "pending" | "paid" | "failed";

export type Order = {
  orderId: string;
  createdAt: number;
  name: string;
  whatsapp: string;
  email: string;
  paymentMethod: string;
  currency: "USD";
  priceOriginal: number;
  discount: number;
  total: number;
  status: OrderStatus;
};

const STORAGE_KEY = "wallet_planner_order_v1";

function randomId() {
  return (
    "ORD-" +
    Math.random().toString(16).slice(2, 6).toUpperCase() +
    "-" +
    Date.now().toString().slice(-6)
  );
}

export function useOrder() {
  const readOrder = (): Order | null => {
    if (typeof window === "undefined") return null;
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Order) : null;
  };

  const saveOrder = (order: Order) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
  };

  const createOrder = (input: {
    name: string;
    whatsapp: string;
    email: string;
    paymentMethod: string;
    priceOriginal: number;
    discount: number;
    total: number;
  }) => {
    const order: Order = {
      orderId: randomId(),
      createdAt: Date.now(),
      name: input.name,
      whatsapp: input.whatsapp,
      email: input.email,
      paymentMethod: input.paymentMethod,
      currency: "USD",
      priceOriginal: input.priceOriginal,
      discount: input.discount,
      total: input.total,
      status: "pending",
    };
    saveOrder(order);
    return order;
  };

  return { readOrder, saveOrder, createOrder };
}
