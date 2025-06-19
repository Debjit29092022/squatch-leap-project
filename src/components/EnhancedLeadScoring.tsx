
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, TrendingUp, Users, Zap, Settings, Filter, ArrowUpRight, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const EnhancedLeadScoring = () => {
  const { toast } = useToast();
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("score");

  const topLeads = [
    {
      id: "1",
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      score: 92,
      email: "sarah.j@techcorp.com",
      source: "LinkedIn",
      lastActivity: "2 hours ago",
      predictedValue: "$12,400",
      tags: ["Enterprise", "Hot"],
      avatar: "SJ",
      activities: 15
    },
    {
      id: "2",
      name: "Michael Chen",
      company: "DataFlow Solutions",
      score: 87,
      email: "m.chen@dataflow.com",
      source: "Website",
      lastActivity: "5 hours ago",
      predictedValue: "$8,900",
      tags: ["Mid-Market", "Warm"],
      avatar: "MC",
      activities: 12
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      company: "CloudScale",
      score: 83,
      email: "e.rodriguez@cloudscale.io",
      source: "Email Campaign",
      lastActivity: "1 day ago",
      predictedValue: "$7,200",
      tags: ["SMB", "Warm"],
      avatar: "ER",
      activities: 8
    },
    {
      id: "4",
      name: "David Park",
      company: "AI Innovations",
      score: 78,
      email: "d.park@aiinno.com",
      source: "Referral",
      lastActivity: "3 hours ago",
      predictedValue: "$15,600",
      tags: ["Enterprise", "Qualified"],
      avatar: "DP",
      activities: 22
    }
  ];

  const scoringFactors = [
    { factor: "Company Size", weight: 25, description: "Enterprise companies score higher", impact: "High" },
    { factor: "Engagement Level", weight: 30, description: "Email opens, clicks, website visits", impact: "Critical" },
    { factor: "Demographics", weight: 20, description: "Job title, industry, location", impact: "Medium" },
    { factor: "Behavior", weight: 25, description: "Content downloads, demo requests", impact: "High" }
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

  const handleLeadAction = (leadId: string, action: string) => {
    toast({
      title: `Lead ${action}`,
      description: `Action performed on lead ${leadId}`,
    });
  };

  const filteredLeads = topLeads.sort((a, b) => {
    if (sortBy === "score") return b.score - a.score;
    if (sortBy === "value") return parseFloat(b.predictedValue.replace(/[$,]/g, '')) - parseFloat(a.predictedValue.replace(/[$,]/g, ''));
    return 0;
  });

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-blue-900">
              <Target className="w-5 h-5" />
              <span>AI Lead Scoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => setFilter(filter === "all" ? "hot" : "all")}>
                <Filter className="w-4 h-4 mr-1" />
                {filter === "all" ? "All" : "Hot"}
              </Button>
              <Button variant="outline" size="sm" onClick={() => setSortBy(sortBy === "score" ? "value" : "score")}>
                <TrendingUp className="w-4 h-4 mr-1" />
                {sortBy === "score" ? "Score" : "Value"}
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <div className="text-2xl font-bold text-blue-900">87.3</div>
              <div className="text-sm text-blue-700">Avg Score</div>
            </div>
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <div className="text-2xl font-bold text-green-600">↑12%</div>
              <div className="text-sm text-blue-700">This Month</div>
            </div>
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{topLeads.length}</div>
              <div className="text-sm text-blue-700">High Value</div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full border-blue-200 text-blue-700 hover:bg-blue-100">
            <Settings className="w-4 h-4 mr-2" />
            Configure Scoring Rules
          </Button>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span>High-Value Leads</span>
            <Badge variant="outline" className="ml-auto">{filteredLeads.length} leads</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredLeads.map((lead) => {
              const badge = getScoreBadge(lead.score);
              return (
                <div key={lead.id} className="p-4 rounded-xl border bg-gradient-to-r from-white to-gray-50/50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                        {lead.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 flex items-center space-x-2">
                          <span>{lead.name}</span>
                          {lead.score >= 85 && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                        </div>
                        <div className="text-sm text-gray-600">{lead.company}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={badge.color}>{badge.label}</Badge>
                      <div className={`text-xl font-bold px-3 py-1 rounded-lg border ${getScoreColor(lead.score)}`}>
                        {lead.score}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-600 mb-3">
                    <div><strong>Source:</strong> {lead.source}</div>
                    <div><strong>Value:</strong> {lead.predictedValue}</div>
                    <div><strong>Activities:</strong> {lead.activities}</div>
                    <div><strong>Last:</strong> {lead.lastActivity}</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex-1 mr-4">
                      <Progress value={lead.score} className="h-2" />
                    </div>
                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleLeadAction(lead.id, "contacted")}
                        className="text-xs px-2 py-1"
                      >
                        Contact
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={() => handleLeadAction(lead.id, "viewed")}
                        className="text-xs px-2 py-1"
                      >
                        <ArrowUpRight className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 mt-2">
                    {lead.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs px-2 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
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
            <span>Scoring Algorithm</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scoringFactors.map((factor, index) => (
              <div key={index} className="space-y-3 p-3 rounded-lg bg-gray-50/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-gray-900">{factor.factor}</span>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        factor.impact === "Critical" ? "border-red-200 text-red-700" :
                        factor.impact === "High" ? "border-orange-200 text-orange-700" :
                        "border-blue-200 text-blue-700"
                      }`}
                    >
                      {factor.impact}
                    </Badge>
                  </div>
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
