import { useLayoutEffect, useRef } from "react";
import anime, { AnimeInstance, AnimeParams } from "animejs";

export default function useAnime(props: AnimeParams = {}) {
  const ref = useRef<any>();
  const animationRef = useRef<AnimeInstance>();
  useLayoutEffect(() => {
    if (!ref.current) {
      console.warn("please bind the anime ref while useAnime");
      return;
    }
    animationRef.current = anime({
      ...props,
      targets: [ref.current],
    });
  }, [ref, animationRef, props]);
  return {
    ref,
    animationRef,
  };
}
