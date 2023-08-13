import React from "react"
import {Envelope, LinkedIn, Github } from './Svg'
import config from "../lib/config"

export function SocialList() {
  return (
    <div>
      <a
        title="GitHub"
        href={`mailto:${config.email_account}`}
        target="_blank"
        rel="noopener"
        className="envelope"
      >
        <Envelope />
      </a>
      <a
        title="LinkedIn"
        href={`https://www.linkedin.com/in/${config.linkedin_account}`}
        target="_blank"
        rel="noopener"
        className="linkedin"
      >
        <LinkedIn />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <Github />
      </a>
      <style jsx>{`
        // div {
        //   min-height: 35px;
        // }
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
        .envelope {
          margin-top: 5px;
        }
        .linkedin {
          margin-bottom: 2px;
        }
      `}</style>
    </div>
  )
}
