import Head from "next/head";
import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";
import Form from "./Form";

interface SearchBarProps {
	handleSearch: (movieName: string) => void;
}

export default function SearchBar(props: SearchBarProps) {
	return (
		<>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<Container maxW={"3xl"}>
				<Stack
					as={Box}
					textAlign={"center"}
					spacing={{ base: 8, md: 14 }}
					py={{ base: 20, md: 36 }}
				>
					<Heading
						fontWeight={600}
						fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
						lineHeight={"110%"}
					>
						<Text as={"span"} color={"red.700"}>
							Movie Night
						</Text>
					</Heading>
					<Text color={"gray.500"}>
						Find tonight's movie or bookmark it for later!
					</Text>
					<Form onSubmit={props.handleSearch} />
				</Stack>
			</Container>
		</>
	);
}
