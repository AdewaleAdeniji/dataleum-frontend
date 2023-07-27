import React from 'react';

const OfferComp = ({ classes }) => {
    return (
        <div className={`whatOffer ${classes}`}>
            <div className='offer-cards'>
                <div className='offer-card'>
                    <img src={require('../../assets/reading-side.svg')} alt="offer"/>
                    <div>
                        <h5>Online Agribusiness Training</h5>
                        <h6>Have full lifetime access to practical-based training in modern agribusiness practices to increase productivity and profitability. </h6>
                    </div>
                </div>
                <div className='offer-card'>
                    <img src={require('../../assets/offer-2.svg')} alt="offer"/>
                    <div>
                        <h5>Agric Financing</h5>
                        <h6>To increase the growth of agric farmers and food landscape in Africa, a decentralised online education.</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OfferComp;