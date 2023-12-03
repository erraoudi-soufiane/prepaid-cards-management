import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  label: string;
  type: string;
}

const FormControlComponent = ({ label, type }: Props) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: { target: { value: any } }) =>
    setInput(e.target.value);

  const isError = input === "";
  return (
    <FormControl isInvalid={isError} mb={"8px"} isRequired>
      <FormLabel>{label}</FormLabel>
      <Input type={type} value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>Enter the employee's {label}.</FormHelperText>
      ) : (
        <FormErrorMessage>{label} is required.</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormControlComponent;
