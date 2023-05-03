import React,{ Component } from "react";
import TestimonialItem from "./TestimonialItem";
import SectionHeading from "../SectionHeading/SectionHeading";

import "./Testimonial.css";

class Testimonial extends Component{
    constructor(props){
        super(props);

        this.state = {

            sectionHead: [
                {id:1,mark:"بازخوردها",title:"آنچه مشتری ما می گویند",caption:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است.",captionClass:'section-heading__caption'}
            ],

            testimonialItem: [
                {id: 1, icon:'./assets/images/Testimonial/testimonial-shape.svg',img:'./assets/images/Testimonial/testimonial-1.jpg',name:'جیسون کیز',job:'مدیر عامل و موسس Dreampeet', caption: 'من به یادگیری و دانش رایگان اعتقاد دارم. مکانی عالی برای یادگیری از متخصصان است. من چیزهای زیادی یاد گرفته‌ام و آن را به همه دوستان و خانواده‌ام توصیه می‌کنم.'},
                {id: 2, icon:'./assets/images/Testimonial/testimonial-shape.svg',img:'./assets/images/Testimonial/testimonial-2.jpg',name:'مریا مری',job:'مدیر عامل و موسس Betex', caption: 'من به یادگیری و دانش رایگان اعتقاد دارم. مکانی عالی برای یادگیری از متخصصان است. من چیزهای زیادی یاد گرفته‌ام و آن را به همه دوستان و خانواده‌ام توصیه می‌کنم.'},
                {id: 3, icon:'./assets/images/Testimonial/testimonial-shape.svg',img:'./assets/images/Testimonial/testimonial-3.jpg',name:'آندریا جولی',job:'مدیر عامل و موسس CryptoX', caption: 'من به یادگیری و دانش رایگان اعتقاد دارم. مکانی عالی برای یادگیری از متخصصان است. من چیزهای زیادی یاد گرفته‌ام و آن را به همه دوستان و خانواده‌ام توصیه می‌کنم.'},
                {id: 4, icon:'./assets/images/Testimonial/testimonial-shape.svg',img:'./assets/images/Testimonial/testimonial-4.jpg',name:'دیوید ویلیوم',job:'مدیر عامل و موسس Coinbase', caption: 'من به یادگیری و دانش رایگان اعتقاد دارم. مکانی عالی برای یادگیری از متخصصان است. من چیزهای زیادی یاد گرفته‌ام و آن را به همه دوستان و خانواده‌ام توصیه می‌کنم.'},
            ]
        }
    }

    render(){
        return(
            <section id="testimonial" className="testimonial">
                <div className="container">

                    {this.state.sectionHead.map(heading => 
                        <SectionHeading key={heading.id} {...heading}></SectionHeading>
                    )}

                    <div className="testimonial-items">
                        {this.state.testimonialItem.map(item => 
                            <TestimonialItem key={item.id} {...item}></TestimonialItem>
                        )}
                    </div>

                </div>
            </section>
        )
    }
}

export default Testimonial;