import React from 'react'
import { Link } from 'react-router-dom'

import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'

// material
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core'

// icons
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  toolBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}))

function Nav({ modules, open, setOpen }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const classes = useStyles()
  const theme = useTheme()

  const handleNavClick = (event, index) => {
    setSelectedIndex(index)
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const starterNav = (x) => {
    if (x.type === 'starter') {
      return true
    }
  }

  const coreNav = (x) => {
    if (x.type === 'core') {
      return true
    }
  }

  const fullWidthNav = (x) => {
    if (x.type === 'fullwidth') {
      return true
    }
  }

  const columnsNav = (x) => {
    if (x.type === 'columns') {
      return true
    }
  }

  const otherNav = (x) => {
    if (x.type === 'other') {
      return true
    }
  }

  const utilityNav = (x) => {
    if (x.type === 'utility') {
      return true
    }
  }

  const formattingNav = (x) => {
    if (x.type === 'formatting') {
      return true
    }
  }

  const createNavLink = ({ id, path, data }, key) => {
    return (
      <ListItem
        component={Link}
        to={path}
        key={key}
        selected={selectedIndex === id}
        onClick={(event) => handleNavClick(event, id)}
        button
      >
        <ListItemIcon>
          <ArrowRightIcon color="disabled" />
        </ListItemIcon>
        <ListItemText primary={data.heading} />
      </ListItem>
    )
  }

  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Auspost email builder
          </Typography>
          <Box style={{ flex: 1, textAlign: 'right' }}>
            <Button
              variant="contained"
              component={Link}
              to={'/'}
              onClick={(event) => handleNavClick(event, 0)}
            >
              Home
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        color="primary"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <Typography variant="overline" display="block">
              Get started
            </Typography>
          </ListItem>
          {modules.filter(starterNav).map(createNavLink)}
          <Box m={1} />
          <ListItem>
            <Typography variant="overline" display="block">
              Core Modules
            </Typography>
          </ListItem>
          {modules.filter(coreNav).map(createNavLink)}
          <Box m={1} />
          <ListItem>
            <Typography variant="overline" display="block">
              Full Width Modules
            </Typography>
          </ListItem>
          {modules.filter(fullWidthNav).map(createNavLink)}
          <Box m={1} />
          <ListItem>
            <Typography variant="overline" display="block">
              2 Column Modules
            </Typography>
          </ListItem>
          {modules.filter(columnsNav).map(createNavLink)}
          <Box m={1} />
          <ListItem>
            <Typography variant="overline" display="block">
              Other Modules
            </Typography>
          </ListItem>
          {modules.filter(otherNav).map(createNavLink)}
          <Box m={1} />
          <ListItem>
            <Typography variant="overline" display="block">
              Utilities
            </Typography>
          </ListItem>
          {modules.filter(utilityNav).map(createNavLink)}
          <Box m={1} />
          <ListItem>
            <Typography variant="overline" display="block">
              Formatting
            </Typography>
          </ListItem>
          {modules.filter(formattingNav).map(createNavLink)}
        </List>
      </Drawer>
    </div>
  )
}

export default Nav
