import React from 'react';
import rootReducer  from "../redux/reducers/index"
import {createStore} from "redux";

const store = createStore(rootReducer);


export default store;
