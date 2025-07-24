import {
    Accordion,
    AccordionHeading,
    AccordionPanel,
    AccordionToggleIcon,
    Typography,
    Divider,
} from '@visa/nova-react';

const ComponentSnippet = ({ components = [] }) => {
    return (
        <Accordion>
            <AccordionHeading buttonSize="large" colorScheme="secondary">
                <AccordionToggleIcon />
                <Typography variant="subtitle-1">
                    Suggested Components
                </Typography>
            </AccordionHeading>
            <AccordionPanel>
                {components.map((item, index) => (
                    <div key={index} id={index} >
                        <Typography variant='body-1'>
                            {item}
                        </Typography>
                        {index !== components.length - 1 && <Divider />}
                    </div>
                ))}
            </AccordionPanel>
        </Accordion>
    );
};

export default ComponentSnippet;
