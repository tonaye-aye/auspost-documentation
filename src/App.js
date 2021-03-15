import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

// material
import { Container, CssBaseline } from '@material-ui/core'

// components
import Template from './components/template'
import Nav from './components/nav'
import Home from './components/home'

// modules
import modules from './modules/modules'

// drawer
const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}))

function App() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const routeComponents = modules.map(({ path, data }, key) => {
    console.log(key)
    return (
      <Route path={path} key={key}>
        <Template data={data} />
      </Route>
    )
  })

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Nav modules={modules} open={open} setOpen={setOpen} />
        <div
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <Container maxWidth="lg">
            <Switch>
              {routeComponents}
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
        </div>
      </div>
    </Router>
  )
}

export default App
