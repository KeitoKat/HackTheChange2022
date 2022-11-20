import React, { Fragment, useState } from "react";
import { Navigate } from "react-router-dom";

const [host, setHost] = [
    { id: "0", name:"Sam", country: "Japan", family_size:"3", language:"Japanese" }
  ];

const Users = (users) => {
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
                <div style={{ width: "20rem", padding: "1rem"}} class="d-flex justify-content-center vstack gap-8">
            

                    <div class="card">
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                    class="img-thumbnail rounded-3"
                    style={{ height: "15rem", objectFit: "cover"}}
                    alt={host.name}
                    />
                        <div class="card-body" >
                            <h5 class="card-title">Name of the host</h5>
                            <p class="card-text"> Country name, Language use </p>
                            <p class="card-text">Some descriptions about the hosts (and their family)</p>
                        </div>
                    </div>
                </div>

                <div style={{ width: "20rem", padding: "1rem"}} class="d-flex justify-content-center vstack gap-8">
            

                    <div class="card">
                    <img
                    src="https://cdn.stocksnap.io/img-thumbs/960w/person-smiling_QH2V8JROLS.jpg"
                    class="img-thumbnail rounded-3"
                    style={{ height: "15rem", objectFit: "cover"}}
                    alt={host.name}
                    />
                        <div class="card-body">
                            <h5 class="card-title">Name of the host</h5>
                            <p class="card-text"> Country name, Language use </p>
                            <p class="card-text">Some descriptions about the hosts (and their family)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    ) 
}

export default Users;