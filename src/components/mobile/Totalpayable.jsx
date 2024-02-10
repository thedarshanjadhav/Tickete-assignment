import { Divider, Flex, Img, Text, VStack } from "@chakra-ui/react";
import piggygreen from '../../assets/Images/piggy-green.svg';
import infoblack from '../../assets/Images/Info-black.svg';


export default function Totalpayable(){
    return(
        <VStack w='100%' p='0px 16px 0px 16px' gap='24px'>
            <VStack w='100%' >
                <VStack gap='12px' w='100%'>
                    <Flex w='135px' gap='4px' p='2px 6px 2px 6px' bgColor='#E9F9EE' lineHeight='18px' fontSize='12px' alignSelf='flex-start' borderRadius='1000px'>
                        <Img src={piggygreen}/>
                        <Text width='135px'   color='#299764'>You saved &lt;price&gt;</Text>
                    </Flex>
                </VStack>
                <VStack w='100%' >
                    <Text w='100%' fontSize='21px' fontWeight={600} color='#1C2024' >Total payable: $XXX</Text>

                    <Flex border='1px solid #D3D4DB' w='100%' p='16px 16px 16px 20px' borderRadius='16px' gap='12px'>
                        <Img src={infoblack} alt="infoblack" position='relative' top='-2.2rem'/>
                        <VStack w='728px'>
                            <Text w='100%' fontSize='14px' fontWeight={600} color='#1C2024'>You will be charged in AED</Text>
                            <Text w='100%' fontWeight={400} fontSize='14px' color='#60646C'>The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged in United Arab Emirates Dirham (AED).</Text>
                        </VStack>
                    </Flex>

                </VStack>
                <Divider border='1px solid #b9bbc6' mt='1rem' />
            </VStack>
            
        </VStack>
    )
}