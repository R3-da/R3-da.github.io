import {
	FooterAbout,
	FooterSocials,
	FooterProjects,
	githubrepo,
	twitter,
} from '@/config/navigation';
// import { Logo } from './logo';
import Link from 'next/link';
// import NewsletterBox from './newsletter-box';
import { SiGithub, SiNextdotjs, SiTailwindcss, SiVercel } from 'react-icons/si';
import Script from 'next/script';

export default function Footer() {
	return (
		<footer
			role="contentinfo"
			className="mt-20 w-full bg-lighter py-4 text-darker dark:bg-dark dark:text-light"
		>
			<Script
				type="text/javascript"
				async
				src="https://embeds.beehiiv.com/attribution.js"
				strategy="lazyOnload"
			></Script>
			<div className="mx-auto grid grid-cols-1 gap-8 px-8 pt-5 md:grid-cols-12 lg:max-w-7xl lg:px-8">
				<div className="md:col-span-4 md:space-y-4">
					<Link href="/" aria-label="Choubari's Home Page">
						{/* <Logo /> */}
					</Link>
					<p className="pb-3">
						I turn ideas into reality with the power of software engineering,
						and I share my stories as a content creator.
					</p>
					{/* <NewsletterBox type={'slim'} /> */}
				</div>
				<div className="hidden space-y-4 md:col-span-2 md:block"></div>
				<div className="md:col-span-2 md:space-y-4">
					<h2 className="mb-2 font-serif text-xl font-bold">
						General
						<span className="text-4xl leading-3 text-accent">.</span>
					</h2>
					<ul>
						{FooterAbout.map((link) => (
							<li
								key={link.label}
								className="hover:text-accent hover:underline"
							>
								<Link href={link.href}>{link.label}</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="md:col-span-2 md:space-y-4">
					<h2 className="mb-2 font-serif text-xl font-bold">
						Projects
						<span className="text-4xl leading-3 text-accent">.</span>
					</h2>
					<ul>
						{FooterProjects.map((link) => (
							<li
								key={link.label}
								className="hover:text-accent hover:underline"
							>
								<Link href={link.href}>{link.label}</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="md:col-span-2 md:space-y-4">
					<h2 className="mb-2 font-serif text-xl font-bold">
						Socials
						<span className="text-4xl leading-3 text-accent">.</span>
					</h2>
					<ul>
						{FooterSocials.map((link) => (
							<li
								key={link.label}
								className="hover:text-accent hover:underline"
							>
								<Link href={link.href} target="_blank">
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<hr className="mb-4 mt-8 h-px border-0 bg-grey opacity-30" />
			<div className="flex flex-wrap items-center justify-center gap-1 px-5 text-center">
				© {new Date().getFullYear()} Copyright. Made with ❤ by
				<Link href={twitter} className="font-mono text-accent hover:underline">
					@choubari_
				</Link>
				<p> using</p>
				<div className="flex items-center gap-1">
					<SiNextdotjs />
					<SiTailwindcss />
					<SiGithub />
					<SiVercel />
					<p>. </p>
				</div>
				<div className="flex items-center gap-1">
					Proudly
					<Link
						className="font-mono text-accent hover:underline"
						href={githubrepo}
					>
						Open-Source
					</Link>
					!
				</div>
			</div>
		</footer>
	);
}
