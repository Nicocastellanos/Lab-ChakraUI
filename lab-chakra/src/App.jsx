import React from "react";
import Header from './components/Header'
import { ChakraProvider } from "@chakra-ui/react";
import Card from "./components/Card";

function App() {


  return (
    <ChakraProvider>
          <Header />
          <Card/>
    </ChakraProvider>
  )
}

export default App
