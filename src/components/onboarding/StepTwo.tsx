import { FileText, Target, BarChart3, Ear, Users, Zap } from "lucide-react";

const useCases = [
  {
    id: "Content Creation",
    label: "Content Creation",
    icon: FileText,
    description: "Design and write posts",
  },
  {
    id: "Campaign Management",
    label: "Campaign Management",
    icon: Target,
    description: "Plan and launch campaigns",
  },
  {
    id: "Analytics & Reporting",
    label: "Analytics & Reporting",
    icon: BarChart3,
    description: "Track performance metrics",
  },
  {
    id: "Social Listening",
    label: "Social Listening",
    icon: Ear,
    description: "Monitor conversations",
  },
  {
    id: "Team Collaboration",
    label: "Team Collaboration",
    icon: Users,
    description: "Work with your team",
  },
  {
    id: "All of the above",
    label: "All of the above",
    icon: Zap,
    description: "Everything",
  },
];

interface StepTwoProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export default function StepTwo({ value, onChange }: StepTwoProps) {
  const toggleUseCase = (id: string) => {
    if (id === "All of the above") {
      if (value.includes("All of the above")) {
        onChange([]);
      } else {
        onChange(useCases.map((u) => u.id));
      }
    } else {
      if (value.includes("All of the above")) {
        onChange([id]);
      } else if (value.includes(id)) {
        onChange(value.filter((v) => v !== id));
      } else {
        onChange([...value, id]);
      }
    }
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {useCases.map((useCase) => {
        const Icon = useCase.icon;
        const isSelected = value.includes(useCase.id);

        return (
          <button
            key={useCase.id}
            onClick={() => toggleUseCase(useCase.id)}
            className={`rounded-lg border-2 p-4 text-left transition-all ${
              isSelected
                ? "border-purple-600 bg-purple-50 dark:border-purple-400 dark:bg-purple-950"
                : "border-slate-200 hover:border-purple-300 dark:border-slate-700 dark:hover:border-purple-600"
            }`}
          >
            <Icon className="mb-2 h-6 w-6 text-purple-600 dark:text-purple-400" />
            <div className="font-semibold text-slate-900 dark:text-white">
              {useCase.label}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              {useCase.description}
            </div>
          </button>
        );
      })}
    </div>
  );
}
