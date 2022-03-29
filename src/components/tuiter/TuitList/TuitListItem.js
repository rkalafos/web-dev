import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../TuitStats";


const TuitListItem = ({tuit =   {
    "_id": "123",
    "topic": "Web Development",
    "postedBy": {
        "username": "ReactJS"
    },
    "liked": true,
    "verified": false,
    "handle": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "attachments": {
        "video": "unKvMC3Y1kI"
    },
    "logoImage": "../../../images/react.png",
    "avatarImage": "../../../images/react.png",
    "stats": {
        "comments": 123,
        "retuits": 234,
        "likes": 345
    }
}}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };

    return(

        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={tuit.avatarImage} width="48" className="rounded-circle float-start" alt={tuit.handle}/>
                </div>
                <div className="col-9">
                    <div className="row d-inline">
                        <b className="p-0" style={{color: "white"}}>{tuit.postedBy.username}</b>
                        <span className="p-0" style={{color: "gray"}}> @{tuit.postedBy.username}</span>
                    </div>
                    <div className="row">
                        {tuit.tuit}
                    </div>
                    {tuit?.attachments?.image &&
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
                        onClick={() => deleteTuit(tuit)}
                        className="fas fa-remove fa-pull-right"
                    />
                </div>
            </div>

        </li>
    )
}
export default TuitListItem;