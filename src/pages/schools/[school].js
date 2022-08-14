import Footer from "@/components/footer";
import HamburgerMenu from "@/components/hamburger-menu";
import Nav from "@/components/nav";
import Notice from "@/components/notice";
import HtmlHead from "@/components/head";
import SingleSchool from "@/components/single-school";

const SingleSchoolPage = ({ journals, logo, name, abbr }) => {
	return (
		<>
			<HtmlHead currentPage={name || ""} />
			<Nav />
			<HamburgerMenu />
			<SingleSchool
				journals={journals}
				image={logo}
				name={name}
				abbr={abbr}
			/>
			<Notice />
			<Footer />
		</>
	);
};

export default SingleSchoolPage;

export const getServerSideProps = async (context) => {
	const res = await fetch(
		`${process.env.HOST}/api/schools/${context.query.school}`,
		{
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: process.env.API,
			},
		}
	);

	const { data, name, logo } = await res.json();
	return {
		props: {
			journals: data,
			name,
			logo,
			abbr: context.query.school,
		},
	};
};
