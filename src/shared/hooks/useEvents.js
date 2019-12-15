import { useContext, useRef, useState, useEffect } from 'react';
import isString from 'lodash/isString';
import { FirebaseContext } from '../contexts';

const COLLENCTION = 'events';
const DOCUMENT = 'yUVvA0BxL5lUMb7VBDST';

const toDate = event => ({
  ...event,
  start: isString(event.start) ? event.start : event.start.toDate(),
  end: isString(event.end) ? event.end : event.end.toDate(),
});

// TODO: 月ごとに query を投げたい DBの構造を考える
export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fireBaseRef = useRef(useContext(FirebaseContext));
  const { db } = fireBaseRef.current;
  const doc = db.collection(COLLENCTION).doc(DOCUMENT);

  const load = async query => {
    setLoading(true);
    // const { year, month } = query;
    try {
      const docs = await doc.get();
      const { events } = docs.data();
      const eventsData = events.map(toDate);
      setEvents(eventsData);
      setError(null);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const set = async query => {
    setLoading(true);
    const { year, month, values } = query;
    try {
      await doc.set({ events: values });
      setEvents(values);
      setError(null);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return { events, loading, error, set };
};

export default useEvents;
