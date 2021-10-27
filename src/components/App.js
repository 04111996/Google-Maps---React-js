import React from "react";
import PropTypes from "prop-types";
import MainComponent from "../Storybook/MainComponent";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: "center",
  },
});
class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{backgroundColor:"#2E578F"}}>
      <Grid container className={classes.root}>
        <Grid item xs={12} >
          <Grid container justify="center">
            <Grid item xs={10}>
              <h1 style={{color:"white"}}>Please search places</h1>
            </Grid>
            <Grid item xs={12} container justify="center">
              <MainComponent />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
