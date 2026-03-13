import { AuthContext } from '@/context/AuthContext';
import { use } from 'react';

export default function UseAuth() {
  const authInfo = use(AuthContext);
  return authInfo;
}
