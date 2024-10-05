import { expertise } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = expertise.find((post) => post.id === parseInt(id))

  if (!post) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container' style={{padding:"0px 0px 20px 0px"}}>
          <div className='heading-title-ser' style={{paddingTop:"0px"}}>
            <div className='img' style={{paddingTop:"30px"}}>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <Title title={post.title} className='title-bg' />
            <div className='desc'>
              <p className='desc-p'>{post.details.introduction}</p>
              <ul style={{textAlign:"left"}}>
                {post.details.offerings.map((offering, index) => (
                  <li key={index} className="">
                    <span className="">{offering.heading}</span>
                    <p style={{padding:'0px 0px 0px 20px'}}>{offering.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='heading-title-ser'>
            <div className='desc' style={{textAlign:"left"}}>
              <TitleSm title="Why Choose Us" />
              <ul>
                {post.details.whyChooseUs.map((reason, index) => (
                  <li key={index} style={{padding:"0px 0px 0px 20px"}}><p>{reason}</p></li>
                ))}
              </ul>
            </div>
          </div>
          {/* <div className='heading-title-ser'>
            <div className='desc' style={{textAlign:"left"}}>
              <TitleSm title="Success Story" />
              <p className='desc-p'>{post.details.successStory}</p>
            </div>
          </div> */}
          <Banner />


        </div>
      </section>
    </>
  )
}

export default SinglePost