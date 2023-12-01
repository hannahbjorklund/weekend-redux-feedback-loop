import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

/**
 * Take user input number 1-5 for how well supported they feel,
 * dispatch to the feedback reducer
 */
export default function Support(){
    return (
        <h1>How well are you being supported?</h1>
    )
}