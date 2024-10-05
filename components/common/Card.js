import Link from "next/link"
import { TitleSm } from "./Title"
import { HiOutlineArrowRight } from "react-icons/hi"

export const Card = ({ data, caption, show }) => {
  return (
    <>
      <div className='card'>
        <div className='card-img'>
          <img src={data.cover} alt={data.title} className="mix-blend-luminosity" />
        </div>
        <div className='card-details'>
          <Link href={`${data.path}/${data.id}`} className='title-link'>
            <TitleSm title={data.title} />
          </Link>

          {caption && (
            <Link href={`${data.path}/${data.id}`}>
              {caption} <HiOutlineArrowRight className='link-icon' />
            </Link>
          )}
          <div className=''>
          {data.date && <span> {data.date}</span>}
          </div>
          {/* <p style={{color:"rgba(255, 255, 255, 0.5)"}}>{data.para}</p> */}

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
