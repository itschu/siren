import Footer from "@/components/footer";
import HamburgerMenu from "@/components/hamburger-menu";
import Nav from "@/components/nav";
import Notice from "@/components/notice";
import HtmlHead from "@/components/head";
import Journals from "@/components/journals";

const JournalsPage = ({ journals }) => {
	return (
		<>
			<HtmlHead currentPage={"Journals"} />
			<Nav />
			<HamburgerMenu />
			<section className="mt-24">
				<Journals max={30} rows={false} journals={journals} />
			</section>
			<Notice />
			<Footer />
		</>
	);
};

export default JournalsPage;

export const getServerSideProps = async (context) => {
	const res = await fetch(`${process.env.HOST}/api/journal`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: process.env.API,
		},
	});

	const { data } = await res.json();

	return {
		props: {
			journals: data,
		},
	};
};
