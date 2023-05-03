import React ,{ Component} from "react";


class Features extends Component{
    constructor(props){
        super(props)
    }

    render(){

        let {img,title,text} = this.props;
        return(
            <div className="features-item">
                    <div className="features-item-pic">
                        <img src={img} alt="Features Image" />
                    </div>
                    <div className="features-item__description">
                        <h4 className="features-item__title">{title}</h4>
                        <p className="features-item__text">{text}</p>
                    </div>
            </div>
        )
    }
}

export default Features;