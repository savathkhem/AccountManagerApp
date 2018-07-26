import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Menu } from '@material-ui/core/';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ProfileMenu from "./../ProfileMenu";



const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '60vw',
    height: '70vh',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class AvatarBtn extends React.Component {
  state = {
    profileOpen: false,
    anchorEl: null,
  };

  openUrlResume = () => {
    window.open("https://drive.google.com/file/d/1a2ZHgZj-rLi1yPJuWFzti01fuxhM9xqk/view?usp=sharing","_blank")
}
  
  openUrlLinkedIn = () => {
      window.open("https://www.linkedin.com/in/savathkhem/","_blank")
  }
    
  openUrlFacebook = () => {
      window.open("https://www.facebook.com/savath.khem","_blank")
  }
    
  openUrlTwitter = () => {
      window.open("https://twitter.com/nerdyKambo/","_blank")
  }

  openUrlGithub = () => {
      window.open("https://github.com/savathkhem/","_blank")
  }

  handleProfileClick = () => {
      this.setState(state => ({ profileOpen: !state.profileOpen }));
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };


  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton onClick={this.handleMenu} color={'inherit'}>
            <AccountCircle />
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
                <ProfileMenu 
                  resume={this.openUrlResume}
                  linkedIn={this.openUrlLinkedIn}
                  twitter={this.openUrlTwitter}
                  faceBook={this.openUrlFacebook}
                  gitHub={this.openUrlGithub}
                />
          </Menu>

      </div>
    );
  }
}

AvatarBtn.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const AvatarBtnWrapped = withStyles(styles)(AvatarBtn);

export default AvatarBtnWrapped;