import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Divider, Flex, Img, Text, VStack,  } from "@chakra-ui/react";
import Group11 from '../assets/Images/Group 11.svg'

export default function FAQ(){
    return(
        <VStack w='80%' mt='2rem'>
            <Flex  gap='32px' >
                <VStack w='486px' gap='32px' justifyContent='flex-start'>
                    <VStack w='100%'>
                        <Text w='100%' fontSize='24px' fontWeight={600} lineHeight='32px'>Frequently asked questions</Text>
                        <Text w='100%' fontSize='16px' fontWeight={400} lineHeight='24px' color='#60646C'>Here are some of our most asked questions. </Text>
                    </VStack>
                    <Flex p='24px' bgColor='#F9F9FB' justifyContent='flex-start' w='446px' alignSelf='flex-start' borderRadius='16px'>
                        <VStack gap='20px'>
                            <Text w='240px' fontSize='18px' fontWeight={600} lineHeight='26px' >Still need help?<br /> We’re here for you.</Text>
                            <Text alignSelf='flex-start' borderRadius='16px' bgColor='#000000' color='#EDEEF0' fontSize='16px' fontWeight={600} lineHeight='22px' p='14px 16px 14px 16px'>Chat with us</Text>
                        </VStack>
                        <Img src={Group11} w='143.16px' h='104.83px' />
                    </Flex>
                </VStack>

                {/* Accordion */}
                <VStack w='690px'>
                    <Accordion allowMultiple  w='100%'>
                        <AccordionItem border='1px solid #b9bbc6' w='100%' borderRadius='16px' mb='24px' p='10px 0px 10px 0px'>
                            {({ isExpanded }) => (
                            <>
                                <Text>
                                <AccordionButton gap='24px' border='none'>
                                    {isExpanded ? (
                                    <Text fontSize='20px' transform='rotate(135deg)'>+</Text>
                                    ) : (
                                    <Text fontSize='18px'>+</Text>
                                    )}
                                    <Box as="span" flex='1' textAlign='left' fontSize='18px' lineHeight='26px' fontWeight={600}>
                                    What should I do on my first trip to Rome?
                                    </Box>
                                   
                                </AccordionButton>
                                </Text>
                                <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem border='1px solid #b9bbc6' w='100%' borderRadius='16px' mb='24px' p='10px 0px 10px 0px'>
                            {({ isExpanded }) => (
                            <>
                                <Text>
                                <AccordionButton gap='24px' border='none'>
                                    {isExpanded ? (
                                    <Text fontSize='20px' transform='rotate(135deg)'>+</Text>
                                    ) : (
                                    <Text fontSize='18px'>+</Text>
                                    )}
                                    <Box as="span" flex='1' textAlign='left' fontSize='18px' fontWeight={600}>
                                    What are some hidden gems to see in Rome?
                                    </Box>
                                   
                                </AccordionButton>
                                </Text>
                                <AccordionPanel pb={4} fontSize='16px' fontWeight={400} color='#60646C'>
                                Rome is packed with hidden gems. If you love art, don&apos;t miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don&apos;t miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem border='1px solid #b9bbc6' w='100%' borderRadius='16px' mb='24px' p='10px 0px 10px 0px'>
                            {({ isExpanded }) => (
                            <>
                                <Text>
                                <AccordionButton gap='24px' border='none'>
                                    {isExpanded ? (
                                    <Text fontSize='20px' transform='rotate(135deg)'>+</Text>
                                    ) : (
                                    <Text fontSize='18px'>+</Text>
                                    )}
                                    <Box as="span" flex='1' textAlign='left' fontSize='18px' fontWeight={600}>
                                    How much time should I spend in Rome?
                                    </Box>
                                   
                                </AccordionButton>
                                </Text>
                                <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem border='1px solid #b9bbc6' w='100%' borderRadius='16px' mb='24px' p='10px 0px 10px 0px'>
                            {({ isExpanded }) => (
                            <>
                                <Text>
                                <AccordionButton gap='24px' border='none'>
                                    {isExpanded ? (
                                    <Text fontSize='20px' transform='rotate(135deg)'>+</Text>
                                    ) : (
                                    <Text fontSize='18px'>+</Text>
                                    )}
                                    <Box as="span" flex='1' textAlign='left' fontSize='18px' fontWeight={600}>
                                    What food is Rome known for?
                                    </Box>
                                   
                                </AccordionButton>
                                </Text>
                                <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem border='1px solid #b9bbc6' w='100%' borderRadius='16px' mb='24px' p='10px 0px 10px 0px'>
                            {({ isExpanded }) => (
                            <>
                                <Text>
                                <AccordionButton gap='24px' border='none'>
                                    {isExpanded ? (
                                    <Text fontSize='20px' transform='rotate(135deg)'>+</Text>
                                    ) : (
                                    <Text fontSize='18px'>+</Text>
                                    )}
                                    <Box as="span" flex='1' textAlign='left' fontSize='18px' fontWeight={600}>
                                    What is the best way to get around Rome?
                                    </Box>
                                   
                                </AccordionButton>
                                </Text>
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
            </Flex>
            <Divider border='1px solid #b9bbc6' />
        </VStack>
    )
}