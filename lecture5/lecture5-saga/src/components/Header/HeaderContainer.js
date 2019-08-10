import { connect } from "react-redux";
import { getUserSaved } from "../../store/selectors/user";

function mapStateToProps(state) {
  return {
    user: getUserSaved(state)
  };
}

export default connect(mapStateToProps);
