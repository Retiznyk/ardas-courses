import { connect } from "react-redux";

import { getUsersSelection, getUsers } from "../../store/selectors/users";
import { selectUser } from "../../store/actions/user";

function mapStateToProps(state) {
  return {
    selection: getUsersSelection(state),
    users: getUsers(state)
  };
}

export default connect(
  mapStateToProps,
  { selectUser }
);
