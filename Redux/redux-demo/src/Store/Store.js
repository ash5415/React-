   /// import all the reducers ///

   import Reducer from "../Reducers/Reducer";

   import {createStore,applyMiddleware} from'redux';

   const store = createStore(Reducer,applyMiddleware());

   export default store;