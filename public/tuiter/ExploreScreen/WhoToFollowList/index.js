import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whoTo from "./who.js";

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <li class="list-group-item">Who to follow</li>
                ${whoTo.map(person => {
                    return (WhoToFollowListItem(person));
                }).join('')}
            </ul>
`);
}
export default WhoToFollowList;