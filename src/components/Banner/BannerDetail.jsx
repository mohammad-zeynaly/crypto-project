import React,{ Component } from "react";

class BannerDetail extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let {classDetail,title} = this.props
        return(
            <h6 className="banner__detail">
                <span className={`banner-details__shape ${classDetail}`}></span>
                {title}
            </h6>
        )
    }
}


export default BannerDetail;