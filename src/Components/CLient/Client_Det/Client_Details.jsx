import React, {useState} from 'react';
import './Client_Details.css';
import ClientList from "./ClientList";
import {NewClientDet} from "../NewClientDet/NewClientDet";

// var DummyClientDetail = [{
//     clientName: "PS Srijan",
//     clientGSTIN: "123456789",
//     projectDone: 4,
//     id: new Date().getTime().toString(),
//     clientImage: "Images/Ellipse_1.png",
// },]
const DUMMY_CLIENTDETAIL = [
    {
        clientId: 'e1',
        clientName: 'PS Srijan',
        clientGSTIN: "123456789",
        clientProjects: 8,
        clientImage: "Images/Ellipse_1.png",
    },{
        clientId: 'e2',
        clientName: 'ABC School',
        clientGSTIN: "123456790",
        clientProjects: 9,
        clientImage: "Images/Ellipse_1.png",
    },
];
const Client_Details = () => {
    const [cleintDetail, setCleintDetail] = useState(DUMMY_CLIENTDETAIL);

    const addExpenseHandler = (clientDet) => {
        setCleintDetail((prevCleintDet) => {
            return [clientDet, ...prevCleintDet];
        });
    };
    return (<>
            <NewClientDet onAddExpense={addExpenseHandler}/>
            <div className="client-card-holder">
                <ClientList items={cleintDetail}/>
            </div>
        </>
    )
};

export default Client_Details;