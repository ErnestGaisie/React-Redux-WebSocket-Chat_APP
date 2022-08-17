import { combineReducers } from "redux"
import messages from "./messages"
import users from "./users"
import loginReducer from "./login";

const chat = combineReducers({
  messages,
  users,
  loginReducer
});

export default chat