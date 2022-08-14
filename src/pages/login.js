import Nav from "@/components/nav";
import Notice from "@/components/notice";
import Footer from "@/components/footer";
import HamburgerMenu from "@/components/hamburger-menu";
import HtmlHead from "@/components/head";
import Login from "@/components/login";

const LoginPage = () => {
	return (
		<>
			<HtmlHead currentPage={"Login"} />
			<Nav />
			<HamburgerMenu />
			<Login />
			<Notice />
			<Footer />
		</>
	);
};

export default LoginPage;

export const getServerSideProps = async (context) => {
	const { cookies } = context.req;

	const jwt = cookies.sirenJournal;

	if (jwt !== undefined) {
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
				redirect: {
					destination: "/account",
					permanent: false,
				},
			};
		} catch (error) {}
	}
};
