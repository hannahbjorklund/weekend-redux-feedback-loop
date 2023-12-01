import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * Take user input as a number 1-5 for how they are feeling
 * then dispatch to feedback reducer
 */
export default function Feeling(){

    return (
        <>
            <h1>How are you feeling today?</h1>
            <Link to ='/understanding'>
                <button className='next'>NEXT</button>
            </Link>
        </>
    )
}