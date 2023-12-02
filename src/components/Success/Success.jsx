import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/**
 * Display a success message after submission and allow
 * user to leave a new feedback, which clears their
 * current submission and redirects to first page
 */
export default function Success(){

    const dispatch = useDispatch();
    const history = useHistory();

    const resetFeedback = () => {
        dispatch({
            type: 'CLEAR_FEEDBACK'
        })
        history.push('/');
    }

    return(
        <>
            <h1>Thank You!</h1>
            <div className='container'>
                <button data-testid='next' className = 'reset' onClick={resetFeedback}>Leave New Feedback</button>
            </div>
        </>
    )
}