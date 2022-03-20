import React from "react";
import PostSummaryItem from "./postSummaryListItem.js";
import posts from "./posts.json";

const PostSummaryList = () => {
    return(
            <ul className="p-0">
                {posts.map(post => {
                    return <PostSummaryItem post={post} key={post.id} />
                })}
            </ul>
    );
}
export default PostSummaryList;