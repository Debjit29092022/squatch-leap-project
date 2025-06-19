
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Plus, Play, Pause, Settings, Zap, Users, Mail, Target, Clock, TrendingUp } from "lucide-react";

interface Workflow {
  id: string;
  name: string;
  description: string;
  trigger: string;
  actions: string[];
  status: "active" | "paused" | "draft";
  executions: number;
  successRate: number;
  lastRun: string;
  category: "lead_nurturing" | "scoring" | "follow_up" | "integration";
}

export const AutomationWorkflows = () => {
  const [workflows] = useState<Workflow[]>([
    {
      id: "1",
      name: "Lead Scoring Automation",
      description: "Automatically score leads based on behavior and demographics",
      trigger: "New lead created",
      actions: ["Calculate score", "Assign to sales rep", "Send notification"],
      status: "active",
      executions: 1247,
      successRate: 94.5,
      lastRun: "2 minutes ago",
      category: "scoring"
    },
    {
      id: "2",
      name: "Welcome Email Sequence",
      description: "Send personalized welcome emails to new leads",
      trigger: "Lead status: New",
      actions: ["Send welcome email", "Tag as 'welcomed'", "Schedule follow-up"],
      status: "active",
      executions: 856,
      successRate: 89.2,
      lastRun: "5 minutes ago",
      category: "lead_nurturing"
    },
    {
      id: "3",
      name: "Hot Lead Alert",
      description: "Instantly notify sales team when high-value leads are identified",
      trigger: "Lead score > 80",
      actions: ["Send Slack notification", "Create high-priority task", "Email sales rep"],
      status: "active",
      executions: 234,
      successRate: 98.7,
      lastRun: "1 hour ago",
      category: "follow_up"
    },
    {
      id: "4",
      name: "CRM Sync Automation",
      description: "Automatically sync lead data with Salesforce CRM",
      trigger: "Lead data updated",
      actions: ["Update CRM record", "Sync custom fields", "Log activity"],
      status: "paused",
      executions: 2156,
      successRate: 91.8,
      lastRun: "Yesterday",
      category: "integration"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "paused":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "draft":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "lead_nurturing":
        return <Users className="w-4 h-4" />;
      case "scoring":
        return <Target className="w-4 h-4" />;
      case "follow_up":
        return <Mail className="w-4 h-4" />;
      case "integration":
        return <Zap className="w-4 h-4" />;
      default:
        return <Settings className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Automation Workflows
          </h2>
          <p className="text-gray-600 mt-2">Create intelligent workflows to automate your lead generation process</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
          <Plus className="w-4 h-4 mr-2" />
          Create Workflow
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-800">Active Workflows</CardTitle>
            <Play className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">12</div>
            <p className="text-xs text-blue-700">+3 this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-800">Total Executions</CardTitle>
            <TrendingUp className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">4,493</div>
            <p className="text-xs text-green-700">+847 today</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-800">Success Rate</CardTitle>
            <Target className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">93.2%</div>
            <p className="text-xs text-purple-700">+2.1% vs last month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-800">Time Saved</CardTitle>
            <Clock className="w-4 h-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">127h</div>
            <p className="text-xs text-orange-700">This month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-lg border-0 bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-blue-600" />
            <span>Workflow Management</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {workflows.map((workflow) => (
              <div key={workflow.id} className="border rounded-xl p-6 hover:shadow-md transition-all duration-200 bg-white/80 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gray-50">
                      {getCategoryIcon(workflow.category)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-lg text-gray-900">{workflow.name}</h3>
                        <Badge className={`${getStatusColor(workflow.status)} border`}>
                          {workflow.status.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{workflow.description}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <span><strong>Trigger:</strong> {workflow.trigger}</span>
                        <span><strong>Actions:</strong> {workflow.actions.length}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Switch checked={workflow.status === "active"} />
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-sm text-gray-600">Executions</div>
                    <div className="text-xl font-semibold text-gray-900">{workflow.executions.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                    <div className="text-xl font-semibold text-green-600">{workflow.successRate}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Last Run</div>
                    <div className="text-sm font-medium text-gray-900">{workflow.lastRun}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      View Logs
                    </Button>
                    {workflow.status === "active" ? (
                      <Button variant="outline" size="sm">
                        <Pause className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm">
                        <Play className="w-4 h-4" />
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
