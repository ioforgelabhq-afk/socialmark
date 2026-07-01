const companySizes = [
  { id: "Solo/Individual", label: "Solo/Individual", description: "Just me" },
  {
    id: "2-10 employees",
    label: "2-10 employees",
    description: "Small team",
  },
  {
    id: "11-50 employees",
    label: "11-50 employees",
    description: "Growing team",
  },
  {
    id: "51-200 employees",
    label: "51-200 employees",
    description: "Medium company",
  },
  {
    id: "201-1000 employees",
    label: "201-1000 employees",
    description: "Large company",
  },
  {
    id: "1000+ employees",
    label: "1000+ employees",
    description: "Enterprise",
  },
];

interface StepThreeProps {
  value?: string;
  onChange: (value: string) => void;
}

export default function StepThree({ value, onChange }: StepThreeProps) {
  return (
    <div className="space-y-4">
      {companySizes.map((size) => {
        const isSelected = value === size.id;

        return (
          <button
            key={size.id}
            onClick={() => onChange(size.id)}
            className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
              isSelected
                ? "border-green-600 bg-green-50 dark:border-green-400 dark:bg-green-950"
                : "border-slate-200 hover:border-green-300 dark:border-slate-700 dark:hover:border-green-600"
            }`}
          >
            <div className="font-semibold text-slate-900 dark:text-white">
              {size.label}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              {size.description}
            </div>
          </button>
        );
      })}
    </div>
  );
}
