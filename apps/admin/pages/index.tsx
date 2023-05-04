import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Logo } from "ui";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="flex h-screen justify-center items-center">
			<form
				method="post"
				id="admin"
				className="w-96 p-6 gap-6 flex flex-col shadow-lg text-center"
			>
				<Logo />
				<input
					type="email"
					id="email"
					placeholder="Email"
					className="p-4 text-lg hover:shadow-lg"
				></input>
				<input
					type="password"
					id="password"
					placeholder="Password"
					className="p-4 text-lg hover:shadow-lg"
				></input>
				<Button />
			</form>
		</main>
	);
}
