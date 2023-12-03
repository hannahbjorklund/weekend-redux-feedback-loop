import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/**
 * Take user input as a number 1-5 for how they are feeling
 * then dispatch to feedback reducer
 */
export default function Feeling(){
    const history = useHistory();
    const dispatch = useDispatch();
    const [feelingInput, setFeelingInput] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(feelingInput);
        if(!feelingInput){
            alert("You need to enter a value.");
        } else {
            dispatch({
                type: 'SET_FEELING',
                payload: feelingInput
            })
            history.push('/understanding');
        }
    }

    return (
        <>
        <h1>How are you feeling today?</h1>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <label>Feeling?</label>
                    <input 
                        type="number"
                        min={1}
                        max={5}
                        onChange={(evt)=>{setFeelingInput(evt.target.value)}}
                        value={feelingInput}
                        data-testid="input"
                    />
                    <button type='submit' className='next' data-testid='next'>NEXT</button>
                </form>
            </div>
        </>
    )
}