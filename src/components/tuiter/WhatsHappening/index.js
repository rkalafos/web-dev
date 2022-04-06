import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../../../actions/tuits-actions";

const WhatsHappening = () => {
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] = useState({tuit: ""});
    return (
        <>
            <div className="row p-3">
                <div className="col-2">
                    <img
                        src="../../../images/britneyspears.jpeg"
                        width="48"
                        className="rounded-circle float-start"
                        alt={"me, britney"}
                    />
                </div>
                <div className="col-10">
                    <textarea
                        style={{
                            background: "black",
                            color: "gray",
                            width: "100%",
                            border: 0
                        }}
                        value={newTuit.tuit}
                        placeholder="What's happening?"
                        onChange={(e) =>
                            setNewTuit({
                                ...newTuit,
                                tuit: e.target.value
                            })
                        }
                    >
                    </textarea>
                    <hr/>
                    <i className="fa fa-image pe-3" style={{color: "DeepSkyBlue"}}/>
                    <i className="fa fa-chart-line pe-3" style={{color: "DeepSkyBlue"}}/>
                    <i className="fa fa-face-smile pe-3" style={{color: "DeepSkyBlue"}}/>
                    <i className="fa fa-calendar" style={{color: "DeepSkyBlue"}}/>
                    <button
                        className="btn btn-primary fa-pull-right rounded-pill"
                        onClick={() => createTuit(dispatch, newTuit)}
                    >
                        Tweet
                    </button>
                </div>
            </div>
        </>
    );
}
export default WhatsHappening;