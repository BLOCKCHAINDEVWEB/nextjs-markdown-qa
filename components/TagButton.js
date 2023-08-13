import Link from "next/link"
import { useRouter } from "next/router"


export default function TagButton({ tag }) {
  const router = useRouter()

  const href = () => {
    if (router.pathname === '/') {
      return "/posts/tags/[[...slug]]"
    }
    if (router.pathname.includes('/post')) {
      return "/posts/tags/[[...slug]]"
    }
    if (router.pathname.includes('/posts')) {
      return "/posts/tags/[[...slug]]"
    }
    if (router.pathname.includes('/list')) {
      return "/list/tags/[[...slug]]"
    }
  }

  const as = (tag) => {
    if (router.pathname === '/') {
      return `/posts/tags/${tag}`
    }
    if (router.pathname.includes('/post')) {
      return `/posts/tags/${tag}`
    }
    if (router.pathname.includes('/posts')) {
      return `/posts/tags/${tag}`
    }
    if (router.pathname.includes('/list')) {
      return `/list/tags/${tag}`
    }
  }

  return (
    <>
      <Link href={href()} as={as(tag)}>
        <a>{tag}</a>
      </Link>
      <style jsx>{`
        a {
          display: inline-block;
          border-radius: 3px;
          background-color: rgba(21, 132, 125, 0.2);
          color: #15847d;
          transition: background-color 0.3s ease;
          padding: 0.25em 0.5em;
        }
        a:active,
        a:hover {
          background-color: rgba(21, 132, 125, 0.4);
        }
      `}</style>
    </>
  )
}
