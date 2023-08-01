import React, {useState} from 'react';
import './NewClientForm.css';

const NewClientForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNumber, setEnteredNumber] = useState('');
    const [enteredProjectNumber, setEnteredProjectNumber] = useState('');
    // const [userInput, setUserInput] = useState({
    //   enteredTitle: '',
    //   enteredAmount: '',
    //   enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredName(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //   return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const numberChangeHandler = (event) => {
        setEnteredNumber(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredAmount: event.target.value,
        // });
    };const projectNumberChangeHandler = (event) => {
        setEnteredProjectNumber(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredAmount: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const clientData = {
            clientName: enteredName,
            clientGSTIN: enteredNumber,
            clientProjects: enteredProjectNumber,
            clientImage: "Images/Ellipse_1.png",
        };

        props.onSaveClientData(clientData);
        setEnteredName('');
        setEnteredNumber('');
        setEnteredProjectNumber('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Client Name</label>
                    <input
                        type='text'
                        value={enteredName}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Client GST IN</label>
                    <input
                        type='number'
                        value={enteredNumber}
                        onChange={numberChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Client Project</label>
                    <input
                        type='number'
                        min='1'
                        value={enteredProjectNumber}
                        onChange={projectNumberChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Project Detail</button>
            </div>
        </form>
    )
}
export default NewClientForm;