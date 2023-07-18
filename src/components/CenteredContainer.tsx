export interface CenteredContainerProps {
  children: React.ReactNode;
}

const CenteredContainer = ({ children }: CenteredContainerProps) => {
  return <div className="max-w-5xl mx-auto">{children}</div>;
};

export default CenteredContainer;
