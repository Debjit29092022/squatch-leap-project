
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, TrendingUp, Users, Zap, Settings } from "lucide-react";

export const LeadScoring = () => {
  const topLeads = [
    {
      id: "1",
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      score: 92,
      email: "sarah.j@techcorp.com",
      source: "LinkedIn",
      lastActivity: "2 hours ago",
      predictedValue: "$12,400"
    },
    {
      id: "2",
      name: "Michael Chen",
      company: "DataFlow Solutions",
      score: 87,
      email: "m.chen@dataflow.com",
      source: "Website",
      lastActivity: "5 hours ago",
      predictedValue: "$8,900"
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      company: "CloudScale",
      score: 83,
      email: "e.rodriguez@cloudscale.io",
      source: "Email Campaign",
      lastActivity: "1 day ago",
      predictedValue: "$7,200"
    }
  ];

  const scoringFactors = [
    { factor: "Company Size", weight: 25, description: "Enterprise companies score higher" },
    { factor: "Engagement Level", weight: 30, description: "Email opens, clicks, website visits" },
    { factor: "Demographics", weight: 20, description: "Job title, industry, location" },
    { factor: "Behavior", weight: 25, description: "Content downloads, demo requests" }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-50 border-green-200";
    if (score >= 60) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 80) return { label: "Hot", color: "bg-red-100 text-red-800" };
    if (score >= 60) return { label: "Warm", color: "bg-yellow-100 text-yellow-800" };
    return { label: "Cold", color: "bg-blue-100 text-blue-800" };
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-blue-900">
            <Target className="w-5 h-5" />
            <span>AI Lead Scoring</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-900">87.3</div>
              <div className="text-sm text-blue-700">Avg Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">↑12%</div>
              <div className="text-sm text-blue-700">This Month</div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full border-blue-200 text-blue-700">
            <Settings className="w-4 h-4 mr-2" />
            Configure Scoring
          </Button>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span>High-Value Leads</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topLeads.map((lead) => {
              const badge = getScoreBadge(lead.score);
              return (
                <div key={lead.id} className="p-4 rounded-lg border bg-white/50 hover:bg-white/80 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-semibold text-gray-900">{lead.name}</div>
                      <div className="text-sm text-gray-600">{lead.company}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={badge.color}>
                        {badge.label}
                      </Badge>
                      <div className={`text-xl font-bold px-3 py-1 rounded-lg border ${getScoreColor(lead.score)}`}>
                        {lead.score}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-3">
                    <div><strong>Source:</strong> {lead.source}</div>
                    <div><strong>Value:</strong> {lead.predictedValue}</div>
                    <div><strong>Last Activity:</strong> {lead.lastActivity}</div>
                  </div>
                  
                  <Progress value={lead.score} className="h-2" />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-purple-600" />
            <span>Scoring Factors</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scoringFactors.map((factor, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{factor.factor}</span>
                  <span className="text-sm font-semibold text-gray-600">{factor.weight}%</span>
                </div>
                <Progress value={factor.weight} className="h-2" />
                <p className="text-xs text-gray-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
