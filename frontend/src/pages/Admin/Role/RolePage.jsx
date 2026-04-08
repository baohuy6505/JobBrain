import React, { useState } from "react";
import RoleList from "../../../components/admin/Role/RoleList";
import PermissionPanel from "../../../components/admin/Role/PermissionPanel";
import AuditPanel from "../../../components/admin/Role/AuditPanel";
import {
  rolesMock,
  permissionsMock,
  auditMock,
} from "../../../mock/adminRoleMock";

const RolePage = () => {
  const [roles, setRoles] = useState(rolesMock);
  const [selectedRoleId, setSelectedRoleId] = useState(2);
  const [permissions, setPermissions] = useState(permissionsMock);

  const selectedRole = roles.find((role) => role.id === selectedRoleId);

  const handleSelectRole = (roleId) => {
    setSelectedRoleId(roleId);
  };

  const handleTogglePermission = (sectionIndex, itemIndex) => {
    setPermissions((prev) =>
      prev.map((section, sIdx) =>
        sIdx !== sectionIndex
          ? section
          : {
              ...section,
              items: section.items.map((item, iIdx) =>
                iIdx !== itemIndex || item.disabled
                  ? item
                  : { ...item, checked: !item.checked }
              ),
            }
      )
    );
  };

  const handleSaveConfiguration = () => {
    console.log("Role được chọn:", selectedRole);
    console.log("Permissions:", permissions);
    alert("Lưu cấu hình role thành công!");
  };

  const handleDiscard = () => {
    setPermissions(permissionsMock);
    alert("Đã hoàn tác thay đổi!");
  };

  const handleCreateRole = () => {
    alert("Nút Create New Role đã được bấm!");
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-6">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h2 className="text-[20px] leading-6 font-bold text-[#1f2430]">
            System
            <br />
            Roles
          </h2>

          <button
            type="button"
            onClick={handleCreateRole}
            className="bg-[#4E6AF3] hover:bg-[#3f59d8] text-white text-[12px] font-semibold rounded-[12px] px-4 py-3 leading-4 shadow-sm transition-all"
          >
            + Create New
            <br />
            Role
          </button>
        </div>

        <RoleList
          roles={roles}
          selectedRoleId={selectedRoleId}
          onSelectRole={handleSelectRole}
        />
      </div>

      <div className="space-y-5">
        <PermissionPanel
          selectedRole={selectedRole}
          permissions={permissions}
          onTogglePermission={handleTogglePermission}
          onSave={handleSaveConfiguration}
          onDiscard={handleDiscard}
        />

        <AuditPanel audits={auditMock} />
      </div>
    </div>
  );
};

export default RolePage;