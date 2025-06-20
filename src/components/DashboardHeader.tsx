
import { Bell, Search, Settings, User, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const DashboardHeader = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Search",
        description: `Searching for: ${searchQuery}`,
      });
    }
  };

  const handleNotifications = () => {
    toast({
      title: "Notifications",
      description: "You have 3 new notifications",
    });
  };

  const handleSettings = () => {
    toast({
      title: "Settings",
      description: "Opening user settings...",
    });
  };

  const handleProfile = () => {
    toast({
      title: "Profile",
      description: "Opening user profile...",
    });
  };

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 px-8 py-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6 flex-1">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Welcome back, John
            </h2>
            <p className="text-sm text-gray-600 mt-1">Here's what's happening with your leads today</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search leads, campaigns..."
              className="pl-10 w-72 bg-white/50 backdrop-blur-sm border-gray-200/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          
          <Button variant="ghost" size="sm" className="relative" onClick={handleNotifications}>
            <Bell className="w-4 h-4" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
              3
            </Badge>
          </Button>
          
          <Button variant="ghost" size="sm" onClick={handleSettings}>
            <Settings className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">John Doe</div>
              <div className="text-xs text-gray-500 flex items-center">
                <Crown className="w-3 h-3 mr-1 text-yellow-500" />
                Pro Plan
              </div>
            </div>
            <button 
              className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              onClick={handleProfile}
            >
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
