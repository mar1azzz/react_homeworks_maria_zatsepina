import './FlexContainer.css';
import { PropsWithChildren } from 'react';
import { FlexContainerProps } from '../../types/FlexContainer';

export const FlexContainer: React.FC<PropsWithChildren<FlexContainerProps>> = ({ children }) => {
  return <div className="flex-container">{children}</div>;
};
