import Input from "../input";

const SubmitForm = ({ journals, states, form, setForm }) => {
	return (
		<div className="grid md:grid-cols-3 md:gap-6 gap-3">
			<Input
				type={"text"}
				id={"article_name"}
				title={"Article Name"}
				ph="Enter the title of article"
				fn={setForm}
				value={form?.article_name}
				form={form}
			/>

			<div className="w-full mt-3">
				<label className="font-semibold" htmlFor="jpurnal">
					Journal
				</label>
				<select
					className="w-full h-12 mt-2 rounded-md border px-2 capitalize"
					id="journal"
					onChange={(e) =>
						setForm({ ...form, journal: e.target.value })
					}
					value={form.journal}
				>
					<option disabled value={""}>
						Choose a journal
					</option>
					{journals.map((el, i) => (
						<option key={i} value={el.name} className="capitalize">
							{el.name.toLowerCase()}
						</option>
					))}
				</select>
			</div>

			<Input
				type={"text"}
				id={"first_name"}
				title={"First Name"}
				ph="Enter your first name"
				fn={setForm}
				value={form?.first_name}
				form={form}
			/>
			<Input
				type={"text"}
				id={"last_name"}
				title={"Last Name"}
				ph="Enter your last name"
				fn={setForm}
				value={form?.last_name}
				form={form}
			/>
			<Input
				type={"email"}
				id={"email"}
				title={"Email"}
				ph="Enter your email"
				fn={setForm}
				value={form?.email}
				form={form}
			/>
			<Input
				type={"number"}
				id={"phone_num"}
				title={"Phone Number"}
				ph="Enter your mobile number"
				fn={setForm}
				value={form?.phone_num}
				form={form}
			/>
			<Input
				type={"text"}
				id={"address"}
				title={"Address"}
				ph="Enter your address"
				fn={setForm}
				value={form?.address}
				form={form}
			/>
			<div className="w-full mt-3">
				<label className="font-semibold" htmlFor="states">
					States
				</label>
				<select
					className="w-full h-12 mt-2 rounded-md border px-2"
					id="states"
					onChange={(e) =>
						setForm({ ...form, states: e.target.value })
					}
					value={form.states}
				>
					<option disabled value={""}>
						Choose a state
					</option>
					{states.map((el, i) => (
						<option key={i} value={el.state}>
							{el.state}
						</option>
					))}
				</select>
			</div>
			<Input
				type={"text"}
				id={"country"}
				title={"Country"}
				readOnly={true}
				fn={setForm}
				value={form?.country}
				form={form}
			/>
			<Input
				type={"text"}
				id={"profession"}
				title={"Profession"}
				fn={setForm}
				value={form?.profession}
				form={form}
			/>
			<Input
				type={"text"}
				id={"academic_degree"}
				title={"Academic Degree"}
				fn={setForm}
				value={form?.academic_degree}
				form={form}
			/>
			<div className="w-full mt-3">
				<label className="font-semibold" htmlFor="file">
					Select a file to Upload: <code>.doc , .docx</code>
				</label>
				<div className=" flex items-center">
					<input
						type={"file"}
						id="file"
						className="w-full h-12 mt-2"
					/>
				</div>
			</div>
		</div>
	);
};

export default SubmitForm;
