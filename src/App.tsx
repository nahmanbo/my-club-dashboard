import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { FilterBar, ActiveToggle, LayoutSwitch } from "./components/FilterBar";
import MembersContainer from "./components/MembersContainer";

type Layout = "list" | "grid";

export default function App() {
  const [layout, setLayout] = useState<Layout>("list");
  const [showOnlyActive, setShowOnlyActive] = useState(false);

  return (
    <>
      <Header headerText="Campus Club Dashboard" />
      <FilterBar>
        <LayoutSwitch layout={layout} onLayoutChange={setLayout} />
        <ActiveToggle
          showOnlyActive={showOnlyActive}
          onShowOnlyActiveChange={setShowOnlyActive}
        />
      </FilterBar>
      <MembersContainer></MembersContainer>
    </>
  );
}
