import { useCallback, useEffect, useState } from 'react';
import type { PointerEvent as ReactPointerEvent, WheelEvent as ReactWheelEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';
import { MdArrowBack, MdCode, MdLightbulb, MdWarning, MdClose } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';
import LazyImage from '../lazy-image';
import { BG_COLOR } from '../../constants';

interface ProjectDetailProps {
  projects: SanitizedExternalProject[];
}

// Helper function to parse **text** as bold
const parseBoldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2);
      return <strong key={index}>{boldText}</strong>;
    }
    return part;
  });
};

// Helper function to convert YouTube URL to embed URL
const getYouTubeEmbedUrl = (url: string): string | null => {
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
  }
  return null;
};

const ProjectDetail = ({ projects }: ProjectDetailProps) => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panPosition, setPanPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [lastPointerPosition, setLastPointerPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const projectIndex = projectId ? parseInt(projectId, 10) : -1;
  const project = projects[projectIndex];

  const resetViewerState = useCallback(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
    setIsPanning(false);
    setLastPointerPosition(null);
  }, []);

  const closeImage = useCallback(() => {
    setSelectedImage(null);
    resetViewerState();
  }, [resetViewerState]);

  const openImage = useCallback(
    (image: string) => {
      resetViewerState();
      setSelectedImage(image);
    },
    [resetViewerState],
  );

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeImage]);

  const handleWheel = useCallback((event: ReactWheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const delta = event.deltaY > 0 ? -0.2 : 0.2;
    setZoomLevel((prev) => {
      const next = Number((prev + delta).toFixed(2));
      return Math.min(Math.max(next, 0.5), 6);
    });
  }, []);

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsPanning(true);
      setLastPointerPosition({ x: event.clientX, y: event.clientY });
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [],
  );

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!isPanning || !lastPointerPosition) {
        return;
      }

      const deltaX = event.clientX - lastPointerPosition.x;
      const deltaY = event.clientY - lastPointerPosition.y;

      setPanPosition((prev) => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY,
      }));
      setLastPointerPosition({ x: event.clientX, y: event.clientY });
    },
    [isPanning, lastPointerPosition],
  );

  const endPan = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setIsPanning(false);
    setLastPointerPosition(null);
  }, []);

  if (!project) {
    return (
      <div className={`min-h-screen ${BG_COLOR} flex items-center justify-center`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="btn btn-primary"
          >
            <MdArrowBack className="mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${BG_COLOR}`}>
      <div className="p-4 lg:p-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="btn btn-ghost mb-6"
        >
          <MdArrowBack className="mr-2" />
          Back to Portfolio
        </button>

        {/* Project Header */}
        <div className="card bg-base-200 shadow-xl border border-base-300 mb-6">
          <div className="card-body">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {project.imageUrl && (
                <div className="avatar">
                  <div className="w-32 h-32 mask mask-squircle">
                    <LazyImage
                      src={project.imageUrl}
                      alt={project.title}
                      placeholder={<div className="skeleton w-full h-full" />}
                    />
                  </div>
                </div>
              )}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {parseBoldText(project.title)}
                </h1>
                <p className="text-base-content/70 text-lg">
                  {project.description ? parseBoldText(project.description) : ''}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm mt-4"
                  >
                    View Live Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Overview */}
          {project.details?.overview && (
            <div className="card bg-base-200 shadow-xl border border-base-300 lg:col-span-2">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                  <MdLightbulb className="text-primary" />
                  Overview
                </h2>
                <p className="text-base-content/80 whitespace-pre-line">
                  {parseBoldText(project.details.overview)}
                </p>
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {project.details?.techStack && project.details.techStack.length > 0 && (
            <div className="card bg-base-200 shadow-xl border border-base-300">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                  <MdCode className="text-primary" />
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.details.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="badge badge-lg badge-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Contributions */}
          {project.details?.contributions && project.details.contributions.length > 0 && (
            <div className="card bg-base-200 shadow-xl border border-base-300">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                  <FaCheckCircle className="text-success" />
                  My Contributions
                </h2>
                <ul className="space-y-2">
                  {project.details.contributions.map((contribution, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-success mt-1">•</span>
                      <span className="text-base-content/80">{parseBoldText(contribution)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Lessons Learned */}
          {project.details?.lessonsLearned && project.details.lessonsLearned.length > 0 && (
            <div className="card bg-base-200 shadow-xl border border-base-300">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                  <MdLightbulb className="text-warning" />
                  Lessons Learned
                </h2>
                <ul className="space-y-2">
                  {project.details.lessonsLearned.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-warning mt-1">•</span>
                      <span className="text-base-content/80">{parseBoldText(lesson)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Difficulties */}
          {project.details?.difficulties && project.details.difficulties.length > 0 && (
            <div className="card bg-base-200 shadow-xl border border-base-300">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                  <MdWarning className="text-error" />
                  Challenges & Solutions
                </h2>
                <ul className="space-y-2">
                  {project.details.difficulties.map((difficulty, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-error mt-1">•</span>
                      <span className="text-base-content/80">{parseBoldText(difficulty)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Images Gallery */}
        {project.details?.images && project.details.images.length > 0 && (
          <div className="card bg-base-200 shadow-xl border border-base-300 mt-6">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.details.images.map((image, index) => (
                  <div
                    key={index}
                    role="button"
                    tabIndex={0}
                    className="rounded-lg overflow-hidden cursor-zoom-in transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={() => openImage(image)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        openImage(image);
                      }
                    }}
                  >
                    <LazyImage
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      placeholder={<div className="skeleton w-full h-48" />}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Videos */}
        {project.details?.videos && project.details.videos.length > 0 && (
          <div className="card bg-base-200 shadow-xl border border-base-300 mt-6">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.details.videos.map((video, index) => {
                  const embedUrl = getYouTubeEmbedUrl(video);
                  if (embedUrl) {
                    // YouTube video - use iframe
                    return (
                      <div key={index} className="aspect-video">
                        <iframe
                          className="w-full h-full rounded-lg"
                          src={embedUrl}
                          title={`Video ${index + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    );
                  } else {
                    // Regular video file - use video tag
                    return (
                      <div key={index} className="aspect-video">
                        <video
                          controls
                          className="w-full h-full rounded-lg"
                          src={video}
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        )}

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-6"
            role="dialog"
            aria-modal="true"
            onClick={() => closeImage()}
          >
            <button
              className="btn btn-circle btn-ghost absolute top-4 right-4 text-white hover:bg-white/10"
              onClick={(event) => {
                event.stopPropagation();
                closeImage();
              }}
              aria-label="Close image preview"
            >
              <MdClose className="text-3xl" />
            </button>
            <div
              className="flex-1 flex w-full max-w-6xl items-center justify-center overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div
                className="relative max-h-[80vh] max-w-full"
                onWheel={handleWheel}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={endPan}
                onPointerLeave={endPan}
                onPointerCancel={endPan}
                onDoubleClick={(event) => {
                  event.preventDefault();
                  resetViewerState();
                }}
                style={{
                  touchAction: 'none',
                  cursor: isPanning ? 'grabbing' : 'grab',
                }}
              >
                <img
                  src={selectedImage}
                  alt="Zoomed view"
                  className="select-none max-h-[80vh] max-w-[90vw]"
                  draggable={false}
                  style={{
                    transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoomLevel})`,
                    transition: isPanning ? 'none' : 'transform 0.12s ease-out',
                    transformOrigin: 'center center',
                  }}
                />
              </div>
            </div>
            <div className="mt-4 text-sm text-white/70 text-center select-none">
              Scroll to zoom · {Math.round(zoomLevel * 100)}%
              <span className="block text-xs text-white/50 mt-1">
                Drag to pan · Double click to reset
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;

