import './styles/global.css'

import { Provider } from "react-redux";

import { Player } from "./pages/Player";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Player/>
    </Provider>
  )
}

export default App
