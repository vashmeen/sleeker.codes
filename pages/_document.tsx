
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className='h:100%'>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/favicon.png" sizes="any" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          {/* <!--  Essential META Tags --> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet" />
          <meta property="og:title" content="sleeker | an scalable css library based on utility classes close to css syntax" />
          <meta property="og:type" content="website" />
          {/* <meta
            property='og:image'
            content=''
          /> */}
          <meta property="og:url" content="https://sleeker.codes" />
          <meta name="twitter:card" content="summary_large_image" />
          {/* <!--  Non-Essential Meta Tags, But Recommended --> */}
          <meta property="og:description" content="sleeker | an scalable css library based on utility classes close to css syntax" />
          <meta property="og:site_name" content="sleeker" />
          <meta name="twitter:image:alt" content="sleeker | an scalable css library based on utility classes close to css syntax" />
          {/* TO SHOW LARGE THUMBNAILS IN GOOGLE RESULTS */}
          <meta
            name="robots"
            content="max-snippet:20, max-image-preview:large"
          />
          <meta name="description" content="sleeker | an scalable css library based on utility classes close to css syntax" />
        </Head>
        <body className='h:100% --prm:red'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
