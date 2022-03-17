import React from "react";

const PostSummaryItem = ({post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../images/react.png"
}}) => {
    return(
        <div className="card p-2">
            <div className="row">
                <div className="col-9">
                    <div className="card-subtitle" style={{color: "gray"}}>{post.topic}</div>
                    <div className="card-text">
                        <b>{post.userName}</b>
                        <i className="fa-solid fa-circle-check"/>
                        <span style={{color: "gray"}}> - {post.time}</span>
                    </div>
                    <div className="card-text" style={{color: "white"}}>
                        <b>{post.title}</b>
                    </div>
                </div>
               <div className="col-3">
                    <img src={post.image} className="img-fluid rounded-3"/>
               </div>
            </div>
        </div>
    );
};
export default PostSummaryItem;