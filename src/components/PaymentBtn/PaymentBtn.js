import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper, Button, Divider } from '@material-ui/core/';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '60vw',
    height: '70vh',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    '@media screen and (max-width: 500px)': {
      width: '95vw',
      height: '20%',
    }
  },
  button: {
    backgroundColor: 'purple',
  }
});

class ModalBtn extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    const json = JSON.stringify(this.props.data);
    const data = JSON.parse(json);
    

    return (
      <div>

       <Button variant="contained" color="primary" size="medium" className={classes.button} onClick={this.handleOpen}>
          Payment
        </Button>
        
        {/* Account Modal Render Here */}
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >

          <Paper style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" >
              Payment Method
            </Typography>
            <Divider />
            <Typography variant="body">
              Credit Card: {data.PAN}
              </Typography>
              <Typography variant="body">
              CVV: {data.CVV}
              </Typography>
              <Typography variant="body">
              EXP: {data.Exp}
            </Typography>
          </Paper>
        </Modal>

      </div>
    );
  }
}

ModalBtn.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const ModalBtnWrapped = withStyles(styles)(ModalBtn);

export default ModalBtnWrapped;