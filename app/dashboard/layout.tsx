import DashboardNavbar from "./DashboardNavbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardNavbar />
      {children}
    </div>
  );
};

export default Layout;
