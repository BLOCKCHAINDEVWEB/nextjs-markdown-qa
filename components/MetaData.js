import IncidentStatus from "./IncidentStatus"


export default function MetaData({ circle, date, tags, incident, postgres}) {
  const colorMetadata = {
    // circle colors
    NEW: 'yellow',
    WIP: 'cyan',
    AIM: 'orange',
    FAIL: 'red',
    SUCCESS: '#90EE90',
  };

  const RenderTags = ({ tags }) => {
    const Tag = ({ tags }) => tags.map((tag, i) => tags.length > 0
      ? <span key={i}>#{tag}<br/></span>
      : <span>#{tag}</span>);

    return (
      <div>
        <Tag tags={tags} />
        <br/>
      </div>
    );
  };

  return (
    <>
      <div className="metadata">
        <div>
          <RenderTags tags={tags} />
        </div>
        <div className="container-middle">
          <div>{date}</div>
          <br/>
          {postgres && <IncidentStatus name="postgres" status={postgres}/>}
          {incident && <IncidentStatus name="incident" status={incident} />}
        </div>
        <div className="container-circle">
          <div className="circle">
            <p>{circle}</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .metadata {
            display: flex;
            justify-content: space-between;
            background: whitesmoke;
            padding: .5rem;
          }
          .container-middle {
            text-align: center;
          }
          .container-circle {
            float: right;
            padding: 1rem;
            text-align: center;
            vertical-align: bottom;
          }
          .circle {
            font-size: .7rem;
            width: 50px;
            height: 50px;
            background-color: ${colorMetadata[circle]};
            margin: auto;
            border-radius: 50%;
            display: table;
          }
          .circle p {
            vertical-align: middle;
            display: table-cell;
          }
        `}
      </style>
    </>
  )
}
