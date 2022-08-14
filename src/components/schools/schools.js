import SchoolCard from "@/components/school-card";
import Button from "@/components/button";

const Schools = ({ africanSchools }) => {
	return (
		<section>
			<h2 className="text-2xl font-bold md:font-semibold my-3 mb-9">
				African Universities ({africanSchools?.length || 0})
			</h2>
			<div className="grid md:grid-cols-3 gap-4 md:gap-5">
				{africanSchools?.slice(0, 6).map((el, i) => (
					<SchoolCard
						title={el.name}
						num={el.num}
						key={i}
						logo={el.logo}
						abbr={el.abbr}
					/>
				))}
			</div>
			{africanSchools?.length > 6 && <Button text={"View All"} />}
		</section>
	);
};

export default Schools;
