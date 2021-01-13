import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core";
import useAnime from "./useAnime";
import useWelcomeService from "./useWelcomeService";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: "fixed",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: "white",
      color: "white",
    },
    mask: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%) scale(1)",
      backgroundColor: theme.palette.primary.main,
      height: "1px",
      width: "1px",
      borderRadius: "50%",
    },
    welcome: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
  })
);

export default function Welcome() {
  const history = useHistory();
  const classes = useStyles();
  const { routerService } = useWelcomeService();
  const scale =
    (document.documentElement.clientWidth >=
    document.documentElement.clientHeight
      ? document.documentElement.clientWidth
      : document.documentElement.clientHeight) * 1.25;
  const { ref, animationRef } = useAnime({
    scale: scale,
    duration: 1500,
    easing: "easeInOutQuart",
    autoplay: false,
    complete: () => {
      setTimeout(() => {
        routerService.setFirstLoad(false);
        history.push("/");
      }, 500);
    },
  });
  useEffect(() => {
    animationRef.current?.play?.();
  }, [animationRef]);
  return (
    <div className={classes.root}>
      <div ref={ref} className={classes.mask}></div>
      <div className={classes.welcome}>Welcome</div>
    </div>
  );
}
