import { Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <Flex padding={"1.5rem 2rem"} alignItems="center" justifyContent={"space-between"}>
            <NavLink to="/"><Text cursor={"pointer"}>LOGO</Text></NavLink>
            <UnorderedList display={"flex"} alignItems="center" listStyleType={"none"}>
            <NavLink to="/about"><ListItem cursor={"pointer"} _hover={{transform: "scale(.9)"}} transform="250ms ease" margin={"0 .9rem"}>About</ListItem></NavLink>
            <NavLink to="/product"><ListItem cursor={"pointer"} _hover={{transform: "scale(.9)"}} transform="250ms ease" margin={"0 .9rem"}>Products</ListItem></NavLink>
            <NavLink to="/faqs"><ListItem cursor={"pointer"} _hover={{transform: "scale(.9)"}} transform="250ms ease" margin={"0 .9rem"}>FAQs</ListItem></NavLink>
            <NavLink to="/"></NavLink><ListItem cursor={"pointer"} _hover={{transform: "scale(.9)"}} transform="250ms ease" margin={"0 .9rem"}>Contact</ListItem>
            </UnorderedList>
        </Flex>
    )
}

export default Navbar;