import db from "@/config/db";
import authApi from "@/config/auth-api";
import util from "util";

const query = util.promisify(db.query).bind(db);

const single_school_route = async (req, res) => {
	const { method, body, headers } = req;

	const { id } = req.query;

	const authenticate = await authApi(headers?.authorization);

	if (!authenticate.status)
		return res
			.status(401)
			.json({ success: authenticate.status, data: authenticate.msg });

	switch (method) {
		case "GET":
			try {
				const result = await query(
					"SELECT * FROM journals WHERE school = ? ",
					id
				);
				const getName = await query(
					"SELECT * FROM schools WHERE abbr = ? ",
					id
				);
				res.status(200).json({
					success: true,
					data: result,
					name: getName[0]?.name,
					logo: getName[0]?.logo,
				});
			} catch (error) {
				console.log(error);
				res.status(400).json({ success: false, data: [] });
			}
			break;
		default:
			res.status(400).json({ success: false, data: [] });
	}
};

export default single_school_route;
