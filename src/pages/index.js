import Hero from "@/components/hero";
import Nav from "@/components/nav";
import Schools from "@/components/schools";
import Journals from "@/components/journals";
import PaperCall from "@/components/paper-call";
import { useRef } from "react";
import Notice from "@/components/notice";
import Footer from "@/components/footer";
import HamburgerMenu from "@/components/hamburger-menu";
import HtmlHead from "@/components/head";

const Index = ({ schools, journals }) => {
	const section = useRef();

	return (
		<>
			<HtmlHead currentPage={"Home"} />
			<Nav />
			<HamburgerMenu />
			<Hero />
			<Schools africanSchools={schools} />
			<section className="grid md:grid-cols-7 gap-10 md:border-t-4 border-white">
				<PaperCall />
				<div ref={section} className="md:col-span-5 mt-5 md:mt-0">
					<Journals section={section} journals={journals} />
				</div>
			</section>
			<Notice />
			<Footer />
		</>
	);
};

export default Index;

export const getServerSideProps = async (context) => {
	const res = await fetch(`${process.env.HOST}/api/schools`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: process.env.API,
		},
	});

	const res_journal = await fetch(`${process.env.HOST}/api/journal`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: process.env.API,
		},
	});

	const { data } = await res.json();
	const jour = await res_journal.json();

	return {
		props: {
			schools: data,
			journals: jour.data,
		},
	};
};
