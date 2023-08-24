import { Navigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useTypedSelector((state: any) => state.auth);
  if (!user?.token) return <Navigate to='/signin' replace />;
  return <>{children}</>;
};

export default ProtectedRoute;
