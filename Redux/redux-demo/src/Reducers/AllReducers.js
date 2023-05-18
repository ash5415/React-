//  combineReducers is the function ///

 import{combineReducers} from'redux';

// import all the reducers here. 
 // we have only one reducers that i.e reducer.js

 import Reducer from './Reducer';

  const rootReducer=combineReducers(
    {
         Reducer
    }
 )

 export default rootReducer;