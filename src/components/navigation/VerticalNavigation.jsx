import {
    Nav,
    Link,
    Tabs,
    Tab,
    Button,
    Utility,
    UtilityFragment,
} from '@visa/nova-react';
import NavigationHeader from './NavigationHeader';
import { VisaDeleteTiny, VisaCloseTiny } from '@visa/nova-icons-react';

/**
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.searches - Data for the vertical navigation tabs containing id and tabLabel
 * @returns {JSX.Element} VerticalNavigation component.
 */
const VerticalNavigation = ({
    searches,
    currentSearch,
    selectSearchResult,
    deleteSearchResult,
    navDrawerRef = null,
    headerOrientation = 'vertical',
}) => {
    const isVertical = headerOrientation === 'vertical';
    return (
        <Nav
            id="vertical-nav"
            orientation="vertical"
            tag="header"
            direction={'reverse'}
            style={{
                inlineSize: isVertical ? '33vw' : '100vw',
                maxWidth: isVertical ? '33vw' : '100vw',
                minWidth: isVertical ? '25vw' : '100vw',
            }}
            drawer={navDrawerRef}
        >
            <Link skipLink href="#content">
                Skip to content
            </Link>
            <>
                {navDrawerRef !== null && (
                    <Utility vMarginRight={4} vMarginLeft="auto">
                        {navDrawerRef !== null && (
                            <Button
                                aria-label="Close"
                                buttonSize="xsmall"
                                colorScheme="tertiary"
                                iconButton
                                onClick={() => {
                                    navDrawerRef.current?.close();
                                }}
                            >
                                <VisaCloseTiny />
                            </Button>
                        )}
                    </Utility>
                )}
                <NavigationHeader orientation={headerOrientation} />
                <nav aria-label={'Main Navigation'}>
                    <Tabs orientation="vertical">
                        {searches.map(({ id, query }) => (
                            <UtilityFragment
                                key={id}
                                vFlex
                                vAlignItems="center"
                            >
                                <Tab key={id} id={id} label={query}>
                                    <UtilityFragment vFlexGrow>
                                        <Button
                                            aria-selected={
                                                currentSearch &&
                                                currentSearch.id === id
                                            }
                                            colorScheme="tertiary"
                                            className="truncateLink"
                                            element={<a href="#">{query}</a>}
                                            onClick={() => {
                                                selectSearchResult(id);
                                                if (navDrawerRef) {
                                                    navDrawerRef.current?.close();
                                                }
                                            }}
                                            aria-label={query}
                                        />
                                    </UtilityFragment>
                                    <UtilityFragment
                                        vAlignItems="center"
                                        vPadding={8}
                                    >
                                        <Button
                                            style={{ flexBasis: 'min-content' }}
                                            buttonSize="small"
                                            aria-label={`Delete search result ${query}`}
                                            iconButton
                                            colorScheme="secondary"
                                            onClick={() =>
                                                deleteSearchResult(id)
                                            }
                                        >
                                            <VisaDeleteTiny />
                                        </Button>
                                    </UtilityFragment>
                                </Tab>
                            </UtilityFragment>
                        ))}
                    </Tabs>
                </nav>
            </>
        </Nav>
    );
};

export default VerticalNavigation;
