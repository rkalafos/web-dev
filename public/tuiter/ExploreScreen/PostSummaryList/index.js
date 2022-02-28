import PostSummaryItem from "./PostSummaryItem";
import exploreItems from "./posts";

const PostSummaryList = () => {
    console.log(exploreItems);
    return(`
            <ul>
                ${exploreItems.map(post => {
                    return (PostSummaryItem(post));
                }).join('')}
            </ul>
    `);
}
export default PostSummaryList;