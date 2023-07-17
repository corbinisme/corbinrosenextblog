import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../../components/container'
import Layout from '../../components/layout'
import { getAllPostsForHome } from '../../lib/api'
import Header from '../../components/header'
import { getPageByURI } from '../../lib/api'
import PostBody from '../../components/post-body'

export default function Index({thisPage}){


    return(
        <Layout preview={false}>
        <Head>
            <title>Corbinrose.com Blog</title>
        </Head>
        <Header />
        <Container>
            <div className="content">
                <h1 className="text-center font-bold text-lg">Web</h1>
                <PostBody content={thisPage.content} />
            </div>
        </Container>
      </Layout>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const thisPage = await getPageByURI("/web")
    console.log("thispage",thisPage)
  
    return {
      props: { thisPage },
    }
  }