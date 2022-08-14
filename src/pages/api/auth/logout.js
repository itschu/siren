import { serialize } from "cookie";
import authApi from "@/config/auth-api";

const logout_api = async (req, res) => {
	const { headers } = req;
	const authenticate = await authApi(headers?.authorization);

	if (!authenticate.status)
		return res
			.status(401)
			.json({ success: authenticate.status, data: authenticate.msg });

	const { cookies } = req;
	const jwt = cookies.sirenJournal;

	if (!jwt) {
		return res.json({ message: "not signed in" });
	}

	const serialized = serialize("sirenJournal", null, {
		httpOnly: true,
		secure: process.env.NODE_ENV !== "development",
		sameSite: "strict",
		maxAge: -1,
		path: "/",
	});

	res.setHeader("Set-Cookie", serialized);
	res.status(200).json({ message: "logged out", status: "ok" });
};

export default logout_api;
