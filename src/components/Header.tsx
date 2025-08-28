import "../styles/header.css";

interface HeaderProps {
  headerText: string;
}

export default function Header({ headerText }: HeaderProps) {
  return (
    <header>
      <h1 className="main-title">{headerText}</h1>
    </header>
  );
}
