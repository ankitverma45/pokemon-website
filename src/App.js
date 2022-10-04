import { Routes, Route } from "react-router-dom";
import SingleItem from "./component/SingleItem";
import { BrowserRouter } from "react-router-dom"
import Menu from "./Menu";

const App=()=>{
   return (
    <BrowserRouter>
    <Routes>
      <Route >
      <Route path="/" element={<Menu />} />
        <Route path="single" element={<SingleItem />} />
      </Route>
    </Routes>
  </BrowserRouter>
   )
}
export default App