import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/**
 * Take user input number 1-5 on how well their understanding is,
 * dispatch.
 */
export default function Understanding(){
    const history = useHistory();
    const dispatch = useDispatch();
    const [understandingInput, setUnderstandingInput] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(understandingInput);
        if(!understandingInput){
            alert("You need to enter a value.");
        } else {
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: understandingInput
            })
            history.push('/support');
        }
    }

    return(
        <>
            <h1>How well are you understanding the content?</h1>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <label>Understanding?</label>
                    <input 
                        type="number"
                        min={1}
                        max={5}
                        onChange={(evt)=>{setUnderstandingInput(evt.target.value)}}
                        value={understandingInput}
                        data-testid="input"
                    />
                    <button type='submit' className='next' data-testid='next'>NEXT</button>
                </form>
            </div>
        </>
    )
}