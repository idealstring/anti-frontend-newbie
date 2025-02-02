import { atom, selector } from "recoil";
import { getEurInfo } from "../api/getEurInfo";
import { KrwFormatter } from "../lib/utils";
import { IEurInfo } from "../types/eurInfo";

export const EurInfoAtom = atom<IEurInfo>({
  key: "EurInfoAtom",
  default: getEurInfo(),
});

export const EurInfoSelector = selector({
  key: "EurInfoSelector",
  get: ({ get }) => {
    const eurInfo = get(EurInfoAtom);
    const exchangeEurToKrw = (eur: number) =>
      KrwFormatter(eur * eurInfo.basePrice);

    return { exchangeEurToKrw };
  },
});
