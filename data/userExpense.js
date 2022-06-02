export const UserExpenses = [
  {
    id: "ahmad",
    name: "AHMAD",
    total: 0,
  },
  {
    id: "maria",
    name: "MARIA",
    total: 0,
  },
  {
    id: "mommy",
    name: "MOMMY",
    total: 0,
  },
  {
    id: "zainab",
    name: "ZAINAB",
    total: 0,
  },
  {
    id: "general",
    name: "GENERAL",
    total: 0,
  },
  {
    id: "total",
    name: "TOTAL",
    total: 0,
  },
];

export const AhmadExpenses = [
  {
    id: (Date.now() * Math.random() * 12).toString(),
    amount: 2000,
    purpose: "Pocket Money",
    date: Date().slice(4, 15).toString(),
  },
  {
    id: (Date.now() * Math.random() * 12).toString(),
    amount: 3000,
    purpose: "New Laptop Charger",
    date: Date().slice(4, 15).toString(),
  },
];
