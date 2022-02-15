import Home from "./Views/Home/Home";
import {Routes, Route} from "react-router-dom";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
