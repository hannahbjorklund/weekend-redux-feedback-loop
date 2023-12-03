import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Admin(){

    const [feedback, setFeedback] = useState([]);
    useEffect(() => {
        console.log('in useEffect');
        getFeedback();
      }, []);

    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            console.log("GET request at /feedback");
            setFeedback(response.data);
        }).catch((error) => {
            console.log("Error in GET:", error);
        })
    }

    const deleteItem = (item) => {
        axios({
            method: 'DELETE',
            url: `/feedback/${item.id}`
        }).then((response) => {
            console.log("DELETE request succesful");
            getFeedback();
        }).catch((error) => {
            console.log("Error in DELETE:", error);
        })
    }

    return (
        <>
            <h1>Feedback Results</h1>
            <div className='container'>
            <table>
                <thead>
                    <tr>
                        <th>
                            Feeling
                        </th>
                        <th>
                            Understanding
                        </th>
                        <th>
                            Support
                        </th>
                        <th>
                            Comments
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {feedback.map((item) => {
                        return(
                            <tr key={item.id}>
                                <td>
                                    {item.feeling}
                                </td>
                                <td>
                                    {item.understanding}
                                </td>
                                <td>
                                    {item.support}
                                </td>
                                <td>
                                    {item.comments}
                                </td>
                                <td>
                                    <button onClick={()=>{deleteItem(item)}}>🗑️</button>
                                </td>
                            </tr>
                        ) 
                    })}
                </tbody>
            </table>
            </div>
        </>
    )
}