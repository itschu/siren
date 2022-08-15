import { isNotEmpty } from "@/data";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const router = useRouter();

	const login = async (e) => {
		e.preventDefault();

		if (isNotEmpty(formData.email) && isNotEmpty(formData.password)) {
			try {
				const req = await fetch(
					`${process.env.NEXT_PUBLIC_HOST}/api/auth/login`,
					{
						method: "POST",
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
							Authorization: process.env.NEXT_PUBLIC_API,
						},
						body: JSON.stringify([formData]),
					}
				);

				const res = await req.json();

				if (res.message === "success") {
					router.push("/account");
				} else {
					//an error occurred
				}
			} catch (error) {
				console.log(error);
			}
		} else {
		}
	};

	return (
		<section className="mt-32 md:mt-28">
			<h1 className="text-center text-2xl mb-5 font-bold">
				Log into your account
			</h1>
			<form
				className="w-full md:w-2/6 bg-white p-6 py-10 mx-auto border rounded-lg"
				onSubmit={login}
			>
				<div className="flex flex-col mb-5">
					<label className="font-semibold">Email</label>
					<input
						type={"email"}
						placeholder={"Enter your email"}
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						required
						className="h-12 border px-3 mt-2 rounded-md"
					/>
				</div>
				<div className="flex flex-col">
					<label className="font-semibold">Password</label>
					<input
						type={"password"}
						placeholder={"Enter your password"}
						value={formData.password}
						onChange={(e) =>
							setFormData({
								...formData,
								password: e.target.value,
							})
						}
						required
						className="h-12 border px-3 mt-2 rounded-md"
					/>
				</div>

				<button
					className="bg-blue-500 px-5 py-2 rounded-sm text-white font-semibold mt-5"
					type="submit"
				>
					Login
				</button>
			</form>
		</section>
	);
};

export default Login;
