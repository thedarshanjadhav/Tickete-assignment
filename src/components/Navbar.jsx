import { Flex, Img, Text, VStack } from "@chakra-ui/react";
import logo from '../assets/Images/Logo.svg'
import checkout from '../assets/Images/checkout.svg'
import help from '../assets/Images/help.svg'

export default function Navbar(){
    return(
        <VStack w='100%'>
            <Flex w='80%' justifyContent='space-between' alignItems='center' mt={13} h='46px' mr='1rem' pr={3}>
               <Img src={logo} w='126.55px' />
               <Flex gap='8px'>
                    <Img src={checkout} />
                    <Text>Checkout</Text>
                </Flex>
                <Flex gap='4px' >
                    <Img src={help} />
                    <Text>Help</Text>
                </Flex>
            </Flex>
        <Flex bgColor='#000000' w='100%' color='#ffffff' justifyContent='center' alignItems='center' h='40px' >Holding your tickets for 30:00</Flex>
        </VStack>
    )
}