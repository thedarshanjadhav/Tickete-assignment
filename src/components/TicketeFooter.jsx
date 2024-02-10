import { Box, Divider, Flex, Img, VStack } from "@chakra-ui/react";
import Logo from '../assets/Images/Logo-footer.svg'

export default function TicketeFooter(){
    return(
        <VStack mt='3rem' w='100%' height='316px' bgColor='#000000' >
            <VStack w='80%' h='70%'>
                <Box position='relative' left='-31rem' top='7rem'>
                    <Img src={Logo} w='189.82px' />
                </Box>
            </VStack>
            <Divider border='1px solid #b9bbc6'/>
            <Flex w='100%' h='30%' paddingLeft='11rem' alignItems='center'>
                <ul style={{display: 'flex', color:'#ADB1B8', gap:'30px', fontSize:'14px'}}>
                    <li style={{ listStyleType: 'none', color:'#7D828A'}}>Made with <span style={{color: 'red', fontSize:'14px'}}>&#9829;</span> </li>
                    <li>Privacy</li>
                    <li>Terms of usage</li>
                    <li>Cancellation policy</li>
                    <li>Sitemap</li>
                </ul>
            </Flex>
    </VStack>
    )
}