import { useEffect, useState } from "react";
import type { ComponentType } from "react";

interface DynamicIconProps {
  iconName: string;
  className?: string;
}

const DynamicIcon = ({ iconName, className }: DynamicIconProps) => {
  const [Icon, setIcon] = useState<ComponentType<{
    className?: string;
  }> | null>(null);

  useEffect(() => {
    let isMounted = true;
    if (!iconName) return;

    import("lucide-react").then((mod) => {
      if (mod[iconName] && isMounted) {
        setIcon(() => mod[iconName] as ComponentType<{ className?: string }>);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [iconName]);

  return Icon ? <Icon className={className} /> : null;
};

export default DynamicIcon;
