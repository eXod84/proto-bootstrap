import React from "react";

interface SidebarPopupItemProps {
  label: string;
  url: string;
  onClick?: () => void;
}

const SidebarPopupItem: React.FC<SidebarPopupItemProps> = ({ label, url, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.location.href = url;
    }
  };

  return (
    <button className="sidebar-popup-item" onClick={handleClick}>
      {label}
    </button>
  );
};

export default SidebarPopupItem;
