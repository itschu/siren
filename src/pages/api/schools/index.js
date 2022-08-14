import db from "@/config/db";
import authApi from "@/config/auth-api";
import util from "util";

const query = util.promisify(db.query).bind(db);

const school_route = async (req, res) => {
	const { method, body, headers } = req;
	const authenticate = await authApi(headers?.authorization);

	if (!authenticate.status)
		return res
			.status(401)
			.json({ success: authenticate.status, data: authenticate.msg });

	switch (method) {
		case "GET":
			try {
				const result = await query("SELECT * FROM schools");
				res.status(200).json({ success: true, data: result });
			} catch (error) {
				console.log(error);
				res.status(400).json({ success: false, data: [] });
			}
			break;
		default:
			res.status(400).json({ success: false, data: [] });
	}
};

export default school_route;
