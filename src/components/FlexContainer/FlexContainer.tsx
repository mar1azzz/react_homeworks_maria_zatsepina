import './FlexContainer.css';
import { FlexContainerProps } from '../../types/FlexContainer';

export const FlexContainer: React.FC<FlexContainerProps> = ({ children }) => {
  return <div className="flex-container">{children}</div>;
};
