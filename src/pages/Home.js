import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [sidebar, setSidebar] = useState(true)

  const toggleSidebar = () => {
    return setSidebar(!sidebar)
  }

  return (
		<>
			<Navbar toggleSidebar={toggleSidebar} />
			<div className="container-fluid d-flex px-2 full-screen">
				<Sidebar show={sidebar} />
        {/*  */}
        <div className="mt-5 pt-5">
          hhh
        </div>
			</div>
		</>
  );
}

export default Home