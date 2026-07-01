import { Briefcase, Users, Building2, Pen, Zap, HelpCircle } from "lucide-react";

const roles = [
  {
    id: "Marketing Manager",
    label: "Marketing Manager",
    icon: Briefcase,
    description: "Lead marketing initiatives",
  },
  {
    id: "Social Media Manager",
    label: "Social Media Manager",
    icon: Users,
    description: "Manage social channels",
  },
  {
    id: "Business Owner",
    label: "Business Owner",
    icon: Building2,
    description: "Grow my business",
  },
  {
    id: "Freelancer",
    label: "Freelancer",
    icon: Pen,
    description: "Manage client work",
  },
  {
    id: "Agency",
    label: "Agency",
    icon: Zap,
    description: "Manage multiple clients",
  },
  {
    id: "Other",
    label: "Other",
    icon: HelpCircle,
    description: "Something else",
  },
];

interface StepOneProps {
  value?: string;
  onChange: (value: string) => void;
}

export default function StepOne({ value, onChange }: StepOneProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {roles.map((role) => {
        const Icon = role.icon;
        const isSelected = value === role.id;

        return (
          <button
            key={role.id}
            onClick={() => onChange(role.id)}
            className={`rounded-lg border-2 p-4 text-left transition-all ${
              isSelected
                ? "border-blue-600 bg-blue-50 dark:border-blue-400 dark:bg-blue-950"
                : "border-slate-200 hover:border-blue-300 dark:border-slate-700 dark:hover:border-blue-600"
            }`}
          >
            <Icon className="mb-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
            <div className="font-semibold text-slate-900 dark:text-white">
              {role.label}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              {role.description}
            </div>
          </button>
        );
      })}
    </div>
  );
}
