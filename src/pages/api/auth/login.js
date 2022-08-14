import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import db from "@/config/db";
import authApi from "@/config/auth-api";
import util from "util";
import bcrypt from "bcrypt";

const query = util.promisify(db.query).bind(db);

const login_api = async (req, res) => {
	const { method, body, headers } = req;
	const authenticate = await authApi(headers?.authorization);

	if (!authenticate.status)
		return res
			.status(401)
			.json({ success: authenticate.status, data: authenticate.msg });

	switch (method) {
		case "POST":
			try {
				const email = body[0].email;
				const user = await query(
					"SELECT * FROM users WHERE email = ?",
					[email]
				);

				if (user.length == 0 || user.length > 1)
					return res.status(400).json({
						message: "invalid credentials",
						status: "ok",
					});

				const [user_data] = user;

				const result = await bcrypt.compare(
					body[0].password,
					user_data.password
				);

				if (result) {
					const token = sign(
						{
							exp:
								Math.floor(Date.now() / 1000) +
								60 * 60 * 24 * 30,
							email,
						},
						process.env.AUTH_SECRET
					);

					const serialized = serialize("sirenJournal", token, {
						httpOnly: true,
						secure: process.env.NODE_ENV !== "development",
						sameSite: "strict",
						maxAge: 60 * 60 * 24 * 30,
						path: "/",
					});

					res.setHeader("Set-Cookie", serialized);
					res.status(200).json({ message: "success", status: "ok" });
				} else {
					res.status(400).json({
						message: "invalid credentials",
						status: "ok",
					});
				}
			} catch (error) {
				console.log(error);
				res.status(401).json({
					message: "Sorry an error occurred, try again later",
					status: "sever-error",
				});
			}
			break;
		default:
			res.status(400).json({ success: false, data: [] });
	}
};

export default login_api;
