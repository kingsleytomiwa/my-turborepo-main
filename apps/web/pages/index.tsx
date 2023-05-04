import { Button, DownloadButton, Logo } from "ui";
import Image from "next/image";
import helpimg from "../public/images/coloredhelp.png";
export default function Web() {
	return (
		<div>
			<nav className="bg-white flex items-center justify-between md:justify-evenly lg:justify-evenly py-6">
				<Logo />
				<div className="hidden md:inline-block lg:inline-block">
					<a href="" className="py-8 px-8">
						Home
					</a>
					<a href="" className="py-8 px-8">
						Blog
					</a>
					<a href="" className="py-8 px-8">
						About us
					</a>
					<a href="" className="py-8 px-8">
						Contact us
					</a>
				</div>
				<DownloadButton />
			</nav>
			<section className="relative">
				<div
					style={{
						zIndex: -1,
						position: "relative",
						width: "100%",
						height: "100%",
					}}
				>
					<Image
						src={helpimg}
						alt={"helpingimg"}
						// layout="fill"
						// objectFit="cover"
					/>
				</div>
				<div className="absolute top-1/4 md:top-1/4 lg:top-2/4 left-20">
					<div className="w-3/4">
						<h4 className="font-bold text-4xl md:text-6xl lg:text-6xl py-4">
							Lend an helping hand to those in need
						</h4>
					</div>
					<div className=" w-20 lg:w-60 md:w-60 py-2 md:py-4 lg:py-4 px-16 bg-cyan-500 flex items-center justify-center rounded-full">
						<a
							href="#"
							className="flex flex-row justify-center items-center gap-1 text-lg lg:text-xl"
						>
							Download
							<div>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M13.75 13.75C13.75 14.1642 13.4142 14.5 13 14.5L3 14.5C2.58579 14.5 2.25 14.1642 2.25 13.75C2.25 13.3358 2.58579 13 3 13L13 13C13.4142 13 13.75 13.3358 13.75 13.75Z"
										fill="currentColor"
									></path>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M8.7487 2C8.7487 1.58579 8.41291 1.25 7.9987 1.25C7.58448 1.25 7.2487 1.58579 7.2487 2L7.2487 9.53955L3.19233 5.51449C2.89831 5.22274 2.42344 5.22458 2.13168 5.5186C1.83993 5.81263 1.84177 6.2875 2.13579 6.57925L7.46912 11.8714C7.76154 12.1616 8.23325 12.1616 8.52567 11.8714L13.859 6.57926C14.153 6.2875 14.1549 5.81263 13.8631 5.5186C13.5714 5.22458 13.0965 5.22274 12.8025 5.51449L8.7487 9.53697L8.7487 2Z"
										fill="currentColor"
									></path>
								</svg>
							</div>
						</a>
					</div>
				</div>
			</section>
			<footer className="bg-black flex lg:justify-evenly absolute md:relative lg:relative bottom-0 w-full">
				<div className="mt-0 p-0">
					<div className="flex flex-row items-center lg:justify-evenly lg:gap-80 mt-6">
						<div>
							<a href="" className="text-xs px-4 md:py-8 lg:px-8 text-white lg:py-8 md:text-sm lg:text-sm">
								Home
							</a>
							<a href="" className="text-xs px-4 md:py-8 lg:px-8 text-white lg:py-8 md:text-sm lg:text-sm">
								Blog
							</a>
							<a href="" className="text-xs px-4 md:py-8 lg:px-8 text-white lg:py-8 md:text-sm lg:text-sm">
								About us
							</a>
							<a href="" className="text-xs px-4 md:py-8 lg:px-8 text-white lg:py-8 md:text-sm lg:text-sm">
								Contact us
							</a>
						</div>
						<div className=" w-24 lg:w-40 py-2 md:py-4 lg:py-4 px-6 bg-cyan-500 flex items-center justify-center rounded-3xl absolute right-8 lg:relative">
							<a
								href="#"
								className="flex flex-row justify-center text-sm items-center gap-1"
							>
								Download
								<div>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M13.75 13.75C13.75 14.1642 13.4142 14.5 13 14.5L3 14.5C2.58579 14.5 2.25 14.1642 2.25 13.75C2.25 13.3358 2.58579 13 3 13L13 13C13.4142 13 13.75 13.3358 13.75 13.75Z"
											fill="currentColor"
										></path>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M8.7487 2C8.7487 1.58579 8.41291 1.25 7.9987 1.25C7.58448 1.25 7.2487 1.58579 7.2487 2L7.2487 9.53955L3.19233 5.51449C2.89831 5.22274 2.42344 5.22458 2.13168 5.5186C1.83993 5.81263 1.84177 6.2875 2.13579 6.57925L7.46912 11.8714C7.76154 12.1616 8.23325 12.1616 8.52567 11.8714L13.859 6.57926C14.153 6.2875 14.1549 5.81263 13.8631 5.5186C13.5714 5.22458 13.0965 5.22274 12.8025 5.51449L8.7487 9.53697L8.7487 2Z"
											fill="currentColor"
										></path>
									</svg>
								</div>
							</a>
						</div>
					</div>
					<hr className="mt-4 md:mt-8"></hr>
					<div className="flex flex-row items-center lg:justify-evenly lg:gap-80 mt-6 mb-6">
						<div className="gap-0 lg:gap-20">
							<button className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
								<svg
									className="w-5 h-5 fill-current"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
								</svg>
							</button>
							<button className=" p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
								<svg
									class="w-5 h-5 fill-current"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
								</svg>
							</button>
							<button className=" p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
								<svg
									className="w-5 h-5 fill-current"
									role="img"
									viewBox="0 0 256 256"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g>
										<path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
									</g>
								</svg>
							</button>
							<button className=" p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
								<svg
									className="w-5 h-5 fill-current"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
								>
									<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
								</svg>
							</button>
						</div>
						<div className="flex flex-row absolute right-8 md:absolute md:right-8 lg:relative lg:flex-row items-center justify-evenly lg:gap-8 mt-0 lg:mt-6">
							<div className="flex mt-3 w-48 h-8 md:h-14 lg:h-14 bg-black text-white rounded-xl items-center justify-center">
								<div className="mr-3">
									<svg viewBox="0 0 384 512" width="30">
										<path
											fill="currentColor"
											d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
										/>
									</svg>
								</div>
								<div>
									<div className="text-xs lg:text-xs">Download on the</div>
									<div className="text-xm lg:text-2xl font-semibold font-sans -mt-1">
										App Store
									</div>
								</div>
							</div>
							<div className="flex mt-3 w-48 md:h-14 h-8 lg:h-14 bg-white text-white rounded-lg items-center justify-center">
								<div className="mr-3">
									<svg viewBox="30 336.7 120.9 129.2" width="30">
										<path
											fill="#FFD400"
											d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
										/>
										<path
											fill="#FF3333"
											d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
										/>
										<path
											fill="#48FF48"
											d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
										/>
										<path
											fill="#3BCCFF"
											d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
										/>
									</svg>
								</div>
								<div>
									<div className="text-xs lg:text-xs text-black">GET IT ON</div>
									<div className="text-xs lg:text-xl font-semibold font-sans -mt-1 text-black">
										Google Play
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
