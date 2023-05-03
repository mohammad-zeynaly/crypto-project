import React,{ Component } from "react";
import "./SectionHeading.css";

class SectionHeading extends Component {

    constructor(props){
        super(props)
    }

    render(){
        let {mark,title,caption,captionClass} = this.props
        return(
            <div className="section-heading">
            <span className="section-heading__mark">{mark}</span>
            <h2 className="section-heading__title">{title}</h2>
            <p className={`section-heading__text ${captionClass.length >1 ? captionClass : ''}`}>{caption}</p>
            </div>
        )
    }
}

export default SectionHeading;