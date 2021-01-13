import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@material-ui/core";
import LabelIcon from "@material-ui/icons/Label";
import MoneyIcon from "@material-ui/icons/Money";
import StatisticsIcon from "@material-ui/icons/Assessment";
import React, { PropsWithChildren } from "react";
import useDashLayoutService from "./useDashLayoutService";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100%;
  min-height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

export default function DashLayout(props: PropsWithChildren<{}>) {
  const dashLayoutService = useDashLayoutService();

  return (
    <Wrapper>
      <Main>{props.children}</Main>
      <Paper elevation={3}>
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
    </Wrapper>
  );
}
