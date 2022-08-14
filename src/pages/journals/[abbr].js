import Footer from "@/components/footer";
import HamburgerMenu from "@/components/hamburger-menu";
import Nav from "@/components/nav";
import Notice from "@/components/notice";
import HtmlHead from "@/components/head";
import SingleJournal from "@/components/single-journal";

const SingleJournalPage = ({ journal, articles, editors, journal_name }) => {
	return (
		<>
			<HtmlHead currentPage={journal || ""} />
			<Nav />
			<HamburgerMenu />
			<SingleJournal
				journal={journal}
				articles={articles}
				editors={editors}
				journal_name={journal_name}
				// image={""}
			/>
			<Notice />
			<Footer />
		</>
	);
};

export default SingleJournalPage;

export const getServerSideProps = async (context) => {
	const res = await fetch(
		`${process.env.HOST}/api/journal/${context.query.abbr}`,
		{
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: process.env.API,
			},
		}
	);

	const { data, name } = await res.json();
	return {
		props: {
			journal: context.query.abbr,
			journal_name: name,
		},
	};
};
