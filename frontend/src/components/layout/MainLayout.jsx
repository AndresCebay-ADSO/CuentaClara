import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

function MainLayout({ children }) {
  return (
    <div className="flex bg-[#f5f3ef]">
      
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6">
          {children}
        </main>
      </div>

    </div>
  )
}

export default MainLayout