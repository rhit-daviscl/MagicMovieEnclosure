"use client";
import React from 'react';
import "~/styles/Pages.css"
import { useParams } from 'react-router-dom';

const Stream = () => {
    const { id } = useParams() as { id: string };
    
    return(
        <div>
            <div className="main-text">
            This is the Stream page. This is where you will watch whatever you chose.
            <video className='screen' controls>
                <source src={'https://d2nge2qmdjmasy.cloudfront.net/' + id} />
            </video>
            </div>
        </div>
    );
}

export default Stream;
