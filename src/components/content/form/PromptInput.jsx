import {
    InputContainer,
    Label,
    Textarea,
    Utility,
    InputMessage,
} from '@visa/nova-react';
import { VisaErrorTiny } from '@visa/nova-icons-react';

/**
 * PromptInput component renders a labeled textarea input with a primary button.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.label - The label text for the textarea.
 * @param {string} props.id - The id attribute for the textarea and label association.
 * @param {string} props.name - The name attribute for the textarea.
 * @param {string} props.placeholder - The placeholder text for the textarea.
 * @returns {JSX.Element} The rendered PromptInput component.
 */
const PromptInput = ({
    value,
    error,
    label,
    id,
    name,
    placeholder,
    handleChange,
    ...props
}) => {
    return (
        <Utility vFlex vFlexCol vGap={4} vMargin={16} vFlexGrow>
            <Label htmlFor={id}>{label}</Label>
            <InputContainer>
                <Textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    rows={4}
                    cols={50}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleChange}
                    {...props}
                />
            </InputContainer>
            {/* TOOD: Make sure this is accessible */}
            {error && (
                <InputMessage aria-atomic="true" aria-live='assertive' role="alert" id="form-error-message">
                    <VisaErrorTiny />
                    {error}
                </InputMessage>
            )}
        </Utility>
    );
};

export default PromptInput;
