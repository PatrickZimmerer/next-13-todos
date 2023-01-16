import '../styles/globals.css';
import Header from './Header';
import Todos from './todos/page';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head></head>
			<body>
				<Header />
				<Todos />
				{children}
			</body>
		</html>
	);
}
