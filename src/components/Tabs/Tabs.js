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

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0,
  };
  

  handleChange = (value) => {
    console.log(value)
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const json = JSON.stringify(this.props.data);
    const data = JSON.parse(json);

    console.log(data[0]) 

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
            <div>
                <Tab label={"Remittance "+ index}/>
            </div>
            ))}
        </Tabs>
        </AppBar>

        {/* .map function */}
        {data.map((res, i) => (
        <div>
            {value === i && <TabContainer>
                <Typography variant="Headline">
                    Payor Name:    {data[i].PayorName}
                </Typography>
                <Typography variant="subheading">
                    Payor Id:    {data[i].PayorId}
                </Typography>
                <Typography variant="subheading">
                    InvoiceNo:    {data[i].InvoiceNo}
                <Typography variant="subheading">
                    Amount:    {data[i].Amount}
                </Typography>
                </Typography>
                <Typography variant="body">
                    Description:    {data[i].Description}
                </Typography>
            </TabContainer>}
        </div>
         ))}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);