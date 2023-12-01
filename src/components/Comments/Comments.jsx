import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * Take user input for comments and dispatch to feedback
 * reducer
 */
export default function Comments(){
    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <Link to ='/review'>
                <button className='next'>NEXT</button>
            </Link>
        </>
    )
}