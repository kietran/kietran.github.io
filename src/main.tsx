import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GitProfile from './components/gitprofile.tsx';
import ProjectDetail from './components/project-detail';
import { getSanitizedConfig } from './utils';

const sanitizedConfig = getSanitizedConfig(CONFIG);

if (typeof window !== 'undefined') {
  const redirectPath = sessionStorage.getItem('redirect');
  if (redirectPath) {
    sessionStorage.removeItem('redirect');
    const normalizedBase = CONFIG.base && CONFIG.base !== '/' ? CONFIG.base : '';
    const currentPath =
      window.location.pathname + window.location.search + window.location.hash;
    if (!currentPath || currentPath === '/' || currentPath === normalizedBase) {
      window.history.replaceState(null, '', redirectPath);
    }
  }
}

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
