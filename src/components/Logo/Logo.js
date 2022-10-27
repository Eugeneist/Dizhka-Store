import { LogoInner } from "../../styles/Styles";

const Logo = ({ width, height }) => {
  return (
    <LogoInner width={width} height={height}>
      <svg
        className="logo"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        version="1.1"
        viewBox="0 0 21000 29700"
      >
        <defs></defs>
        <g id="Слой_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <polygon
            className="logo_1"
            fill="white"
            class="fil0"
            points="12345.87,20762.9 17107,20762.9 17107,3666.84 12345.87,3666.84 "
          />
          <polygon
            className="logo_2"
            fill="white"
            class="fil0"
            points="5475.79,3665.87 2893.91,21560.83 1450.21,21560.83 1450.21,26034.56 7074.11,26034.56 7680.27,21563.39 9597.82,8140.57 11547.02,8139.6 11547.02,3665.87 "
          />
          <polygon
            className="logo_3"
            fill="white"
            class="fil0"
            points="8479.42,21561.8 7872.36,26035.19 19503.56,26035.19 19535.52,21561.8 "
          />
        </g>
      </svg>
    </LogoInner>
  );
};

export default Logo;
