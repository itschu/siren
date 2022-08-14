import Link from "next/link";

const JournalCard = ({ abbr, name, img }) => {
	return (
		<Link href={`/journals/${abbr}`}>
			<div className="md:col-span-1 bg-white rounded-md overflow-hidden cursor-pointer">
				<div className="relative bg-slate-500 h-48"></div>
				<div className="p-4">
					<h4 className="font-bold md:text-xl text-lg">{abbr}</h4>
					<p className="mt-1 capitalize text-sm md:text-base">
						{name?.toLowerCase()}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default JournalCard;
