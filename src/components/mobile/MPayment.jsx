import { Divider, Flex, Img, Text, VStack } from "@chakra-ui/react";
import card from '../../assets/Images/card.svg'
import blackradio from '../../assets/Images/Radio.svg'
import visa from '../../assets/Images/visa.svg'
import mastercard from '../../assets/Images/mastercard.svg'
import dinnerclub from '../../assets/Images/dinner-club.svg'
import piggybank from '../../assets/Images/piggy-bank.svg'
import infogray from '../../assets/Images/info.svg'
import lock from '../../assets/Images/lock.svg'
import apay from '../../assets/Images/apple-pay.svg'
import gpay from '../../assets/Images/google-pay.svg'
import radiogray from '../../assets/Images/Radio-gray.svg'

export default function MPayment(){
    return(
        <VStack w='100%' p='0px 16px 0px 16px' gap='28px'>
            <VStack gap='16px' w='100%'>
                <VStack w='100%'>
                    <Text w='100%' p='0px 0px 16px 0px' fontSize='21px' fontWeight={600} color='#1C2024'>Select your mode of payment</Text>
                    <Text w='100%' p='0px 0px 12px 0px' fontSize='14px' fontWeight={400} color='#60646C'>Payments with Tickete are secure and encrypted.</Text>
                </VStack>

                <VStack w='100%' p='24px 16px 28px 16px' gap='24px' border='1px solid #1C2024' borderRadius='12px'>

                    <Flex w='100%' lineHeight='22px' >
                        <Flex w='100%' gap='8px'>
                            <Img src={card} />
                            <Text  fontSize='14px' fontWeight={600} lineHeight='22px' color='#1C2024'>Credit & debit card</Text>
                        </Flex>
                        <Img src={blackradio} />
                    </Flex>
                    
                    <Flex w='100%' gap='8px'>
                        <Img src={visa}/>
                        <Img src={mastercard}/>
                        <Img src={dinnerclub}/>

                    </Flex>
                    <VStack w='100%' gap='24px'>
                        <input type="text" placeholder="Name on card" style={{ borderRadius: '16px', border: '1px solid #b9bbc6', width:'100%', height: '56px', padding: '16px'}}/>
                        <input type="text" placeholder="Card number" style={{ borderRadius: '16px', border: '1px solid #b9bbc6', width:'100%', height: '56px', padding: '16px'}}/>
                        <input type="text" placeholder="Expiry date" style={{ borderRadius: '16px', border: '1px solid #b9bbc6', width:'100%', height: '56px', padding: '16px'}}/>
                        <input type="text" placeholder="<CVV/CVC>" style={{ borderRadius: '16px', border: '1px solid #b9bbc6', width:'100%', height: '56px', padding: '16px'}}/>
                    </VStack>

                    <VStack w='100%' >
                        <Flex  bgColor='#299764' gap='2' w='140px' p='4px 8px 4px 8px' borderRadius='1000px' alignSelf='self-start'>
                                                        <Img src={piggybank} alt="piggy" />
                                                        <Text fontSize='12px' fontWeight={600} lineHeight='18px' color='#ffffff'>You save &lt;price&gt;</Text>
                        </Flex>
                        <Text w='100%' fontSize='18px' fontWeight={600} lineHeight='26px' color='#1C2024' p='0px 0px 12px 0px'>Total payable: $XXX</Text>
                        <Flex w='100%' gap='8px'>
                            <Text fontSize='12px' fontWeight={600} lineHeight='18px' color='#60646C'>You will be charged in AED</Text>
                            <Img src={infogray}/>
                        </Flex>

                    </VStack>
                    <VStack w='100%' gap='20px'>
                                        <Text w='100%' fontSize='12px' fontWeight={400} lineHeight='20px' color='#60646C'>By clicking “confirm & pay”, you agree to <href> Tickete’s general terms and conditions</href> and <href>cancellation policy</href>.</Text>

                                        <Flex alignSelf='flex-start' justifyContent='center' p='16px 20px 16px 20px' w='100%' h='56px' border='1px solid #000000' textAlign='center' bgColor='#000000' borderRadius='16px' color='#ffffff' gap='12px'> <Img src={lock} /> <Text > Confirm &amp; pay</Text> </Flex>
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
            </VStack>
            <Divider border='1px solid #b9bbc6'/>
        </VStack>
    )
}