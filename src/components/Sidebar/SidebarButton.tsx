import React from 'react';
import './styles.css';

interface SidebarButtonProps {
  iconName: string;
  title: string;
  url: string;
  isActive?: boolean;
  onClick?: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  iconName,
  title,
  url,
  isActive = false,
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default navigation behavior
      window.location.href = url;
    }
  };

  // Dynamically import SVG content
  const getSvgContent = async (iconName: string) => {
    try {
      const response = await fetch(`/templates/sidebar/icons/${iconName}.svg`);
      return await response.text();
    } catch (error) {
      console.error(`Failed to load icon: ${iconName}`, error);
      return '';
    }
  };

  const [svgContent, setSvgContent] = React.useState<string>('');

  React.useEffect(() => {
    getSvgContent(iconName).then(setSvgContent);
  }, [iconName]);

  return (
    <button
      className={`sidebar-button ${isActive ? 'sidebar-button--active' : ''}`}
      onClick={handleClick}
      title={title}
    >
      <div 
        className="sidebar-button__icon"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
      <span className="sidebar-button__title">{title}</span>
    </button>
  );
};

export default SidebarButton;