import { verify } from "jsonwebtoken";
import authApi from "@/config/auth-api";

const loggedIn_route = async (req, res) => {
	const { headers } = req;
	const authenticate = await authApi(headers?.authorization);

	if (!authenticate.status)
		return res
			.status(401)
			.json({ success: authenticate.status, data: authenticate.msg });
	try {
		const { jwt } = JSON.parse(req.body);

		const user = verify(jwt, process.env.AUTH_SECRET);

		res.status(200).json({
			user,
		});
	} catch (error) {
		// console.log(error);
		res.status(400).json({ success: false, data: {} });
	}
};

export default loggedIn_route;
