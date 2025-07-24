import {
    Flag,
    FlagContent,
    FlagIcon,
    ScreenReader,
    FlagCloseButton,
} from '@visa/nova-react';
export const Toast = ({isVisible, type, text}) => {

    return (
        <Flag
            messageType="success"
            className={`toast ${isVisible ? 'toast-fade-in' : ''}`}
        >
            <FlagIcon />
            <FlagContent
                className="v-p1-2 v-pb-2"
                role="alert"
                aria-live="polite"
            >
                <ScreenReader>{type}</ScreenReader>{text}
            </FlagContent>
            <FlagCloseButton />
        </Flag>
    );
};
