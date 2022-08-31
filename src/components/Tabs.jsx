import react, { useState } from 'react';
    

const Tabs = (props) => {
    const [currentTab, setCurrentTab] = useState('0');                      
    
    const tabs = [
        {
            tabHeader: 'Tab 1',
            content: 'First Tab'
        },
        {
            tabHeader: 'Tab 2',
            content: 'Second Tab'
        },
        {
            tabHeader: 'Tab 3',
            content: 'Third Tab'
        }
    ];

    const handleTabClick = (e) => {
        e.preventDefault();
        setCurrentTab(e.target.value);
    }
    
    return (
        <div className='container'>
            <div className="tabHeader">
                {tabs.map((tab, index) =>
                    <button value={index} disabled={currentTab === String(index)} onClick={handleTabClick} key={index}>Tab {index}</button>
                )}
            </div>
            <div className="tabBody">
                {tabs.map((tab, index) =>
                    <div key={index}>
                        {currentTab === String(index) && <div><p>{tab.content}</p></div>}
                    </div>
                )}
            </div>
        </div>
    );
};
    
export default Tabs;