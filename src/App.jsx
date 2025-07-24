import { useState, useRef } from 'react';
import {
    Utility,
    UtilityFragment,
    Nav,
    Button,
    Link,
    Panel,
} from '@visa/nova-react';
import VerticalNavigation from './components/navigation/VerticalNavigation.jsx';
import { Toast } from './components/content/Toast.jsx';
import useLocalStorage from './components/hooks/useLocalStorage.jsx';
import NavigationHeader from './components/navigation/NavigationHeader.jsx';
import MainContent from './components/content/MainContent.jsx';
import { VisaMenuTiny } from '@visa/nova-icons-react';

function App() {
    const {
        currentSearch,
        searches,
        addSearchResult,
        deleteSearchResult,
        selectSearchResult,
    } = useLocalStorage();
    const [toastVisible, setToastVisible] = useState(false);
    const navDrawerRef = useRef(null);

    return (
        <div id="main-page">
            <UtilityFragment vMediaHide="mobile" >
                <Utility vFlex className="appContainer">
                    <VerticalNavigation
                        searches={searches}
                        currentSearch={currentSearch}
                        selectSearchResult={selectSearchResult}
                        deleteSearchResult={deleteSearchResult}
                        headerOrientation="vertical"
                    />
                    <MainContent
                        currentSearch={currentSearch}
                        addSearchResult={addSearchResult}
                        setToastVisible={setToastVisible}
                    />
                </Utility>
            </UtilityFragment>
            <UtilityFragment vMediaHide="desktop">
                <Utility className="appContainer">
                    <Nav
                        id="horizontal-nav"
                        orientation="horizontal"
                        tag="nav"
                        style={{ position: 'sticky', top: 0 }}
                    >
                            <Button
                                iconButton
                                aria-label="Toggle Navigation"
                                onClick={() =>
                                    navDrawerRef.current?.showModal()
                                }
                                colorScheme='tertiary'
                            >
                                <VisaMenuTiny />
                            </Button>
                            <NavigationHeader orientation='horizontal'/>
                    </Nav>
                    <Panel
                        aria-modal="true"
                        ref={navDrawerRef}
                        id="something"
                        tag="dialog"
                        style={{
                            '--v-panel-inline-size': 'initial',
                        }}
                    >
                        <VerticalNavigation
                            searches={searches}
                            currentSearch={currentSearch}
                            selectSearchResult={selectSearchResult}
                            deleteSearchResult={deleteSearchResult}
                            navDrawerRef={navDrawerRef}
                            headerOrientation="horizontal"
                        />
                    </Panel>
                    <MainContent
                        padTop
                        currentSearch={currentSearch}
                        addSearchResult={addSearchResult}
                        setToastVisible={setToastVisible}
                    />
                </Utility>
            </UtilityFragment>
            <Toast
                isVisible={toastVisible}
                type="success"
                text="Copied to clipboard!"
            />
        </div>
    );
}

export default App;
