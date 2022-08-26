import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../../components/Layout";

import "./Dashboard.css"



export default function Dashboard({ history }) {

    return (
        <Layout>
            <div className="dashboard-screen">
                <div className="admin-profile">
                    <div className="profile-pic">
                        {/* <img className="admin-pic" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="profile photo" /> */}
                        <img className="admin-pic" src="https://res.cloudinary.com/ganu369/image/upload/v1651331514/studing-bitmoji_dzvffz.png" alt="profile photo" />
                    </div>
                    <div className="admin-info">
                        <div className="adm-name-conti">
                            {/* <h3 className="admin-name" placeholder="User Name">user_name</h3> */}
                            <h3 className="admin-name" placeholder="User Name">CSNR Ganesh</h3>
                        </div>
                        <div className="admin-desc">
                            {/* <p className="admin-post" placeholder="User POR">President</p> */}
                            <p className="admin-post" placeholder="User POR">Web Secretary</p>
                            {/* <p className="admin-post" placeholder="User Role">Contributor</p> */}
                            <p className="admin-post" placeholder="User Role">Admin</p>
                        </div>
                    </div>
                </div>
                <div className="router-btns">
                    <div className="routing-conti">
                        <Link to="/certificate"><button className="btn-route btn btn-primary" >Certificate Generator</button></Link>
                    </div>
                    <div className="routing-conti">
                        <button className="btn-route btn btn-secondary">Data Update</button>
                    </div>
                </div>
            </div>
        </Layout>


    );
}