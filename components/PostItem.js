import { useRouter } from "next/router"
import Date from "./Date"
import Link from "next/link"
import { parseISO } from "date-fns"
import MetaData from "./MetaData"
import IncidentStatus from './IncidentStatus'

export default function PostItem({ post }) {
  const router = useRouter();

  const isRenderMetaData =  (router.pathname.includes('/posts') || router.pathname === '/') && !router.pathname.includes('/tags')

  const shortDesc = isRenderMetaData
    ? post.desc.length > 100 
      ? post.desc.substring(0, 200) + "..."
      : post.desc
    : null

  const href = "/post/" + post.slug

  return (
    <>
      <div className="content-post">
        <Link href={href}>
          <a>
            <h2>{post.title}</h2>
            {isRenderMetaData &&
              <MetaData
                circle={post.status}
                date={post.timestamp}
                tags={post.tags}
                incident={post.incident}
                postgres={post.postgres}
              />
            }
            <Date date={parseISO(post.date)} />
            {!isRenderMetaData && <IncidentStatus name="incident" status={post.incident}/>}
            <p>{shortDesc}</p>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .content-post {
            position: relative;
            width: 100%;
            text-align: justify;
            margin-top: 1rem;
          }
          .content-post p {
            font-size: 1.2rem;
            letter-spacing: .05rem;
            line-height: 1.5rem;
          }
          a {
            color: #222;
          }
          h2 {
            width: 60vw;
            margin: 0;
            font-weight: 500;
          }
          @media (min-width: 769px) {
            .content-post {
              margin-top: 0;
            }
            .content-post p {
              font-size: 1rem;
              line-height: 1.4rem;
            }
          }
        `}
      </style>
    </>
  )
}
