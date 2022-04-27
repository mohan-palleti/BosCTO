import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducer";

// const store = createStore(rootReducer);
// const middleware = [thunk]
const reducer = {
  // User
  PetData: rootReducer,
};
const store = configureStore({
  reducer,
});
export default store;
