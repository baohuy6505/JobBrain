import { useState } from "react";
import SecuritySettings from "../../../components/admin/Config/SecuritySettings";
import ApiManagement from "../../../components/admin/Config/ApiManagement";
import BrandingSettings from "../../../components/admin/Config/BrandingSettings";
import {
  apiKeysMock,
  configTabsMock,
  securityMock,
} from "../../../mock/adminSettingsMock";

export default function ConfigPage() {
  const [activeTab, setActiveTab] = useState("Security");
  const [securityItems, setSecurityItems] = useState(securityMock);

  const handleToggle = (index) => {
    setSecurityItems((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-[22px] font-extrabold text-[#232938]">
          System Configuration
        </h2>
        <p className="mt-1 text-[14px] text-[#626b82]">
          Manage global platform parameters, security protocols, and visual identity.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2 rounded-[10px] bg-[#eff1f8] p-1.5">
        {configTabsMock.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-[8px] px-5 py-3 text-[13px] font-medium ${
              activeTab === tab
                ? "bg-[#5570e6] text-white shadow-sm"
                : "text-[#3e465a]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.35fr_0.95fr]">
        <div className="space-y-5">
          <SecuritySettings items={securityItems} onToggle={handleToggle} />
          <ApiManagement items={apiKeysMock} />
        </div>

        <BrandingSettings />
      </div>

      <div className="mt-8 flex items-center justify-end gap-4 border-t border-[#dde2ef] pt-6">
        <button className="rounded-[8px] border border-[#cfd6e6] bg-white px-6 py-3 text-[13px] font-medium text-[#666f84]">
          Reset to Defaults
        </button>
        <button className="rounded-[8px] bg-[#5570e6] px-7 py-3 text-[13px] font-semibold text-white">
          Save Changes
        </button>
      </div>
    </div>
  );
}