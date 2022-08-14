import Image from "next/image";
import Link from "next/link";

const SchoolCard = ({ title, num, logo, abbr }) => {
	return (
		<Link href={`/schools/${abbr}`}>
			<div className="bg-white p-5 rounded-xl relative flex justify-between items-center transition duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
				<div className="flex items-center gap-5">
					<div className="relative w-10 md:w-14 h-10 md:h-14">
						<Image
							src={`/images/${logo}`}
							layout="fill"
							alt={`${title} logo`}
						/>
					</div>
					<div>
						<h3 className="capitalize font-semibold md:font-bold text-base md:text-lg">
							{title}
						</h3>
						<h4 className="font-semibold text-middy">
							{num} Journals
						</h4>
					</div>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4 md:hidden"
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
		</Link>
	);
};

export default SchoolCard;
