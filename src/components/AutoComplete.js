import React from "react";
import PropTypes from "prop-types";
import ListPrediction from "./ListPrediction";
import Input from "@material-ui/core/Input";
import ListHistory from "./ListHistory";
import Map from "./Map";
import onClickOutside from "react-onclickoutside";
import Paper from "@material-ui/core/Paper";
import "../styles/index.css";
const style = {
  parent: {
    position: "relative",
  },
  input: {
    padding: 16,
  },
};
class AutoComplete extends React.Component {
  handleClickOutside = (evt) => {
    this.props.onBlur();
  };
  render() {
    return (
      <div style={style.parent}>
        <div className="autoComplete">
          <Paper>
            <Input
              style={{marginRight:20}}
              placeholder="Search Places"
              fullWidth
              type="text"
              value={this.props.value}
              onChange={(e) => this.props.onChange(e.target.value)}
              onFocus={this.props.onFocus}
            />
          </Paper>
          {this.props.showHistory ? (
            <ListHistory
              list={this.props.userHistory}
              onClick={this.props.selectFromHistory}
            />
          ) : null}
          {this.props.showPrediction ? (
            <ListPrediction
              predictions={this.props.sugesstion}
              onSelect={this.props.onSelect}
              location={this.props.location}
            />
          ) : null}
        </div>
        <Map location={this.props.location} />
      </div>
    );
  }
}

AutoComplete.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  onFocus: PropTypes.func.isRequired,
  sugesstion: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  userHistory: PropTypes.array,
  showHistory: PropTypes.bool.isRequired,
  onBlur: PropTypes.func.isRequired,
  selectFromHistory: PropTypes.func.isRequired,
  showPrediction: PropTypes.bool.isRequired,
};
AutoComplete.defaultProps = {
  userHistory: [],
};
export default onClickOutside(AutoComplete);
