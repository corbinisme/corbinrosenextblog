import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        
        <main className="pt-11 mt-4">{children}</main>
      </div>
      <Footer />
    </>
  )
}
