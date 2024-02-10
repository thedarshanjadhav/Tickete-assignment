import { Divider, Text, VStack } from "@chakra-ui/react";

export default function MAdditionalinfo(){
    return(
        <VStack w='100%' p='0px 16px 0px 16px' gap='28px'>
            <VStack w='100%'>
                <VStack w='100%'>
                    <Text w='100%' p='0px 0px 16px 0px' fontSize='21px' fontWeight={600}>Additional information</Text>
                    <Text w='100%' fontSize='14px' fontWeight={400} p='0px 0px 12px 0px' color='#60646C'>We need a few more details to complete your reservation.</Text>
                </VStack>


                <VStack w='100%' gap='20px'>
                <input type="text" placeholder="Input label" style={{ borderRadius: '16px', border: '1px solid #b9bbc6', width:'100%', height: '56px', padding: '16px'}}/>
                
                <select name="cars" style={{ borderRadius: '16px', border: '1px solid #b9bbc6', width:'100%', height: '56px', padding: '16px'}}> 
                    <option value="">Select</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>

                <select name="cars" style={{ borderRadius: '16px', border: '1px solid #b9bbc6', width:'100%', height: '56px', padding: '16px'}}> 
                    <option value="">Multiselect</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                </VStack>
            </VStack>
            <Divider border='1px solid #b9bbc6' />  
        </VStack>
    )
}