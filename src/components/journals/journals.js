import JournalCard from "@/components/journal-card";
import { journals } from "@/data";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const add_journal = async () => {
	for (let index = 0; index < journals.length; index++) {
		const element = journals[index];

		const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/journal`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: process.env.NEXT_PUBLIC_API,
			},
			body: JSON.stringify(element),
		});
	}
};

const Journals = ({ journals, section, max = 6, rows = true, sh = false }) => {
	const [pageNumber, setPageNumber] = useState(0);

	let perPage = max;
	let seen = pageNumber * perPage;

	const pageCount = Math.ceil(journals?.length / perPage);

	const changePage = ({ selected }) => {
		section.current.scrollIntoView({ behavior: "smooth" }, true);
		const yOffset = -90;
		const y =
			section.current.getBoundingClientRect().top +
			window.pageYOffset +
			yOffset;
		window.scrollTo({ top: y, behavior: "smooth" });
		setPageNumber(selected);
	};

	return (
		<div>
			<h2
				className={`${
					sh
						? "text-xl"
						: rows
						? "text-2xl"
						: "text-3xl border-b pb-4"
				} font-bold my-3 mb-9 self-start `}
			>
				{rows
					? "List of Journals"
					: `All Journals (${journals?.length || 0})`}
			</h2>
			<div className="flex flex-col items-center">
				<div
					className={`grid ${
						rows ? "md:grid-cols-3" : "md:grid-cols-4"
					} grid-cols-2 gap-2 md:gap-5`}
				>
					{journals?.slice(seen, seen + perPage).map((el, i) => (
						<JournalCard abbr={el.abbr} name={el.name} key={i} />
					))}
				</div>

				{journals !== undefined && journals.length !== 0 && (
					<ReactPaginate
						previousLabel={"Previous"}
						nextLabel={"Next"}
						pageCount={pageCount}
						onPageChange={changePage}
						containerClassName={"pagination"}
						previousLinkClassName={"prevBtn"}
						nextLinkClassName={"nextBtn"}
						disabledClassName={"paginationDisabled"}
						activeClassName={"paginationActive"}
					/>
				)}

				{journals == undefined ? (
					<p className="border-t pt-7">
						Sorry there are no journals available at this time,
						please check again later. <br />
						If You are an author you can submit your articles for
						review and publication
					</p>
				) : (
					journals.length == 0 && (
						<p className="border-t pt-7">
							Sorry there are no journals available at this time,
							please check again later. <br />
							If You are an author you can submit your articles
							for review and publication
						</p>
					)
				)}
			</div>
		</div>
	);
};

export default Journals;
