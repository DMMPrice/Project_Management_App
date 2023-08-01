import React from "react";
import ClientDet from "./ClientDet";

const ClientList = props => {
    return (
        <>
            {
                props.items.map(Client_Detail => (
                    <ClientDet key={Client_Detail.clientId} id={Client_Detail.clientId}
                               clientName={Client_Detail.clientName}
                               clientProjects={Client_Detail.clientProjects}
                               clientImage={Client_Detail.clientImage}/>
                ))
            }
        </>
    );
};
export default ClientList;