export const COLORS_TAG = {
  high: 'red',
  middle: 'orange',
  low: 'blue'
}

export const TagColorTitle = ({ name }) => {
  return (
    <>
      <h1 className={`${COLORS_TAG[name]}` ? "tag" : ""}># {name}</h1>
      <style jsx>
        {`
          .tag {
            color: ${COLORS_TAG[name]};
          }
        `}
      </style>
    </>
  )
}
