import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useScroll = () => {
	const router = useRouter();
	const [scroll, setScroll] = useState(
		router.pathname !== "/" ? true : false
	);

	useEffect(() => {
		const onScroll = () => {
			if (router.pathname !== "/") return setScroll(true);
			const scrollCheck = window.scrollY > 65;
			setScroll(scrollCheck);
		};

		document.addEventListener("scroll", onScroll);
		return () => {
			document.removeEventListener("scroll", onScroll);
		};
	}, [scroll, setScroll]);
	return scroll;
};

export default useScroll;
