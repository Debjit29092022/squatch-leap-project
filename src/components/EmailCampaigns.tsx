
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Plus, Mail, Users, TrendingUp, Play, Pause } from "lucide-react";

interface Campaign {
  id: string;
  name: string;
  status: "active" | "paused" | "completed";
  sent: number;
  total: number;
  openRate: number;
  clickRate: number;
  createdAt: string;
}

export const EmailCampaigns = () => {
  const [campaigns] = useState<Campaign[]>([
    {
      id: "1",
      name: "Q1 Product Launch",
      status: "active",
      sent: 847,
      total: 1200,
      openRate: 34.2,
      clickRate: 12.8,
      createdAt: "2024-01-15"
    },
    {
      id: "2",
      name: "Welcome Series",
      status: "active",
      sent: 234,
      total: 500,
      openRate: 45.6,
      clickRate: 18.3,
      createdAt: "2024-01-10"
    },
    {
      id: "3",
      name: "Holiday Promotion",
      status: "completed",
      sent: 1543,
      total: 1543,
      openRate: 28.9,
      clickRate: 9.4,
      createdAt: "2024-01-05"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "paused":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Play className="w-3 h-3" />;
      case "paused":
        return <Pause className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Email Campaigns</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Create Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
            <Mail className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-600">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Recipients</CardTitle>
            <Users className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,429</div>
            <p className="text-xs text-gray-600">+847 from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Open Rate</CardTitle>
            <TrendingUp className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">36.2%</div>
            <p className="text-xs text-gray-600">+4.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Campaign Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-semibold text-lg">{campaign.name}</h3>
                    <Badge className={getStatusColor(campaign.status)}>
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(campaign.status)}
                        <span>{campaign.status.toUpperCase()}</span>
                      </div>
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-500">
                    Created: {campaign.createdAt}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">Progress</div>
                    <div className="flex items-center space-x-2 mt-1">
                      <Progress value={(campaign.sent / campaign.total) * 100} className="flex-1" />
                      <span className="text-sm font-medium">
                        {campaign.sent}/{campaign.total}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600">Open Rate</div>
                    <div className="text-xl font-semibold text-green-600">
                      {campaign.openRate}%
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600">Click Rate</div>
                    <div className="text-xl font-semibold text-blue-600">
                      {campaign.clickRate}%
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {campaign.status === "active" && (
                      <Button variant="outline" size="sm">
                        <Pause className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
