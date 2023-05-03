import React,{ Component } from "react";

class AdsItem extends Component{
    constructor(props){
        super(props)
    }

    render(){

        let{imgSrc1,imgSrc2} = this.props
        return(
        <div className="ads-item">
            <img loading="lazy" className="ads-item__image ads-item__image--one" src={imgSrc1}alt="ads image"/>
            <img loading="lazy" className="ads-item__image ads-item__image--two" src={imgSrc2} alt="ads image"/>
        </div>
        )
    }
}

export default AdsItem;