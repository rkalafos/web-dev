

const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="../home.html" class="list-group-item list-group-item-action">
                        <i class="fa-solid fa-house-chimney"></i>
                        <span class="d-none d-xl-inline-block">Home</span>
                </a>
                <a href="explore.html" class="list-group-item list-group-item-action active">
                    <i class="fa-solid fa-hashtag"></i>
                    <span class="d-none d-xl-inline-block">Explore</span>
                </a>
                <a href="../notifications.html" class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-bell"></i>
                    <span class="d-none d-xl-inline-block">Notifications</span>
                </a>
                <a href="../messages.html" class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-envelope"></i>
                    <span class="d-none d-xl-inline-block">Messages</span>
                </a>
                <a href="../bookmarks.html" class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-bookmark"></i>
                    <span class="d-none d-xl-inline-block">Bookmarks</span>
                </a>
                <a href="../lists.html" class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-list"></i>
                    <span class="d-none d-xl-inline-block">Lists</span>
                </a>
                <a href="../profile.html" class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-user"></i>
                    <span class="d-none d-xl-inline-block">Profile</span>
                </a>
                <a href="#" class="ps-0 pe-0 list-group-item list-group-item-action">
                    <span class="p-0 fa-stack fa-1x">
                        <i class="fas fa-circle fa-stack-1x"></i>
                        <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="d-none d-xl-inline-block">More</span>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill"
                >
                    Tweet
                </a>
            </div>
    `);
}
export default NavigationSidebar;
