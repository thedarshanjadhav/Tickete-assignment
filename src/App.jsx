
import { Show, Spacer, VStack } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import ConfirmPay from './components/ConfirmPay'
import FAQ from './components/FAQ'
import TicketeFooter from './components/TicketeFooter'
import MNavbar from './components/mobile/MNavbar'
import MConfirmPay from './components/mobile/MConfirmPay'
import Details from './components/mobile/Details'
import MAdditionalinfo from './components/mobile/MAdditionalinfo'
import MPayment from './components/mobile/MPayment'
import Totalpayable from './components/mobile/Totalpayable'
import MFAQ from './components/mobile/MFAQ'
import MFooter from './components/mobile/MFooter'



function App() {
  return (
    <VStack w='100%'>
      <Show above='md'>
      <Navbar />
      <Spacer />
      <ConfirmPay />
      <FAQ />
      <TicketeFooter  />
      </Show>
      <Show below='md'>
          <VStack w='100%' gap='64px'>
            <VStack w='100%' gap='48px'>
              <MNavbar />
              <MConfirmPay />
              <Details />
              <MAdditionalinfo />
              <MPayment />
              <Totalpayable />
            </VStack>
            <MFAQ />
            <MFooter />
          </VStack>
      </Show>
    </VStack>
  )
}

export default App
