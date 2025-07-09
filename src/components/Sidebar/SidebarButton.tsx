import React, { useState, useRef } from "react";
import SidebarPopup from "./SidebarPopup";
import "./styles.css";

interface PopupItem {
  label: string;
  url: string;
}

interface PopupGroup {
  label?: string;
  items: PopupItem[];
}

interface SidebarButtonProps {
  iconName: string;
  title: string;
  url: string;
  isActive?: boolean;
  onClick?: () => void;
  items?: PopupGroup[]; // Add popup items prop
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ iconName, title, url, isActive = false, onClick, items }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default navigation behavior
      window.location.href = url;
    }
  };

  const handleMouseEnter = () => {
    // Clear any pending hide timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }

    if (items && items.length > 0 && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonRect(rect);
      setIsPopupVisible(true);
    }
  };

  const handleMouseLeave = () => {
    // Set a timeout to hide the popup, but allow it to be cancelled
    hideTimeoutRef.current = setTimeout(() => {
      setIsPopupVisible(false);
    }, 50); // Increased delay to allow moving to popup
  };

  const handlePopupMouseEnter = () => {
    // Clear the hide timeout when mouse enters popup
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const handlePopupMouseLeave = () => {
    // Hide popup when mouse leaves popup area
    setIsPopupVisible(false);
  };

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  // Dynamically import SVG content
  const getSvgContent = async (iconName: string) => {
    try {
      const response = await fetch(`/templates/sidebar/icons/${iconName}.svg`);
      return await response.text();
    } catch (error) {
      console.error(`Failed to load icon: ${iconName}`, error);
      return "";
    }
  };

  const [svgContent, setSvgContent] = React.useState<string>("");

  React.useEffect(() => {
    getSvgContent(iconName).then(setSvgContent);
  }, [iconName]);

  return (
    <>
      <button
        ref={buttonRef}
        className={`sidebar-button ${isActive ? "sidebar-button--active" : ""}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        title={title}
      >
        <div className="sidebar-button__icon" dangerouslySetInnerHTML={{ __html: svgContent }} />
        <span className="sidebar-button__title">{title}</span>
      </button>

      {items && items.length > 0 && (
        <SidebarPopup
          isVisible={isPopupVisible}
          title={title}
          groups={items}
          onMouseEnter={handlePopupMouseEnter}
          onMouseLeave={handlePopupMouseLeave}
          buttonRect={buttonRect}
        />
      )}
    </>
  );
};

export default SidebarButton;
