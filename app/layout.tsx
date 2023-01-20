import '../styles/globals.css';
import Header from './Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head>
				<title>Patricks First Next13 App</title>
			</head>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
