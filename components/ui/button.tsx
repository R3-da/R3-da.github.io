import classNames from 'classnames';
import Link from 'next/link';

interface ButtonProps {
	route: string;
	label: string;
	bgColor?: string;
	hoverColor?: string;
}
export default function Button({ route, label, bgColor }: ButtonProps) {
	return (
		<div className="text-center">
			<Link href={route}>
				<p
					className={classNames(
						'inline-block transform rounded-full px-6 py-3 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-blue-300',
						bgColor ? bgColor : 'bg-gradient-to-r from-blue-300 to-blue-500',
					)}
				>
					{label}
				</p>
			</Link>
		</div>
	);
}
