import { Text, Grid, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../components";

const PresentationItem = ({
  variant,
  topTitle,
  topId,
  topB = "",
  topBStyle = {},
  topC = "",
  topCStyle = {},
  topD = "",
  topDStyle = {},
  midB = "",
  midBStyle = {},
  midTitle,
  midId,
  midD = "",
  midDStyle = {},
  botTitle,
  botId,
  botB = "",
  botBStyle = {},
  botC = "",
  botCStyle = {},
}) => {
  return variant === "orange" ? (
    <Grid height={"100vh"} width={"100%"} templateRows="repeat(3, 1fr)">
      {/* TOP LINE */}
      <Flex>
        <Flex
          className="product__btn"
          width={"40%"}
          align={"center"}
          justify={"center"}
          color="#fff"
        >
          <NavLink
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            to={topId}
          >
            <Text
              fontFamily="'Montserrat', sans-serif"
              textTransform={"uppercase"}
              fontSize="2.25rem"
            >
              {topTitle}
            </Text>
          </NavLink>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          bgColor={"rgba(255,255,255,0.5)"}
          width={"30%"}
        >
          <Text style={topBStyle}>{topB}</Text>
        </Flex>
        <Flex
          bgColor={"#000"}
          width={"10%"}
          align={"center"}
          justify={"center"}
          color="#fff"
        >
          <Text style={topCStyle}>{topC}</Text>
        </Flex>
        <Flex
          bgColor={"transparent"}
          width={"20%"}
          align={"center"}
          justify={"end"}
          direction={"column"}
          color="#000"
        >
          <Text style={topDStyle}>{topD}</Text>
        </Flex>
      </Flex>
      {/* MIDDLE LINE */}
      <Flex>
        <Flex
          align={"center"}
          justify={"center"}
          bgColor={"#f88654"}
          width={"10%"}
        >
          <Logo width={"80%"} height={"81%"} />
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          bgColor={"rgba(255,255,255,0.5)"}
          width={"30%"}
        >
          <Text style={midBStyle}>{midB}</Text>
        </Flex>
        <Flex
          className="product__btn_orange"
          width={"40%"}
          align={"center"}
          justify={"center"}
          color="#fff"
        >
          <NavLink
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            to={midId}
          >
            <Text
              fontFamily="'Montserrat', sans-serif"
              textTransform={"uppercase"}
              fontSize="2.25rem"
            >
              {midTitle}
            </Text>
          </NavLink>
        </Flex>
        <Flex
          bgColor={"transparent"}
          width={"20%"}
          align={"center"}
          justify={"start"}
          direction={"column"}
          color="#000"
        >
          <Text style={midDStyle}>{midD}</Text>
        </Flex>
      </Flex>
      {/* BOT LINE */}
      <Flex>
        <Flex
          className="product__btn"
          // bgColor={"rgb(0,0,0)"}
          width={"40%"}
          align={"center"}
          justify={"center"}
          color="#fff"
        >
          <NavLink
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            to={botId}
          >
            <Text
              fontFamily="'Montserrat', sans-serif"
              textTransform={"uppercase"}
              fontSize="2.25rem"
            >
              {botTitle}
            </Text>
          </NavLink>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          bgColor={"rgba(255,255,255)"}
          width={"40%"}
        >
          <Text style={botBStyle}>{botB}</Text>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          bgColor={"rgba(0,0,0,0.5)"}
          width={"20%"}
        >
          <Text style={botCStyle}>{botC}</Text>
        </Flex>
      </Flex>
    </Grid>
  ) : (
    <Grid height={"100vh"} width={"100%"} templateRows="repeat(3, 1fr)">
      {/* TOP LINE */}
      <Flex>
        <Flex
          bgColor={"transparent"}
          width={"20%"}
          align={"center"}
          justify={"center"}
          color="#fff"
        >
          <Text style={topDStyle}>{topD}</Text>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          bgColor={"#000"}
          width={"10%"}
        >
          <Text style={topCStyle}>{topC}</Text>
        </Flex>
        <Flex
          bgColor={"rgba(255,255,255,0.5)"}
          width={"30%"}
          align={"center"}
          justify={"center"}
          color="#000"
        >
          <Text style={topBStyle}>{topB}</Text>
        </Flex>
        <Flex
          className="product__btn"
          width={"40%"}
          align={"center"}
          justify={"center"}
          color="#fff"
        >
          <NavLink
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            to={topId}
          >
            <Text
              fontFamily="'Montserrat', sans-serif"
              textTransform={"uppercase"}
              fontSize="2.25rem"
            >
              {topTitle}
            </Text>
          </NavLink>
        </Flex>
      </Flex>
      {/* MID LINE */}
      <Flex>
        <Flex
          align={"center"}
          justify={"center"}
          bgColor={"transparent"}
          width={"20%"}
        >
          <Text style={midDStyle}>{midD}</Text>
        </Flex>
        <Flex
          className="product__btn"
          align={"center"}
          justify={"center"}
          width={"40%"}
          color="#fff"
        >
          <NavLink
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            to={midId}
          >
            <Text
              fontFamily="'Montserrat', sans-serif"
              textTransform={"uppercase"}
              fontSize="3.75rem"
            >
              {midTitle}
            </Text>
          </NavLink>
        </Flex>
        <Flex
          bgColor={"rgba(255,255,255,0.5)"}
          width={"30%"}
          align={"center"}
          justify={"center"}
          direction={"column"}
          color="#000"
        >
          <Text style={midBStyle}>{midB}</Text>
        </Flex>
        <Flex
          bgColor={"#000"}
          width={"10%"}
          align={"center"}
          justify={"center"}
          color="#fff"
        >
          <Logo width={"80%"} height={"81%"} />
        </Flex>
      </Flex>
      {/* BOTTOM LINE */}
      <Flex>
        <Flex
          bgColor={"rgba(255,255,255,0.5)"}
          width={"20%"}
          align={"center"}
          justify={"center"}
          color="#fff"
        >
          <Text style={botCStyle}>{botC}</Text>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          bgColor={"rgb(0,0,0)"}
          width={"40%"}
        >
          <Text style={botBStyle}>{botB}</Text>
        </Flex>
        <Flex
          className="product__btn"
          width={"40%"}
          align={"center"}
          justify={"center"}
          color="#fff"
        >
          <NavLink
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            to={botId}
          >
            <Text
              fontFamily="'Montserrat', sans-serif"
              textTransform={"uppercase"}
              fontSize="2.25rem"
            >
              {botTitle}
            </Text>
          </NavLink>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default PresentationItem;
