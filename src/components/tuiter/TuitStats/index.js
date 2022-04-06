import {useDispatch} from "react-redux";
import React from "react";
import {updateTuit} from "../../../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="col-3">
                <i className="fa fa-comment" />
                {tuit.stats?.comments}
            </div>
            <div className="col-3">
                <i className="fa fa-retweet" />
                {tuit.stats?.retuits}
            </div>
            <div className="col-3">
                <span onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    liked: !tuit.liked,
                    likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1
                })}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-1" style={{color: 'red'}}/>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"/>
                }
                {tuit.likes}
                </span>
            </div>
            <div className="col-3">
                <i className="fa fa-arrow-up-from-bracket" />
            </div>
        </>
    );
}
export default TuitStats;