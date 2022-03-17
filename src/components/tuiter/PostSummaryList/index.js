import React from "react";
import PostSummaryItem from "./postSummaryListItem.js";
import posts from "./posts.json";

const PostSummaryList = () => {
    return(
            <ul className="p-0">
                {posts.map(post => {
                    return <PostSummaryItem post={post} />
                })}
            </ul>
    );
}
export default PostSummaryList;