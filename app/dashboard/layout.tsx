import DashboardNavbar from "./DashboardNavbar";
import { RecordProvider } from "./RecordContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardNavbar />
      <RecordProvider>{children}</RecordProvider>
    </div>
  );
};

export default Layout;
