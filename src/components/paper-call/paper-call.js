const PaperCall = () => {
	const month = new Date().getMonth();
	const pubTimes = [
		"March",
		"March",
		"March",
		"June",
		"June",
		"June",
		"September",
		"September",
		"September",
		"December",
		"December",
		"December",
	];
	return (
		<aside className="md:col-span-2">
			<h2 className="text-2xl font-bold md:font-semibold py-4">
				Call For Papers
			</h2>
			<div className="bg-white p-5 rounded-lg">
				<h4 className="mb-3 font-bold">
					{pubTimes[month]} {new Date().getFullYear()} Edition
				</h4>
				<p className="text-left leading-8 md:leading-7">
					Scholars and Researchers in the academic community and other
					institutions are invited to submit their research articles
					for publication. An Author wishing to submit a paper should
					ensure that it has not been previously published or its
					being considered for publication in another journal. The
					manuscript should be the Author&apos;s original work. Siren
					JOURNALS invites Researchers, Academicians, Professionals,
					Practitioners, and Students from all over the world to
					submit high-quality theoretical and empirical original
					research papers, case studies, review papers, literature
					reviews, book reviews, conceptual framework, analytical and
					simulation models, and technical notes for publication
				</p>
			</div>
		</aside>
	);
};

export default PaperCall;
