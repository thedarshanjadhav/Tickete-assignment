import { Divider, Flex, Img, Text, VStack } from "@chakra-ui/react";
import logo from '../../assets/Images/Logo-footer.svg'

export default function MFooter(){
    return(
        <VStack w='100%' p='80px 20px 40px 20px' gap='32px' bgColor='#000000' alignItems='self-start'>
            <VStack>
                <Img src={logo} w='126.55px' h='32px'/>
            </VStack>

            <Divider border='1px solid #b9bbc6'/>

            <VStack w='100%'  >
                <Flex w='100%' position='relative'>
                <ul style={{display: 'flex', color:'#ADB1B8', gap:'20px', fontSize:'12px'}}>
                    <li style={{ listStyleType: 'none' }}>Privacy</li>
                    <li>Terms of usage</li>
                    <li>Cancellation policy</li>
                    <li>Sitemap</li>
                </ul>
                </Flex>
                <Text w='100%' color='#7D828A' fontSize='12px'>Made with <span style={{color: 'red', fontSize:'12px'}}>&#9829;</span> </Text>
            </VStack>
           
        </VStack>
    )
}