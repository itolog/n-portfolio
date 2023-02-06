import { reactive } from "vue";


const transitionState = reactive({
  transitionComplete: false,
});

export const usePageTransition = () => {
  const togglePageTransition = (value: boolean) => {
    transitionState.transitionComplete = value;
  };

  return {
    transitionState,
    togglePageTransition,
  };
};
