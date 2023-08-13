export default function IncidentStatus({ name, status }) {
  const colorIncident = {
    // incidents colors
    LOW: 'blue',
    MIDDLE: 'orange',
    HIGH: 'red',
    CRITICAL: 'red',
    // postgres incident colors
    STATEMENT: 'blue',
    ERROR: 'orange',
    FATAL: 'red',
    PANIQUE: 'red',
  }

  return (
    name && status &&
      <>
        <div>{name}: <span className="incident">{status}</span></div>
        <style jsx>
          {`
            .incident {
              color: ${colorIncident[status]}
            }
          `}
        </style>
      </>
  )
}