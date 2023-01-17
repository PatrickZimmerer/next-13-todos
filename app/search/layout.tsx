import Search from './Search';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex space-x-4 divide-x-2 p-4">
			<div>
				<h1>Search</h1>
			</div>
			<div className="flex-1 pl-4">
				<Search />
				<div>{children}</div>
			</div>
		</main>
	);
}
