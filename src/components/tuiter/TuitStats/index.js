import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <>
            <div className="col-3">
                <i className="fa fa-comment" />
                {tuit.stats.comments}
            </div>
            <div className="col-3">
                <i className="fa fa-retweet" />
                {tuit.stats.retuits}
            </div>
            <div className="col-3">
                <span onClick={likeTuit}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-1" style={{color: 'red'}}/>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"/>
                }
                {tuit.stats && tuit.stats.likes}
                </span>
            </div>
            <div className="col-3">
                <i className="fa fa-arrow-up-from-bracket" />
            </div>
        </>
    );
}
export default TuitStats;