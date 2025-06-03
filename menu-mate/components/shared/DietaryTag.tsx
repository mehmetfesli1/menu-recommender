import { DietaryTag, dietaryTagColors, dietaryTagLabels } from '@/lib/utils/dietary-tags';
import { cn } from '@/lib/utils/cn';

interface DietaryTagProps {
  tag: DietaryTag;
  size?: 'sm' | 'md';
  showIcon?: boolean;
}

export function DietaryTagComponent({ tag, size = 'md', showIcon = true }: DietaryTagProps) {
  const colors = dietaryTagColors[tag];
  const label = dietaryTagLabels[tag];
  
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-medium',
        colors.bg,
        colors.text,
        colors.border,
        size === 'sm' ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm'
      )}
    >
      {showIcon ? label : label.split(' ').slice(1).join(' ')}
    </span>
  );
} 