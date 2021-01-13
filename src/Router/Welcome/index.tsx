import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core";
import useAnime from "./useAnime";
import useWelcomeService from "./useWelcomeService";
import logoPng from "assets/img/logo.png";

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
      transform: "scale(0)",
      backgroundColor: theme.palette.primary.main,
      height: "5px",
      width: "5px",
      borderRadius: "50%",
    },
    welcome: {
      position: "absolute",
      left: "50%",
      top: "35%",
      width: "100%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    },
    logo: {
      width: "100%",
      height: "auto",
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
      : document.documentElement.clientHeight) * 0.28;
  const { ref, animationRef } = useAnime({
    scale: scale,
    duration: 1500,
    easing: "easeInOutQuart",
    autoplay: false,
    complete: () => {
      setTimeout(() => {
        routerService.setFirstLoad(false);
        history.push("/");
      }, 1500);
    },
  });
  useEffect(() => {
    const animationRefCurrent = animationRef.current;
    animationRefCurrent?.play?.();
    return () => {
      animationRefCurrent?.pause?.();
    };
  }, [animationRef]);
  return (
    <div className={classes.root}>
      <div ref={ref} className={classes.mask} />
      <div className={classes.welcome}>
        <img className={classes.logo} src={logoPng} alt="logo" />
      </div>
    </div>
  );
}
