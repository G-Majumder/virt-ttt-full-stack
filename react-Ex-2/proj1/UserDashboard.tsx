import React from "react";

//defining user roles
type userRole = 'admin' | 'editor' | 'viewer';

type DashboardProps = {
    role: userRole;
};

//Role base Dashboard
const RoleBasedDashboard: React.FC<DashboardProps> = ({ role }) => {

    let roleSelection;

    if (role === 'admin') {
        roleSelection = <p>You have assigned with Admin Role</p>
    } else if (role === 'editor') {
        roleSelection = <p>You have assigned with Editor Role</p>
    } else {
        roleSelection = <p>You have assigned with Viewer Role</p>
    }

    return (
        <div>
            <h2>Welcome, {role.toUpperCase()}</h2>

            {/*Rendering Part*/}
            {roleSelection}

            {/*logic to control the user interface*/}
            {role === 'admin' && (
                <div style={{ backgroundColor: 'white', padding: '10px' }}>
                    <strong>Audit Logs</strong>: View all actions performed by users.
                </div>
            )}

            {/*using ternary operator*/}
            <div style={{ marginTop: '20px' }}>
                {role === 'editor' ? (
                    <button>Edit Content</button>
                ) : role === 'admin' ? (
                    <button>Manage Settings</button>
                ) : (
                    <button disabled>View Only</button>
                )}
            </div>
        </div>
    );
};

export default RoleBasedDashboard;