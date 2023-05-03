import React,{ Component } from "react";
import FeaturesItems from "./FeaturesItem";
import SectionHeading from "../SectionHeading/SectionHeading";
import"./Features.css";

class Features extends Component{
    constructor(props){
        super(props);

        this.state = {

            sectionHead: [
                {id:1,mark:"ویژگی کریپتو",title:"بهترین ویژگی‌ها",caption:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است.",captionClass:'section-heading__caption'}
            ],

            featuresItems: [
                {id:1, img:'./assets/images/Features/features-1.svg',title:'دسترسی جهانی',text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون است.'},
                {id:2, img:'./assets/images/Features/features-2.svg',title:'پاداش اولیه',text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون است.'},
                {id:3, img:'./assets/images/Features/features-3.svg',title:'امن و ایمن',text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون است.'},
                {id:4, img:'./assets/images/Features/features-4.svg',title:'سودآوری چندتایی',text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون است.'},
                {id:5, img:'./assets/images/Features/features-5.svg',title:'هزینه پایین',text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون است.'},
                {id:6, img:'./assets/images/Features/features-6.svg',title:'ذخیره سازی امن',text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون است.'},
            ]
        }
    }

    render(){
        return(
            <section id="features" className="features">
                <div className="container">
                    
                    {this.state.sectionHead.map(heading => 
                        <SectionHeading key={heading.id} {...heading}></SectionHeading>
                    )}
                    
                    <div className="features-items">

                        {this.state.featuresItems.map(item => 
                            <FeaturesItems key={item.id} {...item}></FeaturesItems>
                        )}

                    </div>
                    
                </div>
            </section>
        )
    }
}


export default Features;