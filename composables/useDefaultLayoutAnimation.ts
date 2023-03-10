import { onMounted, watch } from "vue";
import gsap from "gsap";

export function useDefaultLayoutAnimation() {
  const route = useRoute();

  const tl = gsap.timeline();
  const tl2 = gsap.timeline();

  function toolbarAnimation() {
    return tl2.fromTo(".app-toolbar", {
      boxShadow: "0px -1px 18px 7px rgba(206, 20, 234, 1)",
      duration: .5,
      ease: "sine.inOut",
    }, {
      boxShadow: "0px -1px 18px 3px rgba(102, 201, 204, .8)",
      duration: 1,
      ease: "sine.inOut",
      delay: 1.3
    });
  }

  onMounted(() => {
    toolbarAnimation();

    tl.from(".app-toolbar-title", {
      opacity: 0,
      duration: 1,
      delay: .5
    })
      .fromTo(".app-toolbar-title",
        {
          duration: 1,
          text: "Front-end developer"
        },
        {
          duration: 1,
          text: "Serhii Romanichenko",
          delay: .2
        });


    tl.to(".app-main", {
      duration: 1,
      opacity: 1,
    }, "-=.2");
  });

  watch(route, () => {
    toolbarAnimation().restart().paused();
  });
}