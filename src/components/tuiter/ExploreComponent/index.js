import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(
        <>
            <div className="row m-2">
                <div className="col-11 border rounded-pill bg-white">
                    <div className="input-group input-group-sm">
                        <div className="input-group-text bg-white border-0">
                            <i className="fa-solid fa-search" style={{color :"gray"}}/>
                        </div>
                        <input
                            type="text"
                            className="form-control form-control-sm py-2 border-0"
                            placeholder="Search Twitter"
                        />
                    </div>
                </div>
                <div className="col-1 d-flex justify-content-center">
                    <a className="d-flex align-items-center text-decoration-none" href="explore-settings.html">
                        <i className="fa-solid fa-gear fa-2x fa-pull-right"/>
                    </a>
                </div>
            </div>
            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item" key={"for-you"}>
                    <a className="nav-link active" aria-current="page" href="/">For You</a>
                </li>
                <li className="nav-item" key={"trending"}>
                    <a className="nav-link" href="/">Trending</a>
                </li>
                <li className="nav-item" key={"news"}>
                    <a className="nav-link" href="/">News</a>
                </li>
                <li className="nav-item" key={"sports"}>
                    <a className="nav-link" href="/">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block" key={"entertainment"}>
                    <a className="nav-link" href="/">Entertainment</a>
                </li>
            </ul>
            <div className="card p-0 mb-2">
                <img className="card-img" src="../../../images/starship.jpeg" alt="starship"/>
                <div className="p-1 m-0 card-img-overlay h-100 d-flex flex-column justify-content-end">
                    <h2 className="card-title text-white">SpaceX's Starship</h2>
                </div>
            </div>
            {PostSummaryList()}
        </>
    );
}
export default ExploreComponent;
