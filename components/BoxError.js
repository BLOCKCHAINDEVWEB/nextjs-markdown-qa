import Link from "next/link"

export default function BoxError({ content, href, error }) {
  return (<>
    <div>
      <label>
        <span>
          Titre: 
          <Link href={href}>
            <a className="uri">{content}</a>
          </Link>
        </span>
      </label>
      Message: 
      <textarea rows="5" cols="87" name="error" value={error} readOnly>
      </textarea>
    </div>
    <style jsx>
      {`
        label,
        textarea {
          font-size: 0.8rem;
          padding-top: 1rem;
          letter-spacing: 1px;
        }
        label span {
          cursor: pointer;
        }
        span a {
          margin-left: .5rem;
        }
        textarea {
          padding: 10px;
          max-width: 100%;
          line-height: 1.5;
          margin-top: 0.5rem;
          border-radius: 5px;
          border: 1px solid #ccc;
          box-shadow: 1px 1px 1px #999;
        }
        label {
          display: block;
          margin-bottom: 10px;
        }
      `}
    </style>
  </>)
}
