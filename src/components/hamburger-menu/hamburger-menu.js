import { useMenu } from "@/hooks/useMenu";
import Link from "next/link";

const HamburgerMenu = () => {
	const { menuState, setMenuState } = useMenu();

	return (
		<div
			className={`${
				menuState ? " " : "-translate-x-full "
			} transition fixed md:hidden left-0 right-0 top-0 bottom-0 bg-white z-50 h-screen flex flex-col duration-300`}
		>
			<div className="flex justify-between items-center border-b p-4">
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 rounded-full bg-slate-500"></div>
					<p className="font-bold">Siren Journals</p>
				</div>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-7 w-7 mr-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
					onClick={() => setMenuState(false)}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</div>

			<ul className="p-4 flex flex-col gap-7 mt-3">
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
						<span>Login</span>
					</li>
				</Link>
				<Link href="/journals/submit">
					<li
						className={`menu-item border py-2 px-4 rounded-full text-center border-gray-700`}
					>
						Online Submission
					</li>
				</Link>
			</ul>
		</div>
	);
};

export default HamburgerMenu;
