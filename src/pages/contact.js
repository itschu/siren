import Footer from "@/components/footer";
import HamburgerMenu from "@/components/hamburger-menu";
import Nav from "@/components/nav";
import Notice from "@/components/notice";
import Contact from "@/components/contact";
import HtmlHead from "@/components/head";

const ContactPage = () => {
	return (
		<>
			<HtmlHead currentPage={"Contact"} />
			<Nav />
			<HamburgerMenu />
			<Contact />
			<Notice />
			<Footer />
		</>
	);
};

export default ContactPage;
