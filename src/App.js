import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";

import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import { BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/hello" exact={true} element={<HelloWorld/>}/>
                    <Route path="/" exact={true} element={<Labs/>}/>
                    <Route path="/tuiter" exact={true} element={<Tuiter/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
