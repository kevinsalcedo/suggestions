import {
    UtilityFragment,
    NavAppName,
    Typography,
    VisaLogo,
    Link,
} from '@visa/nova-react';

/**
 *
 * @returns NavigationHeader component that displays the application logo and name.
 */
const NavigationHeader = ({ orientation = 'vertical' }) => {
    return (
        <UtilityFragment
            vFlex
            vFlexCol={orientation === 'vertical'}
            vGap={12}
            vMarginHorizontal={20}
            vMarginVertical={20}
        >
            <Link
                aria-label="Component Suggestion Home"
                href="#"
                id="application-home-link"
                noUnderline
                style={{ backgroundColor: 'transparent' }}
            >
                <VisaLogo />
                <NavAppName>
                    <Typography variant="subtitle-1">
                        Component Suggestion
                    </Typography>
                </NavAppName>
            </Link>
        </UtilityFragment>
    );
};

export default NavigationHeader;
