const Notice = () => {
	return (
		<section className="mt-16 md:mt-5 bg-blue-500 text-white leading-7 py-12">
			<h2 className="text-3xl font-bold md:font-semibold my-3 mb-9 text-center">
				Important Notice
			</h2>
			<p>
				Siren Journals have been indexed by Google scholar, ResearchGate
				and Academia.edu. Therefore, plagiarism test is compulsory for
				all articles to be published in Siren Journals. Only articles
				with similarity index below 20% shall be indexed in the
				above-mentioned global platforms.
			</p>
			<br />
			<p>
				Authors are expected to expressly indicate the Journals in which
				they choose to publish their articles. The referencing style
				must conform to APA 6TH Edition. In terms of pagination, the
				minimum is 12 while the maximum is 18 pages. Soft or electronic
				copies of the articles should be submitted through the online
				submission Platform or to the following Email addresses:{" "}
				<code className="text-gray-700 font-bold">
					cedsaf@yahoo.com
				</code>{" "}
				or{" "}
				<code className="text-gray-700 font-bold">
					sirenjournals@gmail.com.
				</code>
			</p>
		</section>
	);
};

export default Notice;
