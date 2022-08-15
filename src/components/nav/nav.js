import useScroll from "@/hooks/useScroll";
import { useMenu } from "@/hooks/useMenu";
import Link from "next/link";

const Nav = ({ loggedIn = false }) => {
	const scroll = useScroll();
	const { menuState, setMenuState } = useMenu();

	return (
		<div
			className={`transition-all duration-500 flex items-center justify-between px-8 md:px-10 py-5 fixed right-0 -left-1 -top-1 z-20  ${
				scroll ? "nav-full" : "nav-transparent"
			}`}
		>
			<div className="w-10 h-10 bg-slate-500 rounded-full"></div>

			<ul className="gap-7 hidden md:flex items-center">
				<Link href="/">
					<li className="menu-item">Home</li>
				</Link>
				<Link href="/about">
					<li className="menu-item">About</li>
				</Link>
				<Link href="/journals">
					<li className="menu-item">Journals</li>
				</Link>
				<Link href="#">
					<li className="menu-item">Editorial Board</li>
				</Link>
				<Link href="/journals/submit">
					<li
						className={`menu-item border py-1 px-4 rounded-full ${
							scroll ? " border-gray-700" : "border-white"
						}`}
					>
						Online Submission
					</li>
				</Link>
				<Link href="#">
					<li className="menu-item flex items-center gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
						<span>Search</span>
					</li>
				</Link>
				<Link href="/login">
					<li className="menu-item flex items-center gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>{!loggedIn ? "Login" : "Account"}</span>
					</li>
				</Link>
			</ul>

			<div className=" md:hidden flex gap-7">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-7 w-7"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-7 w-7"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={3}
					onClick={() => setMenuState(true)}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</div>
		</div>
	);
};

export default Nav;
