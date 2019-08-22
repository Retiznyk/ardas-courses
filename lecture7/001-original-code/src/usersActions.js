import { GET_USERS } from "./types";
import makeApiRequest from "./makeApiRequest";
import { getUsers } from "./api";

export const loadUsers = () => makeApiRequest(getUsers, GET_USERS);
