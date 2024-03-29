const Footer = () => {
	return (
		<footer className="footer bg-white relative pt-1 border-blue-700">
			<div className="container px-6">
				<div className="sm:flex sm:mt-8">
					<div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-around">
						<div className="flex flex-col">
							<span className="font-bold text-gray-700 uppercase pb-3 mb-2">
								Credits:
							</span>
							<span className="flex justify-between md:justify-evenly md:block">
								<a
									href="https://www.themoviedb.org/"
									className="text-blue-700  text-md hover:text-blue-500 max-w-sm">
									<img
										src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
										height="50"
										width="80"
										className="m-auto"
										alt="TMDB logo"
									/>
								</a>
								<p className="px-3 mx-3 md:px-0 md:mx-0 md:pt-6 text-justify md:w-60">
									This product uses the{" "}
									<a
										href="https://www.themoviedb.org/"
										className="text-blue-700 hover:text-blue-500">
										TMDb
									</a>{" "}
									API but is not endorsed or certified by TMDb.
								</p>
							</span>
						</div>
						<div className="flex flex-col  ">
							<span className="font-bold text-gray-700 uppercase pb-3 mt-6 lg:mt-0">
								Creator:
							</span>
							<div className="flex flex-col lg:text-center justify-between">
								<span className="my-2">
									<a
										href="https://web.facebook.com/ossman.munaf"
										className="text-blue-700  text-md hover:text-blue-500">
										Facebook
									</a>
								</span>
								<span className="my-2">
									<a
										href="https://www.instagram.com/ossman786/"
										className="text-blue-700  text-md hover:text-blue-500">
										Instagram
									</a>
								</span>
								<span className="my-2">
									<a
										href="https://twitter.com/QuotesBossman"
										className="text-blue-700  text-md hover:text-blue-500">
										Twitter{" "}
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container px-6">
				<div className="border-t-2 border-gray-300 flex flex-col items-center mt-3">
					<div className="sm:w-2/3 text-center py-6">
						<p className="text-sm text-blue-700 font-bold mb-2">
							© 2020 by Ossman Rauf
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
