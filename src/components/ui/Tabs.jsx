
/*
import React, { useState } from 'react';
import { Tabs as BootstrapTabs, Tab } from 'react-bootstrap';

const TabsContext = React.createContext();

const Tabs = ({ defaultValue, children, ...props }) => {
  const [activeKey, setActiveKey] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeKey, setActiveKey }}>
      <BootstrapTabs activeKey={activeKey} onSelect={setActiveKey} {...props}>
        {children}
      </BootstrapTabs>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children, className = '' }) => {
  return <div className={`tabs-list ${className}`}>{children}</div>;
};

const TabsTrigger = ({ value, children, className = '' }) => {
  const { activeKey, setActiveKey } = React.useContext(TabsContext);
  const isActive = activeKey === value;

  return (
    <button
      className={`tabs-trigger ${isActive ? 'active' : ''} ${className}`}
      onClick={() => setActiveKey(value)}
      type="button"
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, children }) => {
  const { activeKey } = React.useContext(TabsContext);
  return activeKey === value ? <div className="tabs-content">{children}</div> : null;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
*/
import React, { useState, Children } from 'react';

const TabsContext = React.createContext();

const Tabs = ({ defaultValue, children, className }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const TabsTrigger = ({ value, children, className }) => {
  const { activeTab, setActiveTab } = React.useContext(TabsContext);

  const isActive = activeTab === value;

  return (
    <button
      className={`${className} ${isActive ? 'border-b-2 border-ideal font-semibold' : 'text-gray-500'}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, children }) => {
  const { activeTab } = React.useContext(TabsContext);

  if (activeTab !== value) return null;

  return <div>{children}</div>;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
