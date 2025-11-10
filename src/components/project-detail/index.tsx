import { useParams, useNavigate } from 'react-router-dom';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';
import { MdArrowBack, MdCode, MdLightbulb, MdWarning } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';
import LazyImage from '../lazy-image';
import { BG_COLOR } from '../../constants';

interface ProjectDetailProps {
  projects: SanitizedExternalProject[];
}

const ProjectDetail = ({ projects }: ProjectDetailProps) => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const projectIndex = projectId ? parseInt(projectId, 10) : -1;
  const project = projects[projectIndex];

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
                  {project.title}
                </h1>
                <p className="text-base-content/70 text-lg">
                  {project.description}
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
                  {project.details.overview}
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
                      <span className="text-base-content/80">{contribution}</span>
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
                      <span className="text-base-content/80">{lesson}</span>
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
                      <span className="text-base-content/80">{difficulty}</span>
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
                  <div key={index} className="rounded-lg overflow-hidden">
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
                {project.details.videos.map((video, index) => (
                  <div key={index} className="aspect-video">
                    <video
                      controls
                      className="w-full h-full rounded-lg"
                      src={video}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;

