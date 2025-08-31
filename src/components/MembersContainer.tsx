import type { PropsWithChildren } from "react";
import "../styles/membersContainer.css";

type Layout = "list" | "grid";

interface MembersContainerProps extends PropsWithChildren {
  layout: Layout;
}

// Wrapper that switches between list (flex) and grid layouts
export default function MembersContainer({ children, layout }: MembersContainerProps) {
  return <div className={`members-container ${layout}`}>{children}</div>;
}
