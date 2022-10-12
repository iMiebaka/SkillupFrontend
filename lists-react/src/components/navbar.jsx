import { Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react"


const Navbar = () => {
    return (
        <Flex padding={"1.5rem 2rem"} alignItems="center" justifyContent={"space-between"}>
            <Text>LOGO</Text>
            <UnorderedList display={"flex"} alignItems="center" listStyleType={"none"}>
                <ListItem margin={"0 .4rem"}>About</ListItem>
                <ListItem margin={"0 .4rem"}>Products</ListItem>
                <ListItem margin={"0 .4rem"}>FAQs</ListItem>
                <ListItem margin={"0 .4rem"}>Contact</ListItem>
            </UnorderedList>
        </Flex>
    )
}

export default Navbar;