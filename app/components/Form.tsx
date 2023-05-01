"use client";
import {
	Button,
	Stack,
	Input,
	FormControl,
	InputRightElement,
	InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";

interface FormProps {
	onSubmit: (input: string) => void;
}

export default function Form(props: FormProps) {
	const [input, setInput] = useState("");

	const handleClear = () => setInput("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.onSubmit(input);
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormControl>
				<Stack>
					<InputGroup>
						<Input
							value={input}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setInput(e.target.value)
							}
							placeholder='Enter title here...'
							pr='4.5rem'
						/>
						{input && (
							<InputRightElement width='4.5rem'>
								<Button h='1.75rem' size='sm' onClick={handleClear}>
									X
								</Button>
							</InputRightElement>
						)}
					</InputGroup>
					<Button
						colorScheme={"blue"}
						bg={"blue.400"}
						rounded={"full"}
						px={6}
						_hover={{
							bg: "blue.500",
						}}
						type='submit'
					>
						Search
					</Button>
				</Stack>
			</FormControl>
		</form>
	);
}
