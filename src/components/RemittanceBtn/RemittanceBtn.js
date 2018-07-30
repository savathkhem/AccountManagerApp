import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Button } from '@material-ui/core/';
import Modal from '@material-ui/core/Modal';
import Tabs from "./../Tabs/";

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
    // backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: 0,
    '@media screen and (max-width: 500px)': {
      width: '100vw',
      height: '40%',
    }
  },
  button: {
    backgroundColor: 'purple',
  }
});

class RemittanceBtn extends React.Component {
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

    const json = JSON.stringify(this.props.remit);
    const data = JSON.parse(json);

    // console.log(data)
    

    return (
      <div>

        {/* List Icon Render Here */}

        <Button variant="contained" color="primary" size="medium" className={classes.button} onClick={this.handleOpen}>
          Remittance
        </Button>

        
        {/* Account Modal Render Here */}
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
        <Paper style={getModalStyle()} className={classes.paper}>
            {/* Pass in JSON Data */}
            <Tabs 
              data={data}
            />
        </Paper>
        </Modal>

      </div>
    );
  }
}

RemittanceBtn.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const RemittanceBtnWrapped = withStyles(styles)(RemittanceBtn);

export default RemittanceBtnWrapped;