import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Divider, Flex, Img, Text, VStack } from "@chakra-ui/react";
import laptoppic from '../../assets/Images/laptoppic.jpg'
import michael from '../../assets/Images/michael-dziedzic-gEN5Btvf2Eg-unsplash.jpg'
import fotis from '../../assets/Images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg'
import greg from '../../assets/Images/greg-rakozy-oMpAz-DN-9I-unsplash.jpg'
import star from '../../assets/Images/Rating star.svg'
import ticket from '../../assets/Images/ticket.svg'
import calender from '../../assets/Images/calender.svg'
import clock from '../../assets/Images/Clock.svg'
import people from '../../assets/Images/people.svg'
import infogray from '../../assets/Images/info.svg'
import piggygreen from '../../assets/Images/piggy-green.svg'
import infodark from '../../assets/Images/info-dark.svg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function MConfirmPay(){

    var settings = {
        fade:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    };
    
    return(
            <VStack w='100%' p='0px 16px 0px 16px' gap='24px'>
                <VStack w='100%' gap='4px'>
                    <Text w='100%' p='0px 0px 20px 0px' fontSize='32px' fontWeight={500} lineHeight='40px' fontFamily='Roboto Serif
                    '>Confirm & pay</Text>

                    <VStack border='1px solid #DDDDE3' borderRadius='24px 24px 12px 12px'>
                        <VStack gap='12px'>
                            <VStack p='16px 16px 0px 16px' gap='16px'>
                                <Box w='316px' h='178px' borderRadius='12px' mb='3rem'>
                                    <Slider {...settings}>
                                        <Box><Img src={laptoppic} className="img-slide" style={{borderRadius: '12px'}}/></Box>
                                        <Box><Img src={michael} className="img-slide" style={{borderRadius: '12px'}}/></Box>
                                        <Box><Img src={fotis} className="img-slide" style={{borderRadius: '12px'}}/></Box>
                                        <Box><Img src={greg} className="img-slide" style={{borderRadius: '12px'}}/></Box>
                                    </Slider>
                                </Box>
                                <VStack gap='24px' w='100%'>
                                    <VStack w='100%' gap='2px'>
                                        <Flex w='100%' gap='4px'>
                                            <Img src={star} /> <Text w='100%' fontSize='14px'><b>4.9</b>(4.5k) &lt;category&gt; </Text> 
                                        </Flex>
                                        <Text fontSize='16px' lineHeight='22px' fontWeight='600' >Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</Text>
                                    </VStack>
                                    <VStack gap='8px' w='100%'>
                                        <Flex  w='100%' gap='10px'>
                                            <Img src={ticket} />
                                            <Text  w='100%' fontWeight='600' fontSize='14px' lineHeight='20px'>&lt;ticket type - variant&gt;</Text>
                                        </Flex>
                                        <Flex w='100%' gap='10px'>
                                        <Img src={calender} position='relative' top='-0.6rem'/>
                                            <VStack  w='100%'>
                                                <Text  w='100%' fontWeight='600' fontSize='14px' lineHeight='20px'>&lt;day&gt;, &lt;month&gt; &lt;date&gt;</Text>
                                                <Text w='100%' fontSize='12px' lineHeight='18px'>Duration: &lt;Duration&gt;</Text>
                                            </VStack>
                                        </Flex>
                                        <Flex  w='100%' gap='10px'>
                                            <Img src={clock} position='relative' top='-0.6rem'/>
                                            <VStack  w='100%'>
                                                <Text  w='100%' fontWeight={600} fontSize='14px' lineHeight='20px'>&lt;time&gt;</Text>
                                                <Text w='100%'  fontSize='12px' lineHeight='18px'>Operating hours: &lt;time&gt; to &lt;time&gt;</Text>
                                            </VStack>
                                        </Flex>
                                        <Flex  w='100%' gap='10px'>
                                            <Img src={people} />
                                            <Text  w='100%' fontWeight='600' fontSize='14px' lineHeight='20px'>5 guests</Text>
                                        </Flex>
                                    </VStack>
                                </VStack>
                            </VStack>
                            <VStack w='100%'>
                                <Accordion allowMultiple w='100%'>
                                            <AccordionItem w='100%' >
                                            {({ isExpanded }) => (
                                            <>
                                                <h2>
                                                <AccordionButton w='100%' >
                                                    <Flex justifyContent='space-between' w='100%' > 
                                                    <Box as="span" flex='1' textAlign='left' fontSize='14px' fontWeight={600}>
                                                    View payment summary
                                                    </Box>
                                                    {isExpanded ? (
                                                    <Text fontSize='20px' fontWeight={600} color='#60646C'>-</Text>
                                                    ) : (
                                                    <Text fontSize='20px' fontWeight={600} color='#60646C'>+</Text>
                                                    )}
                                                    </Flex>
                                                </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                </AccordionPanel>
                                            </>
                                            )}
                                            </AccordionItem>
                                </Accordion>
                            </VStack>
                        </VStack>

                        <VStack w='100%' p='16px 16px 32px 16px' gap='32px'>
                            <VStack gap='20px' w='100%'>
                                <VStack w='100%'>
                                <Flex 
                                justifyContent='space-between' 
                                w='100%'>
                                    <Text 
                                        fontSize='18px' 
                                        fontWeight={600} 
                                        color='#1C2024' 
                                        lineHeight='26px'
                                    >
                                        Total payable
                                    </Text>
                                    <Text fontSize='18px' fontWeight={600} color='#1C2024'>$XXX</Text>
                                </Flex>
                                <Flex w='135px' gap='4px' p='2px 6px 2px 6px'       bgColor='#E9F9EE' lineHeight='18px' fontSize='12px' alignSelf='flex-start' borderRadius='1000px'>
                                                <Img src={piggygreen}/>
                                                <Text width='135px'   color='#299764'>You saved &lt;price&gt;</Text>
                                </Flex>
                                </VStack>
                                <Flex w='100%' gap='8px'>
                                    <Text fontSize='12px' fontWeight={600} lineHeight='18px' color='#60646C'>You will be charged in AED</Text>
                                    <Img src={infogray} />
                                </Flex>
                        
                            </VStack>
                        </VStack>
                    </VStack>
                </VStack>
                <VStack w='100%'>
                    {/* <Text>free cancelation</Text> */}
                    <Flex w='100%' bgColor='#FCFCFD' padding= '12px 16px 12px 16px'
                                border='1px solid #D3D4DB' borderRadius='16px' >
                            <VStack width='100%' >
                                <Text w='100%' fontWeight='600' fontSize='14px'>Free cancellation</Text>
                                <Text w='100%' p={0} fontSize='14px' color='#60646C'>Tickets can be cancelled by 13th December, 2022.</Text>
                            </VStack>
                            <Img src={infodark} position='relative' top='-1rem'/>
                    </Flex>
                    
                </VStack>
                <Divider border='1px solid #b9bbc6' /> 
            </VStack>
    )
}