  import "./App.css"
import Calculator from "./components/Calculator"
import { Provider } from "react-redux"
import store from "./store/store"
 
 
 const App = () => {
   return (
   <Provider store={store}>
      <div className="app">
      <Calculator/>
     </div>
   </Provider>
   )
 }
 
 export default App