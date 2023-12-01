import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

/**
 * Allow the user to see their recorded inputs in a list,
 * then hitting submit will piece together global state
 * and send in a POST request
 */
export default function Review(){
    return (
        <h1>Review Your Feedback</h1>
    )
}