import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../TuitStats";
import {deleteTuit} from "../../../actions/tuits-actions";


const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    return(

        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    {tuit.avatarImage &&
                        <img
                            src={tuit.avatarImage}
                            width="48"
                            className="rounded-circle float-start"
                            alt={tuit.handle ? tuit.handle : tuit.avatarImage}
                        />
                    }
                </div>
                <div className="col-9">
                    <div className="row d-inline">
                        <b className="p-0" style={{color: "white"}}>{tuit.postedBy?.username}</b>
                        <span className="p-0" style={{color: "gray"}}> @{tuit.postedBy?.username}</span>
                    </div>
                    <div className="row">
                        {tuit.tuit}
                    </div>
                    {tuit.attachments?.image &&
                        <div className="row">
                            <img src={tuit.attachments.image} alt={"abcdefg"} />
                        </div>
                    }
                    {tuit?.attachments?.video &&
                        <div className="row video-responsive">
                            <iframe
                                src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                title={tuit.handle}
                            />
                        </div>
                    }
                    <div className="row">
                        <TuitStats tuit={tuit} />
                    </div>
                </div>
                <div className="col-1">
                    <i
                        className="fas fa-remove float-end"
                        onClick={() => deleteTuit(dispatch, tuit)}
                    />
                </div>
            </div>

        </li>
    )
}
export default TuitListItem;