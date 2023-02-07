import React from "react";
import Users from './group.png';
function Dashboard(){
    return(
        <>
            <div className="container">
                <div className="card-body">
                    <div className="card-el">
                        <h2 className="card-heading">User Management</h2>
                        <img src={Users} className="card-img" alt="Teams" ></img>
                    </div>  
                    <div className="card-el">
                        <h2 className="card-heading">Team Management</h2>
                        <img src={Users} className="card-img" alt="Teams"></img>
                    </div>              
                </div>
            </div>
        </>
    )
}
export default Dashboard;