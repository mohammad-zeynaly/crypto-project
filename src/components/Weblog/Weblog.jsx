import React, {Component } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import WeblogItem from "./WeblogItem";
import "./Weblog.css";

class Weblog extends Component {

    constructor(props){
        super(props);

        this.state = {

            sectionHead: [
                {id:1,mark:"آخرین خبرها",title:"آخرین اخبار و مطالب سایت",caption:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است.",captionClass:'section-heading__caption'}
            ],

            weblogItems : [
                {id:1, img:"./assets/images/Weblog/weblog-1.jpg", authorName:"توسط مدیر", dateNum: "1 فرویدین، 1402", title:"افزایش 200 درصدی ارز بر پایه بیتکوین همزمان با تصویب" ,caption:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است." },
                {id:2, img:"./assets/images/Weblog/weblog-2.jpg", authorName:"توسط مدیر", dateNum: "2 فرویدین، 1402", title:"بهترین صرافی ارز دیجتیال از نگاه تریدهای آماتور و حرفه ای" ,caption:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است." },
                {id:3, img:"./assets/images/Weblog/weblog-3.jpg", authorName:"توسط مدیر", dateNum: "3 فرویدین، 1402", title:"تحلیل بازارهای ارزهای دیجیتال با تصویب لایه قانون گذاران" ,caption:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است." },
            ]
        }
    }

    render(){
        return(
            <section id="weblog" className="weblog">
                <div className="container">
                    
                    {this.state.sectionHead.map(heading => 
                    <SectionHeading key={heading.id} {...heading}></SectionHeading>
                    )}

                    <div className="weblog-items">

                        {this.state.weblogItems.map(item => 
                            <WeblogItem key={item.id} {...item}></WeblogItem>
                        )}
                
                    </div>

                </div>
            </section>
        )
    }
}

export default Weblog;