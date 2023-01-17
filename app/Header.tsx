import Link from 'next/link';
import React from 'react';

function Header() {
	return (
		<header className="p-4 bg-blue-500 flex gap-4">
			<Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg">
				Go to Home
			</Link>
			<Link href="/todos" className="px-2 py-1 bg-white text-blue-500 rounded-lg">
				Go to Todos
			</Link>
			<Link href="/search" className="px-2 py-1 bg-white text-blue-500 rounded-lg">
				Go to Search
			</Link>
		</header>
	);
}

export default Header;
