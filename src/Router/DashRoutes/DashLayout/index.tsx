import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@material-ui/core";
import LabelIcon from "@material-ui/icons/Label";
import MoneyIcon from "@material-ui/icons/Money";
import StatisticsIcon from "@material-ui/icons/Assessment";
import React, { PropsWithChildren } from "react";
import { makeStyles } from "@material-ui/core";
import useDashLayoutService from "./useDashLayoutService";
import { useRouteMatch } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    paddingBottom: 56,
  },
  bottomNav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

interface MatchParams {
  key: string;
}

export default function DashLayout(props: PropsWithChildren<{}>) {
  const match = useRouteMatch<MatchParams>("/dash/:key");
  const dashLayoutService = useDashLayoutService(match?.params?.key || "money");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>{props.children}</div>
      <Paper elevation={3} className={classes.bottomNav}>
        <BottomNavigation
          value={dashLayoutService.dashKey}
          showLabels
          onChange={dashLayoutService.jumpRouteByKey}
        >
          <BottomNavigationAction
            value="label"
            label="标签"
            icon={<LabelIcon />}
          />
          <BottomNavigationAction
            value="money"
            label="记一笔"
            icon={<MoneyIcon />}
          />
          <BottomNavigationAction
            value="statistics"
            label="统计"
            icon={<StatisticsIcon />}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}
