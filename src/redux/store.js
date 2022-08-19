import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { rootReducer } from "./Reducer/rootReducer";
const { createStore, applyMiddleware } = require("redux");

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));