import React from 'react';
import { useState } from 'react';
import RoleBasedDashboard from './UserDashboard';

const App: React.FC = () => {

  const userRoles = ['admin', 'editor', 'viewer'];
  //select the role from dropdown
  const [role, setRole] = useState('')

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  }

  return (
    <div style={{ padding: '20px' }}>
      <label htmlFor="roleSelect">Select your Role: </label>
      <select id="roleSelect" value={role} onChange={handleRoleChange}>
        <option value="">--Choose Your Role--</option>
        {userRoles.map((userrole, index) => (
          <option key={index} value={userrole}>
            {userrole}
          </option>
        ))}
      </select>
      
      {/*Render Dashboard */}
      {role && (
        <div style={{ marginTop: '30px' }}>
          <RoleBasedDashboard role={role as 'admin' | 'editor' | 'viewer'} />
        </div>
      )}
    </div>
  );
};

export default App;
