


export const WorkSection = ({title, post} : {
    title: String
    post: React.Component
}) => {

    return (
        <>
            <div className="grid grid-cols-[1fr,min(640px,100%),1fr] px-40 pt-36 ">
                <span className="text-white text-base font-semibold text-rose-100/90 my-5 flex justify-center items-center">{title}</span>
                <hr className="w-48 h-px my-8 bg-gray-200 border-0 dark:bg-sky-500/80" />
            </div>
            <div className="flex items-center justify-center h-screen -mt-80 -mb-96">
                <div className="grid grid-cols-2 gap-x-5 gap-y-6">


                </div>
            </div>

        </>
    )
}