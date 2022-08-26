import React from 'react';
import Layout from "../../components/Layout";
import "./Dashboard.css"


export default function Dashboard({ history }) {
    // console.log(history);
    return (
        <Layout>
            <div className="dashboard-screen">
                <div className="admin-profile">
                    <div className="profile-pic">
                        <img className="admin-pic" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="profile photo" />
                    </div>
                    <div className="admin-info">
                        <div className="adm-name-conti">
                            <h3 className="admin-name">Admin Name</h3>
                        </div>
                        <div className="admin-desc">
                            <p className="admin-post">President</p>
                            <p className="admin-post">Contributor</p>
                        </div>
                    </div>
                </div>
                <div className="router-btns">
                    <div className="routing-conti">
                        <button className="btn-route btn btn-primary">Certificate Generator</button>
                    </div>
                    <div className="routing-conti">
                        <button className="btn-route btn btn-secondary">Data Update</button>
                    </div>
                </div>
            </div>
        </Layout>


    );
}