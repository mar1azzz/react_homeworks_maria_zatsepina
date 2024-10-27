import './Rox.css';

// eslint-disable-next-line react/prop-types
export const Row = ({children}) => {
    return(
        <div className = 'row'>
            {children}
        </div>
    );
}