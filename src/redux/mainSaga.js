import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth13294Saga from '../features/EmailAuth13294/redux/sagas';
import CalendarView13293Saga from '../features/CalendarView13293/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth13294Saga,
CalendarView13293Saga,
    
  ]);
}