import {Box, Container, Heading, Image, Link, useColorMode} from "@chakra-ui/react";

const NewsCard = ({title, description, picture, source, sourceName}) => {
    const {colorMode} = useColorMode();
    return (
        <Box
            maxW="lg"
            bg={colorMode === "dark" ? "gray.900" : "gray.100"}
            color={colorMode === "dark" ? "gray.400" : "gray.600"}
            borderRadius={30}
            h="xl"
        >
            <Image
                src={picture}
                htmlWidth="100%"
                borderTopRadius={30}
            />
            <Container>
                <Heading p={5} fontSize={20}>
                    {title}
                </Heading>
                <Heading p={5} fontSize={15}>
                    {description}
                </Heading>
                <Heading p={5} fontSize={12}>
                    Source: <Link href={source}>{sourceName}</Link>
                </Heading>
            </Container>
        </Box>
    );
};

export default NewsCard;
