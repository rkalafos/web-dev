import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row m-2">
                <div class="col-11 border rounded-pill bg-white">
                    <div class="input-group input-group-sm">
                        <div class="input-group-text bg-white border-0">
                            <i class="fa-solid fa-search" style="color:gray"></i>
                        </div>
                        <input
                                type="text"
                                class="form-control form-control-sm py-2 border-0"
                                placeholder="Search Twitter"
                        />
                    </div>
                </div>
                <div class="col-1 d-flex justify-content-center">
                    <a class="d-flex align-items-center text-decoration-none" href="explore-settings.html">
                        <i class="fa-solid fa-gear"></i>
                    </a>
                </div>
            </div>
            <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div class="card p-0 mb-2">
                <img class="card-img" src="../../images/starship.jpeg" alt="starship"/>
                <div class="p-1 m-0 card-img-overlay h-100 d-flex flex-column justify-content-end">
                    <h2 class="card-title text-white">SpaceX's Starship</h2>
                </div>
            </div>
            ${PostSummaryList()}
    `);
}
export default ExploreComponent;
