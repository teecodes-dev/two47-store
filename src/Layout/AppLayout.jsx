import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
