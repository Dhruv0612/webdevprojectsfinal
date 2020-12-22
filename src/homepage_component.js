import React from 'react';
import './homepage_style.scss';

const Homepage =() => (
    <div className='homepage'>
        <div className='categories-container'>

            <div className='categories-item'>
                <div className='content-holder'>
                    <h1 className='title'>Java Full Stack</h1>
                    <span className='subtitle'>Know More</span>
                </div>
            </div>

            <div className='categories-item'>
                <div className='content-holder'>
                    <h1 className='title'>Javascript Full Stack</h1>
                    <span className='subtitle'>Know More</span>
                </div>
            </div>

            <div className='categories-item'>
                <div className='content-holder'>
                    <h1 className='title'>Python Full Stack</h1>
                    <span className='subtitle'>Know More</span>
                </div>
            </div>

            <div className='categories-item'>
                <div className='content-holder'>
                    <h1 className='title'>Data Science</h1>
                    <span className='subtitle'>Know More</span>
                </div>
            </div>

        </div>

    </div>
)

export default Homepage;