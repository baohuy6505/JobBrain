import React from "react";
import PermissionSection from "./PermissionSection";

const PermissionPanel = ({
  selectedRole,
  permissions,
  onTogglePermission,
  onSave,
  onDiscard,
}) => {
  return (
    <div className="rounded-[16px] border border-[#D7DDEA] bg-white shadow-sm overflow-hidden">
      <div className="border-b border-[#ECEFF7] px-6 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold tracking-[1.2px] text-[#4E6AF3] uppercase">
              Permissions Matrix
            </p>
            <h2 className="mt-1 text-[28px] font-extrabold leading-[1] text-[#202534]">
              {selectedRole?.name || "Role"}
            </h2>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <button
              type="button"
              onClick={onDiscard}
              className="text-[13px] font-medium text-[#434A5F]"
            >
              Discard
            </button>

            <button
              type="button"
              onClick={onSave}
              className="bg-[#3F59D6] hover:bg-[#324bc4] text-white text-[13px] font-semibold px-6 py-3 rounded-[10px] leading-4 transition-all"
            >
              Save
              <br />
              Configuration
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-8">
        {permissions.map((section, sectionIndex) => (
          <PermissionSection
            key={section.title}
            title={section.title}
            items={section.items}
            sectionIndex={sectionIndex}
            onTogglePermission={onTogglePermission}
          />
        ))}
      </div>
    </div>
  );
};

export default PermissionPanel;