import React, { Component } from 'react'
import "./styles.css"

export default class Contact extends Component {
  render() {
    return (
      <section className="contact-section" id="contact">
        <div className="row">
          <div className="section-title">
            <h2>contact me</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-form">
            <form action="https://formspree.io/f/xnqwrlll" method="POST" id="contact-form">
              <div className="row">
                <div className="input-group">
                  <input type="text" placeholder="Name" className="input-control" required name="Name" />
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Email" className="input-control" required name="Email" />
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Subject" className="input-control" required name="Subject" />
                </div>
                <div className="input-group">
                  <textarea placeholder="Message" className="input-control" required name="Message"></textarea>
                </div>
                <div className="submit-btn">
                  <button type="submit" className="btn send-msg">send message</button>
                </div>
              </div>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Email</h3>
              <p>qianlan.hu@outlook.com</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
