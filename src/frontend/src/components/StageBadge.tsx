import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StageBadgeProps {
  stage: string;
}

const stageColors: Record<string, string> = {
  Foundation: 'bg-slate-100 text-slate-700 border-slate-300',
  Superstructure: 'bg-blue-100 text-blue-700 border-blue-300',
  Facade: 'bg-indigo-100 text-indigo-700 border-indigo-300',
  Interiors: 'bg-purple-100 text-purple-700 border-purple-300',
  Furnishing: 'bg-green-100 text-green-700 border-green-300'
};

export default function StageBadge({ stage }: StageBadgeProps) {
  const colorClass = stageColors[stage] || 'bg-slate-100 text-slate-700 border-slate-300';

  return (
    <Badge variant="outline" className={cn('font-medium', colorClass)}>
      {stage}
    </Badge>
  );
}
