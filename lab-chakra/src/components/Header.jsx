import React from 'react'
import { Box, Text, Stack} from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import nierAutomata from '../img/nier.png'
import { color } from 'framer-motion';

export default function Header() {
  return (
    <Box 
        p={38}
        bgImage={`url(${nierAutomata})`}
        bgSize= "cover"
        backgroundPosition="center"
        margin="40px"
        w="auto"
        h="250px"
        display= "flex"
        flexDirection= "column"
        alignItems="center"
        justifyContent= "center"
    >
        <Text
            fontSize="28px"
            color="white" 
            textAlign= "center"
            fontWeight="400"
        >
            Disfruta y juega Nier Automata
        </Text>
        <ButtonGroup
            display= "flex"
            alignItems="center"
            justifyContent= "center"
            p="18px" 
        >
            <Button
                bgColor= "transparent" 
                border= "1px solid"
                borderColor= "white"
                color= "white"
                borderRadius= "none"
                fontWeight="100"
                _hover={{
                    color : "black",
                    bgColor: "white"
                }}
            >
                VER DETALLES
            </Button>
            <Button
                bgColor= "transparent"
                border= "1px solid"
                borderColor= "white" 
                color= "white"
                borderRadius= "none"
                fontWeight="100"
                _hover={{
                    color : "black",
                    bgColor: "white"
                }}
            >
                VER VIDEO
            </Button>
        </ButtonGroup>
    </Box>
  )
}