import React, { Fragment, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

// import User from "User"

const Users = () => {

    //USE STATE
    const [hosts, setHosts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    //USE EFFECT
    useEffect(() => Fetch(), []);

    //AXIOS FUNCTIONS
    const Fetch = async () => {
        var info = await axios.get(
            "http://localhost:8000/users" //our local host
        );
        console.log(info)
        setHosts(info.data);
        setLoading(true)
    };

    //HANDLER FUNCTIONS
    const selectedUser = (e, selectedHost) => {
        // <User(selectedHost)/> //!!! not created yet
        // navigate('/'{selectedHost.id}) //!!! not created yet
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

        <div class="container ">
            <div class="row">
                {
                    loading && hosts.map((host) => (
                        <div style={{ width: "20rem", padding: "1rem"}} class="d-flex justify-content-center vstack gap-8">
                            <div class="card" onClick={(e) => selectedUser(e, host)}>
                            <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                            class="img-thumbnail rounded-3"
                            style={{ height: "15rem", objectFit: "cover"}}
                            alt={host.name.first}
                            />
                                <div class="card-body" >
                                    <h5 class="card-title">{host.name.first}</h5>
                                    <p class="card-text"> Country: {host.country}, Hosting: {host.family_size}</p>
                                    <p class="card-text">Some descriptions about the host (and their family)</p>
                                </div>
                            </div>
                        </div>

                    ))}

                {/* SAMPLE CARD */}
                <div style={{ width: "20rem", padding: "1rem"}} class="d-flex justify-content-center vstack gap-8">
            

                    <div class="card">
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                    class="img-thumbnail rounded-3"
                    style={{ height: "15rem", objectFit: "cover"}}
                    // alt={host.name}
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