import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import SidebarPopupGroup from "./SidebarPopupGroup";

interface PopupItem {
  label: string;
  url: string;
}

interface PopupGroup {
  label?: string;
  items: PopupItem[];
}

interface SidebarPopupProps {
  isVisible: boolean;
  title: string;
  groups: PopupGroup[];
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  buttonRect?: DOMRect | null;
}

const SidebarPopup: React.FC<SidebarPopupProps> = ({
  isVisible,
  title,
  groups,
  onClose,
  onMouseEnter,
  onMouseLeave,
  buttonRect,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [popupStyle, setPopupStyle] = useState<React.CSSProperties>({
    position: "fixed",
    left: (buttonRect?.right ?? 0) + 4,
    top: buttonRect?.top ?? 0 - 8,
  });

  useEffect(() => {
    if (!buttonRect) return;
    const viewportHeight = window.innerHeight;

    const popupHeight = popupRef.current?.clientHeight ?? 0;
    if (buttonRect.top + popupHeight > viewportHeight) {
      setPopupStyle((popupStyle) => ({
        ...popupStyle,
        left: (buttonRect?.right ?? 0) + 4,
        top: popupHeight > viewportHeight - 60 ? 60 : "unset",
        bottom: 10,
      }));
    } else {
      setPopupStyle((popupStyle) => ({
        ...popupStyle,
        left: (buttonRect?.right ?? 0) + 4,
        top: buttonRect?.top ?? 0 - 8,
        bottom: "unset",
      }));
    }
  }, [buttonRect]);

  if (!isVisible || !buttonRect) {
    return null;
  }

  return (
    <div
      ref={popupRef}
      style={popupStyle}
      className="sidebar-popup"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Header with title */}

      <h3 className="sidebar-popup__title">{title}</h3>

      {/* Scrollable content */}
      <div className="overflow-y-auto">
        {groups.map((group, groupIndex) => {
          // Filter out groups with no items
          if (!group.items || group.items.length === 0) {
            return null;
          }

          return (
            <div key={groupIndex}>
              <SidebarPopupGroup label={group.label} items={group.items} onItemClick={onClose} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarPopup;
