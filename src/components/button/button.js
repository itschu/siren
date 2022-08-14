const Button = ({ text }) => {
	return (
		<div className="border mx-auto cursor-pointer py-2 px-4 w-fit rounded-full mt-8 flex items-center gap-3 border-gray-400">
			<span>{text} </span>
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
					d="M17 8l4 4m0 0l-4 4m4-4H3"
				/>
			</svg>
		</div>
	);
};

export default Button;
