import { useState } from 'react';
import { Utility, Typography, Button } from '@visa/nova-react';
import { VisaSendTiny } from '@visa/nova-icons-react';
import PromptInput from './PromptInput';

const PromptForm = ({ addSearchResult }) => {
    const [query, setQuery] = useState('');
    // Simple form validation hook to validate input on submit
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
        // Clear error if the input is not empty
        if(event.target.value.trim().length > 0) {
            setError('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Don't let the user submit an empty query
        if (!query || query.trim().length === 0) {
            setError('Please enter text for your requested UI.');
            event.preventDefault();
            return;
        }

        const newQuery = query.trim();
        addSearchResult(newQuery);
        setQuery('');
        setError('');
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <Utility vFlex vAlignItems="center">
                <PromptInput
                    label="Enter your prompt:"
                    id="suggestion-input"
                    name="suggestion"
                    placeholder="Type your suggestion here..."
                    value={query}
                    handleChange={handleChange}
                    error={error}
                    aria-required="true"
                    aria-invalid={error.length > 0}
                />
                <Utility vAlignItems="center" vFlex vFlexCol vGap={2}>
                    <Button
                        aria-labelledby="send-button-label"
                        iconButton
                        type="submit"
                    >
                        <VisaSendTiny />
                    </Button>
                    <Typography
                        id="send-button-label"
                        tag="span"
                        variant="label-small"
                    >
                        Send
                    </Typography>
                </Utility>
            </Utility>
        </form>
    );
};

export default PromptForm;
