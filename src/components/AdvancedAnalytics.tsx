
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, Users, Mail, Target, Download, Calendar } from "lucide-react";

export const AdvancedAnalytics = () => {
  const leadTrendData = [
    { month: "Jan", leads: 245, qualified: 89, converted: 34 },
    { month: "Feb", leads: 298, qualified: 112, converted: 45 },
    { month: "Mar", leads: 356, qualified: 134, converted: 52 },
    { month: "Apr", leads: 423, qualified: 167, converted: 68 },
    { month: "May", leads: 387, qualified: 145, converted: 59 },
    { month: "Jun", leads: 456, qualified: 189, converted: 78 }
  ];

  const conversionFunnelData = [
    { stage: "Visitors", count: 12450, percentage: 100 },
    { stage: "Leads", count: 2847, percentage: 22.9 },
    { stage: "Qualified", count: 1139, percentage: 9.1 },
    { stage: "Opportunities", count: 456, percentage: 3.7 },
    { stage: "Customers", count: 142, percentage: 1.1 }
  ];

  const leadSourceData = [
    { name: "Organic Search", value: 35, color: "#3b82f6" },
    { name: "Social Media", value: 25, color: "#10b981" },
    { name: "Email Marketing", value: 20, color: "#f59e0b" },
    { name: "Paid Ads", value: 15, color: "#ef4444" },
    { name: "Referrals", value: 5, color: "#8b5cf6" }
  ];

  const performanceMetrics = [
    {
      title: "Lead Quality Score",
      value: "87.3",
      change: "+12.5%",
      trend: "up",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Conversion Rate",
      value: "24.8%",
      change: "+3.2%",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Average Deal Size",
      value: "$4,567",
      change: "+8.9%",
      trend: "up",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Sales Cycle Length",
      value: "23 days",
      change: "-15.2%",
      trend: "down",
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Advanced Analytics
          </h2>
          <p className="text-gray-600 mt-2">Deep insights into your lead generation performance</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Last 30 Days
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {metric.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                  <Icon className={`w-4 h-4 ${metric.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <div className={`flex items-center mt-1 ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  <TrendIcon className="w-3 h-3 mr-1" />
                  <span className="text-xs font-medium">{metric.change} from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>Lead Generation Trends</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={leadTrendData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="leads" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  name="Total Leads"
                />
                <Line 
                  type="monotone" 
                  dataKey="qualified" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  name="Qualified Leads"
                />
                <Line 
                  type="monotone" 
                  dataKey="converted" 
                  stroke="#f59e0b" 
                  strokeWidth={3}
                  name="Converted"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-green-600" />
              <span>Lead Sources Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={leadSourceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {leadSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-purple-600" />
            <span>Conversion Funnel Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {conversionFunnelData.map((stage, index) => (
              <div key={stage.stage} className="flex items-center space-x-4">
                <div className="w-24 text-sm font-medium text-gray-600">{stage.stage}</div>
                <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 flex items-center justify-between px-4"
                    style={{ width: `${stage.percentage}%` }}
                  >
                    <span className="text-white font-semibold text-sm">{stage.count.toLocaleString()}</span>
                    <span className="text-white text-sm">{stage.percentage}%</span>
                  </div>
                </div>
                {index < conversionFunnelData.length - 1 && (
                  <Badge variant="outline" className="text-xs">
                    {((conversionFunnelData[index + 1].percentage / stage.percentage) * 100).toFixed(1)}% convert
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-indigo-600" />
            <span>Campaign Performance Comparison</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={leadTrendData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="leads" fill="#3b82f6" name="Total Leads" />
              <Bar dataKey="qualified" fill="#10b981" name="Qualified" />
              <Bar dataKey="converted" fill="#f59e0b" name="Converted" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
