import { useEffect } from 'react';

const hotjar = ({ id, sdk }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hj = window.hj || (window.hj = function() {
        (hj.q = hj.q || []).push(arguments);
      });

      hj('init', id);
      hj('setTrackingCode', id);
      hj('setTrackingDomain', sdk);

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://static.hotjar.com/c/hotjar-${id}.js?sv=${sdk}`;
      document.head.appendChild(script);
    }
  }, [id, sdk]);
};

export default hotjar;