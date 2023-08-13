export default function LinkError ({ content, href }) {
  return (<>
    <br/>
    <Link href={href}>
      <a className="uri">{content}</a>
    </Link>
    <style jsx>
      {`
        .uri {
          font-size: .8rem;
          letter-spacing: 1px;
          cursor: pointer;
        }
      `}
    </style>
  </>)
}
