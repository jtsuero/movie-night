import { Box, Container, Stack, Text } from "@chakra-ui/react";
import Form from "./Form";

interface SearchBarProps {
	handleSearch: (movieName: string) => void;
}

export default function SearchBar(props: SearchBarProps) {
	return (
		<>
			<Container maxW={"3xl"}>
				<Stack
					as={Box}
					textAlign={"center"}
					spacing={{ base: 8, md: 14 }}
					py={{ base: 20, md: 36 }}
				>
					<Text fontSize={25} fontFamily={"monospace"}>
						Find tonight's movie or bookmark it for later!
					</Text>
					<Form onSubmit={props.handleSearch} />
				</Stack>
			</Container>
		</>
	);
}
