import { ShoppingCartIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <h1 className="logo">DeenDuel</h1>
      </div>

      <div className="nav-right">
        <button className="nav-icon-btn">
          <ShoppingCartIcon className="icon" />
          Store
        </button>

        <button className="nav-icon-btn">
          <ArrowRightOnRectangleIcon className="icon" />
          Login
        </button>
      </div>
    </nav>
  );
}