import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
const ListPrediction = ({ predictions, onSelect, location }) => {
  const classes = useStyles();
  return (
    <div>
      {predictions.length ? (
        <Paper>
          <List component="nav" className={classes.root}>
            {predictions.map((item) => (
              <ListItem
                key={item.place_id}
                onClick={(e) => {
                  onSelect(item);
                  e.stopPropagation();
                }}
                button
              >
                <i className="material-icons">location_on</i>
                <ListItemText primary={item.description} />
              </ListItem>
            ))}
          </List>
        </Paper>
      ) : null}
    </div>
  );
};

ListPrediction.propTypes = {
  predictions: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default ListPrediction;
