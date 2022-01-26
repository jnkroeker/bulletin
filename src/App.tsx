import { createTheme, makeStyles } from '@material-ui/core';
import {useState} from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import './App.css';
import clsx from 'clsx';
import { Header } from './components/Header';
import { ContentContainer } from './components/ContentContainer';
import { Sidebar } from './components/Sidebar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth 
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: 0
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline/>
        <Header 
          handleDrawerToggle={handleDrawerToggle}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
        <Sidebar handleDrawerClose={handleDrawerClose} open={open}/>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader}/>
          <ContentContainer/>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
