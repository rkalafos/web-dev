import React from "react";
import WhoToFollowListItem from "./whoToFollowListItem.js";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return (
        <ul className="list-group">
            <li className="list-group-item" key={1}>Who to follow</li>
            {
                who.map(person => {
                    return (
                        <WhoToFollowListItem who={person} key={person.id}/>
                    );
                })
            }
        </ul>
    );
}
export default WhoToFollowList;