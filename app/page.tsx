'use client';

import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import {
	BsDownload,
	BsStackOverflow,
	BsFillMoonStarsFill,
} from 'react-icons/bs';
import { FaHandPointDown, FaGooglePlay } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);

	const images = {
		deved: '/dev-ed-wave.png',
		code: '/code.png',
		design: '/design.png',
		consulting: '/consulting.png',
		web1: '/web1.png',
		web2: '/web2.png',
		web3: '/web3.png',
		web4: '/web4.png',
	};

	const overlayImages = [
		{
			imageUrl: images.web1,
			icons: [
				{ icon: AiFillGithub, link: 'https://github.com/R3-da/Insectify' },
				{
					icon: FaGooglePlay,
					link: 'https://play.google.com/store/apps/details?id=com.reda.insectify',
				},
			],
			description: 'Insectify : Identify Beetles Using A.I',
		},
		{
			imageUrl: images.web2,
			icons: [
				{ icon: AiFillGithub, link: 'https://github.com/R3-da/Daytics' },
				{ icon: BsDownload, link: '/daytics.apk' },
			],
			description: 'Daytics : Plan & Keep Track Of Your Day',
		},
		{
			imageUrl: images.web3,
			icons: [
				{ icon: AiFillGithub, link: 'https://github.com/R3-da/S.T.S_v6' },
				{ icon: BsDownload, link: '/sts.apk' },
			],
			description: 'ShapeSwipe :  Fidget & Play With Shapes',
		},
		{
			imageUrl: images.web4,
			icons: [
				{ icon: AiFillGithub, link: 'https://github.com/R3-da/JamsterScanner' },
			],
			description: 'Jamster : A MIDI Scanner/Transposer ',
		},
	];

	return (
		<div className={darkMode ? 'dark' : ''}>
			<main className="bg-white ~/lg:~px-4/40 ~/lg:~py-8/16 dark:bg-gray-900">
				<div className="absolute right-[5rem] top-[10rem] z-0 h-[21.25rem] w-[21.25rem] rounded-full bg-[#f82b32] blur-[10rem] dark:bg-[#946263]"></div>
				<div className="absolute right-[-35rem] top-[10rem] z-0 h-[21.25rem] w-[50rem] rounded-full bg-[#4536b9] blur-[10rem] dark:bg-[#676394]"></div>
				<div className="relative">
					<section>
						{/* <nav className="py-10 mb-12 flex justify-between dark:text-white">
						<h1 className="font-serif text-xl"></h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill
									onClick={() => setDarkMode(!darkMode)}
									className=" cursor-pointer text-2xl"
								/>
							</li>
							<li>
								<a
									className="bg-gradient-to-r font-sans from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
									href="/resume.pdf"
									target="_blank"
									rel="noopener noreferrer"
									onClick={() => {
										window.open('/resume.pdf', '_blank');
									}}
								>
									Resume
								</a>
							</li>
						</ul>
					</nav> */}
						<div className="flex flex-col-reverse items-center justify-center gap-4 rounded-lg md:flex-row md:gap-8">
							<div className="text-center">
								<h2 className="">
									<span className="text-ellipsis whitespace-nowrap py-2 font-sans tracking-wide text-blue-600 ~text-3xl/6xl dark:text-blue-400">
										Reda Haddan
									</span>
								</h2>
								<h3 className="text-ellipsis whitespace-nowrap py-2 font-sans ~text-xl/4xl dark:text-white">
									Software Engineer
								</h3>
								<div className="flex justify-center py-3 text-gray-600 ~/lg:~text-2xl/3xl ~/lg:~gap-4/8 dark:text-gray-400">
									<a
										href="https://www.linkedin.com/in/r-h-7zh"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => {
											window.open(
												'https://www.linkedin.com/in/r-h-7zh',
												'_blank',
											);
										}}
									>
										<AiFillLinkedin />
									</a>
									<a
										href="https://stackoverflow.com/u/18568328"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => {
											window.open(
												'https://stackoverflow.com/u/18568328',
												'_blank',
											);
										}}
									>
										<BsStackOverflow />
									</a>
									<a
										href="https://github.com/R3-da"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => {
											window.open('https://github.com/R3-da', '_blank');
										}}
									>
										<AiFillGithub />
									</a>
								</div>
							</div>
							<div className="relative flex-shrink-0 overflow-hidden rounded-full border-4 border-blue-600 bg-gradient-to-b from-blue-500 ~/lg:~h-40/60 ~/lg:~w-40/60 dark:border-blue-400">
								<Image
									src={images.deved}
									alt=""
									layout="fill"
									objectFit="cover"
								/>
							</div>
						</div>
					</section>
					{/* <section>
						<div className="mt-8 rounded-lg">
							<h3 className="pb-8 font-sans text-3xl dark:text-white sm:text-4xl">
								Bio:
							</h3>
							<div className="flex flex-col gap-4">
								<p className="font-sans text-lg leading-8 text-gray-800 dark:text-gray-200">
									Mobile & Web Developer | Open-Source Enthusiast.
								</p>
							</div>
						</div>
					</section>
					<section>
						<div className="mt-8 rounded-lg">
							<div>
								<h3 className="pb-8 font-sans text-3xl dark:text-white sm:text-4xl">
									Companies
								</h3>
							</div>
							<div className="flex min-h-32 items-center justify-evenly gap-4 bg-red-500">
								<div className="flex-1 bg-green-500 text-center">Al Omrane</div>
								<div className="flex-1 bg-green-500 text-center">3WDEV</div>
								<div className="flex-1 bg-green-500 text-center">Majjane</div>
								<div className="flex-1 bg-green-500 text-center">
									Offzone Agency
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="mt-8 rounded-lg">
							<div>
								<h3 className="pb-8 font-sans text-3xl dark:text-white sm:text-4xl">
									Featured Projects
								</h3>
							</div>
							<div className="flex min-h-32 items-center justify-evenly gap-4 bg-red-500">
								<div className="flex-1 bg-green-500 text-center">GPP</div>
								<div className="flex-1 bg-green-500 text-center">TTMT</div>
								<div className="flex-1 bg-green-500 text-center">In Skins</div>
								<div className="flex-1 bg-green-500 text-center">
									Vue.js Dashboard
								</div>
								<div className="flex-1 bg-green-500 text-center">
									.NET doc generator
								</div>
							</div>
						</div>
					</section> */}
					<section>
						<div className="mt-8 rounded-lg">
							<div>
								<h3 className="pb-8 font-sans text-3xl dark:text-white sm:text-4xl">
									Skills
								</h3>
							</div>
							<div className="flex flex-col gap-8 lg:flex-row">
								{/* First Item */}
								<div className="grid flex-1 gap-10 rounded-xl p-10 text-center shadow-lg dark:bg-slate-800 lg:grid-rows-3">
									{/* Left part */}
									<div className="flex flex-1 flex-col items-center justify-center">
										<Image
											src={images.code}
											alt=""
											width={100}
											height={100}
											className="h-auto w-auto object-contain"
										/>
										<h3 className="font-sans text-lg font-medium dark:text-white">
											ANDROID/WEB DEV
										</h3>
									</div>
									{/* Middle part (hidden content) */}
									<p className="hidden flex-1 font-sans dark:text-white sm:block">
										Building clean architecture android Apps and Websites, and
										making ideas come to life.
									</p>
									{/* Right part */}
									<div className="flex flex-1 flex-col items-center">
										<h4 className="font-sans text-teal-600">
											Technologies I Use
										</h4>
										<p className="py-1 font-mono text-gray-800 dark:text-white">
											Native Android Dev
										</p>
										<p className="py-1 font-mono text-gray-800 dark:text-white">
											React Native
										</p>
										<p className="py-1 font-mono text-gray-800 dark:text-white">
											React JS
										</p>
									</div>
								</div>

								{/* Second Item */}
								<div className="grid flex-1 gap-10 rounded-xl p-10 text-center shadow-lg dark:bg-slate-800 lg:grid-rows-3">
									{/* Row 1 */}
									<div className="flex flex-col items-center justify-center">
										<Image
											src={images.design}
											alt=""
											width={100}
											height={100}
											className="h-auto w-auto object-contain"
										/>
										<h3 className="font-sans text-lg font-medium dark:text-white">
											UI/UX
										</h3>
									</div>
									{/* Row 2 */}
									<p className="hidden font-sans dark:text-white sm:block">
										Creating elegant designs suited for each use case following
										core design theory.
									</p>
									{/* Row 3 */}
									<div className="flex flex-col items-center">
										<h4 className="font-sans text-teal-600">
											Design Tools I Use
										</h4>
										<p className="py-1 font-mono dark:text-white">Photoshop</p>
										<p className="py-1 font-mono dark:text-white">Figma</p>
										<p className="py-1 font-mono dark:text-white">Adobe XD</p>
									</div>
								</div>

								{/* Third Item */}
								<div className="grid flex-1 gap-10 rounded-xl p-10 text-center shadow-lg dark:bg-slate-800 lg:grid-rows-3">
									{/* Column 1 */}
									<div className="flex flex-col items-center justify-center">
										<Image
											src={images.consulting}
											alt=""
											width={100}
											height={100}
											className="h-auto w-auto object-contain"
										/>
										<h3 className="font-sans text-lg font-medium dark:text-white">
											SOUND DESIGN
										</h3>
									</div>

									{/* Column 2 */}
									<p className="hidden font-sans dark:text-white sm:block">
										Sound design and music production.
									</p>

									{/* Column 3 */}
									<div className="flex flex-col items-center">
										<h4 className="font-sans text-teal-600">
											DAW&apos;s I Use
										</h4>
										<p className="py-1 font-mono dark:text-white">FL Studio</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="mt-10 rounded-lg">
							<div>
								<h3 className="pb-8 font-sans text-3xl dark:text-white sm:text-4xl">
									Portfolio
								</h3>
							</div>
							<div className="grid grid-cols-2 flex-col gap-8 lg:flex lg:flex-row lg:gap-6">
								{overlayImages.map((overlayImage, index) => (
									<div className="relative flex-1" key={index}>
										<div className="overflow-hidden rounded-lg">
											<Image
												className="rounded-lg object-cover"
												width={1000}
												height={1000}
												layout="responsive"
												src={overlayImage.imageUrl}
												alt={`Image ${index + 1}`}
											/>
											<div className="overlay-icons absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-black p-4 opacity-0 transition-opacity duration-300 hover:bg-opacity-80 hover:opacity-100">
												<div className="flex flex-wrap items-center justify-center">
													{overlayImage.icons.map((item, iconIndex) => {
														const IconComponent = item.icon;
														return (
															<a
																key={iconIndex}
																href={item.link}
																download={item.link.endsWith('.apk')} // Add the download attribute conditionally for .apk links
																target="_blank"
																rel="noopener noreferrer"
																className="m-2 text-4xl text-white text-opacity-70 transition-colors duration-300 hover:text-opacity-100"
															>
																<IconComponent />
															</a>
														);
													})}
												</div>
												<p className="mt-2 text-center font-sans text-lg font-medium text-white">
													{overlayImage.description}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}
