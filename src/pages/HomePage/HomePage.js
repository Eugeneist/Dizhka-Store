import { useState, useEffect } from 'react';
import { Text, Heading, Box } from '@chakra-ui/react';
import {
  Form,
  Header,
  Footer,
  Loader,
  PresentationItem,
  CallToAction,
  Error,
  HelloMessage,
} from '../../components';
import '../../App.css';
import { SectionContainer, SectionInner, Divider } from '../../styles/Styles';
import { useDispatch } from 'react-redux';
import { addToProducts } from '../../actions/productsActions';
import { useScreenWidth, useHelloMessage } from '../../hooks';
import { axios } from '../../helpers';

import bg_about from '../../assets/images/bg_about.jpg';
import divider01 from '../../assets/images/divider02.jpg';
import divider_tablet from '../../assets/images/divider_tablet.jpg';
import divider_mobile from '../../assets/images/divider_mobile.jpg';
import beer from '../../assets/images/beer.jpg';
import bg_beer from '../../assets/images/bg_beer.jpg';
import gin from '../../assets/images/gin.jpg';
import bg_gin from '../../assets/images/bg_gin.jpg';
import whiskey from '../../assets/images/whiskey.jpg';
import bg_whiskey from '../../assets/images/bg_whiskey.jpg';
import vodka from '../../assets/images/vodka.jpg';
import bg_vodka from '../../assets/images/bg_vodka.jpg';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { showHelloMessage, isOpen, onClose, overlay } = useHelloMessage();

  const dispatch = useDispatch();

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

  const tablet = useScreenWidth();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Header />
      <HelloMessage isOpen={isOpen} onClose={onClose} overlay={overlay} />
      <SectionContainer bgImage={bg_about}>
        <SectionInner>
          <Box>
            <Heading
              fontFamily="KTFJermilov, sans-serif"
              color="#fff"
              py={4}
              fontSize={tablet ? '8rem' : '3rem'}
            >
              Молода компанія - стародавні традиції!
            </Heading>
            <Text
              fontFamily="'Montserrat', sans-serif"
              fontSize={tablet ? '4rem' : '1rem'}
              color="#fff"
              paddingBottom="0,3125rem"
            >
              Виробляємо алкоголь ручної роботи, зберігаючи автентичність
              рецептури.
            </Text>
            <Text
              fontFamily="'Montserrat', sans-serif"
              fontSize={tablet ? '4rem' : '1rem'}
              color="#fff"
              paddingBottom="0,625rem"
            >
              Компанія заснована у 2019 році.
            </Text>
          </Box>
        </SectionInner>
      </SectionContainer>
      {tablet ? (
        <Divider
          className="divider"
          bgImage={divider_tablet}
          attach={'scroll'}
        ></Divider>
      ) : (
        <Divider
          className="divider"
          bgImage={divider01}
          attach={'scroll'}
        ></Divider>
      )}
      <Divider
        bgImage={tablet ? divider_mobile : beer}
        attach={tablet ? 'scroll' : 'fixed'}
        height={tablet ? '25vh' : '50vh'}
      >
        <Heading
          fontFamily="KTFJermilov, sans-serif"
          fontSize={tablet ? '15rem' : '6rem'}
          color="#fff"
          py={4}
        >
          ПИВО
        </Heading>
      </Divider>
      <SectionContainer
        style={{ padding: '0px' }}
        bgImage={bg_beer}
        attach={tablet ? 'scroll' : 'fixed'}
      >
        <SectionInner
          style={{ padding: '0px', margin: '0px', maxWidth: 'none' }}
        >
          <PresentationItem
            variant="orange"
            topTitle="Український світлий ель"
            topId={'product/1'}
            topC="три"
            topCStyle={{
              fontFamily: "'Montserrat', sans-serif",
              textTransform: 'uppercase',
              fontSize: '3.75rem',
            }}
            topD="види нашого"
            topDStyle={{
              fontFamily: "'Montserrat', sans-serif",
              textTransform: 'uppercase',
              fontSize: '3rem',
              textAlign: 'center',
            }}
            midD="кращого пива"
            midDStyle={{
              fontFamily: "'Montserrat', sans-serif",
              textTransform: 'uppercase',
              fontSize: '3rem',
              textAlign: 'center',
            }}
            midTitle="Харківський портер"
            midId={'product/2'}
            botTitle="Пшеничний ель"
            botId={'product/3'}
          />
        </SectionInner>
      </SectionContainer>
      <Divider
        bgImage={tablet ? divider_mobile : gin}
        attach={tablet ? 'scroll' : 'fixed'}
        height={tablet ? '25vh' : '50vh'}
      >
        <Heading
          fontFamily="KTFJermilov, sans-serif"
          fontSize={tablet ? '15rem' : '6rem'}
          color="#fff"
          textTransform={'uppercase'}
          py={4}
        >
          ДЖИН
        </Heading>
      </Divider>
      <SectionContainer
        style={{ padding: '0px' }}
        bgImage={bg_gin}
        attach={tablet ? 'scroll' : 'fixed'}
      >
        <SectionInner
          style={{ padding: '0px', margin: '0px', maxWidth: 'none' }}
        >
          <PresentationItem
            topId={'product/4'}
            topTitle="cухий"
            topB="традиційний"
            topBStyle={{
              fontFamily: "'Montserrat', sans-serif",
              textTransform: 'uppercase',
              fontSize: '2.25rem',
              textAlign: 'center',
            }}
            midTitle="Джин"
            midId={'product/4'}
            midB={`та \n дуже`}
            midBStyle={{
              fontFamily: "'Montserrat', sans-serif",
              textTransform: 'uppercase',
              fontSize: '2.25rem',
              textAlign: 'center',
              whiteSpace: 'pre-line',
            }}
            botTitle="освіжаючий"
            botId={'product/4'}
          />
        </SectionInner>
      </SectionContainer>
      <Divider
        bgImage={tablet ? divider_mobile : whiskey}
        attach={tablet ? 'scroll' : 'fixed'}
        height={tablet ? '25vh' : '50vh'}
      >
        <Heading
          fontFamily="KTFJermilov, sans-serif"
          fontSize={tablet ? '15rem' : '6rem'}
          color="#fff"
          textTransform={'uppercase'}
          py={4}
        >
          ВІСКІ
        </Heading>
      </Divider>
      <SectionContainer
        style={{ padding: '0px' }}
        bgImage={bg_whiskey}
        attach={tablet ? 'scroll' : 'fixed'}
      >
        <SectionInner
          style={{ padding: '0px', margin: '0px', maxWidth: 'none' }}
        >
          <PresentationItem
            variant={'orange'}
            topId={'product/5'}
            topTitle="надійний"
            midTitle="Односолодовий віскі"
            midId={'product/5'}
            midB="витриманий"
            midBStyle={{
              fontFamily: "'Montserrat', sans-serif",
              textTransform: 'uppercase',
              fontSize: '2.25rem',
              textAlign: 'center',
            }}
            botId={'product/5'}
            botB={`немов \n старий друг`}
            botBStyle={{
              fontFamily: "'Montserrat', sans-serif",
              textTransform: 'uppercase',
              fontSize: '2.25rem',
              textAlign: 'center',
              whiteSpace: 'pre-line',
            }}
          />
        </SectionInner>
      </SectionContainer>
      <Divider
        bgImage={tablet ? divider_mobile : vodka}
        attach={tablet ? 'scroll' : 'fixed'}
        height={tablet ? '25vh' : '50vh'}
      >
        <Heading
          fontFamily="KTFJermilov, sans-serif"
          fontSize={tablet ? '15rem' : '6rem'}
          color="#fff"
          py={4}
        >
          ГОРІЛКА
        </Heading>
      </Divider>
      <SectionContainer
        style={{ padding: '0px' }}
        bgImage={bg_vodka}
        attach={tablet ? 'scroll' : 'fixed'}
      >
        <SectionInner
          style={{ padding: '0px', margin: '0px', maxWidth: 'none' }}
        >
          <PresentationItem
            topId={'product/6'}
            topTitle="класична"
            midTitle="Горілка"
            midId={'product/6'}
            botTitle={`без зайвих \n слів`}
            botId={'product/6'}
          />
        </SectionInner>
      </SectionContainer>
      <CallToAction />
      <SectionContainer
        style={{
          backgroundColor: '#000',
          justifyContent: 'center',
          textAlign: 'center',
          height: tablet ? '100%' : '100vh',
          backgroundAttachment: 'scroll',
        }}
      >
        <SectionInner style={{ margin: 0, maxWidth: 'none' }}>
          <Form />
        </SectionInner>
      </SectionContainer>
      <Footer />
    </>
  );
};

export default HomePage;
