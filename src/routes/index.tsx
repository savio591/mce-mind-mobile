import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/useAuth';

export default function Routes() {
  const { user, loading } = useAuth();
  return user?.name ? <AppRoutes /> : <AuthRoutes />;
}
