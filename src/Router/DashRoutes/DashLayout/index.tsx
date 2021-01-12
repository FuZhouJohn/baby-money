import {BottomNavigation, BottomNavigationAction, Paper} from "@material-ui/core";
import LabelIcon from "@material-ui/icons/Label";
import MoneyIcon from "@material-ui/icons/Money";
import AssessmentIcon from "@material-ui/icons/Assessment";
import React, {PropsWithChildren} from "react";
import { makeStyles } from "@material-ui/core";
import useDashLayoutService from "./useDashLayoutService";

const useStyles = makeStyles({
    root: {
        paddingBottom: 56,
    },
    bottomNav: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
    },
});


export default function DashLayout(props:PropsWithChildren<{}>) {
    const dashLayoutService = useDashLayoutService()

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div>{props.children}</div>
            <Paper elevation={3} className={classes.bottomNav}>
                <BottomNavigation
                    value={dashLayoutService.dashKey}
                    showLabels
                    onChange={((event, value) => {
                        dashLayoutService.setDashKey(value)
                        dashLayoutService.handleClick(value)
                    })}
                >
                    <BottomNavigationAction value='label' label="标签" icon={<LabelIcon/>}/>
                    <BottomNavigationAction value='money' label="记一笔" icon={<MoneyIcon/>}/>
                    <BottomNavigationAction value='assessment' label="统计" icon={<AssessmentIcon/>}/>
                </BottomNavigation>
            </Paper>

        </div>
    )
}
