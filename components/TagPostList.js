import React from "react"
import { useRouter } from "next/router"
import PostItem from "./PostItem"
import Pagination from "./Pagination"
import { TagColorTitle } from "./TagColor"


export default function TagPostList({ posts, tag, pagination }) {
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

  const as = (page) => {
    if (router.pathname === '/') {
      return page === 1 
        ? "/posts/tags/" + tag.slug
        : `/posts/tags/${tag.slug}/${page}`
    }
    if (router.pathname.includes('/posts')) {
      return page === 1
        ? "/posts/tags/" + tag.slug
        : `/posts/tags/${tag.slug}/${page}`
    }
    if (router.pathname.includes('/list')) {
      return page === 1
        ? "/list/tags/" + tag.slug
        : `/posts/tags/${tag.slug}/${page}`
    }
  }

  return (
    <div className={"container"}>
      <TagColorTitle name={tag.name} />
      <ul>
        {posts.map((it, i) => (
          <li key={i}>
            <PostItem post={it} />
          </li>
        ))}
      </ul>
      <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: () => href(),
          as: (page) => as(page),
        }}
      />
      <style jsx>
        {`
          .container {
            margin: 0 auto;
            max-width: 1200px;
            width: 100%;
            padding: 0 1.5rem;
            display: flex;
            flex-direction: column;
          }
          h1 {
            margin: 0 0 2rem;
            padding: 0;
            font-weight: 100;
            font-size: 1.75rem;
            color: #9b9b9b;
          }
          h1 span {
            font-weight: bold;
            color: #222;
          }
          ul {
            margin: 0;
            padding: 0;
            flex: 1 0 auto;
          }
          li {
            list-style: none;
            margin-bottom: 1.5rem;
          }
          @media (min-width: 769px) {
            h1 {
              font-size: 2rem;
            }
          }
        `}
      </style>
    </div>
  )
}
