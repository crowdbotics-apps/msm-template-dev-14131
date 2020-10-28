import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth13294Reducer from '../features/EmailAuth13294/redux/reducers';
import CalendarView13293Reducer from '../features/CalendarView13293/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth13294: EmailAuth13294Reducer,
CalendarView13293: CalendarView13293Reducer,

});