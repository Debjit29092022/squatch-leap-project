
import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardStats } from "@/components/DashboardStats";
import { LeadsTable } from "@/components/LeadsTable";
import { EmailCampaigns } from "@/components/EmailCampaigns";
import { IntegrationHub } from "@/components/IntegrationHub";
import { TeamManagement } from "@/components/TeamManagement";
import { AutomationWorkflows } from "@/components/AutomationWorkflows";
import { AdvancedAnalytics } from "@/components/AdvancedAnalytics";
import { LeadScoring } from "@/components/LeadScoring";
import { ProfessionalSidebar } from "@/components/ProfessionalSidebar";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-8">
            <DashboardStats />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <LeadsTable />
              </div>
              <div className="space-y-6">
                <LeadScoring />
              </div>
            </div>
          </div>
        );
      case "campaigns":
        return <EmailCampaigns />;
      case "integrations":
        return <IntegrationHub />;
      case "team":
        return <TeamManagement />;
      case "automation":
        return <AutomationWorkflows />;
      case "analytics":
        return <AdvancedAnalytics />;
      default:
        return (
          <div className="space-y-8">
            <DashboardStats />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <LeadsTable />
              </div>
              <div className="space-y-6">
                <LeadScoring />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <ProfessionalSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="lg:ml-72">
        <DashboardHeader />
        <main className="p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
