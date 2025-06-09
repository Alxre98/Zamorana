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
  // In a real project, you would import actual SVG icons here
  // This is a placeholder implementation
  const renderIcon = () => {
    // This is just an example - replace with your actual icon implementation
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`inline-block ${className}`}
        {...props}
      >
        {/* Default icon content - replace with actual icon paths */}
        <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" />
      </svg>
    );
  };

  return renderIcon();
};

export default Icon;
