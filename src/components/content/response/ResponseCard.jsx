import {
    ContentCard,
    ContentCardBody,
    ContentCardTitle,
    Utility,
    Button,
    Divider,
} from '@visa/nova-react';
import { VisaCopyTiny } from '@visa/nova-icons-react';
import ComponentSnippet from './ComponentSnippet';

const ResponseCard = ({ currentSearch, setToastVisible }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(currentSearch.result);
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3000);
    };

    return (
        <ContentCard>
            <Utility
                element={<ContentCardBody />}
                vFlex
                vFlexCol
                vGap={8}
                vMargin={16}
            >
                <Utility
                    vAlignItems="center"
                    vFlex
                    vFlexRow
                    vJustifyContent="between"
                >
                    <ContentCardTitle variant="headline-4">
                        {currentSearch.query}
                    </ContentCardTitle>
                </Utility>
                <Divider />
                <Utility vFlex vGap={8} vMargin={16}>
                    <Utility vFlex className="codeblock">
                        <pre>
                            <code className="courier-prime-regular">
                                {currentSearch.result}
                            </code>
                        </pre>
                        <Button
                            aria-label="Copy code snippet"
                            iconButton
                            colorScheme="tertiary"
                            onClick={handleCopy}
                        >
                            <VisaCopyTiny />
                        </Button>
                    </Utility>
                </Utility>
                <ComponentSnippet components={currentSearch.components}  />
            </Utility>
        </ContentCard>
    );
};

export default ResponseCard;