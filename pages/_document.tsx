import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/** FavIcon */}
          {/** WebFont */}
          {/** stylesheets */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />

          <title>Tissini </title>
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icons/manifest-icon-192.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/manifest-icon-512.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="Tissini" />
          <link rel="apple-touch-icon" href="/icons/manifest-icon-192.png" />
          <link
            rel="apple-touch-startup-icon"
            href="/icons/manifest-icon-192.png"
          />
          <meta name="theme-color" content="#ffffff" />
          {/** scripts */}
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
