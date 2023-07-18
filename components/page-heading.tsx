
import Container from "./container";
import Link from "next/link";
export default function PageHeading(props){

    console.log(props)
    const title = (props.title? props.title: "Corbinrose.com")
    const content = (props.content? props.content: null);
    const featured = (props.content!=null?props.content.featuredImage.node.sourceUrl: "none");
    return(
        <section className="bg-center bg-cover pageHeading flex w-full flex-nowrap items-center justify-between bg-[#e3f2fd] py-2 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-[#93b9d3] lg:flex-wrap lg:justify-start lg:py-4"
        style={{backgroundImage: `url(${featured})`}}>

            <Container>
            <h1 className="text-2xl md:text-4xl text-center font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-20">
                <Link href="/" className="hover:underline">
                {title}
                </Link>
                
            </h1>
            </Container>
    </section>
    )
}