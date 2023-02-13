import { useState } from 'react';
import { ProductList, NavBar, Footer, Loader } from '../../components';
const StorePage = () => {
  const [loaded, setLoaded] = useState(false);

  setTimeout(() => {
    setLoaded(true);
  }, 1000);

  if (loaded) {
    return (
      <>
        <NavBar />
        <ProductList />
        <Footer />
      </>
    );
  }

  return <Loader />;
};

export default StorePage;
