import { SearchIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Flex, FormControl, Input, InputGroup, InputRightElement, Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

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
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(Math.random)

    useEffect(() => {
    //    fetch data
        axios.get("https://jsonplaceholder.typicode.com/posts")
        // .then(res => console.log(res?.data))
        .then(res => setData(res?.data))
        .then(res => setLoading(false))
        .catch(error => console.log(error))
    }, [refresh])


    return (
        <Box padding={"3rem"}>
            <Text mb={6} textAlign={"center"} fontWeight="500" fontSize={"1.4rem"}>POSTS</Text>
           
                {loading ? <Flex marginTop="5rem" width={"100%"} justifyContent={"center"}><Spinner size={"lg"} /></Flex> :
                data?.slice(0,10).map(({id, body, title}) => {
                    return (
                        <Link to={`/posts/${id}`}>
                        <Box mb="6" key={id} _hover={{transform: "scale(.99)"}} boxShadow="2px 4px 10px lightgray" transition="250ms ease" color={"#000"} fontWeight="500" cursor={"pointer"} flex="1" borderRadius={"6px"} padding="1.5rem">
                            <Text fontSize={"1.3rem"} fontWeight="500" color={"purple"} mb="3">{title}</Text>
                            <Text mb="3">{body.slice(0,60)}..</Text>
                        </Box>
                        </Link>
                    )
                })}
        </Box>
    )
}

export default Lists