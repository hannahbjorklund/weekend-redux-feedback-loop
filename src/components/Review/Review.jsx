import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

/**
 * Allow the user to see their recorded inputs in a list,
 * then hitting submit will piece together global state
 * and send in a POST request
 */
export default function Review(){

    const feedback = useSelector(store => store.feedback);
    const history = useHistory();

    const submitFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        }).then((response) => {
            console.log("POST request at /feedback");
            history.push('/success');
        }).catch((error) => {
            console.log("Error in PUT:", error);
        })
    }

    return (
        <>
            <h1>Review Your Feedback</h1>
            <div>
                <p>Feelings: {feedback.feeling}</p>
                <p>Understanding: {feedback.understanding}</p>
                <p>Support: {feedback.support}</p>
                <p>Comments: {feedback.comments}</p>
            </div>
            <button data-testid='next' onClick={submitFeedback}>SUBMIT</button>
        </>
    )
}