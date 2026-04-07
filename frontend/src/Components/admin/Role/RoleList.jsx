import React from "react";
import RoleCard from "./RoleCard";

const RoleList = ({ roles, selectedRoleId, onSelectRole }) => {
  return (
    <div className="space-y-4">
      {roles.map((role) => (
        <RoleCard
          key={role.id}
          role={role}
          isActive={selectedRoleId === role.id}
          onClick={() => onSelectRole(role.id)}
        />
      ))}
    </div>
  );
};

export default RoleList;