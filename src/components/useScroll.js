import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation();
  //set ref={element} and animate={controls} on a motion component to animate it
  //The threshold is what % of the element needs to be in view for it to trigger
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) controls.start("show");
  else controls.start("hidden");
  return [element, controls];
};
