import { SearchIcon } from "@chakra-ui/icons";
import { Badge, Box, Flex, FormControl, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { useState } from "react";

const data = [
    {
        name: "Liam",
        role: "Admin",
        verified: true,
        id: 1
    },
    {
        name: "Joy",
        role: "Super Admin",
        verified: false,
        id: 2
    },
    {
        name: "Maxwell",
        role: "staff",
        verified: true,
        id: 3
    },
    {
        name: "Violet",
        role: "janitor",
        verified: false,
        id: 4
    }
]

const Lists = () => {
    const [name, setName] = useState("");

    return (
        <Box padding={"3rem"}>
            <Text mb={6} textAlign={"center"} fontWeight="500" fontSize={"1.4rem"}>LISTS</Text>
            <FormControl maxW="300px" margin="0 auto">
                <InputGroup>
                    <Input onChange={e => setName(e.target.value)} placeholder="Search User"  />
                    <InputRightElement children={<SearchIcon color={"gray"} />} />
                </InputGroup>
            </FormControl>
            <Flex gap="2rem" padding={"2rem"} justifyContent={"space-between"} alignItems="center">
                {data.filter(i => i.name.toLowerCase().includes(name.toLowerCase())).map((i) => {
                    return (
                        <Box key={i.id} _hover={{transform: "scale(.9)"}} boxShadow="2px 4px 10px lightgray" transition="250ms ease" color={"#000"} fontWeight="500" cursor={"pointer"} flex="1" borderRadius={"6px"} padding="1.5rem">
                            <Text mb="3">{i.name}</Text>
                            <Text mb="3">{i.role}</Text>
                            {i.verified ? <Badge colorScheme={"green"}>Verified</Badge> : <Badge colorScheme={"red"}>Not Verified</Badge>}
                        </Box>
                    )
                })}
            </Flex>
        </Box>
    )
}

export default Lists