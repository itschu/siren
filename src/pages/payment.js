import Nav from "@/components/nav";
import Notice from "@/components/notice";
import Footer from "@/components/footer";
import HamburgerMenu from "@/components/hamburger-menu";
import HtmlHead from "@/components/head";
import Payment from "@/components/payment";

const PaymentPage = () => {
	return (
		<>
			<HtmlHead currentPage={"Payment & Fees"} />
			<Nav />
			<HamburgerMenu />
			<Payment />
			<Notice />
			<Footer />
		</>
	);
};

export default PaymentPage;
