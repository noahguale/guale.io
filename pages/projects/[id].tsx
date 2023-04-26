import React from "react"
import { CurrentFilters } from "@/lib/types"
import { NavBackground } from "components/ui/NavBackground"
import { Footer } from "components/ui/Footer"
import { getAllPostIds, getPostData } from '../../lib/posts';


export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }
  
export async function getStaticProps({ params }:any) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const Project = ({
    children,
    showNav = true,
    currentFilters = null,
    postData
  }: {
    children: React.ReactNode
    showNav?: any
    currentFilters?: CurrentFilters,
    postData: any
  }) => {

    return (
        <div>
            
            <NavBackground children></NavBackground>


            <div className="flex items-center justify-center px-40 pt-36 py-10 font-semibold text-sky-300 text-xl">
                 
            </div>

            <div className="flex items-center justify-center animated animatedFadeInUp fadeInUp">

            <div className="grid grid-cols-1 w-5/12 place-items-center gap-10">
            
            <div className="flex flex-row place-items-center justify-start w-full"> 

                <a href="/projects" className="pr-3 text-sky-300 hover:underline underline-offset-4">Projects</a>
                <div className="pr-2 text-white text-xs font-bold text-center">-</div>
                <div className="text-lg font-bold text-white pr-2"> {postData.title} </div>
                <div className="text-xs hover:underline-offset-1 font-semibold text-white  bg-gray-900/95  shadow-surface-glass backdrop-blur will-change-transform [@supports(backdrop-filter:blur(0px))]:bg-white/[3%] rounded object-cover object-center p-1"> 2023 </div>
            </div>


            <div className="grid grid-col-2 gap-4 place-items-start">
                <div className="flex flex-row place-items-start justify-center"> 
                    <div className="text-xs font-bold text-white bg-sky-500 rounded object-cover object-center p-1"> WEBSITE </div>
                    <a className="pl-3 text-fuchsia-300">{postData.website} <span> </span></a>
                </div>

                <div className="flex flex-row place-items-center justify-center"> 
                    <div className="text-xs font-bold text-white bg-sky-500 rounded object-cover object-center p-1"> PLATFORM </div>
                    <div className="pl-3 text-white">{postData.platform}<span> </span></div>
                </div>

                <div className="flex flex-row place-items-center justify-center"> 
                    <div className="text-xs font-bold text-white bg-sky-500 rounded object-cover object-center p-1"> STACK </div>
                    <div className="pl-3 text-white">{postData.stack}<span> </span></div>
                </div>

                <div className="flex flex-row place-items-center justify-center"> 
                    <div className="text-xs font-bold text-white bg-sky-500 rounded object-cover object-center p-1"> BLOGPOST </div>
                    <div className="pl-3 text-fuchsia-300">{postData.blogpost}<span> </span></div>
                </div>

           
            </ div>
            {/* <span className="font-light text-white w-9/12 text-lg hover:underline underline-offset-4 text-center">{postData.excerpt}</span> */}

            <div className="grid grid-cols-1 place-items-center sm:w-full gap-6">
                <img
                    alt="gallery"
                    className="block w-max h-full rounded-xl object-cover object-center bg-slate-600 overflow-hidden shadow-surface-elevation-low"
                    src="https://www.craftz.dog/images/works/inkdrop_01.png" />

                <img
                            alt="gallery"
                            className="block w-max h-full rounded-xl object-cover object-center bg-slate-600 overflow-hidden shadow-surface-elevation-low"
                            src="https://www.craftz.dog/images/works/inkdrop_02.png" />

            </div>

   


            </div>

            </div>





            <div className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-48 font-sans text-base text-gray-600 xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">
                <Footer />
            </div>        
        
        </div>
        
    )
}

export default Project