import Nav from "@/components/nav";
import Footer from "@/components/footer";
import HamburgerMenu from "@/components/hamburger-menu";
import HtmlHead from "@/components/head";
import AccountJournal from "@/components/account/journal";

const JournalPage = () => {
	return (
		<>
			<HtmlHead currentPage={"My Journals"} />
			<Nav loggedIn={true} />
			<HamburgerMenu loggedIn={true} />
			<AccountJournal />
			<Footer />
		</>
	);
};

export default JournalPage;

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
