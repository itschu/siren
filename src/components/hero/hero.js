const Hero = ({ full = true, text }) => {
	return (
		<div className={`${!full && "half-hero pt-20"} hero relative`}>
			<div className="absolute top-0 left-0 bottom-0 right-0 z-0 overlay" />

			<div className="pl-6 md:pl-16 pr-6 text-white z-10">
				{full ? (
					<>
						<h1 className="text-3xl md:text-6xl font-semibold leading-relaxed mb-4 md:mb-6 text-center md:text-left">
							Where scientists
							<br /> empower society.
						</h1>

						<p className="text-big text-center md:text-left">
							Creating solutions for healthy lives on a healthy
							planet
						</p>
					</>
				) : (
					<h1 className="text-3xl md:text-6xl font-semibold leading-relaxed mb-4 md:mb-6 text-center md:text-left">
						{text}
					</h1>
				)}
			</div>
		</div>
	);
};

export default Hero;
