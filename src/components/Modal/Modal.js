import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListItemIcon, Typography, Paper, Divider, Grid } from '@material-ui/core/';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Modal from '@material-ui/core/Modal';
import AppBarMenu from './../AppBarMenu';
import RemittanceBtn from './../RemittanceBtn';

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
  root: {
    flexGrow: 1,
  },
  paper: {
    position: 'absolute',
    width: '70vw',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: 0,
  },
  cardPaper: {
    padding: theme.spacing.unit * 2,
    margin: 10,
    marginLeft:10,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

class ModalBtn extends React.Component {
  state = {
    open: false,
    address: [],
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
    const remit = data.Remittance;

    // console.log(data.Payment)

    return (
      <div>

        {/* List Icon Render Here */}
        <ListItem button onClick={this.handleOpen}>
          <ListItemIcon>
          <AccountCircle />
          </ListItemIcon>
              <Typography>
                  {data.Payee.Name}
              </Typography>
        </ListItem>
        
        {/* Account Modal Render Here */}
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <Grid className={classes.root}>
            <Paper style={getModalStyle()} className={classes.paper}>
            {/* Pass In JSON Data */}
            <AppBarMenu 
            data = {data.Payment}
            />
            <div className={classes.cardPaper}>
              <Typography variant="title">
                  Account:  {data.Payee.Name}
              </Typography>
              <Typography variant="subheading">
                  Attention To: {data.Payee.Attention}
              </Typography>
              <Typography variant="body">
                  Phone:  {data.Payee.Phone}
              </Typography>
              <Typography variant="body">
                  Fax:  {data.Payee.Fax}
              </Typography>

              <Divider />
              <Typography variant="title" style={{marginTop: 10,}}>
                  Address
              </Typography>
              <Typography variant="subheading">
              {data.Payee.Address.Address1}
              </Typography>
              <Typography variant="subheading">
              {data.Payee.Address.Address2}
              </Typography>
              <Typography variant="subheading">
              {data.Payee.Address.City}, {data.Payee.Address.StateOrProvince}, {data.Payee.Address.PostalCode},
              </Typography>
              <Typography variant="subheading">
                  Country:  {data.Payee.Address.Country}
              </Typography>
              <Divider />

              {/* Pass In Data From JSON */}
              <div style={{marginTop: 10, marginBottom: 10}}>
             <RemittanceBtn remit={remit}/> 
             </div>
             
             Last Submission Date: {data.Payee.SubmissionDate}
               </div>
            </Paper>
          </Grid>

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
