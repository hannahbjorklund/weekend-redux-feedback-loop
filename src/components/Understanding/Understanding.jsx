import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * Take user input number 1-5 on how well their understanding is,
 * dispatch.
 */
export default function Understanding(){
    return(
        <>
            <h1>How well are you understanding the content?</h1>
            <Link to ='/support'>
                <button className='next'>NEXT</button>
            </Link>
        </>
    )
}