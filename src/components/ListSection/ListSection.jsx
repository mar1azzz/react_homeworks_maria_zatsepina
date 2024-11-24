/* eslint-disable react/prop-types */
import './ListSection.css';

const ListSection = ({ title, children, clickable = false }) => {
    return (
        <div className="list-section">
            {typeof title === 'string' ? (
                <h2 className="list-section-title">{title}</h2>
            ) : (
                <div className="list-section-title">{title}</div>
            )}
            <ul className="list-section-children">
                {children.map((child, index) => {
                    const key = `${index}-${typeof child === 'object' ? child.label : child}`;
                    if (clickable && typeof child === 'object') {
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
                    } else {
                        return (
                            <li key={key} className="list-section-item">
                                {clickable ? (
                                    <a href="#" className="list-section-link">
                                        {child}
                                    </a>
                                ) : (
                                    child
                                )}
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
};
export default ListSection;
