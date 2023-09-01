import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__wrapper">
            <div className="contact-content">
              <span className="contact-content__mark">تماس با ما</span>
              <h3 className="contact-content__title">
                مشکل خود را باما درمیان بگذارید.
              </h3>
              <div className="contact__us">
                <div className="contact__contact">
                  <h4 className="contact__contact-title">آدرس ما</h4>
                  <p className="contact__contact-text">
                    ایران، مازندران ، بابل خ مدرس ساختمان نادر طبقه 9
                  </p>
                </div>
                <div className="contact__contact">
                  <h4 className="contact__contact-title">ایمیل</h4>
                  <a
                    href="mailto:info2@test.com"
                    className="contact__contact-text"
                  >
                    info@test.com
                  </a>
                  <a
                    href="mailto:info2@test.com"
                    className="contact__contact-text"
                  >
                    info@test.com
                  </a>
                </div>
                <div className="contact__contact">
                  <h4 className="contact__contact-title">شماره های تماس</h4>
                  <p className="contact__contact-text">+98(1xx)45678</p>
                  <p className="contact__contact-text">+98(1xx)45678</p>
                </div>
                <div className="contact__contact">
                  <h4 className="contact__contact-title">
                    چطور میتوانیم کمک کنیم؟
                  </h4>
                  <p className="contact__contact-text">
                    مشکل خود را به ما بگویید ما در اسرع وقت با شما تماس خواهیم
                    گرفت.
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h4 className="contact-form__title">برای ما پیام ارسال کنید</h4>
              <form action="#" method="post" className="form">
                <div className="form__wrapper">
                  <label className="form__label" htmlFor="user-name">
                    نام و نام خانوادگی*
                  </label>
                  <input
                    className="form__input"
                    id="user-name"
                    name="user-name"
                    type="text"
                    placeholder="نام و نام خانادگی خود را وارد نمایید"
                  />
                </div>
                <div className="form__wrapper">
                  <label className="form__label" htmlFor="user-email">
                    {" "}
                    آدرس ایمیل*{" "}
                  </label>
                  <input
                    className="form__input"
                    id="user-email"
                    name="user-email"
                    type="email"
                    placeholder="آدرس ایمیل خود را وارد کنید"
                  />
                </div>
                <div className="form__wrapper">
                  <label className="form__label" htmlFor="user-message">
                    {" "}
                    پیام*
                  </label>
                  <textarea
                    className="form__input"
                    id="user-message"
                    name="user-message"
                    rows="5"
                    placeholder="پیام خود را تایپ کنید"
                  />
                </div>
                <button className="form__submit" type="submit">
                  ارسال پیام
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
