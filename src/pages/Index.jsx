import React from "react";
import { Box, Flex, Heading, Text, Image, SimpleGrid, IconButton, Container } from "@chakra-ui/react";
import { FaMountain, FaSearch, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" w="full" p={4} boxShadow="sm">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Smokey Modern Homes
          </Heading>
          <Flex alignItems="center">
            <IconButton icon={<FaSearch />} aria-label="Search" variant="ghost" mr={2} />
            <IconButton icon={<FaEnvelope />} aria-label="Contact" variant="ghost" mr={2} />
            <IconButton icon={<FaPhoneAlt />} aria-label="Phone" variant="ghost" />
          </Flex>
        </Flex>
      </Box>

      <Box as="section" pt={10} pb={20} px={4}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Explore Our Modern Mountain Homes
        </Heading>
        <Text mb={10} fontSize="lg" textAlign="center">
          Discover the perfect blend of luxury and nature.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {Array.from({ length: 6 }, (_, index) => (
            <Box key={index} boxShadow="lg" borderRadius="lg" overflow="hidden">
              <Image src={`https://images.unsplash.com/photo-1522444195799-478538b28823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb3VudGFpbiUyMGhvbWUlMjAlMjQlN0JpbmRleCU3RHxlbnwwfHx8fDE3MTAwMzI4Mzl8MA&ixlib=rb-4.0.3&q=80&w=1080`} alt={`Modern Mountain Home ${index + 1}`} w="full" h={64} objectFit="cover" />
              <Box p={5}>
                <Flex alignItems="center" justifyContent="space-between" mb={2}>
                  <Heading as="h3" size="md">
                    Mountain View {index + 1}
                  </Heading>
                  <FaMountain />
                </Flex>
                <Text fontSize="sm" color="gray.500">
                  Smokey Mountains, Appalachian
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box as="footer" w="full" bg="gray.100" p={4}>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Heading as="h4" size="md" mb={2}>
            Smokey Modern Homes
          </Heading>
          <Text fontSize="sm">&copy; {new Date().getFullYear()} All rights reserved.</Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
