import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Settings, Zap, Check, Plus, Play, Workflow, Shield } from "lucide-react";

interface Integration {
  id: string;
  name: string;
  description: string;
  category: string;
  status: "connected" | "available";
  logo: string;
  features: string[];
  automationEnabled: boolean;
  lastSync: string;
}

export const IntegrationHub = () => {
  const integrations: Integration[] = [
    {
      id: "1",
      name: "Salesforce",
      description: "Sync leads and opportunities with automated workflows",
      category: "CRM",
      status: "connected",
      logo: "🔗",
      features: ["Lead sync", "Opportunity tracking", "Contact management", "Automated scoring"],
      automationEnabled: true,
      lastSync: "2 minutes ago"
    },
    {
      id: "2",
      name: "HubSpot",
      description: "Complete marketing automation with AI insights",
      category: "CRM",
      status: "available",
      logo: "🟠",
      features: ["Contact sync", "Deal pipeline", "Email tracking", "Predictive analytics"],
      automationEnabled: false,
      lastSync: "Never"
    },
    {
      id: "3",
      name: "Slack",
      description: "Real-time notifications with smart filtering",
      category: "Communication",
      status: "connected",
      logo: "💬",
      features: ["Lead notifications", "Team alerts", "Activity updates", "Custom workflows"],
      automationEnabled: true,
      lastSync: "Just now"
    },
    {
      id: "4",
      name: "Zapier",
      description: "Connect 5000+ apps with intelligent automation",
      category: "Automation",
      status: "connected",
      logo: "⚡",
      features: ["Custom workflows", "Multi-app integration", "Trigger actions", "AI-powered routing"],
      automationEnabled: true,
      lastSync: "1 hour ago"
    },
    {
      id: "5",
      name: "Google Analytics",
      description: "Advanced attribution and conversion tracking",
      category: "Analytics",
      status: "available",
      logo: "📊",
      features: ["Source tracking", "Conversion metrics", "ROI analysis", "Predictive modeling"],
      automationEnabled: false,
      lastSync: "Never"
    },
    {
      id: "6",
      name: "Mailchimp",
      description: "Smart email marketing with behavioral triggers",
      category: "Email Marketing",
      status: "connected",
      logo: "📧",
      features: ["List sync", "Campaign tracking", "Automation triggers", "Personalization AI"],
      automationEnabled: true,
      lastSync: "5 minutes ago"
    }
  ];

  const categories = ["All", "CRM", "Communication", "Automation", "Analytics", "Email Marketing"];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Integration Hub
          </h2>
          <p className="text-gray-600 mt-2">Connect your tools and automate your workflows</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Workflow className="w-4 h-4 mr-2" />
            Automation Center
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Integration
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-800">Connected Apps</CardTitle>
            <Check className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">4</div>
            <p className="text-xs text-green-700">+2 this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-800">Automated Workflows</CardTitle>
            <Workflow className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">12</div>
            <p className="text-xs text-blue-700">Running smoothly</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-800">Data Synced Today</CardTitle>
            <Zap className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">1,247</div>
            <p className="text-xs text-purple-700">Records processed</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center space-x-4 border-b pb-4">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-blue-600 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {integrations.map((integration) => (
          <Card key={integration.id} className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{integration.logo}</div>
                  <div>
                    <CardTitle className="text-lg">{integration.name}</CardTitle>
                    <Badge variant="outline" className="text-xs mt-1">
                      {integration.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  {integration.status === "connected" ? (
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      <Check className="w-3 h-3 mr-1" />
                      Connected
                    </Badge>
                  ) : (
                    <Badge variant="outline">Available</Badge>
                  )}
                  {integration.status === "connected" && (
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">Auto</span>
                      <Switch 
                        checked={integration.automationEnabled}
                      />
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                {integration.description}
              </p>
              
              <div className="space-y-3 mb-4">
                <h4 className="text-sm font-semibold text-gray-900 flex items-center">
                  <Shield className="w-3 h-3 mr-1" />
                  Features:
                </h4>
                <div className="grid grid-cols-1 gap-1">
                  {integration.features.map((feature, index) => (
                    <div key={index} className="text-xs text-gray-600 flex items-center">
                      <Check className="w-3 h-3 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {integration.status === "connected" && (
                <div className="text-xs text-gray-500 mb-4 p-2 bg-gray-50 rounded">
                  <strong>Last sync:</strong> {integration.lastSync}
                </div>
              )}
              
              <div className="flex items-center space-x-2">
                {integration.status === "connected" ? (
                  <>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Settings className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Play className="w-4 h-4" />
                    </Button>
                  </>
                ) : (
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Zap className="w-4 h-4 mr-2" />
                    Connect Now
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
