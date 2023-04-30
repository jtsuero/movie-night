"use client";
import { Button, Stack, Input, FormControl } from "@chakra-ui/react";
import { useState } from "react";

interface FormProps {
	onSubmit: (input: string) => void;
}

export default function Form(props: FormProps) {
	const [input, setInput] = useState("");
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.onSubmit(input);
	};
	return (
		<form onSubmit={handleSubmit}>
			<FormControl>
				<Stack>
					<Input
						value={input}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setInput(e.target.value)
						}
					/>
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
