export const BotCard=({text})=>{
    return (
        <div className="bg-[#262626] w-fit max-w-sm  md:max-w-lg lg:max-w-3xl rounded-3xl  px-6 py-2 my-3 ml-7 mr-auto">
            
            <span className="text-white text-sm p-1 ">{text}</span>
            
        </div>
    )
}
export const UserCard=({text})=>{
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit max-w-sm md:max-w-lg lg:max-w-3xl flex rounded-3xl  px-6 py-2 my-3 mr-7 ml-auto">
            
            <span className="text-white text-sm p-1  ">{text}</span>
            
        </div>
    )
}
