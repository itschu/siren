import DashMenu from "@/components/account/dash-menu";

const Dashboard = () => {
	return (
		<section className="mt-32 md:mt-28">
			<div className="flex md:flex-row flex-col gap-10">
				<DashMenu />

				<div className="md:px-10 flex flex-col md:flex-row gap-7">
					<div className="bg-blue-300 h-28 md:w-64 flex flex-col justify-center rounded-md pl-6 gap-1">
						<h2 className="text-2xl md:text-xl font-bold">
							All Journals
						</h2>
						<h3 className="font-bold text-lg">12</h3>
					</div>

					<div className="bg-blue-300 h-28 md:w-64 flex flex-col justify-center rounded-md pl-6 gap-1">
						<h2 className="text-2xl font-bold md:text-xl">
							All Articles
						</h2>
						<h3 className="font-bold text-lg">5</h3>
					</div>
					<div className="bg-blue-300 h-28 md:w-64 flex flex-col justify-center rounded-md pl-6 gap-1">
						<h2 className="text-2xl font-bold md:text-xl">
							All Editors
						</h2>
						<h3 className="font-bold text-lg">32</h3>
					</div>

					<div className="bg-blue-300 h-28 md:w-64 flex flex-col justify-center rounded-md pl-6 gap-1">
						<h2 className="text-2xl font-bold md:text-xl">
							All Schools
						</h2>
						<h3 className="font-bold text-lg">91</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
