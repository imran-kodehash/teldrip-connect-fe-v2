// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuthStore } from '@/store/useAuthStore';

// type ProtectedRouteProps = {
//     children: React.ReactElement;
//     roles?: string[]; // optional role-based access
// };

// export default function ProtectedRoute({ children, roles }: ProtectedRouteProps) {
//     const { user } = useAuthStore();

//     // If not logged in → redirect to login
//     if (!user) {
//         return <Navigate to="/login" replace />;
//     }

//     // If roles are defined, check if user role is allowed
//     if (roles && !roles.includes(user.role)) {
//         return <Navigate to="/" replace />; // redirect to home or unauthorized page
//     }

//     return children;
// }
