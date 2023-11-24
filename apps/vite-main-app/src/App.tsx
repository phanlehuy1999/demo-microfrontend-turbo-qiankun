import { Link, Route, Routes } from "react-router-dom";
import AngularAppRender from "./components/AngularRender";

function App() {
  return (
    <>
      <h1>Vite React Main App</h1>
      <Link to={"/app-angular"}>Link to Angular Micro App</Link>
      <Routes>
        <Route path="/"></Route>
        <Route path="/app-angular" element={<AngularAppRender />}></Route>
      </Routes>
    </>
  );
}

export default App;
