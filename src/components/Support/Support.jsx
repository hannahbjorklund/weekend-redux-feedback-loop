import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * Take user input number 1-5 for how well supported they feel,
 * dispatch to the feedback reducer
 */
export default function Support(){
    return (
        <>
            <h1>How well are you being supported?</h1>
            <Link to ='/comments'>
                <button className='next'>NEXT</button>
            </Link>
        </>
    )
}