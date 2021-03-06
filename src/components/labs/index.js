import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output/index.js";
import TodoList from "./todo/todo-list.js";
import ReduxExamples from "./redux-exmples";

const Labs = () => {
    return(
        <div>
            <h1>Labs</h1>
            <ReduxExamples />
            <TodoList />
            <ConditionalOutput />
            <Styles />
            <Classes/>
            <Link to="/hello">
                Hello
            </Link>
            {" | "}
            <Link to="/tuiter">
                Tuiter
            </Link>
        </div>
    )
};

export default Labs;
