import { useMemo } from 'react';
import { getMenuForRole } from '../config/navbarConfig';

export const useNavbarMenu = (user) => {
  return useMemo(() => {
    if (!user) return getMenuForRole('GUEST');

    const role = user.role === 'elector' ? 'elector' : 'default';
    return getMenuForRole(role);
  }, [user]);
};
