import React from "react";
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-[rgba(238,115,145,1)] self-stretch flex min-h-[69px] w-full items-center justify-between px-4">
      <button
        onClick={onMenuClick}
        className="text-white p-2 rounded-full hover:bg-[rgba(255,255,255,0.2)] transition-colors"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      <div className="text-white text-lg font-medium">Mi App</div>

      <div className="w-10">{/* Placeholder to balance the layout */}</div>
    </header>
  );
};

export default Header;
