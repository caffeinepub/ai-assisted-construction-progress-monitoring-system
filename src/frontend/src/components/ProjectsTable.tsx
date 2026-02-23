import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import StageBadge from './StageBadge';
import { Eye } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  stage: string;
  progress: number;
  lastUpdated: string;
}

const mockProjects: Project[] = [
  { id: '1', name: 'Project Alpha', stage: 'Superstructure', progress: 68, lastUpdated: '2 hours ago' },
  { id: '2', name: 'Project Beta', stage: 'Facade', progress: 45, lastUpdated: '5 hours ago' },
  { id: '3', name: 'Project Gamma', stage: 'Foundation', progress: 22, lastUpdated: '1 day ago' },
  { id: '4', name: 'Project Delta', stage: 'Interiors', progress: 82, lastUpdated: '3 hours ago' },
  { id: '5', name: 'Project Epsilon', stage: 'Furnishing', progress: 95, lastUpdated: '6 hours ago' },
  { id: '6', name: 'Project Zeta', stage: 'Superstructure', progress: 58, lastUpdated: '4 hours ago' },
  { id: '7', name: 'Project Eta', stage: 'Foundation', progress: 15, lastUpdated: '2 days ago' }
];

export default function ProjectsTable() {
  const navigate = useNavigate();

  const handleViewDetails = (id: string) => {
    navigate({ to: '/project/$id', params: { id } });
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>All Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Project Name</TableHead>
                <TableHead className="font-semibold">Stage</TableHead>
                <TableHead className="font-semibold">Progress</TableHead>
                <TableHead className="font-semibold">Last Updated</TableHead>
                <TableHead className="font-semibold text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockProjects.map((project) => (
                <TableRow key={project.id} className="hover:bg-slate-50">
                  <TableCell className="font-medium text-slate-900">
                    {project.name}
                  </TableCell>
                  <TableCell>
                    <StageBadge stage={project.stage} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 max-w-[120px] h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-900 rounded-full transition-all"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-700 min-w-[3ch]">
                        {project.progress}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-600">
                    {project.lastUpdated}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      onClick={() => handleViewDetails(project.id)}
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
