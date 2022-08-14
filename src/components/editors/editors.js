const Editors = ({ name, school, state, country, role, dept }) => {
	return (
		<div className="bg-white px-6 py-7 rounded-md flex flex-col items-center">
			<div className="w-20 h-20 bg-gray-400 rounded-full relative"></div>
			<p className="font-semibold mt-5 text-gray-900">{name}</p>
			<p className="text-gray-500 my-2">{school}</p>
			<p className="text-gray-500">
				{state} , {country}
			</p>
			<p className=" text-center border-t mt-5 pt-4 text-middy font-medium">
				{role}
				<br /> {dept}
			</p>
		</div>
	);
};

export default Editors;
