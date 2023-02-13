import { useEffect, useState } from 'react';

const useScreenWidth = () => {
  const [tablet, setTablet] = useState(false);

  const availableScreenWidth = window.screen.availWidth;

  useEffect(() => {
    if (availableScreenWidth < 900) {
      setTablet(true);
    }
  }, [availableScreenWidth]);

  return tablet;
};

export default useScreenWidth;
