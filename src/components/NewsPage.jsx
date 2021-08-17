import {Grid} from "@chakra-ui/layout";
import {Container} from "@chakra-ui/react";
import NewsCard from "./NewsCard";

const NewsPage = ({newsData}) => {
    return (
        <Container maxW="5xl">
            <Grid
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={15}
                pb={10}
            >
                {newsData.map((news) => (
                    <NewsCard
                        title={news.title}
                        description={news.description}
                        picture={news.image}
                        source={news.source.url}
                        sourceName={news.source.name}
                    />
                ))}
            </Grid>
        </Container>
    );
};

export default NewsPage;
