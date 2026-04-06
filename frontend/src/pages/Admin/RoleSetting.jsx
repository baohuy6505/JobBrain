import { useMemo, useState } from "react";
import RoleCard from "../../Components/admin/RoleSetting/RoleCard";
import PermissionMatrix from "../../Components/admin/RoleSetting/PermissionMatrix";
import AuditPanel from "../../Components/admin/RoleSetting/AuditPanel";
import { roles, permissionsByRole, audits } from "../../mock/roleData";

export default function RoleSetting() {
  const [selectedRole, setSelectedRole] = useState("Recruitment Lead");

  const currentPermissions = useMemo(() => {
    return permissionsByRole[selectedRole] || [];
  }, [selectedRole]);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Role Management
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Manage system roles and configure permissions for each team.
            </p>
          </div>

          <button className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
            + Create Role
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[340px_minmax(0,1fr)]">
          <div className="space-y-4">
            {roles.map((role) => (
              <RoleCard
                key={role.id}
                role={role}
                active={selectedRole === role.name}
                onClick={() => setSelectedRole(role.name)}
              />
            ))}
          </div>

          <div className="space-y-6">
            <PermissionMatrix
              roleName={selectedRole}
              permissions={currentPermissions}
            />
            <AuditPanel audits={audits} />
          </div>
        </div>
      </div>
    </div>
  );
}