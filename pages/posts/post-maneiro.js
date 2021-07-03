import Link from 'next/link'

export default function PostManeiro(params) {
    const nome = "jorginho";
    // nome = false;
    return (
        <>
          <h1>First Post</h1>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
          {/* comparando transições de página com js e html */}
          <a href="/">Voltar para home com html </a>
        </>
    )
}