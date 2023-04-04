import { useScreenWidth } from '../../hooks';
import { Parallax } from '../Parallax';
import { NavBar } from '../NavBar';

const Header = () => {
  const tablet = useScreenWidth();

  return tablet ? (
    <>
      <NavBar />
      <Parallax />
    </>
  ) : (
    <>
      <Parallax />
      <NavBar />
    </>
  );
};

export default Header;
