import "../styles/memberCard.css";

export interface Member {
  id: number;
  name: string;
  role: "Leader" | "Member" | "Guest";
  isActive: boolean;
  avatarUrl: string;
}

// Simple member card
export default function MemberCard({ member }: { member: Member }) {
  const roleCls = member.role.toLowerCase(); // "leader" | "member" | "guest"
  return (
    <div className={`member-card ${roleCls} ${member.isActive ? "" : "inactive"}`}>
      <img src={member.avatarUrl} alt={member.name} className="avatar" />
      <div className="info">
        <h3 className="name">{member.name}</h3>
        <p className="role">{member.role}</p>
      </div>
      <button className={`role-btn ${roleCls}`} disabled={!member.isActive}>
        {member.role}
      </button>
    </div>
  );
}
