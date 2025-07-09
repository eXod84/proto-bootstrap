import React, { useState } from "react";
import SidebarButton from "./SidebarButton";
import SidebarSpacer from "./SidebarSpacer";
import { toolkits } from "../../../templates/sidebar/toolkits";
import "./styles.css";

interface ToolkitItem {
  label?: string;
  short_label?: string;
  icon?: string;
  url?: string;
  divider?: boolean;
  items?: any[];
}

const Sidebar: React.FC = () => {
  const [activeUrl, setActiveUrl] = useState<string>(window.location.pathname);

  const handleButtonClick = (url: string) => {
    setActiveUrl(url);
    window.location.href = url;
  };

  const renderToolkitItems = () => {
    return toolkits.map((item: ToolkitItem, index: number) => {
      if (item.divider) {
        return <SidebarSpacer key={`spacer-${index}`} />;
      }

      if (item.icon && item.short_label && item.url) {
        return (
          <SidebarButton
            key={item.url}
            iconName={item.icon}
            title={item.short_label}
            url={item.url}
            isActive={activeUrl === item.url}
            onClick={() => handleButtonClick(item.url)}
            items={item.items}
          />
        );
      }

      return null;
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebar__content">{renderToolkitItems()}</div>
    </div>
  );
};

export default Sidebar;
