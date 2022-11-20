import React, { Fragment, useState, useEffect, useCallback } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

import User from "./User.js"

const Users = () => {

    //USE STATE
    const [host, setHost] = useState();
    const [hosts, setHosts] = useState({});
    const [loading, setLoading] = useState(false);
    const [selecHost, setSelecHost] = useState();
    
     //AXIOS FUNCTIONS
     const fetch = useCallback(async () => {
        var info = await axios.get(
            "http://localhost:8000/users" //our local host
        );
        console.log('What is info.data', info.data);
        setHosts(info.data)
        console.log('What is hosts', hosts);
        setLoading(true);
        }, [hosts.length]);


    //USE EFFECT
    useEffect(() => {fetch()}, [fetch]);
    
   


    //HANDLER FUNCTIONS
    const selectedUser = (e, selectedHost) => {
        <div>
            alert("selected host:", selectedHost)
            setSelecHost(selectedHost);
            <User id={host}/>
            {/* <Navigate to={host.id} replace={true}/> */}
        </div>
    };



    return(
    <Fragment>

        {/* FILTER */}
        <div style={{padding: "1rem"}} class="d-flex justify-content-center vstack gap-8">
            <button href="#" class="btn btn-light">
                <img
                src="https://www.freeiconspng.com/thumbs/filter-icon/filter-icon-0.png"
                class="img-thumbnail rounded-3"
                style={{ height: "2rem", objectFit: "cover"}}
                alt="filter icon"
                />
            Filter
            </button>
        </div>

        {/* CARDS */}

        <div class="container">
            <div class="row">
                {
                    loading && hosts.map((host) => (
                        <div>
                            setHost(host)
                            <div style={{ width: "20rem", padding: "1rem"}} class="d-flex justify-content-center vstack gap-8">
                                <div class="card" 
                                //  
                                onClick={() => alert("Hello from here")}>
                                
                                <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                                class="img-thumbnail rounded-3"
                                style={{ height: "15rem", objectFit: "cover"}}
                                alt={host.hostName}
                                />
                                    <div class="card-body" >
                                        <h5 class="card-title">{host.hostName}</h5>
                                        <p class="card-text"> Languages I can speak: {host.languages}</p>
                                        <p class="card-text"> Max family size I can host: {host.familySize}</p>
                                        <p class="card-text">Some descriptions about the host (and their family)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}

                {/* SAMPLE CARD */}
                <div style={{ width: "20rem", padding: "1rem"}} class="d-flex justify-content-center vstack gap-8">
            

                    <div class="card">
                    <img
                    alt="profile"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                    class="img-thumbnail rounded-3"
                    style={{ height: "15rem", objectFit: "cover"}}
                    alt="host's profile image"
                    />
                        <div class="card-body" >
                            <h5 class="card-title">Name of the host</h5>
                            <p class="card-text"> Country name, Language use </p>
                            <p class="card-text">Some descriptions about the host (and their family)</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </Fragment>
    ) 
}

export default Users;

