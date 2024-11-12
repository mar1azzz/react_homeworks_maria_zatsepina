import './FlexContainer.css';

/* eslint-disable react/prop-types */
export const FlexContainer = ({ children }) => {
    return (
        <div className='flex-container'>
            {children}
        </div>
    );
};
