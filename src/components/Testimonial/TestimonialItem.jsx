import React,{ Component } from "react";

class TestimonialItem extends Component {
    
    constructor(props){
        super(props);
    }

    render(){
        let {icon,img,name,job,caption} = this.props;
        
        return(
            <div className="testimonial-item">
                            <div className="testimonial-item-icon">
                                <img className="testimonial-item__image" src={icon} alt="testimonial shape" />
                            </div>
                            <div className="testimonial-item-content">
                                <div className="testimonial-item-content-img">
                                    <img className="testimonial-item-content__img" src={img} alt="" />
                                </div>
                                <div className="testimonial-item-content-person">
                                    <h5 className="testimonial-item-content-person__name">{name}</h5>
                                    <span className="testimonial-item-content-person__job">{job}</span>
                                </div>
                            </div>
                        <div className="testimonial-item-caption">
                            <p className="testimonial-item__description">{caption}</p>
                        </div>
            </div>
        )
    }
}

export default TestimonialItem;