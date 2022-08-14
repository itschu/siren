import Nav from "@/components/nav";
import Footer from "@/components/footer";
import HamburgerMenu from "@/components/hamburger-menu";
import HtmlHead from "@/components/head";

const DashboardPage = () => {
	return (
		<>
			<HtmlHead currentPage={"Dashboard"} />
			<Nav />
			<HamburgerMenu />
			<Footer />
		</>
	);
};

export default DashboardPage;

export const getServerSideProps = async (context) => {
	const { cookies } = context.req;

	const jwt = cookies.sirenJournal;

	if (jwt === undefined) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}

	try {
		await fetch(`${process.env.HOST}/api/loggedin`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: process.env.API,
			},
			body: JSON.stringify({ jwt }),
		});

		return {
			props: {},
		};
	} catch (error) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}
};
