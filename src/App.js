import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/bootstrap/cyborg/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";

import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExploreComponent from "./components/tuiter/ExploreComponent";
import HomeScreen from "./components/tuiter/HomeScreen";


function App() {
    return (
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/">
                            <Route index element={<Labs/>} />
                            <Route path="labs" elements={<Labs/>} />
                            <Route path="hello" element={<HelloWorld/>} />
                            <Route path="tuiter" element={<Tuiter/>} >
                                <Route index element={<HomeScreen />} />
                                <Route path="explore" element={<ExploreComponent />} />
                                <Route path="notifications" element={<h1>Notifications Screen</h1>} />
                            </Route>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
    );
}

export default App;
