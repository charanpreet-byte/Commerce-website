import React from "react"
import ReactDom from 'react-dom'
import Top from "./Resuable/Navbar"
import './indexCss.css'
import Home from './Home.js'
import { createStore, StoreProvider } from 'easy-peasy';
import model from '../model/model'

const store = createStore(
  model,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

const index = () => (
  <StoreProvider store = {store}>
    <div>
      <Top />
      <Home />
    </div>
  </StoreProvider>
)

export default index