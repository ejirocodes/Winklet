import React, { Component } from 'react';
import Header from '../Components/Header';
import './Homepage.css';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="Billing">
                    <div className="billing-image">
                        <img src={require('../Assets/img/mobile-app.jpg')} alt="" />
                    </div>
                    <div className="billing-text">
                        <h3>
                            Real-time alerts <span role="img" aria-label="time-emoji"> ⏰ </span> <br />
                            Next day settlement
                            <p>Flexible billing and <br /> payments</p> 
                            <p>Building for all <span role="img" aria-label="time-emoji"> 🎯 </span> <br />
                            personal, business</p>
                        </h3>
                    </div>
                </section>
            </div>
        )
    }
}

export default Homepage;
