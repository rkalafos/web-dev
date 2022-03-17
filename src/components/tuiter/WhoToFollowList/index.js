import React from "react";
import WhoToFollowListItem from "./whoToFollowListItem.js";
import who from "./who.json";

const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item" key={1}>Who to follow</li>
            {
                who.map(person => {
                    return (
                        <WhoToFollowListItem who={person}/>
                    );
                })
            }
        </ul>
    );
}
export default WhoToFollowList;