
import { 
  BarChart3, 
  Users, 
  Mail, 
  Settings, 
  Zap,
  User,
  Workflow,
  TrendingUp,
  Target,
  Crown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProfessionalSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const ProfessionalSidebar = ({ activeTab, setActiveTab }: ProfessionalSidebarProps) => {
  const menuItems = [
    { 
      id: "dashboard", 
      label: "Dashboard", 
      icon: BarChart3,
      description: "Overview & insights"
    },
    { 
      id: "automation", 
      label: "Automation", 
      icon: Workflow,
      description: "Smart workflows",
      badge: "AI"
    },
    { 
      id: "analytics", 
      label: "Analytics", 
      icon: TrendingUp,
      description: "Advanced reporting",
      badge: "Pro"
    },
    { 
      id: "campaigns", 
      label: "Campaigns", 
      icon: Mail,
      description: "Email marketing"
    },
    { 
      id: "integrations", 
      label: "Integrations", 
      icon: Zap,
      description: "Connect your tools"
    },
    { 
      id: "team", 
      label: "Team", 
      icon: User,
      description: "Manage users"
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-72 bg-white/80 backdrop-blur-xl border-r border-gray-200/50 z-50 shadow-xl">
      <div className="p-8">
        <div className="flex items-center space-x-3 mb-12">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              SaaS Quatch
            </h1>
            <p className="text-xs text-gray-500 font-medium">Lead Generation Pro</p>
          </div>
        </div>
        
        <nav className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "w-full group relative flex flex-col items-start p-4 rounded-xl text-left transition-all duration-200",
                  activeTab === item.id
                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-md border border-blue-100"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <div className="flex items-center space-x-3">
                    <div className={cn(
                      "p-2 rounded-lg transition-colors",
                      activeTab === item.id
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                    )}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm">{item.label}</span>
                  </div>
                  {item.badge && (
                    <Badge 
                      variant="secondary" 
                      className={cn(
                        "text-xs px-2 py-0.5",
                        item.badge === "AI" && "bg-purple-100 text-purple-700",
                        item.badge === "Pro" && "bg-orange-100 text-orange-700"
                      )}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-gray-500 ml-11 font-medium">
                  {item.description}
                </p>
                {activeTab === item.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-r-full"></div>
                )}
              </button>
            );
          })}
        </nav>

        <div className="mt-12 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-900">Upgrade to Pro</h3>
              <p className="text-xs text-gray-600">Unlock advanced features</p>
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};
