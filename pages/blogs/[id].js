import { blogdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = blogdata.find((post) => post.id === parseInt(id))
  if (!post) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top' style={{paddingBottom:"40px"}}>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title={`${post.category} / ${post.date}`} /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <br />
            <br />
            <div className='desc'>
              <TitleSm title={post.excerpt} />
              <div className='desc-p' dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
            </div>
          </div>
          <Banner />
        </div>
      </section>
    </>
  )
}

export default SinglePost;