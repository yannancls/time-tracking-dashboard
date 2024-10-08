import React from 'react'
import Ellipsis from '../assets/images/icon-ellipsis.svg'
import data from '../data.json'

const SubCard = ({ timeframe }) => {
    return (
        <div className='cards-grid'>
            {data.map((datum, index) => (
                <article className='sub-card-container' key={index}>
                    <div className='sub-upper'></div>

                    <div className='sub-lower'>
                        <div className='sub-lower-top'>
                            <p>{datum.title}</p>
                            <img src={Ellipsis} alt="ellipsis icon" />
                        </div>
                        <div className='sub-lower-low'>
                            <p className='present-hours'>{datum.timeframes[timeframe].current}hrs</p>
                            <p className='last-week-hours'>Last Week - {datum.timeframes[timeframe].previous}hrs</p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default SubCard