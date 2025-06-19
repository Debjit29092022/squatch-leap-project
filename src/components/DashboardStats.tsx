
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Users, Mail, Star, Target, ArrowUpRight, Eye } from "lucide-react";
import { useState } from "react";

export const DashboardStats = () => {
  const [timeRange, setTimeRange] = useState("7d");
  const [animateCards, setAnimateCards] = useState(false);

  const stats = [
    {
      title: "Total Leads",
      value: "2,847",
      change: "+12%",
      changeValue: "+340",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-600",
      progress: 78,
      target: "3,650"
    },
    {
      title: "Email Campaigns",
      value: "34",
      change: "+3",
      changeValue: "+3 new",
      trend: "up",
      icon: Mail,
      color: "text-green-600",
      bgColor: "bg-green-50",
      gradientFrom: "from-green-500",
      gradientTo: "to-green-600",
      progress: 85,
      target: "40"
    },
    {
      title: "Conversion Rate",
      value: "24.3%",
      change: "+2.1%",
      changeValue: "+2.1pp",
      trend: "up",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      gradientFrom: "from-purple-500",
      gradientTo: "to-purple-600",
      progress: 92,
      target: "26.5%"
    },
    {
      title: "Lead Score Avg",
      value: "87",
      change: "+5",
      changeValue: "+5.2 pts",
      trend: "up",
      icon: Star,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      gradientFrom: "from-orange-500",
      gradientTo: "to-orange-600",
      progress: 87,
      target: "100"
    }
  ];

  const timeRanges = [
    { label: "7 Days", value: "7d" },
    { label: "30 Days", value: "30d" },
    { label: "90 Days", value: "90d" },
    { label: "1 Year", value: "1y" }
  ];

  const handleCardHover = () => {
    setAnimateCards(true);
    setTimeout(() => setAnimateCards(false), 300);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Performance Overview</h3>
          <p className="text-sm text-gray-600">Track your key metrics and performance indicators</p>
        </div>
        <div className="flex items-center space-x-2">
          {timeRanges.map((range) => (
            <Button
              key={range.value}
              variant={timeRange === range.value ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeRange(range.value)}
              className="text-xs"
            >
              {range.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
          return (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm ${
                animateCards ? 'scale-105' : ''
              }`}
              onMouseEnter={handleCardHover}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <div className="space-y-1">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Eye className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradientFrom} ${stat.gradientTo} shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`flex items-center space-x-1 ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    <TrendIcon className="w-3 h-3" />
                    <span className="text-sm font-medium">{stat.change}</span>
                    <span className="text-xs text-gray-500">({stat.changeValue})</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400 hover:text-gray-600">
                    <ArrowUpRight className="w-3 h-3" />
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Progress to target</span>
                    <span className="font-medium text-gray-700">{stat.progress}%</span>
                  </div>
                  <Progress value={stat.progress} className="h-2" />
                  <div className="text-xs text-gray-500">Target: {stat.target}</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-0 bg-gradient-to-br from-white to-blue-50/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-blue-600" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "New Campaign", icon: Mail, color: "from-blue-500 to-blue-600" },
                { label: "Import Leads", icon: Users, color: "from-green-500 to-green-600" },
                { label: "View Reports", icon: TrendingUp, color: "from-purple-500 to-purple-600" },
                { label: "Team Settings", icon: Star, color: "from-orange-500 to-orange-600" }
              ].map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`h-auto p-4 flex flex-col items-center space-y-2 hover:shadow-lg transition-all duration-200 border-0 bg-gradient-to-br ${action.color} text-white hover:scale-105`}
                >
                  <action.icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{action.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-br from-white to-green-50/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-green-700">
              <TrendingUp className="w-5 h-5" />
              <span>Today's Highlights</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: "New leads", value: "23", change: "+15%" },
              { label: "Emails sent", value: "847", change: "+8%" },
              { label: "Conversions", value: "12", change: "+25%" }
            ].map((highlight, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-white/60">
                <span className="text-sm text-gray-600">{highlight.label}</span>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">{highlight.value}</span>
                  <span className="text-xs text-green-600">{highlight.change}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
