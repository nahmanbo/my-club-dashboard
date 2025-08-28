import type { PropsWithChildren } from "react";
import "../styles/filterBar.css";

type Layout = "list" | "grid";

// Filter bar container
export function FilterBar({children}:PropsWithChildren) {
  return <div className="filter-bar">{children}</div>;
}

// Toggle show only active members
export function ActiveToggle({ showOnlyActive, onShowOnlyActiveChange }: { showOnlyActive: boolean; onShowOnlyActiveChange: (next: boolean) => void; }) {
    return (
        <div className="filter-block" onClick={() => onShowOnlyActiveChange(!showOnlyActive)}>
          <span className="toggle-label">Only active:</span>
          <span className={`toggle-chip ${showOnlyActive ? "is-on" : ""}`}>
            {showOnlyActive ? "ON" : "OFF"}
          </span>
        </div>
      );
  }
  
// Switch between list and grid layouts
export function LayoutSwitch({ layout, onLayoutChange }: { layout: Layout; onLayoutChange: (next: Layout) => void; }) {
  return (
    <div className="filter-block">
      <button
        className={layout === "list" ? "layout-btn is-active" : "layout-btn"}
        onClick={() => onLayoutChange("list")}
      >List</button>
      <button
        className={layout === "grid" ? "layout-btn is-active" : "layout-btn"}
        onClick={() => onLayoutChange("grid")}
      >Grid</button>
    </div>
  );
}
