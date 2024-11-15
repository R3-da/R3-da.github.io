import { Nav } from '@/components/nav';
import './globals.css'; // Import global CSS
import Footer from '@/components/footer';
import { Providers } from '@/lib/provider';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				{/* <Providers> */}
				{/* <Nav /> */}
				<main>
					<div>{children}</div>
				</main>
				{/* </Providers> */}
			</body>
			{/* <Footer /> */}
		</html>
	);
}
