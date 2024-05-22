import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import './layout.scss'

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="body">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
