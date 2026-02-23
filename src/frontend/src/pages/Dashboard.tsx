import DashboardLayout from '@/components/DashboardLayout';
import StatCard from '@/components/StatCard';
import ProjectsTable from '@/components/ProjectsTable';
import { Building2, Activity, Clock } from 'lucide-react';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Hero Section */}
        <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
          <img
            src="/assets/generated/construction-site-hero.dim_1200x600.png"
            alt="Construction Site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 flex items-center">
            <div className="px-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Construction Progress Dashboard
              </h1>
              <p className="text-blue-100 text-lg">
                Real-time monitoring and analytics for all active projects
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Total Projects"
            value="12"
            icon={<Building2 className="w-6 h-6 text-blue-900" />}
            description="All registered projects"
          />
          <StatCard
            title="Active Projects"
            value="8"
            icon={<Activity className="w-6 h-6 text-green-600" />}
            description="Currently in progress"
          />
          <StatCard
            title="Last Updated"
            value="Project Alpha"
            icon={<Clock className="w-6 h-6 text-amber-600" />}
            description="2 hours ago"
          />
        </div>

        {/* Projects Table */}
        <ProjectsTable />
      </div>
    </DashboardLayout>
  );
}
