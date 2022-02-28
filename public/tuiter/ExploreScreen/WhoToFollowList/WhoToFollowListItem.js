

const WhoToFollowListItem = (who) => {
    // Who example: {   avatarIcon: '../../images/virgin.png', userName: 'Virgin Galactic', handle: 'virgingalactic', },
    return(`
        <li class="list-group-item">
            <div class="row">
                    <div class="col-3">
                        <img src=${who.avatarIcon} class="img-fluid rounded-circle fa-pull-left"/>
                    </div>
                    <div class="col-7 position-relative zindex-bring-to-front ps-0">
                        <div class="d-flex align-items-center">
                            <b class="flex-nowrap pe-1">${who.userName}</b>
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div>
                            @${who.handle}
                        </div>
                    </div>
                    <div class="col-2 align-self-center">
                        <button class="btn btn-primary rounded-pill fa-pull-right">Follow</button>
                    </div>
                </div>
        </li>
    `);
}
export default WhoToFollowListItem;