import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  ...props
}) => {
  // Map of icon names to their respective SVG paths
  const iconMap: Record<string, React.ReactNode> = {
    home: <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" />,
    play: <path d="M8 5v14l11-7z" />,
    pause: <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />,
    volume: (
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    ),
    // Add more icons as needed
  };

  // Get the icon path from the map or use a default icon
  const iconPath = iconMap[name] || iconMap.home;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`inline-block ${className}`}
      {...props}
    >
      {iconPath}
    </svg>
  );
};

export default Icon;
