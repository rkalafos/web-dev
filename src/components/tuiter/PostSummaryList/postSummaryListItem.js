import React from "react";

const PostSummaryItem = ({post = {
    "id": "1",
    "topic": "Web Development",
    "userName": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "image": "../../images/react.png"
}}) => {
    return(
        <li className="card p-2" key={post.id}>
            <div className="row">
                <div className="col-9">
                    <div className="card-subtitle" style={{color: "gray"}}>{post.topic}</div>
                    <div className="card-text">
                        <b style={{color: "white"}}>{post.userName}</b>
                        <i className="fa-solid fa-circle-check ps-1" style={{color: "white"}}/>
                        <span style={{color: "gray"}}> - {post.time}</span>
                    </div>
                    <div className="card-text" style={{color: "white"}}>
                        <b>{post.title}</b>
                    </div>
                </div>
               <div className="col-3">
                    <img src={post.image} className="img-fluid rounded-3" alt={post.title}/>
               </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;