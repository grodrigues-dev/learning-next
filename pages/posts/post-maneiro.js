import Link from 'next/link'
import Head from 'next/head';

import Layout from "../../components/layout";

export default function PostManeiro(params) {
    const nome = "jorginho JJ";
    // nome = false;
    return (
        <Layout>
            <Head>
                <title>Post Maneiro {nome}</title>
            </Head>
            <h1>First Post {nome}</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            {/* comparando transições de página com js e html */}
            <a href="/">Voltar para home com html </a>
        </Layout>
    )
}