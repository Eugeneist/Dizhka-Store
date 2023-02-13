import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToProducts } from '../../actions/productsActions';
import { useHelloMessage } from '..';
import { axios } from '../../helpers';

const useProductsGet = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const { showHelloMessage } = useHelloMessage();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/products`)
      .then((data) => {
        dispatch(addToProducts(data));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
        setTimeout(showHelloMessage, 5000);
      });
  }, [dispatch]);

  return { loading, error };
};

export default useProductsGet;
