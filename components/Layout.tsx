import Navbar from './Navbar'
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  )
}

export default Layout
