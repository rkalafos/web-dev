import React from "react";
import {Link} from "react-router-dom";


const NavigationSidebar = ({active = 'explore'}) => {
    return(
        <>
            <div className="list-group">
                <div className="list-group-item">
                    <i className="fab fa-twitter"/>
                </div>
                <Link
                    to={"/tuiter"}
                    className={`list-group-item ${active === 'home' ? 'active' : ''}`}
                >
                    <i className="fa-solid fa-house-chimney pe-1"/>
                    <span className="d-none d-xl-inline-block">Home</span>
                </Link>
                <Link
                    to={"/tuiter/explore"}
                    className={`list-group-item ${active === 'explore' ? 'active' : ''}`}
                >
                    <i className="fa-solid fa-hashtag pe-1"/>
                    <span className="d-none d-xl-inline-block">Explore</span>
                </Link>
                <Link
                    to="/tuiter"
                    className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}
                >
                    <i className="fa-solid fa-bell pe-1"/>
                    <span className="d-none d-xl-inline-block">Notifications</span>
                </Link>
                <Link
                    to="/tuiter"
                    className={`list-group-item ${active === 'messages' ? 'active' : ''}`}
                >
                    <i className="fa-solid fa-envelope pe-1"/>
                    <span className="d-none d-xl-inline-block">Messages</span>
                </Link>
                <Link
                    to="/tuiter"
                    className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}
                >
                    <i className="fa-solid fa-bookmark pe-1"/>
                    <span className="d-none d-xl-inline-block">Bookmarks</span>
                </Link>
                <Link
                    to="/tuiter"
                    className={`list-group-item ${active === 'lists' ? 'active' : ''}`}
                >
                    <i className="fa-solid fa-list pe-1"/>
                    <span className="d-none d-xl-inline-block">Lists</span>
                </Link>
                <Link
                    to="/tuiter"
                    className={`list-group-item ${active === 'profile' ? 'active' : ''}`}
                >
                    <i className="fa-solid fa-user pe-1"/>
                    <span className="d-none d-xl-inline-block">Profile</span>
                </Link>
                <Link
                    to="/tuiter"
                    className="ps-0 pe-0 list-group-item list-group-item-action"
                >
                    <span className="p-0 fa-stack fa-1x">
                        <i className="fas fa-circle fa-stack-1x"/>
                        <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"/>
                    </span>
                    <span className="d-none d-xl-inline-block">More</span>
                </Link>
            </div>
            <div className="d-grid mt-2">
                <button className="btn btn-primary btn-block rounded-pill"
                >
                    Tweet
                </button>
            </div>
        </>
    );
}
export default NavigationSidebar;
