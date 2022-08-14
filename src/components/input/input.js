const Input = ({
	id,
	title,
	type,
	required = true,
	ph,
	fn,
	form,
	readOnly = false,
}) => {
	return (
		<div className="w-full mt-3">
			<label htmlFor={id} className="font-semibold ">
				{title}
			</label>
			<input
				type={type}
				id={id}
				className="w-full h-12 mt-2 rounded-md border px-2 font-light"
				required={required}
				readOnly={readOnly}
				name={title}
				value={form[id]}
				placeholder={ph}
				onChange={(e) =>
					readOnly === false && fn({ ...form, [id]: e.target.value })
				}
			/>
		</div>
	);
};

export default Input;
