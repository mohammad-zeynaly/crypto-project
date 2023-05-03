import React, { Component } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import QuestionsItem from "./QuestionsItem";
import "./Questions.css";

class Questions extends Component {

    constructor(props){
        super(props);

        this.state = {

            sectionHead: [
                {id:1,mark:"سوالات متداول",title:"سوالات متداول پرتکرار ",caption:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه است.",captionClass:'section-heading__caption'}
            ],

            questionsItems: [
                {id:1 ,title:'چگونه می توانم در فروش توکن  شرکت کنم؟',caption:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته است.'},
                {id:2 ,title:'ICO Crypto چیست؟',caption:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته است.'},
                {id:3 ,title:'چگونه از توکن ICO سود ببرم؟',caption:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته است.'},
                {id:4 ,title:'چگونه می توانم بیت کوین بخرم؟',caption:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته است.'},
            ],
            
        }
    }

    render(){
        return(
            <section id="questions" className="questions">
                <div className="container">

                {this.state.sectionHead.map(heading => 
                    <SectionHeading key={heading.id} {...heading}></SectionHeading>
                )}

                    <div className="questions-items">

                        {this.state.questionsItems.map(item => 
                            <QuestionsItem key={item.id} {...item}></QuestionsItem>
                        )}


                    </div>

                </div>
            </section>
        )
    }
}

export default Questions;