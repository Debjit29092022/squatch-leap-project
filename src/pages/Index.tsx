
import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardStats } from "@/components/DashboardStats";
import { LeadsTable } from "@/components/LeadsTable";
import { EmailCampaigns } from "@/components/EmailCampaigns";
import { IntegrationHub } from "@/components/IntegrationHub";
import { TeamManagement } from "@/components/TeamManagement";
import { Sidebar } from "@/components/Sidebar";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <DashboardStats />
            <LeadsTable />
          </div>
        );
      case "campaigns":
        return <EmailCampaigns />;
      case "integrations":
        return <IntegrationHub />;
      case "team":
        return <TeamManagement />;
      default:
        return (
          <div className="space-y-6">
            <DashboardStats />
            <LeadsTable />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 ml-64">
        <DashboardHeader />
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
