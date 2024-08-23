
const fadeIn = (direction, delay) => {
  const offseth = "20vw";
  const offsetw= "20vw";
  return {
    hidden: {
      // y: direction === "up" ? offseth : direction === "down" ? `-${offseth}` : 0,
      opacity: 0,
      // x: direction === "left" ? offsetw : direction === "right" ? `-${offsetw}`: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
export default fadeIn
