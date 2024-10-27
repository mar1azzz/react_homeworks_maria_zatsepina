/* eslint-disable react/prop-types */
import './ListSection.css';

const ListSection = ({ title, children, clickable = false }) => {
    const isImage = typeof title !== 'string';

    return (
        <div className="list-section">
            {isImage ? (
                <img src={title} alt="List Icon" className="list-section-image" />
            ) : (
                <h2 className="list-section-title">{title}</h2>
            )}
            <ul className="list-section-children">
                {children.map((child, index) => {
                    if (clickable && typeof child === 'object') {
                        return (
                            <li key={index} className="list-section-item">
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
                            <li key={index} className="list-section-item">
                                {clickable ? (
                                    <a
                                        href="#"
                                        className="list-section-link"
                                    >
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
