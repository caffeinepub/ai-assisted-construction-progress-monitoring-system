interface ProgressBarProps {
  percentage: number;
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="relative h-8 bg-slate-200 rounded-full overflow-hidden shadow-inner">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full transition-all duration-500 flex items-center justify-end px-3"
          style={{ width: `${percentage}%` }}
        >
          {percentage > 15 && (
            <span className="text-sm font-bold text-white">{percentage}%</span>
          )}
        </div>
        {percentage <= 15 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-slate-700">{percentage}%</span>
          </div>
        )}
      </div>
    </div>
  );
}
