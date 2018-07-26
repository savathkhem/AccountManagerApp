import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core/';
import AppBarMenu from './../AppBarMenu';

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
    padding: 0,
  },
});


const Card = (props) => (
<Fragment>
  <Paper style={getModalStyle()} className={props.classes.paper}>
    <AppBarMenu title={props.name}/>
      <Typography variant="title" id="modal-title">
        {props.fax}
      </Typography>
      <Typography variant="subheading" id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
      <CardWrapped />
  </Paper>
</Fragment>
);

Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const CardWrapped = withStyles(styles)(Card);

export default CardWrapped;
