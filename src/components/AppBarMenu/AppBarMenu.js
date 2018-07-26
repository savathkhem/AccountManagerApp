import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, MenuItem,Menu } from '@material-ui/core/';
import SettingIcon from '@material-ui/icons/Settings';
import PaymentBtn from "./../PaymentBtn";


const styles = {
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBar: {
    backgroundColor: '#a108a1',
  },
};

class AppBarMenu extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const json = JSON.stringify(this.props.data);
    const data = JSON.parse(json);

    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    // console.log(data)

    return (
        <Fragment>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Account Details
            </Typography>

            {/* Pass In JSON */}
            <PaymentBtn 
            data={data}
            /> 
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <SettingIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Create</MenuItem>
                  <MenuItem onClick={this.handleClose}>Read</MenuItem>
                  <MenuItem onClick={this.handleClose}>Update</MenuItem>
                  <MenuItem onClick={this.handleClose}>Delete</MenuItem>

                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

AppBarMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarMenu);