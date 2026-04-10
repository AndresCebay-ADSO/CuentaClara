import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#3e2f2f] text-white p-4">
      <h2 className="text-xl font-bold mb-6">Finanzas</h2>

      <nav className="flex flex-col gap-3">
        <Link to="/" className="hover:bg-[#5a4034] p-2 rounded">
          Dashboard
        </Link>

        <Link to="/personas" className="hover:bg-[#5a4034] p-2 rounded">
          Personas
        </Link>

        <Link to="/prestamos" className="hover:bg-[#5a4034] p-2 rounded">
          Préstamos
        </Link>

        <Link to="/pagos" className="hover:bg-[#5a4034] p-2 rounded">
          Pagos
        </Link>

        <Link to="/reportes" className="hover:bg-[#5a4034] p-2 rounded">
          Reportes
        </Link>
        <li>
          <Link to="/usuarios">Usuarios</Link>
        </li>
      </nav>
    </div>
  );
}

export default Sidebar;
