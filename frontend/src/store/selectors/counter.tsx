import { selector } from "recoil";
import { counterAtom } from "../atoms/counter";

export const isEvenCounterSelector = selector({
  key: "isEvenSelector",
  get: ({ get }) => {
    const currentCount = get(counterAtom);
    if (currentCount % 2 == 0) {
      return true;
    } else {
      return false;
    }
  },
});
