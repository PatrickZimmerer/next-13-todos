import React, { Suspense } from 'react';
import TodosList from './(user)/todos/TodosList';

function Home() {
	return (
		<div className="flex gap-12">
			<Suspense fallback={<p className="text-green-500">Loading the Todos...</p>}>
				<div className="flex flex-col">
					{/* @ts-ignore */}
					<TodosList />
				</div>
			</Suspense>
			<Suspense
				fallback={
					<p className="text-red-500">Loading the other Todos with a different timeout...</p>
				}
			>
				<div className="flex flex-col">
					{/* @ts-ignore */}
					<TodosList />
				</div>
			</Suspense>
		</div>
	);
}

export default Home;
