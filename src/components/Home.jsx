import React from 'react';
import { Box,Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import p1 from '../assets/img1.jpg';
import p2 from '../assets/img2.jpg';
import p3 from '../assets/img3.jpg';
import p4 from '../assets/img4.jpg';
import p5 from '../assets/service.png';


const headingOptions ={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%, -50%)",
    textTransform:"uppercase",
    p:'4',
    size: '4xl',
}
const Home = () => {
  return <Box>
    <MyCarousel />

    <Container minH={'100vh'} maxW={'container.x1'} p='16'>
        <Heading textTransform={"uppercase"} py="2" w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>Services</Heading>
        <Stack
         h="full"
         p= {'4'}
         alignItems={'center'}
         direction={['column','row']}
        >
            <Image src={p5} h={['40', '400']} filter={'hue-rotate(-130deg)'}/>
            <Text letterSpacing={'widest'} lineHeight={"190%"} p={["4", "16"]} textAlign={'center'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat reiciendis at autem possimus, ab in, recusandae quae laudantium quaerat, cum enim nulla consequatur delectus? Consequatur saepe ab aut magnam, tempora itaque harum error dolorum, exercitationem reprehenderit numquam vitae nihil qui eius doloribus animi architecto blanditiis? Saepe ducimus animi eveniet hic, illum aliquid, repellendus dolorem, placeat nemo totam quod perspiciatis voluptate cum. Quasi, fugit eos assumenda est ab impedit recusandae commodi consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fuga, minus animi qui aut porro quas. Accusamus distinctio vel iure nostrum laudantium laboriosam omnis et quis temporibus. Nesciunt, dignissimos cum?
            </Text>

        </Stack>
    </Container>

  </Box>

};

  const MyCarousel = () => (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w="full" h={'100vh'}>
        <Image src={p1} />

        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            WATCH THE FUTURE
            </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={p2} />

        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            WATCH THE FUTURE
            </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={p3} />

        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            WATCH THE FUTURE
            </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={p4} />

        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            WATCH THE FUTURE
            </Heading>
      </Box>
    </Carousel>
  );
export default Home;
