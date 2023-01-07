import { atom, useAtom } from "jotai";

export const productsAtom = atom([
  {
    title: "Kola",
    price: 17,
    sku: "kasjdja3sf",
    remained: 45,
  },
  {
    title: "Kola",
    price: 19,
    sku: "kasjdj1a12412sf",
    remained: 45,
  },
  {
    title: "Kola",
    price: 20,
    sku: "ka515121",
    remained: 5,
  },
]);

export const totalPriceAtom = atom(0);

export const cartAtom = atom([]);

export const sellRecordAtom = atom([]);
