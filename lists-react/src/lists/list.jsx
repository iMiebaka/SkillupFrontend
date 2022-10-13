import { SearchIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Flex, FormControl, Input, InputGroup, InputRightElement, Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

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
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(Math.random)

    console.log(refresh)

    useEffect(() => {
    //    fetch data
        axios.get("BASEURL")
        .then(res => setData(res?.data))
        .then(res => setLoading(false))
        .catch(error => console.log(error))
    }, [refresh])

    const formData = {
        token: "hmvxzmhvzjmjxkcgkjdskbcsczd11"
    }

    const addNew = async() => {
        try {
            const data = await axios.post("BASEURL", formData)
            console.log(data)
            setRefresh(Math.random + "aaa")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box padding={"3rem"}>
            <Text mb={6} textAlign={"center"} fontWeight="500" fontSize={"1.4rem"}>LISTS</Text>
            <FormControl maxW="300px" margin="0 auto">
                <InputGroup>
                    <Input onChange={e => setName(e.target.value)} placeholder="Search User"  />
                    <InputRightElement children={<SearchIcon color={"gray"} />} />
                </InputGroup>
            </FormControl>
            <Flex wrap={"wrap"} gap="2rem" padding={"2rem"} justifyContent={"space-between"} alignItems="center">
                {loading ? <Flex marginTop="10rem" justifyContent={"center"}><Spinner size={"lg"} /></Flex> :
                data?.map((i) => {
                    return (
                        <Box key={i._id} _hover={{transform: "scale(.9)"}} boxShadow="2px 4px 10px lightgray" transition="250ms ease" color={"#000"} fontWeight="500" cursor={"pointer"} flex="1" borderRadius={"6px"} padding="1.5rem">
                            <Text mb="3">{i.token}</Text>
                            {/* <Text mb="3">{i.role}</Text>
                            {i.verified ? <Badge colorScheme={"green"}>Verified</Badge> : <Badge colorScheme={"red"}>Not Verified</Badge>} */}
                        </Box>
                    )
                })}
            </Flex>
            <Button onClick={addNew}>Add User</Button>
        </Box>
    )
}

export default Lists