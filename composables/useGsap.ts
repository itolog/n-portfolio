import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export function useGsap() {
  if (process.client) {
    gsap.registerPlugin(TextPlugin);
  }
}