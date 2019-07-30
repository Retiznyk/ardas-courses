import React from "react";

export default validate => Component =>
  class InputValidatorWrapper extends React.Component {
    validate() {
      return validate(this.props.value);
    }

    render() {
      return <Component {...this.props} />;
    }
  };
