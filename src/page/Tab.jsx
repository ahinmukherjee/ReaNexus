import React, { useState, useEffect, useCallback } from "react";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "../style/tab.css"

const Tab = () => {
    const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Load tabs from localStorage
  useEffect(() => {
    const savedTabs = JSON.parse(localStorage.getItem("tabs")) || [
      { id: 1, title: "Tab 1", content: "Welcome to Tab 1", type: "text" },
    ];
    setTabs(savedTabs);
    setActiveTab(savedTabs[0]?.id || null);
  }, []);

  // Save tabs to localStorage
  useEffect(() => {
    localStorage.setItem("tabs", JSON.stringify(tabs));
  }, [tabs]);

  // Add a new tab
  const addTab = () => {
    const newTab = {
      id: Date.now(),
      title: `New Tab`,
      content: "Enter content here...",
      type: "text",
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
  };

  // Remove a tab
  const removeTab = (id) => {
    const filteredTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(filteredTabs);
    setActiveTab(filteredTabs.length ? filteredTabs[0].id : null);
  };

  // Rename a tab
  const renameTab = (id, newTitle) => {
    setTabs(tabs.map((tab) => (tab.id === id ? { ...tab, title: newTitle } : tab)));
  };

  // Change tab content type
  const changeTabType = (id, newType) => {
    setTabs(tabs.map((tab) => (tab.id === id ? { ...tab, type: newType } : tab)));
  };

  // Handle drag and drop
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedTabs = [...tabs];
    const [movedTab] = reorderedTabs.splice(result.source.index, 1);
    reorderedTabs.splice(result.destination.index, 0, movedTab);
    setTabs(reorderedTabs);
  };

  // Keyboard Shortcuts
  const handleKeyDown = useCallback((event) => {
    if (event.ctrlKey && event.key === "t") {
      event.preventDefault();
      addTab();
    }
    if (event.ctrlKey && event.key === "w") {
      event.preventDefault();
      if (activeTab) removeTab(activeTab);
    }
  }, [activeTab, tabs]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={`tab-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="tab-header">
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="tabs" direction="horizontal">
            {(provided) => (
              <div className="tab-list" ref={provided.innerRef} {...provided.droppableProps}>
                {tabs.map((tab, index) => (
                  <Draggable key={tab.id} draggableId={String(tab.id)} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <input
                          type="text"
                          value={tab.title}
                          onChange={(e) => renameTab(tab.id, e.target.value)}
                          className="tab-title-input"
                        />
                        <button className="close-btn" onClick={(e) => { e.stopPropagation(); removeTab(tab.id); }}>✖</button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <button className="add-btn" onClick={addTab}>+ Add Tab</button>
      </div>

      <div className="tab-content">
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id}>
              <select onChange={(e) => changeTabType(tab.id, e.target.value)} value={tab.type}>
                <option value="text">Text</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>

              {tab.type === "text" && <textarea value={tab.content} onChange={(e) => renameTab(tab.id, e.target.value)} />}
              {tab.type === "image" && <input type="text" placeholder="Enter Image URL" onChange={(e) => renameTab(tab.id, e.target.value)} />}
              {tab.type === "video" && <input type="text" placeholder="Enter Video URL" onChange={(e) => renameTab(tab.id, e.target.value)} />}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
export default Tab;
