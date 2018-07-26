import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, Typography, IconButton, Hidden, Divider, ListItem, List } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from '../Modal/';
import AvatarBtn from './../AvatarBtn'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    // position: 'inherit',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // position: 'absolute',
    backgroundColor: 'purple',
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'fixed',
      // top: 63,
      // height: '91vh',
    },
  },
  content: {
    flex: 'auto',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  avatar: {
    marginLeft: 'auto',
  }
});

const ResponsiveApp = (props) =>  (

  <div classes={props.classes.root}>
        <AppBar className={props.classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={props.onClick}
              className={props.classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Account Menu
            </Typography>
            <div className={props.classes.avatar}>
            <AvatarBtn />
            </div>
          </Toolbar>
        </AppBar>

        {/* Mobile Responsive Drawer */}
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor='left'
            open={props.open}
            onClose={props.onClick}
            classes={{
              paper: props.classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div classes={props.classes.toolbar}>
              <Divider />
              <List>
              <ListItem>
                <Typography variant="title" color="inherit" noWrap>
                  Account Menu
                </Typography>
              </ListItem>
              </List>
              <Divider />
              <List>
              {props.data.map((account, index) => (
                <Modal 
                id={index}
                key={index}
                data={account}
              />
              ))}
              </List>

            </div>
          </Drawer> 
        </Hidden>

        {/* Permanent Drawer */}
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: props.classes.drawerPaper,
            }}
          >
          <div classes={props.classes.toolbar}>
            <Divider />
              <List>
              <ListItem>
                <Typography variant="title" color="inherit" noWrap>
                  Account Menu
                </Typography>
              </ListItem>
              </List>
            <Divider />
            <List>
            {props.data.map((account, index) => (
              <Modal 
                id={index}
                key={index}
                data={account}       
                />
              ))}
            </List>
          </div>
          </Drawer>
        </Hidden>
        
  </div>
);

ResponsiveApp.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveApp);
