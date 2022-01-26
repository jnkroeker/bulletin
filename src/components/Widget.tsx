import { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "0.5rem"
    },
    header: {
        display: "flex",
        alignItems: "center",
        padding: "0.5rem"
    },
    spacer: {
        flexGrow: 1
    },
    body: {
        padding: "0.5rem",
        flexGrow: 1
    }
})

type WidgetList = {
    [key: string]: any,
}

const widgetNames: WidgetList = {
    a: 'Video Player',
    b: 'Query Container',
    c: 'D3 Container',
};

type WidgetProps = {
    id: string;
    Component: React.ComponentType<any>
}

export const Widget: FunctionComponent<WidgetProps> = ({id, Component}) => {
    const classes = useStyles();
    return (
        <Card>
            <div className={classes.root}>
                <Component/>
            </div>
        </Card>
    )
}