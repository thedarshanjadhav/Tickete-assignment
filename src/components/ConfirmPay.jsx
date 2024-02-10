import {  Flex, Heading, Text, VStack, Divider, Box, AccordionItem, AccordionButton, AccordionPanel, Accordion, Img } from "@chakra-ui/react";

import infoblack from '../assets/Images/Info-black.svg';
import gpay from '../assets/Images/google-pay.svg'
import apay from '../assets/Images/apple-pay.svg'
import radiogray from '../assets/Images/Radio-gray.svg'
import lock from '../assets/Images/lock.svg';
import infogray from '../assets/Images/info.svg';
import piggybank from '../assets/Images/piggy-bank.svg'
import visa from '../assets/Images/visa.svg'
import mastercard from '../assets/Images/mastercard.svg'
import dinnerclub from '../assets/Images/dinner-club.svg'
import card from '../assets/Images/card.svg'
import blackradio from '../assets/Images/Radio.svg'
import infodark from '../assets/Images/info-dark.svg'
import star from '../assets/Images/Rating star.svg'
import ticket from '../assets/Images/ticket.svg';
import calender from '../assets/Images/calender.svg';
import clock from '../assets/Images/Clock.svg';
import people from '../assets/Images/people.svg';
import piggygreen from '../assets/Images/piggy-green.svg'

// sliders pic
import laptoppic from '../assets/Images/laptoppic.jpg'
import michael from '../assets/Images/michael-dziedzic-gEN5Btvf2Eg-unsplash.jpg'
import fotis from '../assets/Images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg'
import greg from '../assets/Images/greg-rakozy-oMpAz-DN-9I-unsplash.jpg'


import './styles/style.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function ConfirmPay(){
    var settings = {
        fade:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };
    return(
        <VStack w='80%' mt='2rem'>
            <Flex w='100%' gap='24px'>
                <VStack w='792px'>

                    {/* Confirm and Pay Heading */}
                    <Heading fontSize='57px' fontFamily='Roboto Serif' justifyContent='flex-start' w='100%'>Confirm & pay</Heading>

                    {/* Free Cancellation box */}
                    <Flex w='100%' mt='4rem' bgColor='#FCFCFD' height= '82px' padding= '16px 16px 16px 20px'
                            border='1px solid #D3D4DB' borderRadius='16px' >
                        <VStack width='100%' >
                            <Text w='100%' fontWeight='600' fontSize='14px'>Free cancellation</Text>
                            <Text w='100%' p={0} fontSize='14px' color='#60646C'>Tickets can be cancelled by 13th December, 2022.</Text>
                        </VStack>
                        <Img src={infodark} position='relative' top='-1rem'/>
                    </Flex>

                    {/* Enter your details box */}
                    <VStack w='100%' mt='3rem' gap='32px' mb='2rem'>
                        <VStack w='100%'>
                            <Heading w='100%' fontSize='24px' fontWeight={600} lineHeight='32px'>Enter your details</Heading>
                            <Text w='100%' color='#60646C'>We&apos;ll be sending your tickets to the details below. Booking for a friend? Add their details.</Text>
                        </VStack>
                        <VStack w='100%' h='216px' gap='24px'>
                                <input type="text" placeholder="Full name" className="full-name"/>
                                <Flex gap='24px' >

                                    <select name="cars" className="country-code"> 
                                    <option value="">Country code</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    </select>

                                    <input type="text" placeholder="Phone number" className="phone-number"/>
                                </Flex>
                                <Flex gap='24px' >
                                    <input type="text" placeholder="Email" className="email"/>
                                    <input type="text" placeholder="Confirm Email" className="confirm-email"/>
                                </Flex>
                        </VStack>
                    </VStack>

                    <Divider border='1px solid #b9bbc6'/>

                    {/* Additional information */}
                    <VStack w='100%' mt='4rem' gap='32px' >
                        <VStack w='100%'>
                        <Heading w='100%' fontSize='24px' fontWeight={600} lineHeight='32px' >Additional information</Heading>
                        <Text w='100%' color='#60646C'>We need a few more details to complete your reservation.</Text>
                        </VStack>

                        <VStack w='100%' h='170px' gap='24px'>
                                <Flex gap='24px' >
                                    <input type="text" placeholder="Input label" className="phone-number"/>
                                    <select name="cars" className="phone-number"> 
                                        <option value="">Select</option>
                                        <option value="">Abc</option>
                                        <option value="">xyz</option>
                                    </select>
                                </Flex>
                                <select name="cars" className="multi-select"> 
                                    <option value="">Multi Select</option>
                                    {/* <option value="">abc</option>
                                    <option value="">xyz</option> */}
                                    
                                </select>
                        </VStack>
                    </VStack>

                    <Divider border='1px solid #b9bbc6'/>


                    {/* Payment mode */}
                    <VStack w='100%' mt='4rem' gap='32px' >
                        <VStack w='100%'>
                            <Heading w='100%' fontSize='24px' fontWeight={600} lineHeight='32px'>Select your mode of payment</Heading>
                            <Text w='100%' color='#60646C'>Payments with Tickete are secure and encrypted.</Text>
                        </VStack>

                        
                        <VStack w='100%' gap='24px' p='28px 24px 0px 24px' border='1px solid #1C2024' borderRadius='16px' h>
                                
                                <VStack gap='28px'>
                                    <Flex w='100%' lineHeight='22px' fontSize='16px'>
                                        <Flex w='100%' gap='12px'>
                                            <Img src={card} />
                                            <Text  fontSize='16px' fontWeight={600} lineHeight='22px' color='#1C2024'>Credit & debit card</Text>
                                        </Flex>
                                        <Img src={blackradio} />
                                    </Flex>


                                    <Flex w='100%' gap='8px'>
                                        <Img src={visa}/>
                                        <Img src={mastercard}/>
                                        <Img src={dinnerclub}/>

                                    </Flex>
                                    <Flex gap='24px' >
                                        <input type="text" placeholder="Name on card" className="payment"/>
                                        <input type="text" placeholder="Card number" className="payment"/>
                                    </Flex>
                                    <Flex gap='24px' >
                                        <input type="text" placeholder="Expiry date" className="payment"/>
                                        <input type="text" placeholder="<CVV/CVC>" className="payment"/>
                                    </Flex>
                                </VStack>
                                <Divider border='1px solid #b9bbc6'/>
                                <VStack w='100%' gap='32px' p='16px 0px 32px 0px'>
                                    <VStack w='100%' gap='2px'>
                                        <Flex w='100%' justifyContent='space-between'>
                                            <Text fontSize='18px' fontWeight={600} lineHeight='26px' color='#1C2024'>Total payable: $XXX</Text>
                                            <Flex bgColor='#299764' gap='2' w='140px' p='4px 8px 4px 8px' borderRadius='1000px'>
                                                <Img src={piggybank} alt="piggy" />
                                                <Text fontSize='12px' fontWeight={600} lineHeight='18px' color='#ffffff'>You save &lt;price&gt;</Text>
                                            </Flex>
                                        </Flex>
                                        <Flex w='100%' gap='8px'>
                                            <Text fontSize='12px' fontWeight={600} lineHeight='18px' color='#60646C'>You will be charged in AED</Text>
                                            <Img src={infogray}/>
                                        </Flex>
                                    </VStack>
                                    <VStack w='100%' gap='20px'>
                                        <Text w='100%' fontSize='12px' fontWeight={400} lineHeight='20px' color='#60646C'>By clicking “confirm & pay”, you agree to <href> Tickete’s general terms and conditions</href> and <href>cancellation policy</href>.</Text>

                                        <Flex alignSelf='flex-start' justifyContent='center' p='16px 20px 16px 20px' w='220px' h='56px' border='1px solid #000000' bgColor='#000000' borderRadius='16px' color='#ffffff' gap='12px'> <Img src={lock} /> <Text > Confirm &amp; pay</Text> </Flex>
                                    </VStack>

                                </VStack>
                        </VStack>
                        <Flex w='100%' border='1px solid #D3D4DB' h='72px' p='24px' borderRadius='16px' bgColor='#F9F9FB' justifyContent='space-between'>
                            <Flex gap='15px' w='151px'>
                                <Img src={apay} />
                                <Text >Coming soon</Text>
                            </Flex>
                            <Img src={radiogray} />
                        </Flex>
                        <Flex w='100%' border='1px solid #D3D4DB' h='72px' p='24px' borderRadius='16px' bgColor='#F9F9FB' justifyContent='space-between'>
                            <Flex gap='15px' w='151px'>
                                <Img src={gpay} />
                                <Text >Coming soon</Text>
                            </Flex>
                            <Img src={radiogray} />
                        </Flex>

                        <Divider border='1px solid #b9bbc6'/>

                        <VStack w='100%' mt='2rem'>
                            <Text w='100%' color='#1C2024' fontSize='24px' fontWeight='600' >Total Payable: $XXX</Text>
                            <Flex border='1px solid #D3D4DB' w='100%' p='16px 16px 16px 20px' borderRadius='16px' gap='12px'>
                                <Img src={infoblack} alt="infoblack" position='relative' top='-1.5rem'/>
                                <VStack w='728px'>
                                    <Text w='100%' fontSize='14px' fontWeight={600} color='#1C2024'>You will be charged in AED</Text>
                                    <Text w='100%' fontWeight={400} fontSize='14px' color='#60646C'>The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged in United Arab Emirates Dirham (AED).</Text>
                                </VStack>
                            </Flex>
                        </VStack>
                    </VStack> 
                </VStack>
                <VStack w='384px' >
                    <VStack w='100%' border='1px solid #DDDDE3'>
                        <VStack p='16px 16px 0px 16px'>

                            {/* Image slider  */}
                            <Box width='352px' h='198px'> 
                                <Slider {...settings}>
                                    <Box><Img src={laptoppic} className="img-slide" style={{borderRadius: '16px'}}/></Box>
                                    <Box><Img src={michael} className="img-slide" style={{borderRadius: '16px'}}/></Box>
                                    <Box><Img src={fotis} className="img-slide" style={{borderRadius: '16px'}}/></Box>
                                    <Box><Img src={greg} className="img-slide" style={{borderRadius: '16px'}}/></Box>
                                   
                                </Slider>
                            </Box>
                            {/* end image slider */}

                            <VStack w='100%' gap='24px' pb='5px' mt='4rem'> 
                                <VStack w='100%'>
                                    <Flex w='100%' gap='4px'>
                                        <Img src={star} /> <Text w='100%' fontSize='14px'><b>4.9</b>(4.5k) &lt;category&gt; </Text> 
                                    </Flex>
                                    <Text fontSize='16px' lineHeight='22px' fontWeight='600' >Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</Text>
                                </VStack>
                                <VStack w='100%' gap='8px'>
                                    <Flex  w='100%' gap='10px'>
                                        <Img src={ticket} />
                                        <Text  w='100%' fontWeight='600' fontSize='14px' lineHeight='20px'>&lt;ticket type - variant&gt;</Text>
                                    </Flex>

                                    <Flex w='100%' gap='10px' >
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


                                    <Accordion allowMultiple w='100%' mt='1rem'>
                                        <AccordionItem w='100%'>
                                        {({ isExpanded }) => (
                                        <>
                                            <h2>
                                            <AccordionButton w='100%'>
                                                <Flex justifyContent='space-between' w='100%'> 
                                                <Box as="span" flex='1' textAlign='left' fontSize='14px' fontWeight={600} color='#60646C'>
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
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                            </AccordionPanel>
                                        </>
                                        )}
                                        </AccordionItem>
                                    </Accordion>

                                </VStack>

                            </VStack>
                        </VStack>

                        <VStack p='16px 16px 32px 16px' gap='32px' w='100%'>
                            
                                <VStack w='100%'>
                                    <Flex justifyContent='space-between' w='100%'>
                                        <Text fontSize='18px' fontWeight={600} color='#1C2024'>Total payable</Text>
                                        <Text fontSize='18px' fontWeight={600} color='#1C2024'>$XXX</Text>
                                    </Flex>
                                    <Flex w='135px' gap='4px' p='2px 6px 2px 6px' bgColor='#E9F9EE' lineHeight='18px' fontSize='12px' alignSelf='flex-start' borderRadius='1000px'>
                                        <Img src={piggygreen}/>
                                        <Text width='135px'   color='#299764'>You saved &lt;price&gt;</Text>
                                    </Flex>
                                    <Flex w='100%' gap='8px'>
                                            <Text fontSize='12px' fontWeight={600} lineHeight='18px' color='#60646C'>You will be charged in AED</Text>
                                            <Img src={infogray} />
                                    </Flex>
                                </VStack>
                                <VStack gap='20px' w='100%' >
                                <Text w='100%' fontSize='12px' fontWeight={400} lineHeight='20px' color='#60646C'>By clicking “confirm & pay”, you agree to Tickete’s general terms and conditions and cancellation policy.</Text>
                                
                                <Flex w='100%' borderRadius='16px' bgColor='#000000' color='#ffffff' gap='12px' p='16px 20px 16px 20px' justifyContent='center'>
                                    <Img src={lock} />
                                    <Text>Confirm & pay</Text>
                                </Flex>
                                </VStack>                    

                        </VStack>

                    </VStack>
                </VStack>
            </Flex>
            <Divider border='1px solid #b9bbc6' mt='1rem' />
        </VStack>
    )
}