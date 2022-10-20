import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ListItem = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(Math.random);

  const {id} = useParams();

  useEffect(() => {
    //    fetch data
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //   .then(res => console.log(res?.data))
      .then((res) => setData(res.data))
      .then((res) => setLoading(false))
      .catch((error) => console.log(error));
  }, [refresh]);

  return (
    <Box padding={"3rem"}>
      {loading ? (
        <Flex marginTop="5rem" width={"100%"} justifyContent={"center"}>
          <Spinner size={"lg"} />
        </Flex>
      ) : (
        <>
          <Text
            mb={6}
            textAlign={"center"}
            fontWeight="500"
            fontSize={"1.4rem"}
          >
            {data.title}
          </Text>
          <Text mb="3">{data.body}</Text>
        </>
      )}
    </Box>
  );
};

export default ListItem;
