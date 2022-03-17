import React from "react";


const NavigationSidebar = ({active = 'explore'}) => {
    return(
        <>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"/>
                </a>
                <a
                    className={`list-group-item ${active === 'home' ? 'active' : ''}`}
                >
                    <i className="fa-solid fa-house-chimney"/>
                    <span className="d-none d-xl-inline-block">Home</span>
                </a>
                <a
                    className={`list-group-item ${active === 'explore' ? 'active' : ''}`}
                >
                    <i className="fa-solid fa-hashtag"/>
                    <span className="d-none d-xl-inline-block">Explore</span>
                </a>
                <a
                    href="../../../../public/tuiter/notifications.html"
                    className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}
                >
                    <i className="fa-solid fa-bell"/>
                    <span className="d-none d-xl-inline-block">Notifications</span>
                </a>
                <a
                    href="../../../../public/tuiter/messages.html"
                    className={`list-group-item ${active === 'messages' ? 'active' : ''}`}
                >
                    <i className="fa-solid fa-envelope"/>
                    <span className="d-none d-xl-inline-block">Messages</span>
                </a>
                <a
                    href="../../../../public/tuiter/bookmarks.html"
                    className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}
                >
                    <i className="fa-solid fa-bookmark"/>
                    <span className="d-none d-xl-inline-block">Bookmarks</span>
                </a>
                <a
                    href="../../../../public/tuiter/lists.html"
                    className={`list-group-item ${active === 'lists' ? 'active' : ''}`}
                >
                    <i className="fa-solid fa-list"/>
                    <span className="d-none d-xl-inline-block">Lists</span>
                </a>
                <a
                    href="../../../../public/tuiter/profile.html"
                    className={`list-group-item ${active === 'profile' ? 'active' : ''}`}
                >
                    <i className="fa-solid fa-user"/>
                    <span className="d-none d-xl-inline-block">Profile</span>
                </a>
                <a href="#" className="ps-0 pe-0 list-group-item list-group-item-action">
                    <span className="p-0 fa-stack fa-1x">
                        <i className="fas fa-circle fa-stack-1x"/>
                        <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"/>
                    </span>
                    <span className="d-none d-xl-inline-block">More</span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="../../../../public/tuiter/tuit.html"
                   className="btn btn-primary btn-block rounded-pill"
                >
                    Tweet
                </a>
            </div>
        </>
    );
}
export default NavigationSidebar;
