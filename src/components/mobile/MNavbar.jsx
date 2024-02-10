import { Flex, Img, Text, VStack } from "@chakra-ui/react";
import leftarrow from '../../assets/Images/leftarrow.svg'
import checkout from '../../assets/Images/checkout.svg'
import help from '../../assets/Images/help.svg'

export default function MNavbar(){
    return(
        <VStack gap={0} w='100%'>        
            <VStack w='100%' height='68px' alignItems='center' border='1px solid black' justifyContent='center' mb={0}>
                <Flex justifyContent='space-between' w='80%'>
                    <Img src={leftarrow} />
                    <Flex gap='8px'>
                        <Img src={checkout} />
                        <Text fontSize='16px' lineHeight='22px' fontWeight={600}>Checkout</Text>
                    </Flex>
                    <Img src={help} />
                </Flex>
            </VStack>
            <Text bgColor='#000000' color='#ffffff' w='100%' p='8px 16px 8px 16px' h='40px' textAlign='center'>Holding your tickets for 30:00</Text>
        </VStack>

    )
}