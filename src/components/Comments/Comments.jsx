import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/**
 * Take user input for comments and dispatch to feedback
 * reducer
 */
export default function Comments(){
    const history = useHistory();
    const dispatch = useDispatch();
    const [commentsInput, setCommentsInput] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(commentsInput);
        if(!commentsInput){
            alert("You need to enter a value.");
        } else {
            dispatch({
                type: 'SET_COMMENTS',
                payload: commentsInput
            })
            history.push('/review');
        }
    }
    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Leave comment here"
                        type="text"
                        onChange={(evt)=>{setCommentsInput(evt.target.value)}}
                        value={commentsInput}
                        data-testid="input"
                    />
                    <button type='submit' className='next' data-testid='next'>NEXT</button>
                </form>
            </div>
        </>
    )
}