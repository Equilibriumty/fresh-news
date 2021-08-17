import {Container, Heading} from "@chakra-ui/layout";
import {Button, HStack, Link, useColorMode} from "@chakra-ui/react";
import {ImGithub} from "react-icons/im";
import {BsMoon} from "react-icons/bs";

const Header = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Container h={100} maxW="5xl">
            <HStack justifyContent="space-between" spacing={100} pt={4}>
                <Heading
                    size="2xl"
                    alignContent="center"
                    color={colorMode === "dark" ? "gray.300" : "gray.700"}
                >
                    Fresh News
                </Heading>
                <HStack>
                    <Link href="https://github.com/Equilibriumty">
                        <Button>
                            <ImGithub/>

                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        <BsMoon/>
                    </Button>
                </HStack>
            </HStack>
        </Container>
    );
};

export default Header;
