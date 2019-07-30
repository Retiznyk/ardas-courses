import React from "react";
import PropTypes from "prop-types";

export default class Rating extends React.Component {
  state = {
    value: this.props.initialValue || 3
  };

  static propTypes = {
    showText: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    initialValue: PropTypes.number
  };

  static defaultProps = {
    showText: false,
    showIcons: true,
    min: 1,
    max: 5,
    renderValue: value => <span className="rating-value-label">{value}</span>
  };

  handleIncrement = () => this.updateValue(1);

  handleDecrement = () => this.updateValue(-1);

  valueToArray = () => Array.from(new Array(this.state.value)).map((_, i) => i);

  canUpdateValue = nextValue => {
    const { min, max } = this.props;
    return nextValue <= max && nextValue >= min;
  };

  updateValue = diff =>
    this.setState(prevState => {
      const nextValue = prevState.value + diff;
      const canUpdate = this.canUpdateValue(nextValue);
      return canUpdate ? { value: nextValue } : null;
    });

  render() {
    const { showText, showIcons } = this.props;
    const { value } = this.state;

    return (
      <div className="rating">
        <button
          className="rating-button rating-button-decrease"
          onClick={this.handleDecrement}
        >
          -
        </button>
        <div className="rating-value">
          <div className="rating-value-icons">
            {showIcons &&
              this.valueToArray().map(i => (
                <span key={i} className="rating-value-icon" />
              ))}
          </div>

          {showText && this.props.renderValue(value)}
        </div>
        <button
          className="rating-button rating-button-increase"
          onClick={this.handleIncrement}
        >
          +
        </button>
      </div>
    );
  }
}
