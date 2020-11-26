import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import racerReducer from '../reducers/racerReducer';
import detailReducer from '../reducers/detailsReducer';
import resultReducer from '../reducers/resultsReducer';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  racerReducer: racerReducer,
  detailReducer: detailReducer,
  resultReducer: resultReducer,
});

const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default configureStore;
