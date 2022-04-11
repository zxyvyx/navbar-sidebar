import {MdMenu} from "react-icons/md";

const Navbar = ({toggleSidebar}) => {
	return (
		<>
			<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
				<div className="container-fluid px-2">
					<div className="d-flex align-items-center side-width justify-content-between ps-3 pe-2">
						<a className="navbar-brand" href="https://google.com">
							Navbar
						</a>
						<div
							className="hide-button px-3 py-2 rounded-3 background-primary"
							role="button"
							onClick={toggleSidebar}
						>
							<MdMenu className="text-dark fw-bold" />
						</div>
					</div>
					<ul className="navbar-nav">
						<li className="nav-item">Home</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
