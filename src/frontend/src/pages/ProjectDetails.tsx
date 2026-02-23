import { useParams } from '@tanstack/react-router';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StageBadge from '@/components/StageBadge';
import ProgressBar from '@/components/ProgressBar';
import TimelineChart from '@/components/TimelineChart';
import ImageGallery from '@/components/ImageGallery';
import ComparisonSection from '@/components/ComparisonSection';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';

export default function ProjectDetails() {
  const { id } = useParams({ from: '/project/$id' });

  // Mock data
  const projectData = {
    name: 'Project Alpha',
    stage: 'Superstructure',
    progress: 68,
    location: 'Downtown District, Sector 12',
    startDate: 'January 15, 2026',
    estimatedCompletion: 'December 2026'
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Project Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 text-white shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{projectData.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-blue-100">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{projectData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Started: {projectData.startDate}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <StageBadge stage={projectData.stage} />
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 shadow-md">
            <CardHeader>
              <CardTitle>Overall Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-end gap-4">
                <div className="text-6xl font-bold text-blue-900">{projectData.progress}%</div>
                <div className="flex items-center gap-1 text-green-600 font-semibold mb-2">
                  <ArrowUpRight className="w-5 h-5" />
                  <span>+12% this month</span>
                </div>
              </div>
              <ProgressBar percentage={projectData.progress} />
              <p className="text-slate-600 text-sm">
                Expected completion: {projectData.estimatedCompletion}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Project Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-slate-600">Total Buildings</span>
                <span className="font-semibold text-slate-900">4</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-slate-600">Completed Stages</span>
                <span className="font-semibold text-slate-900">2 / 5</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-slate-600">Images Uploaded</span>
                <span className="font-semibold text-slate-900">127</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-600">Last Update</span>
                <span className="font-semibold text-slate-900">2 hours ago</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline Chart */}
        <TimelineChart />

        {/* Stage Comparison */}
        <ComparisonSection />

        {/* Image Gallery */}
        <ImageGallery />
      </div>
    </DashboardLayout>
  );
}
