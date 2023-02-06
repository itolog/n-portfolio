import gsap from "gsap";
import { TransitionProps } from "vue";

const { togglePageTransition } = usePageTransition();

const pageTransition: TransitionProps = {
  name: "page-transition",
  mode: "out-in",
  onEnter: (el: gsap.TweenTarget, done: () => void) => {
    gsap.set(el, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
    gsap
      .timeline({
        paused: true,
        onComplete() {
          togglePageTransition(true);
          done();
        },
      })
      .to(el, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
      .to(el, { scale: 1, duration: 0.25 })
      .play();
  },
  onLeave: (el: gsap.TweenTarget, done: () => void) => {
    togglePageTransition(false);
    gsap
      .timeline({ paused: true, onComplete: done })
      .to(el, { scale: 0.8, duration: 0.2 })
      .to(el, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
      .play();
  },
};

export default pageTransition;