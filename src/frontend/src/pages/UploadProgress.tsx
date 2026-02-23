import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ImageUpload from '@/components/ImageUpload';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function UploadProgress() {
  const [project, setProject] = useState('');
  const [buildings, setBuildings] = useState('');
  const [stage, setStage] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!project || !buildings || !stage || files.length === 0) {
      setShowError(true);
      setShowSuccess(false);
      return;
    }

    // Mock submission
    setShowSuccess(true);
    setShowError(false);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setProject('');
      setBuildings('');
      setStage('');
      setFiles([]);
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Upload Progress</h1>
          <p className="text-slate-600">Submit construction site images and update project status</p>
        </div>

        {showSuccess && (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Progress update submitted successfully! Project data has been updated.
            </AlertDescription>
          </Alert>
        )}

        {showError && (
          <Alert className="bg-red-50 border-red-200">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              Please fill in all required fields and upload at least one image.
            </AlertDescription>
          </Alert>
        )}

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Project Progress Form</CardTitle>
            <CardDescription>
              Select project details and upload construction site images
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="project" className="text-slate-700 font-medium">
                  Select Project *
                </Label>
                <Select value={project} onValueChange={setProject}>
                  <SelectTrigger id="project" className="h-11">
                    <SelectValue placeholder="Choose a project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alpha">Project Alpha</SelectItem>
                    <SelectItem value="beta">Project Beta</SelectItem>
                    <SelectItem value="gamma">Project Gamma</SelectItem>
                    <SelectItem value="delta">Project Delta</SelectItem>
                    <SelectItem value="epsilon">Project Epsilon</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="buildings" className="text-slate-700 font-medium">
                  Number of Buildings *
                </Label>
                <Input
                  id="buildings"
                  type="number"
                  min="1"
                  placeholder="Enter number of buildings"
                  value={buildings}
                  onChange={(e) => setBuildings(e.target.value)}
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stage" className="text-slate-700 font-medium">
                  Construction Stage *
                </Label>
                <Select value={stage} onValueChange={setStage}>
                  <SelectTrigger id="stage" className="h-11">
                    <SelectValue placeholder="Select construction stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="foundation">Foundation</SelectItem>
                    <SelectItem value="superstructure">Superstructure</SelectItem>
                    <SelectItem value="facade">Facade</SelectItem>
                    <SelectItem value="interiors">Interiors</SelectItem>
                    <SelectItem value="furnishing">Furnishing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">
                  Upload Images *
                </Label>
                <ImageUpload files={files} onFilesChange={setFiles} />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-blue-900 hover:bg-blue-800 text-white font-medium shadow-md"
              >
                Submit Progress Update
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
