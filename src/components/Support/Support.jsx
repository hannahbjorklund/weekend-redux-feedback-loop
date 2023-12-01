import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/**
 * Take user input number 1-5 for how well supported they feel,
 * dispatch to the feedback reducer
 */
export default function Support(){
    const history = useHistory();
    const dispatch = useDispatch();
    const [supportInput, setSupportInput] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(supportInput);
        dispatch({
            type: 'SET_SUPPORT',
            payload: supportInput
        })
        history.push('/comments');
    }
    return (
        <>
            <h1>How well are you being supported?</h1>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <label>Support?</label>
                    <input 
                        type="number"
                        min={1}
                        max={5}
                        onChange={(evt)=>{setSupportInput(evt.target.value)}}
                        value={supportInput}
                        data-testid="input"
                    />
                    <button type='submit' className='next' data-testid='next'>NEXT</button>
                </form>
            </div>
        </>
    )
}