import Link from "next/link";

const Footer = () => {
	return (
		<footer className=" pt-12 pb-5 bg-white">
			<div className="flex md:flex-row flex-col justify-around gap-6 mb-7">
				<div>
					<h3 className="text-lg font-bold mb-3">Siren Journals</h3>
					<ul className="flex flex-col gap-2 md:gap-3">
						<Link href={"/"}>
							<li className="menu-item">Home</li>
						</Link>
						<Link href={"/about"}>
							<li className="menu-item">About</li>
						</Link>
						<Link href={"/contact"}>
							<li className="menu-item">Contact</li>
						</Link>
					</ul>
				</div>

				<div>
					<h3 className="text-lg font-bold mb-3">Legal</h3>
					<ul className="flex flex-col gap-2 md:gap-3">
						<li className="menu-item">Terms of Use</li>
						<li className="menu-item">Privacy Policy</li>
					</ul>
				</div>

				<div>
					<h3 className="text-lg font-bold mb-3">Authors</h3>
					<ul className="flex flex-col gap-2 md:gap-3">
						<Link href={"/journals/submit"}>
							<li className="menu-item">Submit Article Online</li>
						</Link>
						<Link href={"/payment"}>
							<li className="menu-item">
								Payment &amp; Publication Fees
							</li>
						</Link>
						<Link href="/author/template.pdf">
							<li className="menu-item">
								Guidelines &amp; Template
							</li>
						</Link>
						<Link href="/author/copyright_form.pdf">
							<li className="menu-item">Copyright Form</li>
						</Link>
					</ul>
				</div>

				<div>
					<h3 className="text-lg font-bold mb-3">More</h3>
					<ul className="flex flex-col gap-2 md:gap-3">
						<li className="menu-item">FAQ&apos;s</li>
						<li className="menu-item">Site Map</li>
					</ul>
				</div>
			</div>

			<p className="border-t text-center pt-5 text-sm">
				&copy; {new Date().getFullYear()} Siren Journals. All rights
				reserved
			</p>
		</footer>
	);
};

export default Footer;
