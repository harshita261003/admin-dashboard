import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import TablePage from './TablePage';
import ChartsPage from './ChartsPage';
import CalendarPage from './CalendarPage';
import KanbanPage from './KanbanPage';
import { ThemeContextProvider } from './ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<h2>Welcome to the Admin Dashboard</h2>} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/charts" element={<ChartsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/kanban" element={<KanbanPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
