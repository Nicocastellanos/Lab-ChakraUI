import React from 'react'
import nierAutomata from '../img/game.png'
import { Box, Button, Heading, ButtonGroup } from '@chakra-ui/react';

export default function Cards() {
    return (
        <Box
          maxW="300px"
          bgSize="cover"
          bgImage={`url(${nierAutomata})`}
          borderRadius="lg"
          boxShadow="lg"
          p={6}
          position="relative"
          padding={20}
          margin="40px"
          objectFit= "cover"
        >
          <Heading size="md" color="white" mb={4} fontWeight="400">
            Nier Automata
          </Heading>

          <ButtonGroup display= "flex" flexDirection= "column" alignItems= "center">

            <Button 
            mb={4}
            fontWeight="100"
            w= "250px"
            bgColor= "transparent"
            border= "1px solid"
            borderColor= "white"
            color= "white"
            borderRadius= "none"
            _hover={{
              color: "black",
              bgColor: "white"
            }}
            >
              VER DETALLES
            </Button>

            <Button
              fontWeight="100"
              w= "250px"
              bgColor= "transparent"
              border= "1px solid"
              borderColor= "white"
              color= "white"
              borderRadius= "none"
              alignContent= "center"
              _hover={{
                color: "black",
                bgColor: "white"
              }}
            >
              VER VIDEO
            </Button>
          </ButtonGroup>
        </Box>
      );
    };