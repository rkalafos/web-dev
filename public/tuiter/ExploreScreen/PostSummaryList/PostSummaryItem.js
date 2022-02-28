

const PostSummaryItem = (post) => {
    // post ex: {
    //     "topic": "Web Development",
    //     "userName": "ReactJS",
    //     "time": "2h",
    //     "image": "../../images/react-blue.png",
    //     "title": "React.js is a component based front end library...",
    //   },
    return(`
        <div class="card p-2">
            <div class="row">
                <div class="col-9">
                    <div class="card-subtitle" style="color: gray">${post.topic}</div>
                    <div class="card-text">
                        <b>${post.userName}</b>
                        <i class="fa-solid fa-circle-check"></i>
                        <span style="color: gray"> - ${post.time}</span>
                    </div>
                    <div class="card-text">
                        <b>${post.title}</b>
                    </div>
                </div>
               <div class="col-3">
                    <img src=${post.image} class="img-fluid rounded-3">
               </div>
            </div>
        </div>
    `);
};
export default PostSummaryItem;