import React from "react";

const WhoToFollowListItem = ({who = {
    id: "1",
    avatarIcon: '../../../images/nasa.png',
    userName: 'NASA',
    handle: 'NASA'
}}) => {
    return(
        <li className="list-group-item" key={who.id}>
            <div className="row">
                    <div className="col-3">
                        <img src={who.avatarIcon} width="48" className="rounded-circle float-start" alt={who.userName}/>
                    </div>
                    <div className="col-7 position-relative zindex-bring-to-front ps-0">
                        <div className="d-flex align-items-center">
                            <b className="flex-nowrap pe-1">{who.userName}</b>
                            <i className="fa-solid fa-circle-check"/>
                        </div>
                        <div>
                            @{who.handle}
                        </div>
                    </div>
                    <div className="col-2 align-self-center">
                        <button className="btn btn-primary rounded-pill fa-pull-right">Follow</button>
                    </div>
            </div>
        </li>
    );
}
export default WhoToFollowListItem;