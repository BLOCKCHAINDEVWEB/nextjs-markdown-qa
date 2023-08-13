import { SocialList } from "../components/SocialList"


export default function About() {
  return (
    <>
      <div className="container">
        <div>
          <h1>
            Logs papertrail <span className="fancy">.</span>
          </h1>
          <span className="handle">maj 05/2022</span>
        </div>
        <div>
          <p>Les codes ou messages d&apos;erreur sont les moyens par lesquels les ordinateurs nous informent qu&apos;il y a des bogues dans nos codes, et parfois ils nous indiquent où ils se trouvent.</p>
          <q>Le paradoxe est que les codes d&apos;erreur ; bien qu&apos;ils soient très utiles, ils ne sont pas en anglais simple et peuvent être très déroutants et cryptiques</q>
        </div>
        <br/>
        <div>
          <SocialList />
        </div>
      </div>
        <style jsx>{`
          .container {
            display: flex;
            justify-content: center;
            padding: 0 5vw;
            flex-direction: column;
            width: 100vw;
            // box-shadow: inset 0 0 10px #000000;
          }
          h1 {
            font-size: 1.8rem;
            margin: 0;
            font-weight: 500;
          }
          h2 {
            font-size: 1.5rem;
            font-weight: 400;
            line-height: 1.25;
          }
          .fancy {
            color: #15847d;
          }
          .handle {
            display: inline-block;
            margin-top: 0.275em;
            color: #9b9b9b;
            letter-spacing: 0.05em;
          }
          .illustrations {
            display: flex;
            flex-wrap: wrap;
            margin: 1.5rem 0 0 0;
            justify-content: center;
            min-height: auto;
            margin-bottom: -80px;
          }
          .illustrations img:first-child {
            max-width: 90%;
            align-self: flex-end;
          }
          .illustrations>* {
            flex: 0 0 33%;
          }
          .illustrations img:not(:first-child) {
            visibility: hidden;
          }
          @media(min-width: 769px) {
            .container {
              width: 75vw;
            }
            .illustrations {
              justify-content: space-between;
              margin: 3rem 0 2rem 0;
            }
            .illustrations img:first-child {
              max-width: 23%;
              align-self: flex-end;
            }
            .illustrations img:not(:first-child){
              visibility: visible;
            }
          }
        `}</style>
    </>
  )
}
