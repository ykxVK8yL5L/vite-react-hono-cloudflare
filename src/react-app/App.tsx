// src/App.tsx

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/hono.svg";
import "./App.css";
import { useCurrentUser } from "./api/useUser";
import { eventBus, useEvent } from "./utils/bus";
import Test from "./pages/test";
import { Alert } from "@mui/material"
import { useAuthStore } from "./stores/auth";


function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("unknown");
	const { data, isLoading, error } = useCurrentUser()

	useEvent('order:refresh', () => {
		alert('测试事件')
	})

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return JSON.stringify(error)
	}

	return (
		<>

			<Alert severity="success">
				Here is a gentle confirmation that your action was successful.
			</Alert>
			<div className="flex">
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<a href="https://hono.dev/" target="_blank">
					<img src={honoLogo} className="logo cloudflare" alt="Hono logo" />
				</a>
				<a href="https://workers.cloudflare.com/" target="_blank">
					<img
						src={cloudflareLogo}
						className="logo cloudflare"
						alt="Cloudflare logo"
					/>
				</a>
			</div>
			<h1>Vite + React + Hono + Cloudflare</h1>
			<div className="card">
				<button
					onClick={() => setCount((count) => count + 1)}
					aria-label="increment"
				>
					count is {count}
				</button>

				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>

				<Test />

				<h1 className="text-3xl text-red-600 font-bold underline">
					Hello world!
				</h1>

				<button
					onClick={() => { eventBus.emit('notify', { type: 'error', message: '这是一条通知消息！' }) }}
					aria-label="increment"
				>
					通知
				</button>


				<button
					onClick={() => { useAuthStore.getState().clear() }}
					aria-label="increment"
				>
					退出
				</button>


			</div>
			<p className="read-the-docs">{data?.name}</p>
			<div className="card">
				<button
					onClick={() => {
						fetch("/api/")
							.then((res) => res.json() as Promise<{ name: string }>)
							.then((data) => setName(data.name));
					}}
					aria-label="get name"
				>
					Name from API is: {name}
				</button>
				<p>
					Edit <code>worker/index.ts</code> to change the name
				</p>
			</div>
			<p className="read-the-docs">Click on the logos to learn more</p>
		</>
	);
}

export default App;
