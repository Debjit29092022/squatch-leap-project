
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Zap, Check, Plus } from "lucide-react";

interface Integration {
  id: string;
  name: string;
  description: string;
  category: string;
  status: "connected" | "available";
  logo: string;
  features: string[];
}

export const IntegrationHub = () => {
  const integrations: Integration[] = [
    {
      id: "1",
      name: "Salesforce",
      description: "Sync leads and opportunities with your Salesforce CRM",
      category: "CRM",
      status: "connected",
      logo: "🔗",
      features: ["Lead sync", "Opportunity tracking", "Contact management"]
    },
    {
      id: "2",
      name: "HubSpot",
      description: "Integrate with HubSpot for complete marketing automation",
      category: "CRM",
      status: "available",
      logo: "🟠",
      features: ["Contact sync", "Deal pipeline", "Email tracking"]
    },
    {
      id: "3",
      name: "Slack",
      description: "Get real-time notifications about new leads and activities",
      category: "Communication",
      status: "connected",
      logo: "💬",
      features: ["Lead notifications", "Team alerts", "Activity updates"]
    },
    {
      id: "4",
      name: "Zapier",
      description: "Connect with 3000+ apps through Zapier automation",
      category: "Automation",
      status: "available",
      logo: "⚡",
      features: ["Custom workflows", "Multi-app integration", "Trigger actions"]
    },
    {
      id: "5",
      name: "Google Analytics",
      description: "Track lead sources and conversion analytics",
      category: "Analytics",
      status: "available",
      logo: "📊",
      features: ["Source tracking", "Conversion metrics", "ROI analysis"]
    },
    {
      id: "6",
      name: "Mailchimp",
      description: "Sync leads with your email marketing campaigns",
      category: "Email Marketing",
      status: "available",
      logo: "📧",
      features: ["List sync", "Campaign tracking", "Automation triggers"]
    }
  ];

  const categories = ["All", "CRM", "Communication", "Automation", "Analytics", "Email Marketing"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Integration Hub</h2>
        <Button variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          Request Integration
        </Button>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => (
          <Card key={integration.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{integration.logo}</div>
                  <div>
                    <CardTitle className="text-lg">{integration.name}</CardTitle>
                    <Badge variant="outline" className="text-xs mt-1">
                      {integration.category}
                    </Badge>
                  </div>
                </div>
                {integration.status === "connected" ? (
                  <Badge className="bg-green-100 text-green-800">
                    <Check className="w-3 h-3 mr-1" />
                    Connected
                  </Badge>
                ) : (
                  <Badge variant="outline">Available</Badge>
                )}
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                {integration.description}
              </p>
              
              <div className="space-y-2 mb-4">
                <h4 className="text-sm font-semibold text-gray-900">Features:</h4>
                <ul className="space-y-1">
                  {integration.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <Check className="w-3 h-3 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2">
                {integration.status === "connected" ? (
                  <>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Settings className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                    <Button variant="ghost" size="sm">
                      Disconnect
                    </Button>
                  </>
                ) : (
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Zap className="w-4 h-4 mr-2" />
                    Connect
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
