import Link from "next/link"
import { useRouter } from "next/router"
import { signOut, useSession } from "next-auth/react"

import Burger from "./Burger"
import { useState } from "react"


export default function Navigation() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [active, setActive] = useState(false)


  if (status === 'loading') return <p>Loading...</p>

  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container " + (active ? "active" : "")}>
        <ul>
          <li>
            <img className="logo" src="/blockchain-icon.jpeg" alt="logo Blockchain" />
          </li>
          {session
            ? <>
                <li>
                  <Link href="/">
                    <a
                      className={router.pathname === "/" || router.pathname === "/posts" ? "active" : null}
                      onClick={() => setActive(!active)}
                    >
                      home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/list">
                    <a
                      className={router.pathname.startsWith("/list") ? "active" : null}
                      onClick={() => setActive(!active)}
                    >
                      list
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a onClick={() => signOut()}>
                      signout
                    </a>
                  </Link>
                </li>
              </>
            : null
           }
          <li>
            <Link href="/about">
              <a
                className={router.pathname.startsWith("/about") ? "active" : null}
                onClick={() => setActive(!active)}
              >
                about
              </a>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            .container {
              width: 0;
            }
            .logo {
              padding: 1rem;
              margin-left: 1.5rem;
              width: 50px;
              height: auto;
            }
            ul {
              opacity: 0;
              width: 100%;
              height: 100vh;
              text-align: right;
              list-style: none;
              margin: 0;
              padding: 0;
              position: fixed;
              top: 0;
              background-color: #fff;
              display: flex;
              flex-direction: column;
              justify-content: center;
              z-index: 1;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 1.75rem;
              font-size: 2rem;
              padding: 0 1.5rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: #222;
            }
            @media (min-width: 769px) {
              .container {
                width: 10vw;
                display: block;
              }
              ul {
                opacity: 1;
                width: 10vw;
                top: auto;
                display: block;
                transform: translateY(0);
                margin-top: 4rem;
              }
              li {
                font-size: 1rem;
                padding: 0;
              }
            }
          `}
        </style>
      </div>
    </>
  )
}
