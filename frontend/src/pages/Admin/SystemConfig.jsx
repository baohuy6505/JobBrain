import { useState } from "react";
import ConfigSidebar from "../../Components/admin/SystemConfig/ConfigSidebar";
import ConfigTabs from "../../Components/admin/SystemConfig/ConfigTabs";
import SecurityProtocolsCard from "../../Components/admin/SystemConfig/SecurityProtocolsCard";
import ApiManagementCard from "../../Components/admin/SystemConfig/ApiManagementCard";
import BrandingCard from "../../Components/admin/SystemConfig/BrandingCard";
import {
  apiKeys,
  brandColors,
  configTabs,
  deploymentNote,
  securityProtocols,
} from "../../mock/systemConfigData";

export default function SystemConfig() {
  const [activeTab, setActiveTab] = useState("Security");

  return (
    <div className="min-h-screen bg-[#171717] p-2 sm:p-4">
      <div className="mx-auto min-h-[calc(100vh-1rem)] max-w-[1400px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl lg:flex lg:min-h-[calc(100vh-2rem)]">
        <ConfigSidebar />

        <main className="flex-1 bg-slate-50">
          <div className="flex flex-col gap-4 border-b border-slate-200 bg-white px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              <span className="text-lg font-bold text-slate-900 sm:text-xl">
                RecruitAdmin
              </span>
              <span className="text-xs text-slate-400">/admin/config</span>
            </div>

            <div className="flex items-center gap-3 self-start lg:self-auto">
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-800">
                  Admin User
                </p>
                <p className="text-[11px] uppercase tracking-wide text-slate-400">
                  SYSTEMOWNER
                </p>
              </div>
              <img
                src="https://i.pravatar.cc/48?img=15"
                alt="admin avatar"
                className="h-10 w-10 rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                System Configuration
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Manage global platform parameters, security protocols, and
                visual identity.
              </p>
            </div>

            <div className="mb-6 overflow-x-auto">
              <ConfigTabs
                tabs={configTabs}
                activeTab={activeTab}
                onChange={setActiveTab}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.5fr_0.9fr]">
              <div className="space-y-6">
                <SecurityProtocolsCard items={securityProtocols} />
                <ApiManagementCard apiKeys={apiKeys} />
              </div>

              <div className="space-y-6">
                <BrandingCard
                  primaryColor={brandColors.primary}
                  secondaryColor={brandColors.secondary}
                  deploymentNote={deploymentNote}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
              <button className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-500 transition hover:bg-slate-50">
                Reset to Defaults
              </button>
              <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}