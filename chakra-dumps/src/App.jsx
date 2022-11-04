import { Box, Flex, Container, Heading, Link, Button } from "@chakra-ui/react";
import { useState } from "react";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      {/* <header className="flex flex-wrap flex-col md:flex-row items-center justify-center 
      md:justify-between md:px-8 py-3 mb-4 border-b"> */}

      <Box
        as={"header"}
        display={"flex"}
        flexWrap={"wrap"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        paddingX={{ md: 8 }}
        paddingY={3}
        marginBottom={4}
        borderBottom={1}
      >
        <Link
          href=""
          display={"flex"}
          alignItems={"center"}
          mb={{ base: "2", md: "0" }}
          textDecorationLine={"none"}
        >
          <img
            src={viteLogo}
            className=""
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          />
        </Link>
        <Flex as={"ul"}>
          {["Home", "Features", "Pricing", "FAQs", "About"].map((i, k) => {
            return (
              <Box listStyleType={"none"} key={k} as={"li"}>
                <Link
                  // _hover={{ textDecoration: "none" }}
                  px={2}
                  textDecoration={"none"}
                  href="#"
                >
                  {i}
                </Link>
              </Box>
            );
          })}
        </Flex>
        <Box alignItems={"end"}>
          {/* <button type="button" className="bg-blue-600 text-white p-1 mr-2 rounded"> */}

          <Button
            backgroundColor={"blue.600"}
            color={"white"}
            p={2}
            mr={2}
            borderRadius={10}
            _hover={{ backgroundColor: "red" }}
          >
            Login
          </Button>
          <Button
            backgroundColor={"blue.600"}
            color={"white"}
            p={2}
            mr={2}
            borderRadius={10}
            _hover={{ color: "gray.300" }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
