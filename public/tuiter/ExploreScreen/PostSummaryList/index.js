import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js";

const PostSummaryList = () => {
    console.log(exploreItems);
    return(`
            <ul class="p-0">
                ${exploreItems.map(post => {
                    return (PostSummaryItem(post));
                }).join('')}
            </ul>
    `);
}
export default PostSummaryList;