import { connect } from "react-redux";
import { getSelectedUser } from "../../store/selectors/user";

function mapStateToProps(state) {
  return {
    user: getSelectedUser(state)
  };
}

export default connect(mapStateToProps);
