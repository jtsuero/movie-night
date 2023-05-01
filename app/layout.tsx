"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

const customTheme = extendTheme({
	styles: {
		global: {
			body: {
				bg: "white",
			},
		},
	},
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ChakraProvider theme={customTheme}>
					<Sidebar children={children} />
				</ChakraProvider>
			</body>
		</html>
	);
}
