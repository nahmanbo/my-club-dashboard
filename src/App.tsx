import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { FilterBar, ActiveToggle, LayoutSwitch } from "./components/FilterBar";
import MembersContainer from "./components/MembersContainer";
import MemberCard, { type Member } from "./components/MemberCard";

type Layout = "list" | "grid";

const members: Member[] = [
  { id: 1, name: "Alice Johnson", role: "Leader", isActive: true,  avatarUrl: "https://i.pravatar.cc/80?img=1" },
  { id: 2, name: "Bob Smith",     role: "Member", isActive: false, avatarUrl: "https://i.pravatar.cc/80?img=2" },
  { id: 3, name: "Carol Lee",     role: "Guest",  isActive: true,  avatarUrl: "https://i.pravatar.cc/80?img=3" },
  { id: 4, name: "David Kim",     role: "Leader", isActive: true,  avatarUrl: "https://i.pravatar.cc/80?img=4" },
  { id: 5, name: "Emma Brown",    role: "Member", isActive: true,  avatarUrl: "https://i.pravatar.cc/80?img=5" },
  { id: 6, name: "Frank Miller",  role: "Guest",  isActive: false, avatarUrl: "https://i.pravatar.cc/80?img=6" },
  { id: 7, name: "Grace Wilson",  role: "Leader", isActive: true,  avatarUrl: "https://i.pravatar.cc/80?img=7" },
  { id: 8, name: "Henry Davis",   role: "Member", isActive: true,  avatarUrl: "https://i.pravatar.cc/80?img=8" }
];


export default function App() {
  const [layout, setLayout] = useState<Layout>("list");
  const [showOnlyActive, setShowOnlyActive] = useState(false);

  const filtered = showOnlyActive ? members.filter(m => m.isActive) : members;

  return (
    <>
      <Header headerText="Campus Club Dashboard" />
      <FilterBar>
        <LayoutSwitch layout={layout} onLayoutChange={setLayout} />
        <ActiveToggle showOnlyActive={showOnlyActive} onShowOnlyActiveChange={setShowOnlyActive} />
      </FilterBar>

      <MembersContainer layout={layout}>
  {filtered.map(m => <MemberCard key={m.id} member={m} />)}
</MembersContainer>
    </>
  );
}
