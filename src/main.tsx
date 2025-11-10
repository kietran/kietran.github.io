import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GitProfile from './components/gitprofile.tsx';
import ProjectDetail from './components/project-detail';
import { getSanitizedConfig } from './utils';

const sanitizedConfig = getSanitizedConfig(CONFIG);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={CONFIG.base || '/'}>
      <Routes>
        <Route path="/" element={<GitProfile config={CONFIG} />} />
        <Route 
          path="/project/:projectId" 
          element={
            <ProjectDetail 
              projects={sanitizedConfig.projects?.external?.projects || []} 
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
