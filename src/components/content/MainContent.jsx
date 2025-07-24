import { Utility } from '@visa/nova-react';
import ResponsePane from './response/ResponsePane.jsx';
import PromptForm from './form/PromptForm.jsx';

const MainContent = ({
    padTop = false,
    currentSearch,
    addSearchResult,
    setToastVisible,
}) => {
    return (
        <>
            <Utility
                className="mainContent"
                id="content"
                vFlex
                vFlexCol
                // vJustifyContent="end"
                vFlexGrow
            >
                <div style={{ flexGrow: 1, minHeight: 0, overflow: 'auto' }}>
                    <ResponsePane
                        currentSearch={currentSearch}
                        setToastVisible={setToastVisible}
                    />
                </div>
                <div
                    style={{
                        position: 'sticky',
                        bottom: 0,
                        background: 'whitesmoke',
                        zIndex: 10,
                        boxShadow: '0 -2px 8px rgba(0,0,0,0.04)',
                    }}
                >
                    <PromptForm addSearchResult={addSearchResult} />
                </div>
            </Utility>
        </>
    );
};
export default MainContent;
