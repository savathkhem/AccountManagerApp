import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabs extends React.Component {
  state = {
    value: 0,
  };
  

  handleChange = (event, value) => {
    // console.log(value)
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const json = JSON.stringify(this.props.data);
    const data = JSON.parse(json);

    // console.log(data[0]) 

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            {/* .map function */}
            {data.map((res, index) => (
                <Tab label={"Remittance "+ index}/>
            ))}
        </Tabs>
        </AppBar>

        {/* .map function */}
        {data.map((res, index) => (
        <div>
            {value === index && <TabContainer>
                <Typography variant="headline">
                    Payor Name:    {data[index].PayorName}
                </Typography>
                <Typography variant="subheading">
                    Payor Id:    {data[index].PayorId}
                </Typography>
                <Typography variant="subheading">
                    InvoiceNo:    {data[index].InvoiceNo}
                </Typography>
                <Typography variant="subheading">
                    Amount:    {data[index].Amount}
                </Typography>
                <Typography variant="body">
                    Description:    {data[index].Description}
                </Typography>
            </TabContainer>}
        </div>
         ))}
      </div>
    );
  }
}

ScrollableTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabs);