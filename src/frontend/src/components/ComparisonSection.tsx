import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function ComparisonSection() {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Stage Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Previous Stage */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Previous Stage</h3>
              <span className="text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                Foundation
              </span>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <img
                src="/assets/generated/foundation-stage.dim_400x300.png"
                alt="Foundation Stage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">45%</p>
              <p className="text-sm text-slate-600">Completion</p>
            </div>
          </div>

          {/* Arrow / Progress Indicator */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="hidden lg:block">
              <ArrowRight className="w-12 h-12 text-blue-900" />
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-6 text-center shadow-md">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
                <p className="text-4xl font-bold text-green-600">+23%</p>
              </div>
              <p className="text-sm font-medium text-green-700">Progress Increase</p>
            </div>
          </div>

          {/* Current Stage */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Current Stage</h3>
              <span className="text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                Superstructure
              </span>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <img
                src="/assets/generated/superstructure-stage.dim_400x300.png"
                alt="Superstructure Stage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">68%</p>
              <p className="text-sm text-slate-600">Completion</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
