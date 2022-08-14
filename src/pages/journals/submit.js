import Footer from "@/components/footer";
import HamburgerMenu from "@/components/hamburger-menu";
import Nav from "@/components/nav";
import Notice from "@/components/notice";
import HtmlHead from "@/components/head";
import Submit from "@/components/submit";

const SubmitPage = ({ journals, states }) => {
	return (
		<>
			<HtmlHead currentPage={"Submit Article"} />
			<Nav />
			<HamburgerMenu />
			<Submit journals={journals} states={states} />
			<Notice />
			<Footer />
		</>
	);
};

export default SubmitPage;

export const getServerSideProps = async (context) => {
	const res = await fetch(`${process.env.HOST}/api/journal`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: process.env.API,
		},
	});

	const req_state = await fetch(`${process.env.HOST}/api/state`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: process.env.API,
		},
	});

	const { data } = await res.json();
	const res_sate = await req_state.json();

	return {
		props: {
			journals: data,
			states: res_sate.data,
		},
	};
};
