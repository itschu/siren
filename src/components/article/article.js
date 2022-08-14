const Article = ({ pub_name, author, views, type, date }) => {
	return (
		<div className="bg-white px-6 py-5 rounded-md">
			<p className="text-xs flex items-center">
				<span className="font-bold mr-3 text-sm">{type}</span>
				{date}
			</p>
			<h4 className="font-bold text-lg md:text-base my-3 leading-7 md:leading-8">
				{pub_name}
			</h4>
			<p className="mb-2 text-gray-600 text-sm">
				<span className="font-bold">Author(s) : </span> {author}
			</p>
			<p className="border-t pt-3 text-sm mt-5 flex justify-between items-center">
				<span> {views} views</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
					/>
				</svg>
			</p>
		</div>
	);
};

export default Article;
