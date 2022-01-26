import { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core";
import { Drawer, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MailIcon from "@material-ui/icons/Mail";
import EventIcon from "@material-ui/icons/Event";
import DevicesIcon from "@material-ui/icons/Devices";
import SettingsIcon from "@material-ui/icons/Settings";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    }
}));

type SidebarProps = {
    handleDrawerClose: () => void;
    open: boolean;
}

export const Sidebar: FunctionComponent<SidebarProps> = ({ handleDrawerClose, open}) => {

    const classes = useStyles();

    return (
        <Drawer 
            className={classes.drawer} 
            variant="persistent" 
            anchor="left" 
            open={open} 
            classes={{paper: classes.drawerPaper}}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider/>
            <div className="">
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <MailIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Mail"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <EventIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Events"/>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <DevicesIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Devices"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    )
}