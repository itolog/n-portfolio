import { onMounted } from "vue";
import gsap from "gsap";

export function useDefaultLayoutAnimation() {
  const tl = gsap.timeline();

  onMounted(() => {
    tl
      .to(".app-toolbar", {
        boxShadow: "0px -1px 18px 7px rgba(206, 20, 234, 1)",
        duration: .5,
        ease: "expo.out",
      })
      .from(".app-toolbar-title", {
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
    }, "-=.2")
      .to(".app-toolbar", {
        boxShadow: "0px -1px 18px 3px rgba(102, 201, 204, .8)",
        duration: 1,
        ease: "expo.out",
      });
  });
}