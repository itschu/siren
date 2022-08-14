import Nav from "@/components/nav";
import Notice from "@/components/notice";
import Footer from "@/components/footer";
import HamburgerMenu from "@/components/hamburger-menu";
import About from "@/components/about";
import HtmlHead from "@/components/head";

const AboutPage = () => {
	return (
		<>
			<HtmlHead currentPage={"About"} />
			<Nav />
			<HamburgerMenu />
			<About />
			<Notice />
			<Footer />
		</>
	);
};

export default AboutPage;
