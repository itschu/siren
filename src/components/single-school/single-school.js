import Journals from "@/components/journals";

const SingleSchool = ({ journals, name, image = "hero.jpg", abbr }) => {
	const css = `
        .banner{
            background-image: url(/images/${image});
            background-position: center;
        }

        .overlay{
            background-color: rgba(0, 0, 0, 0.79);
        }
    `;

	return (
		<section className="mt-16 p-0 relative">
			<style>{css}</style>
			<div className="banner relative bg-slate-500 w-full h-72 md:h-96 flex flex-col justify-center px-6 md:px-20 text-white text-2xl md:text-3xl font-bold md:font-semibold">
				<div className="absolute top-0 left-0 bottom-0 right-0 z-0 overlay" />

				<h1 className="z-10 capitalize">{name}</h1>
				<h2 className="mt-1 z-10">({abbr.toUpperCase()})</h2>
			</div>

			<div className="section mt-6 md:mt-5">
				<Journals max={30} rows={false} sh={true} journals={journals} />
			</div>
		</section>
	);
};

export default SingleSchool;
