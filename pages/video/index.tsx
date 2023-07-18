import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../../components/container'
import Layout from '../../components/layout'
import Header from '../../components/header'
import { getPageByURI } from '../../lib/api'
import PostBody from '../../components/post-body'
import PageHeading from '../../components/page-heading'

export default function Index({thisPage}){


    return(
        <Layout title={thisPage.title} content={thisPage}>
          <Head>
              <title>Video | Corbinrose</title>
          </Head>
        
            <div className="content">
                <PostBody content={thisPage.content} />
            </div>
           
       
      </Layout>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const thisPage = await getPageByURI("/video")

  
    return {
      props: { thisPage },
    }
  }