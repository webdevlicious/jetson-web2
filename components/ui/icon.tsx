import * as TablerIcons from '@tabler/icons-react';
import { Icon as TablerIconType } from '@tabler/icons-react';

const Icon = ({
  name,
  color,
  size,
  className,
}: {
  name: string;
  color: string;
  size: number;
  className?: string;
}) => {
  // Access the icon from TablerIcons package
  const TablerIcon = TablerIcons[name as keyof typeof TablerIcons] as TablerIconType;
  
  if (!TablerIcon) {
    console.warn(`Icon "${name}" not found in Tabler icons`);
    return null;
  }

  return <TablerIcon color={color} size={size} className={className} />;
};

export default Icon;