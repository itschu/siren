import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const DashMenu = () => {
	const router = useRouter();
	const [show, setShow] = useState(false);
	let page = "dashboard";

	if (router.pathname === "/account") page = "dashboard";
	if (router.pathname === "/account/journals") page = "journals";
	if (router.pathname === "/account/articles") page = "articles";
	if (router.pathname === "/account/schools") page = "schools";
	if (router.pathname === "/account/editors") page = "editors";

	const logout = async () => {
		await fetch("/api/auth/logout");
		router.push("/login");
	};
	return (
		<div className={`flex justify-between`}>
			<ul
				className={`flex flex-col gap-5 pr-0 md:pr-32 mf:py-5 md:border-r-2 dash-menu md:h-fit transition-all ${
					show ? "h-64" : "h-5"
				} overflow-hidden`}
			>
				<li
					className={`active-dash-menu capitalize ${
						show ? "hidden" : "block"
					} md:hidden`}
				>
					{page}
				</li>
				<Link href={"/account"}>
					<li
						className={`${
							page === "dashboard" && "active-dash-menu"
						}`}
					>
						Dashboard
					</li>
				</Link>
				<Link href={"/account/journals"}>
					<li
						className={`${
							page === "journals" && "active-dash-menu"
						}`}
					>
						Journals
					</li>
				</Link>
				<Link href={"#"}>
					<li
						className={`${
							page === "articles" && "active-dash-menu"
						}`}
					>
						Articles
					</li>
				</Link>

				<Link href={"#"}>
					<li
						className={`${
							page === "schools" && "active-dash-menu"
						}`}
					>
						Schools
					</li>
				</Link>
				<Link href={"#"}>
					<li
						className={`${
							page === "editors" && "active-dash-menu"
						}`}
					>
						Editors
					</li>
				</Link>
				<li onClick={logout}>Logout</li>
			</ul>
			{!show ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 md:hidden self-start"
					onClick={() => setShow(!show)}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4 8h16M4 16h16"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					onClick={() => setShow(!show)}
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			)}
		</div>
	);
};

export default DashMenu;
