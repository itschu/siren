import { useState } from "react";
import Article from "@/components/article";
import Editors from "@/components/editors";

const SingleJournal = ({
	journal,
	articles,
	editors,
	image = "hero.jpg",
	journal_name,
}) => {
	const css = `
        .banner{
            background-image: url(/images/${image});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
    `;
	const [active, setActive] = useState("CURRENT");

	return (
		<section className="mt-16 p-0 relative">
			<style>{css}</style>
			<div className="banner relative bg-slate-500 w-full h-72 md:h-96 flex flex-col justify-center px-6 md:px-20 text-white text-2xl md:text-3xl font-bold md:font-semibold">
				<div className="absolute top-0 left-0 bottom-0 right-0 z-0 overlay" />

				<h1 className="z-10 capitalize">
					{journal_name.toLowerCase()}
				</h1>
				<h2 className="mt-5 z-10">({journal})</h2>
			</div>

			<div className="section mt-6 md:mt-5">
				<div>
					<h3 className="text-2xl font-bold">Articles</h3>
					<div className="flex gap-5 mt-10 transition text-gray-500">
						<p
							className={`cursor-pointer transition ${
								active === "CURRENT" && "active"
							}`}
							onClick={() => setActive("CURRENT")}
						>
							Current Issue
						</p>
						<p
							className={`cursor-pointer transition ${
								active === "BACK" && "active"
							}`}
							onClick={() => setActive("BACK")}
						>
							Back Issue
						</p>
					</div>

					{articles === undefined && (
						<p className="my-5">
							Sorry there are no articles for this journal at this
							time, if you are an author you can submit your
							article for revision.
						</p>
					)}

					{articles?.filter((el) => el.issue === active).length ===
						0 && (
						<p className="my-5">
							Opps sorry, there are no {active.toLowerCase()}{" "}
							issues for this journal at this time, if you are an
							author you can submit your article for revision.
						</p>
					)}

					<div className="mt-6 md:mt-10 flex flex-col md:grid grid-cols-4 gap-5">
						{articles
							?.filter((el) => el.issue === active)
							.map((el, i) => (
								<Article key={i} />
							))}
					</div>
				</div>

				{editors !== undefined && editors.length !== 0 && (
					<div className="mt-10">
						<h3 className="text-2xl font-bold">Editors</h3>

						<div className="mt-6 md:mt-10 grid md:grid-cols-4 gap-5">
							{editors?.map((el, i) => (
								<Editors key={i} />
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default SingleJournal;
