import Link from 'next/link'
import Container from './container'
import PageHeading from './page-heading'
import Navigation from './navigation'

export default function Header(props) {

  const title = (props.title? props.title:"Corbinrose.com blog")
  const content = (props.content? props.content: null)
  return (
    <header>
    
      <nav
        className="fixed top-0 flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="ml-2 mr-6">
            <a className="flex text-xl text-neutral-800 dark:text-neutral-200" href="/"
              >
                <img className="w-10" src="https://corbinrose.com/images/logo.svg" />
                Corbin<span>rose</span></a>
            
          </div>

          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent2"
            aria-controls="navbarSupportedContent2"
            aria-expanded="false"
            aria-label="Toggle navigation">

            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7">
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd" />
              </svg>
            </span>
          </button>


          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent2"
            data-te-collapse-item>

            <Navigation  type="header" />
            
          </div>
        </div>
      </nav>

    <PageHeading title={title} content={content} />

    </header>
  )
}
