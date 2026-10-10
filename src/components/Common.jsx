import React from 'react';

export function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">
        <span></span>
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {text && <p className="section-copy">{text}</p>}
    </div>
  );
}

export function TagList({ items }) {
  return (
    <div className="tag-list">
      {items.map((item) => (
        <span key={item} className="tag">
          {item}
        </span>
      ))}
    </div>
  );
}

export function Flow({ items, ariaLabel }) {
  return (
    <div className="flow" aria-label={ariaLabel}>
      {items.map((item, idx) => (
        <div key={item} className="flow-part">
          <div className="flow-node">
            <span>{String(idx + 1).padStart(2, '0')}</span>
            <strong className="flow-title">{item}</strong>
          </div>
          {idx < items.length - 1 && (
            <div className="flow-line">
              <i></i>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
