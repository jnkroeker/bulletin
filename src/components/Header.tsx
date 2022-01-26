import { FunctionComponent } from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Badge, Typography, makeStyles } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        [theme.breakpoints.up("sm")]: {
            zIndex: theme.zIndex.drawer + 1
        }
    },
    rightIcons: {
        marginLeft: theme.spacing(0.5)
    },
    spacer: {
        flexGrow: 1
    }
}));

type HeaderProps = {
    handleDrawerToggle: () => void;
    toggleDarkMode: () => void;
    darkMode: boolean;
}

export const Header: FunctionComponent<HeaderProps> = ({ handleDrawerToggle, toggleDarkMode, darkMode}) => {
    
    const classes = useStyles();

    return (
        <AppBar>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    Understudy
                </Typography>
                <div className={classes.spacer} />
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDarkMode}
                    className={classes.rightIcons}
                >
                    {darkMode ? <Brightness7Icon/> : <Brightness4Icon/> }
                </IconButton>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    className={classes.rightIcons}
                >
                    <Badge badgeContent={0} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    className={classes.rightIcons}
                >
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}