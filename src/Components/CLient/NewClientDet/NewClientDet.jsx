import React, {useState} from 'react';
import './NewClientDet.css';
import NewClientForm from "./NewClientForm";

export const NewClientDet = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveClientDataHandler = (enteredClientData) => {
        const expenseData = {
            ...enteredClientData,
            id: Math.random().toString()
        };
        if (expenseData.ClientName === '' || expenseData.clientGSTIN === '' || expenseData.clientProjects === '') {
            setIsEditing(false);
            return;
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    return (
        <div className='new-expense'>
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Client Details</button>
            )}
            {isEditing && (
                <NewClientForm onSaveClientData={saveClientDataHandler}
                               onCancel={stopEditingHandler}
                />
            )}
        </div>
    )
}