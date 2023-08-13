import Link from "next/link"
import { useRouter } from "next/router"
import { COLORS_TAG } from "./TagColor"

export default function Tag({ tag, count }) {
  const router = useRouter()

  const href = () => {
    if (router.pathname === '/') {
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
      return `/posts/tags/${tag.slug}`
    }
    if (router.pathname.includes('/posts')) {
      return `/posts/tags/${tag.slug}`
    }
    if (router.pathname.includes('/list')) {
      return `/list/tags/${tag.slug}`
    }
  }

  return (
    <>
      {!!count &&
        <>
          <Link href={href()} as={as(tag)}>
            <a className={`${COLORS_TAG[tag.name]}` ? "tag" : ""}>{`#${tag.name} (${count})`} </a>
          </Link>
          <style jsx>
            {`
              .tag {
                color: ${COLORS_TAG[tag.name]};
              }
            `}
          </style>
        </>
      }
    </>
  )
}
