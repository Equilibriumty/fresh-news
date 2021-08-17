import {ChakraProvider} from "@chakra-ui/react";
import theme from "./styles/theme";
import "@fontsource/inter";
import Header from "./components/Header";
import NewsPage from "./components/NewsPage";
import React from "react";
import Loading from "./components/Loading";
import {url} from "./url";


class App extends React.Component {
    state = {
        loading: false,
        data: null,
    };

    async componentDidMount() {
        try {
            const response = await fetch(url);
            const test = await response.json();
            this.setState({data: test.articles});
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <ChakraProvider theme={theme}>
                <Header/>
                <div>
                    {this.state.loading || !this.state.data ? (
                        <Loading/>
                    ) : (
                        <NewsPage newsData={this.state.data}/>
                    )}
                </div>
            </ChakraProvider>
        );
    }
}

export default App;