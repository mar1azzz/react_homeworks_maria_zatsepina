import React from 'react';
import './ListSection.css';
import { ListSectionProps } from '../../types/ListSection';

const ListSection: React.FC<ListSectionProps> = ({ title, children, clickable = false }) => {
  return (
    <div className="list-section">
      {typeof title === 'string' ? (
        <h2 className="list-section-title">{title}</h2>
      ) : (
        <div className="list-section-title">{title}</div>
      )}
      <ul className="list-section-children">
        {children.map((child, index) => {
          if (child === null || child === undefined) {
            return null;
          }
          const key = `${index}-${typeof child === 'object' && 'label' in child ? child.label : child}`;
          if (clickable && typeof child === 'object' && 'label' in child) {
            return (
              <li key={key} className="list-section-item">
                <a
                  href={child.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-section-link"
                >
                  {child.label}
                </a>
              </li>
            );
          } else if (clickable) {
            if (typeof child === 'string' || typeof child === 'number' || React.isValidElement(child)) {
              return (
                <li key={key} className="list-section-item">
                  <a href="#" className="list-section-link">
                    {child}
                  </a>
                </li>
              );
            }
          } else {
            return (
              <li key={key} className="list-section-item">
                {typeof child === 'string' || typeof child === 'number' || React.isValidElement(child)
                  ? child
                  : null}
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default ListSection;
