import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

/**
 * Display a success message after submission and allow
 * user to leave a new feedback, which clears their
 * current submission and redirects to first page
 */
export default function Success(){
    return(
        <h1>Thank You!</h1>
    )
}