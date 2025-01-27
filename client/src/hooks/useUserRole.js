import { useState, useEffect } from 'react';
import { auth } from '../firebase';

export function useUserRole() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
        auth.currentUser.getIdTokenResult().then((idTokenResult) => {
          setIsAdmin(!!idTokenResult.claims.admin);
          setLoading(false);
        });
      } else {
        setIsAuthenticated(false);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return { isAdmin, isAuthenticated, loading };
}