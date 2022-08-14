export const journals = [
	{
		name: "UNIPORT JOURNAL OF ACCOUNTING AND BUSINESS",
		abbr: "UJAB",
		school: "uniport",
	},
	{
		name: "UNIPORT JOURNAL OF BUSINESS AND ECONOMY",
		abbr: "UJBE",
		school: "uniport",
	},
	{
		name: "UNIPORT JOURNAL OF BUSINESS, ACCOUNTING & FINANCE MANAGEMENT",
		abbr: "UJBAFM",
		school: "uniport",
	},
	{
		name: "UNIPORT JOURNAL OF DEVELOPMENT STUDIES ROUND TABLE",
		abbr: "UJDSRT",
		school: "uniport",
	},
	{
		name: "AFRICAN JOURNAL OF MANAGEMENT, BUSINESS ADMINISTRATION AND ENTREPRENEURSHIP",
		abbr: "AJMBAE",
		school: "uniport",
	},
	{
		name: "AFRICAN JOURNAL OF ACCOUNTING, FINANCE AND MARKETING",
		abbr: "AJAFM",
		school: "uniport",
	},
	{
		name: "IMSU AFRICAN SOCIAL AND EDUCATIONAL JOURNAL",
		abbr: "IASEJ",
		school: "imsu",
	},
	{
		name: "IMSU BUSINESS AND FINANCE JOURNAL",
		abbr: "IBFJ",
		school: "imsu",
	},
	{
		name: "IMSU JOURNAL OF AFRICAN CONTEMPORARY RESEARCH",
		abbr: "IJACR",
		school: "imsu",
	},
	{
		name: "IMSU WEST AFRICAN JOURNAL OF BUSINESS AND MANAGEMENT SCIENCES",
		abbr: "IWAJBMS",
		school: "imsu",
	},
	{
		name: "AFRICAN JOURNAL OF ORGANIZATIONAL PERSPECTIVE",
		abbr: "AJOP",
		school: "imsu",
	},
	{
		name: "RHEMA JOURNAL OF MANAGEMENT AND SOCIAL SCIENCES",
		abbr: "RJMSS",
		school: "rhemu",
	},
	{
		name: "SALEM JOURNAL OF BUSINESS AND ECONOMY",
		abbr: "SJBE",
		school: "salu",
	},
	{
		name: "SALEM SOCIAL AND POLICY JOURNAL",
		abbr: "SSPJ",
		school: "salu",
	},
	{
		name: "SALEM JOURNAL OF HEALTH AND ENVIRONMENTAL SCIENCES, ENGINEERING, INFORMATION AND COMMUNICATION TECHNOLOGY",
		abbr: "SJHESEICT    ",
		school: "salu",
	},
];

export const project = {
	title: "Siren Journals",
	descContent: "",
};

export const validateInput = (input) => {};

export const isNotEmpty = (fieldData) => {
	if (fieldData.length == 0 || fieldData == "") {
		return false;
	} else {
		return true; //Submits form
	}
};
