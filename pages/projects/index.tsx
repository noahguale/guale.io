import { CurrentFilters } from "@/lib/types"
import { NavBackground } from "components/ui/NavBackground"
import { Footer } from "components/ui/Footer"
import { getSortedPostsData, getSortedPostsDataDb } from '../../lib/posts'
import Image from "next/image"
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Link from "next/link"
import YouTubeIcon from "components/icons/YouTubeIcon"

export async function getStaticProps() {
    const allPostsData = await getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }

  const Projects = ({
    children,
    showNav = true,
    currentFilters = null,
    allPostsData
  }: {
    children: React.ReactNode
    showNav?: any
    currentFilters?: CurrentFilters
    allPostsData?: any
  }) => {


    return (
        <div className="scrollbar-hide">
            
            <NavBackground children></NavBackground>


            <div className="flex items-center justify-center px-40 pt-36 py-10 font-semibold text-sky-300 text-xl">
            </div>

            {/* <div className="flex items-center justify-center animated animatedFadeInUp fadeInUp"> */}
            
              {/* <div className="grid grid-cols-1 lg:grid-cols-2 w-6/12 place-items-center gap-10"> */}
              <div className="flex flex-col justify-between items-center animated animatedFadeInUp fadeInUp">
              <div className="container py-12 max-w-2xl px-4  sm:px-6 xl:max-w-2xl xl:px-0">
              {/* <h1 className="text-3xl mb-5 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Projects</h1>
              <p className="text-lg mb-10 leading-7 text-gray-300 dark:text-gray-300">Things I Have Made in the Past. Mostly open source</p>   */}
                <div className="flex flex-wrap ml-14">
                  {allPostsData.map(({ id, date, title, excerpt, coverImage, stack, blogpost, githubUrl } :{
                        id: any,
                        date: any,
                        title: any,
                        excerpt: any,
                        coverImage: any,
                        stack: Array<String>,
                        blogpost: any,
                        githubUrl: any
                    }) => (

                    <div className="p-2 w-5/6 xs:w-1/2 md:w-6/12	 ">
                      <div className="h-full overflow-hidden border-2 border-gray-400 rounded-md border-opacity-60 dark:border-gray-400 shadow-surface-elevation-low transition duration-200 hover:bg-sky-100/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:sky-500/70">
                        <div className="p-3">
                          <h2 className="mb-1 text-xl font-bold tracking-tight text-white">
                          <a target="_blank" rel="noopener noreferrer" href={githubUrl} aria-label="Link to Take A Break">{title}</a>
                          </h2>


                            <p className="h-max mb-1 prose text-gray-500 max-w-none dark:text-gray-300 grow">{excerpt}</p>

                            <div className="flex flex-wrap justify-end mt-4 object-left-bottom">
                              {stack.map((item) => (
                                <div className="w-fit text-center text-xs font-bold text-white/100 bg-gradient-to-tl from-sky-500/80 to-sky-300/80 rounded p-1 mr-2 mt-2"> {item} </div>
                              ))}
                            </ div>
                            <div className="flex flex-row gap-1">
                              {blogpost ? (
                              <Link href={blogpost}>
                                <ArrowTopRightOnSquareIcon className="w-[18px] transform text-white transition delay-100 duration-500 ease-out group-hover:scale-110" />
                              </Link>
                              ) : null}

                            
                          </div>
                          
                          </div>



                        </div>

                      </div>


                    ))}



                </div>
                </div> 

              </div>



              {/* </div> */}


            {/* </div> */}

            <div className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-48 font-sans text-base text-gray-600 xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">
                <Footer />
            </div>        
        
        </div>
        
    )
}

export default Projects