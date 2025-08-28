import type { PropsWithChildren } from "react";
import "../styles/membersContainer.css";

export default function MembersContainer({children}:PropsWithChildren) {
  return (
    <div className="members-container">
    {children}
    </div>
  );
}