import React from "react";
import SidebarPopupItem from "./SidebarPopupItem";

interface PopupGroupItem {
  label: string;
  url: string;
}

interface SidebarPopupGroupProps {
  label?: string; // Optional subcaption
  items: PopupGroupItem[];
  onItemClick?: () => void;
}

const SidebarPopupGroup: React.FC<SidebarPopupGroupProps> = ({ label, items, onItemClick }) => {
  return (
    <div className="py-1">
      {label && <div className="sidebar-popup-group-label">{label}</div>}
      <div className="space-y-0">
        {items.map((item, index) => (
          <SidebarPopupItem key={`${item.url}-${index}`} label={item.label} url={item.url} onClick={onItemClick} />
        ))}
      </div>
    </div>
  );
};

export default SidebarPopupGroup;
