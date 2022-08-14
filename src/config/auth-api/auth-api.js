import db from "@/config/db";
import util from "util";

const query = util.promisify(db.query).bind(db);

const authApi = async (key) => {
	if (key === undefined)
		return { status: false, msg: "please provide an Api key" };
	const status = "alive";
	try {
		const data = await query(
			"SELECT * FROM api WHERE api_key = ? AND status = ? ",
			[key, status]
		);
		if (data.length === 0)
			return {
				status: false,
				msg: "This api key does not exist",
			};
		if (data.length === 1) {
			const [user] = data;
			if (user.status === "alive") {
				await query(
					"UPDATE api SET calls = ? WHERE api_key = ? AND status = ? ",
					[parseInt(user.calls) + 1, key, status]
				);
				return {
					status: true,
					msg: "valid API key",
				};
			} else {
				return {
					status: false,
					msg: "This API key has expired",
				};
			}
		} else {
			return {
				status: false,
				msg: "Duplicate API key found please contact support",
			};
		}
	} catch (error) {
		console.log(error);
		return { status: false, msg: "Sorry an error occurred" };
	}
};

export default authApi;
