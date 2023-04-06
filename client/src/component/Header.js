import logo from "../assests/img/open-ai3.png";

const Header=()=>{
    return (
        <div className="sticky top-0 h-[4rem] border-b-[0.1px] border-slate-700  inset-x-0 bg-black flex items-center">
        <a href="/home"><img src={logo} className="h-[2.7rem] ml-6"/></a>
        <span className="text-white text-base font-normal mx-3">Chief Advisor.</span>
        </div>
    )
}
export default Header;
