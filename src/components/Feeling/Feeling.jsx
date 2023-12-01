import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

/**
 * Take user input as a number 1-5 for how they are feeling
 * then dispatch to feedback reducer
 */
export default function Feeling(){
    return (
        <h1>How are you feeling today?</h1>
    )
}