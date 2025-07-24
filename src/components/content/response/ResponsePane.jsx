import { Typography, Utility } from '@visa/nova-react';
import ResponseCard from './ResponseCard';

const ResponsePane = ({ currentSearch, setToastVisible }) => {
    return (
        <Utility
            vFlex
            vFlexCol
            vFlexGrow
            vJustifyContent="end"
            vGap={16}
            vMargin={16}
        >
            {currentSearch?.result ? (
                <>
                    <Typography variant="subtitle-1" tag="h2">
                        Here's the response for your query:
                    </Typography>
                    <ResponseCard
                        currentSearch={currentSearch}
                        setToastVisible={setToastVisible}
                    />
                </>
            ) : (
                <Typography variant="subtitle-1">Enter a request!</Typography>
            )}
        </Utility>
    );
};

export default ResponsePane;
