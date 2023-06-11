import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import ToolBox from "../components/ToolBox";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ToolBox />
      <BottomNav />
    </>
  );
};

export default MainLayout;
