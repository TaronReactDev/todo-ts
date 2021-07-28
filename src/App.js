import ToDo from "./componentes/index"
import {Provider} from "react-redux";
import store from "./componentes/redux/store"




function App() {
  return (
    <Provider store={ store}>
    <ToDo/>
    </Provider>
  );
}

export default App;
