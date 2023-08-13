import Head from "next/head"
import Navigation from "./Navigation"


export default function Layout({ children }) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          .root {
            display: block;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            // height: 100%;
            // max-width: 100vw;
          }
          main {
            padding-top: 4rem; 
            display: flex;
            // min-height: 100%;
          }
          @media (min-width: 769px) {
            .root {
              display: flex;
              flex: 1 0 auto;
            }
            main {
              flex: 1 0 auto;
              // max-width: 100%;
              // width: 100%;
              // background: red;
            }
          }
        `}
      </style>
    </div>
  )
}
