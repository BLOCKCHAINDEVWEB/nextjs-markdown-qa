import { SessionProvider  } from "next-auth/react"

import "normalize.css"
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../styles/global.css"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider >
  )
}
