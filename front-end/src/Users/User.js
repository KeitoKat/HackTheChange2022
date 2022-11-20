import React, { Fragment, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

// import User from "User"

const User = (prop) => {

    return(
        <Fragment>
            <div class="container justify-content-center col gap-8 col">
                <div class="container d-flex text-start col gap-8">
                    <h3 class="mt-3 text-wrap">Home of host</h3>
                    
                </div>
                <div class="container d-flex text-start col gap-8">
                <p class="text-wrap">"host.ountry"</p>
                </div>
                
                {/* CARD OF PHOTOS */}
                <div class="container">
                    <div class="row">
                        {/* GRID #1 */}
                        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <img
                                            src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_30/1355945/home-exterior-today-180726-tease.jpg"
                                            class="w-100 shadow-1-strong rounded mb-4"
                                            style={{height: "15rem"}}
                                            alt={"host.name.first"}
                            />

                            <img
                                            src="https://www.publicdomainpictures.net/pictures/220000/nahled/living-room-1491858438hnQ.jpg"
                                            class="w-100 shadow-1-strong rounded mb-4"
                                            style={{height: "15rem"}}
                                            alt={"host.name.first"}
                            />
                        </div>
                        {/* GRID #2 */}
                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                                            src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
                                            class="w-100 shadow-1-strong rounded mb-4"
                                            style={{height: "15rem"}}
                                            alt={"host.name.first"}
                            />
                            <img
                                            src="https://i0.hippopx.com/photos/439/92/838/home-real-estate-residential-living-room-preview.jpg"
                                            class="w-100 shadow-1-strong rounded mb-4"
                                            style={{height: "15rem"}}
                                            alt={"host.name.first"}
                            />
                        </div>
                        {/* GRID #3 */}
                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                                            src="https://www.publicdomainpictures.net/pictures/220000/nahled/empty-home-with-view.jpg"
                                            class="w-100 shadow-1-strong rounded mb-4"
                                            style={{height: "15rem"}}
                                            alt={"host.name.first"}
                            />
                            <img
                                            src="https://i0.hippopx.com/photos/770/695/693/bedroom-room-youth-design-preview.jpg"
                                            class="w-100 shadow-1-strong rounded mb-4"
                                            style={{height: "15rem"}}
                                            alt={"host.name.first"}
                            />
                        </div>
                    </div>
                </div>

                {/* HOST INFO */}
                <div class="container my-5">
                    <div class="row">
                        <div class="col">
                            <div class="row">
                                <div class="col">
                                    <h5 class="mt-3 text-wrap">Wondeful home hosted by "host.name"</h5>
                                    <p class="text-wrap">"host.family_size"</p> 
                                </div>
                                
                                    <img
                                        src="https://thumbs.dreamstime.com/b/curious-young-man-looking-out-square-shape-cartoon-vector-illustration-white-background-146747734.jpg"
                                        class=" rounded-3"
                                        style={{ height: "6rem", width: "6rem", objectFit: "cover"}}
                                        alt={"host.name.first"}
                                    />
                            </div>
                        </div>

                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">"host.name.first"'s thoughts</h5>
                                    {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                    <p class="card-text">I have always understood the need for support during tough times. Let our family lend yours a helping hand :) </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}

export default User;
