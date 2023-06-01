export interface ButtonProps {
    buttonText: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean
    primary?: boolean
}

export interface InputPropTypes {
    type?: string
    placeholder?: string
    required?: boolean
    value?: string
    setValue?: React.Dispatch<React.SetStateAction<string>>
}

export interface RichTextInputProps {
    content: string,
    setContent: React.Dispatch<React.SetStateAction<string>>
}