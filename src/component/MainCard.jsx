import React, { useState } from 'react'
import UserImg from '../assets/images/image-jeremy.png'

const MainCard = ({ setTimeframe }) => {
    const [timeframe, setLocalTimeframe] = useState('weekly');

    const handleClick = (newTimeframe) => {
        setTimeframe(newTimeframe);
        setLocalTimeframe(newTimeframe);
    };
    return (
        <article className='main-card-container'>
            <div className='main-upper'>
                <img src={UserImg} alt='Picture of Jeremy' />
                <div>
                    <p>Report for</p>
                    <h2>Jeremy Robson</h2>
                </div>
            </div>

            <div className='main-lower'>
                <button onClick={() => handleClick('daily')} className={timeframe === 'daily' ? 'active' : ''}>Daily</button>
                <button onClick={() => handleClick('weekly')} className={timeframe === 'weekly' ? 'active' : ''}>Weekly</button>
                <button onClick={() => handleClick('monthly')} className={timeframe === 'monthly' ? 'active' : ''}>Monthly</button>
            </div>
        </article>
    );
};

export default MainCard