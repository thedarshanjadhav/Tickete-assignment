import { Divider, Text, VStack } from "@chakra-ui/react";

export default function Details(){
    return(
        <VStack  p='0px 16px 0px 16px' gap='28px'>
            <VStack gap='16px' w='100%'>
                <VStack w='100%'>
                    <Text w='100%' fontSize='21px' lineHeight='28px' fontWeight={600} p='0px 0px 16px 0px' color='#1C2024'>Enter your details</Text>
                    <Text fontSize='14px' fontWeight={400} lineHeight='20px' color='#60646C'>We&rsquo;ll be sending your tickets to the details below. Booking for a friend? Add their details.</Text>
                </VStack>


                <VStack w='100%' gap='20px'>
                    <input type="text" placeholder="Full name" style={{ borderRadius: '16px', border: '1px solid #b9bbc6', width:'100%', height: '56px', padding: '16px'}}/>
                    
                    <select name="cars" style={{ borderRadius: '16px', border: '1px solid #b9bbc6', width:'100%', height: '56px', padding: '16px'}}> 
                        <option value="">Country code</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>

                    <input type="text" placeholder="Phone number" style={{ borderRadius: '16px', border: '1px solid #b9bbc6', width:'100%', height: '56px', padding: '16px'}}/>

                    <input type="text" placeholder="Email" style={{ borderRadius: '16px', border: '1px solid #b9bbc6', width:'100%', height: '56px', padding: '16px'}}/>

                    <input type="text" placeholder="Confirm email" style={{ borderRadius: '16px', border: '1px solid #b9bbc6', width:'100%', height: '56px', padding: '16px'}} required/>
                </VStack>  
                      
            </VStack>      
            <Divider border='1px solid #b9bbc6' />                     
    </VStack>         
    )
}