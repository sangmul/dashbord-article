import { useNavigate } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  const nav = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg p-5 hidden md:block">
        <h1 className="text-xl font-bold mb-6 text-blue-600">📊 CMS</h1>

        <div className="flex flex-col gap-3">
          <button onClick={() => nav("/all-posts")} className="text-left hover:text-blue-500">
            📄 All Posts
          </button>
          <button onClick={() => nav("/add-new")} className="text-left hover:text-blue-500">
            ➕ Add New
          </button>
          <button onClick={() => nav("/preview")} className="text-left hover:text-blue-500">
            👁️ Preview
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">
        
        {/* NAVBAR */}
        <header className="bg-white shadow px-6 py-4 flex justify-between">
          <h2 className="font-semibold">Dashboard</h2>
          <div className="text-sm text-gray-500">Admin</div>
        </header>

        {/* CONTENT */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}