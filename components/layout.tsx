import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from './header'
import Container from './container'
import Sidebar from './sidebar'

export default function Layout({ title, content, children }) {
  const mainCol = (title=="Corbinrose.com"? "col-span-12": "col-span-9");
  const subCol  = (title=="Corbinrose.com"? 12: 3);
  return (
    <>
      <Meta />
      <div className="min-h-screen pt-16">
        <Header title={title} content={content} />
        <Container>
          <div className={`mt-3 grid grid-cols-12 gap-4`}>
          <main className={`mainContent ${mainCol}`}>{children}</main>
            <Sidebar cols={subCol} />

          </div>
        </Container>
      </div>
      <Footer />
    </>
  )
}
