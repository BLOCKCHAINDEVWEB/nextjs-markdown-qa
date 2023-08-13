import { format, formatISO, formatDistance } from "date-fns"
import { fr } from 'date-fns/locale'


export default function DateCustom({ date }) {
  return (
    <time dateTime={formatISO(date)}>
      <span>{format(date, "d MMMM yyyy", { locale: fr })}</span>
      <style jsx>
        {`
          span {
            color: #9b9b9b;
          }
        `}
      </style>
    </time>
  )
}
