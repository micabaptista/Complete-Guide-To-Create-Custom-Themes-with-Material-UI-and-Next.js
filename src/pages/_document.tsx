import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document';


export default class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return Document.getInitialProps(ctx);
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=optional"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
