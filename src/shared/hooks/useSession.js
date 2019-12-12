import { useState, useEffect } from 'react';
import uuid from 'uuid/v4';

const USER_ID = 'id';

export const useSession = () => {
  const [userId, setUserId] = useState();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storagedId = JSON.parse(localStorage.getItem(USER_ID));
      if (!storagedId) {
        const newId = uuid();
        localStorage.setItem(USER_ID, JSON.stringify(newId, null, 2));
        setUserId(newId);
      } else {
        setUserId(storagedId);
      }
    }
  }, []);
  return { userId };
};

export default useSession;
