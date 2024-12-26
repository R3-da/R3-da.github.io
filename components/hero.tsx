import Image from 'next/image';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';

interface HeroProps {
	profileImage: string;
}

export default function Hero({ profileImage }: HeroProps) {
	return (
		<section>
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
							href="https://www.linkedin.com/in/reda-dev"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => {
								window.open('https://www.linkedin.com/in/r-h-7zh', '_blank');
							}}
						>
							<AiFillLinkedin />
						</a>
						<a
							href="https://stackoverflow.com/u/18568328"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => {
								window.open('https://stackoverflow.com/u/18568328', '_blank');
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
					<Image src={profileImage} alt="" layout="fill" objectFit="cover" />
				</div>
			</div>
		</section>
	);
}
