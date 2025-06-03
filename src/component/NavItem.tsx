interface NavItemProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ id, label, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 font-5xl font-[500] transition-colors duration-300 cursor-pointer ${
        isActive ? "text-sky-500" : "text-zinc-700"
      } hover:text-sky-500`}
    >
      {label}
    </button>
  );
};

export default NavItem;
