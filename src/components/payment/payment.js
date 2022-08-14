const Payment = () => {
	return (
		<section className="mt-32 md:mt-24">
			<h1 className="text-3xl md:text-3xl font-bold mb-8 border-b pb-3">
				Payment &amp; Publication Fees
			</h1>

			<div className="grid md:grid-cols-2 gap-10 mt-14">
				<div>
					<h2 className="font-bold text-xl mb-3 ">
						Publication Charges are:
					</h2>
					<p className="leading-8">
						<b>Plagiarism Fee:</b> (N3,000, Nigerian Authors) ($10,
						Foreign Authors) <br />
						<b>Assessment Fee: </b>(N3,000, Nigerian Authors) ($10,
						Foreign Authors) <br />
						<b>Publication Fee:</b> (N20,000, Nigerian Authors)
						($75, Foreign Authors)
						<br />
					</p>
				</div>

				<div className="bg-white p-6 rounded-lg">
					<h2 className="font-bold text-xl mb-3">
						Method of Payment:
					</h2>
					<p className="leading-8">
						Payment for publication should be made through the
						online Payment Platform or to Siren Journal&apos;s
						Account as follows: <br />
						<b>Account Name:</b> SIREN COMMUNICATION LIMITED <br />
						<b>Account Number:</b> 0091306554 <br />
						<b> Bank: </b>Union Bank <br />
						<b> Account Type:</b> Current Account <br />
						<br />
						<b>Note:</b> Author(s) should demand written
						acknowledgment of any fee paid to the said account.
						SIREN JOURNALS will not take responsibility for any fee
						paid outside the online payment platform and this
						account.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Payment;
