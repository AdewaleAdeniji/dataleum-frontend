import React from 'react';

const TeachWithUs = () => {
    return (
        <div className='teach-with-us'>
            <div className='teach-head'>
                <h4>Be part of our first 100 agribusiness Expert tutors.</h4>
                <h6>The revolution has begun. Join us in building a community for Africa’s prosperity in AgTech.</h6>
            </div>
            <div className='teach-row'>
                <div className='teach-img'>
                    <div className='boxed-one'></div>
                    <div className='boxed-one two'></div>
                    
                </div>
                <div className='teach-details'>
                    {/* <h5 className='tags'>#ITeachWithAgcademy</h5> */}
                    <h3>Join our First 50 Global Instructor</h3>
                    <h6>We provide the tools and support to help you teach what you love. And to create an excellent means of passive income.
                        <br/>
                        Join the other agribusiness experts to teach on Agcademy. Be part of the agribusiness evolution in Africa.
                    </h6>

                    <button className='act-button'>Become an Agcademy instructor</button>
                </div>
            </div>
        </div>
    )
}
export default TeachWithUs;