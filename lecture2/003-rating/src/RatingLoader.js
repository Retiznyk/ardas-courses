import React from "react";
import Rating from "./Rating";
import { getRating } from "./api";

export default class RatingLoader extends React.Component {
  state = {
    data: 0
  };

  loadData() {
    getRating()
      .then(data =>
        this.setState({
          data,
          error: null
        })
      )
      .catch(error => this.setState({ error }));
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return <Rating rating={this.state.data} showText={true} />;
  }
}
