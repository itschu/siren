import { useState } from "react";
import SubmitForm from "../submit-form";

const Submit = ({ journals, states }) => {
	const css = `
        .banner{
            background-image: url(/images/hero.jpg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
        body{
            scroll-padding: 90px;
        }
    `;

	const [form, setForm] = useState({
		article_name: "",
		journal: "",
		first_name: "",
		last_name: "",
		email: "",
		phone_num: "",
		address: "",
		states: "",
		country: "Nigeria",
		profession: "",
		academic_degree: "",
	});

	const submitArticle = (e) => {
		e.preventDefault();
	};

	return (
		<section className="mt-16 p-0 relative">
			<style>{css}</style>
			<div className="banner relative bg-slate-500 w-full h-72 md:h-96 flex flex-col justify-center px-6 md:px-20 text-white text-2xl md:text-3xl font-bold md:font-semibold">
				<div className="absolute top-0 left-0 bottom-0 right-0 z-0 overlay" />

				<h1 className="z-10 capitalize font-bold text-3xl">
					Submit an article online
				</h1>
			</div>
			<p className="bg-white px-6 md:px-16 py-8 md:py-10 leading-7">
				Scholars and Researchers in the academic community and other
				institutions are invited to submit their research articles for
				publication. An Author wishing to submit a paper should ensure
				that it has not been previously published or its being
				considered for publication in another journal. The manuscript
				should be the Author&apos;s original work. Siren Journals
				invites Researchers, Academicians, Professionals, Practitioners,
				and Students from all over the world to submit high-quality
				theoretical and empirical original research papers, case
				studies, review papers, literature reviews, book reviews,
				conceptual framework, analytical and simulation models, and
				technical notes for publication. Please fill out the form below.
				All fields are required. Only Microsoft Word format should be
				submitted.
			</p>

			<h1 className="text-2xl font-bold mx-5 md:mx-24 mt-12">
				Submit article
			</h1>
			<form className="section pt-0" onSubmit={submitArticle}>
				<SubmitForm
					journals={journals}
					states={states}
					form={form}
					setForm={setForm}
				/>

				<button
					className="bg-blue-500 px-5 py-2 rounded-lg text-white font-semibold mt-10"
					type="submit"
				>
					Submit Article
				</button>
			</form>
		</section>
	);
};

export default Submit;
