import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, FileText, Github, Images, X } from './Icons';
import { TagList } from './Common';

export function Modals({ activeModal, setActiveModal, activeProject, setActiveProject }) {
  const [prevProject, setPrevProject] = useState(activeProject);
  const [galleryIndex, setGalleryIndex] = useState(0);

  if (activeProject !== prevProject) {
    setPrevProject(activeProject);
    setGalleryIndex(0);
  }

  const gallery = activeProject?.gallery || [];
  const hasMultipleImages = gallery.length > 1;

  const goNext = useCallback(() => {
    if (gallery.length > 0) {
      setGalleryIndex((prev) => (prev + 1) % gallery.length);
    }
  }, [gallery.length]);

  const goPrev = useCallback(() => {
    if (gallery.length > 0) {
      setGalleryIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    }
  }, [gallery.length]);

  useEffect(() => {
    if (!activeProject || !hasMultipleImages) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeProject, hasMultipleImages, goNext, goPrev]);

  const currentGalleryImage = gallery.length > 0 ? gallery[galleryIndex] : activeProject?.image;

  return (
    <>
      {activeModal && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="media-dialog relative border bg-background p-6 shadow-2xl rounded-xl max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header-structured">
              <div className="modal-header-text">
                <h2 className="modal-structured-title">
                  {activeModal.title || 'Jaswanth Simha'}
                </h2>
                <p className="modal-structured-desc">
                  {activeModal.description || 'Full-size image from Jaswanth Simha\u2019s portfolio.'}
                </p>
              </div>
              <button
                type="button"
                className="modal-structured-close"
                onClick={() => setActiveModal(null)}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="modal-media-frame">
              <img src={activeModal.src} alt={activeModal.title || 'Media preview'} />
            </div>
          </div>
        </div>
      )}

      {activeProject && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="project-dialog relative border bg-background p-6 md:p-8 shadow-2xl rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header-structured">
              <div className="modal-header-text">
                <div className="modal-badges-row">
                  <span className="modal-badge-label">{activeProject.label}</span>
                  {activeProject.featured && (
                    <span className="modal-badge-featured">⭐ Featured</span>
                  )}
                </div>
                <h2 className="modal-structured-title">{activeProject.title}</h2>
                <p className="modal-structured-desc">
                  {activeProject.overview || activeProject.description}
                </p>
              </div>
              <button
                type="button"
                className="modal-structured-close"
                onClick={() => setActiveProject(null)}
                aria-label="Close project modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="project-gallery-viewer">
              <div className="modal-media-frame mb-5">
                <img
                  src={currentGalleryImage}
                  alt={`${activeProject.title} - image ${galleryIndex + 1}`}
                  className="project-dialog-img"
                />
              </div>

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    className="gallery-nav-btn gallery-nav-prev"
                    onClick={goPrev}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    className="gallery-nav-btn gallery-nav-next"
                    onClick={goNext}
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {hasMultipleImages && (
                <div className="gallery-controls">
                  <div className="gallery-counter">
                    <Images size={14} />
                    <span>{galleryIndex + 1} / {gallery.length}</span>
                  </div>
                  <div className="gallery-thumbnails">
                    {gallery.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`gallery-thumb ${idx === galleryIndex ? 'active' : ''}`}
                        onClick={() => setGalleryIndex(idx)}
                        aria-label={`View image ${idx + 1}`}
                      >
                        <img src={img} alt={`${activeProject.title} thumbnail ${idx + 1}`} />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mb-5 mt-4">
              <h4 className="project-tech-title text-xs font-semibold text-primary uppercase tracking-wider mb-3">Technologies Used</h4>
              <TagList items={activeProject.tech} />
            </div>

            <div className="project-dialog-actions">
              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-action-btn primary"
                >
                  <Github /> View on GitHub
                </a>
              )}
              {activeProject.demo && (
                <a
                  href={activeProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-action-btn primary demo"
                >
                  <ArrowUpRight /> Live Demo
                </a>
              )}
              {activeProject.docs && (
                <a
                  href={activeProject.docs}
                  target="_blank"
                  rel="noreferrer"
                  className="project-action-btn secondary"
                >
                  <FileText /> View PDF / Docs
                </a>
              )}
              {!activeProject.github && !activeProject.demo && !activeProject.docs && (
                <span className="project-private-note">
                  <Github /> Repository private · Academic / internal build
                </span>
              )}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="project-action-btn close"
              >
                <X /> Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
