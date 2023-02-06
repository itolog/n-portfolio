import gsap from "gsap";
import { Ref, onMounted } from "vue";

interface Props {
  cursorRef: Ref<HTMLDivElement> | Ref<null>,
  auraRef: Ref<HTMLDivElement> | Ref<null>
}

export function useCursor({ auraRef, cursorRef }: Props) {
  let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

  onMounted(() => {
    // const links = document.getElementsByTagName("a");
    // console.log(links);

    gsap.to({}, .01, {
      repeat: -1,
      onRepeat: () => {
        posX += (mouseX - posX) / 5;
        posY += (mouseY - posY) / 5;

        gsap.set("#cursor", {
          css: {
            left: mouseX,
            top: mouseY,
          }
        });

        gsap.set("#aura", {
          css: {
            left: posX - 21,
            top: posY - 21,
          }
        });
      }
    });
  });

  function mouseCoords(e: MouseEvent) {
    auraRef.value?.classList.remove("hidden");
    cursorRef.value?.classList.remove("hidden");

    mouseX = e.pageX;
    mouseY = e.pageY;
  }


  function mouseOut() {
    auraRef.value?.classList.add("hidden");
    cursorRef.value?.classList.add("hidden");
  }

  return {
    mouseCoords,
    mouseOut
  };
}