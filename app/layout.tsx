"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ChakraProvider>
					<Sidebar children={children} />
				</ChakraProvider>
			</body>
		</html>
	);
}
