import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { Settings, Zap, Check, Plus, Play, Workflow, Shield, X, ExternalLink } from "lucide-react";

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
  webhookUrl?: string;
  apiKey?: string;
}

export const IntegrationHub = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: "1",
      name: "Salesforce",
      description: "Sync leads and opportunities with automated workflows",
      category: "CRM",
      status: "connected",
      logo: "🔗",
      features: ["Lead sync", "Opportunity tracking", "Contact management", "Automated scoring"],
      automationEnabled: true,
      lastSync: "2 minutes ago",
      apiKey: "sf_demo_key_***"
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
      lastSync: "Just now",
      webhookUrl: "https://hooks.slack.com/services/***"
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
      lastSync: "1 hour ago",
      webhookUrl: "https://hooks.zapier.com/hooks/catch/***"
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
      lastSync: "5 minutes ago",
      apiKey: "mc_demo_key_***"
    }
  ]);

  const categories = ["All", "CRM", "Communication", "Automation", "Analytics", "Email Marketing"];

  const filteredIntegrations = selectedCategory === "All" 
    ? integrations 
    : integrations.filter(integration => integration.category === selectedCategory);

  const connectedCount = integrations.filter(i => i.status === "connected").length;
  const automatedCount = integrations.filter(i => i.automationEnabled).length;
  const todayDataCount = integrations
    .filter(i => i.status === "connected")
    .reduce((acc, curr) => acc + Math.floor(Math.random() * 500) + 100, 0);

  const handleConnect = async (integrationId: string) => {
    setIsLoading(integrationId);
    
    // Simulate API call
    setTimeout(() => {
      setIntegrations(prev => prev.map(integration => 
        integration.id === integrationId 
          ? { 
              ...integration, 
              status: "connected" as const, 
              lastSync: "Just now",
              apiKey: `${integration.name.toLowerCase()}_demo_key_***`
            }
          : integration
      ));

      const integration = integrations.find(i => i.id === integrationId);
      toast({
        title: "Integration Connected",
        description: `${integration?.name} has been successfully connected to your account.`,
      });
      setIsLoading(null);
    }, 2000);
  };

  const handleDisconnect = (integrationId: string) => {
    setIntegrations(prev => prev.map(integration => 
      integration.id === integrationId 
        ? { 
            ...integration, 
            status: "available" as const, 
            lastSync: "Never",
            automationEnabled: false,
            apiKey: undefined,
            webhookUrl: undefined
          }
        : integration
    ));

    const integration = integrations.find(i => i.id === integrationId);
    toast({
      title: "Integration Disconnected",
      description: `${integration?.name} has been disconnected from your account.`,
      variant: "destructive",
    });
    setIsConfiguring(false);
  };

  const handleAutomationToggle = (integrationId: string, enabled: boolean) => {
    setIntegrations(prev => prev.map(integration => 
      integration.id === integrationId 
        ? { ...integration, automationEnabled: enabled }
        : integration
    ));

    const integration = integrations.find(i => i.id === integrationId);
    toast({
      title: enabled ? "Automation Enabled" : "Automation Disabled",
      description: `Automation for ${integration?.name} has been ${enabled ? 'enabled' : 'disabled'}.`,
    });
  };

  const handleSync = (integrationId: string) => {
    setIntegrations(prev => prev.map(integration => 
      integration.id === integrationId 
        ? { ...integration, lastSync: "Just now" }
        : integration
    ));

    const integration = integrations.find(i => i.id === integrationId);
    toast({
      title: "Sync Initiated",
      description: `Manual sync started for ${integration?.name}.`,
    });
  };

  const handleConfigure = (integration: Integration) => {
    setSelectedIntegration(integration);
    setIsConfiguring(true);
  };

  const handleAddIntegration = () => {
    toast({
      title: "Add Integration",
      description: "Opening integration marketplace...",
    });
  };

  const handleAutomationCenter = () => {
    toast({
      title: "Automation Center",
      description: "Opening automation workflow builder...",
    });
  };

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
          <Button variant="outline" onClick={handleAutomationCenter}>
            <Workflow className="w-4 h-4 mr-2" />
            Automation Center
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" onClick={handleAddIntegration}>
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
            <div className="text-2xl font-bold text-green-900">{connectedCount}</div>
            <p className="text-xs text-green-700">+{Math.floor(Math.random() * 3) + 1} this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-800">Automated Workflows</CardTitle>
            <Workflow className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">{automatedCount * 3}</div>
            <p className="text-xs text-blue-700">Running smoothly</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-800">Data Synced Today</CardTitle>
            <Zap className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">{todayDataCount.toLocaleString()}</div>
            <p className="text-xs text-purple-700">Records processed</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center space-x-4 border-b pb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-blue-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration) => (
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
                        onCheckedChange={(checked) => handleAutomationToggle(integration.id, checked)}
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
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleConfigure(integration)}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleSync(integration.id)}
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                  </>
                ) : (
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    onClick={() => handleConnect(integration.id)}
                    disabled={isLoading === integration.id}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    {isLoading === integration.id ? "Connecting..." : "Connect Now"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Sheet open={isConfiguring} onOpenChange={setIsConfiguring}>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle className="flex items-center space-x-2">
              <span className="text-2xl">{selectedIntegration?.logo}</span>
              <span>Configure {selectedIntegration?.name}</span>
            </SheetTitle>
            <SheetDescription>
              Manage your {selectedIntegration?.name} integration settings and automation rules.
            </SheetDescription>
          </SheetHeader>
          
          {selectedIntegration && (
            <div className="space-y-6 mt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Connection Status</h3>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">Connected</p>
                      <p className="text-sm text-green-700">Last sync: {selectedIntegration.lastSync}</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDisconnect(selectedIntegration.id)}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Disconnect
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Automation Settings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Auto-sync leads</p>
                      <p className="text-sm text-gray-600">Automatically sync new leads every 15 minutes</p>
                    </div>
                    <Switch 
                      checked={selectedIntegration.automationEnabled}
                      onCheckedChange={(checked) => handleAutomationToggle(selectedIntegration.id, checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Real-time notifications</p>
                      <p className="text-sm text-gray-600">Send instant alerts for high-value leads</p>
                    </div>
                    <Switch checked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Data enrichment</p>
                      <p className="text-sm text-gray-600">Enhance lead profiles with additional data</p>
                    </div>
                    <Switch checked={selectedIntegration.automationEnabled} />
                  </div>
                </div>
              </div>

              {selectedIntegration.apiKey && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">API Configuration</h3>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium mb-2">API Key</p>
                    <p className="text-sm text-gray-600 font-mono">{selectedIntegration.apiKey}</p>
                  </div>
                </div>
              )}

              {selectedIntegration.webhookUrl && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Webhook Configuration</h3>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium mb-2">Webhook URL</p>
                    <p className="text-sm text-gray-600 font-mono break-all">{selectedIntegration.webhookUrl}</p>
                  </div>
                </div>
              )}

              <div className="flex space-x-3 pt-4">
                <Button 
                  className="flex-1"
                  onClick={() => handleSync(selectedIntegration.id)}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Sync Now
                </Button>
                <Button variant="outline" onClick={() => {
                  toast({
                    title: "Opening Documentation",
                    description: `Opening ${selectedIntegration.name} integration documentation...`,
                  });
                }}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Docs
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};
