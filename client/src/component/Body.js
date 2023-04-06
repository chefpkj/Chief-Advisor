import { useState,useRef,useEffect} from "react";
import {BotCard,UserCard} from "./ChatCard";
import { url } from "../constant";
import Header from "./Header";
import Shimmer from "./Shimmer";

const Body=()=>{
    const [qna,setQna]=useState([]);
    const [question,setQuestion]=useState("Hi cheif advisor");
    const [txt,setTxt]=useState("");  //for input text change
    const [isLoaded,setIsloaded]=useState(false);  //for typing...
    const [isQnaLoaded,setIsQnaLoaded]=useState(false);   //to track my previous user qna at initial render
    

    //my api call
    useEffect(()=>{
         getQna();
    },[]);
    async function getQna(){
        const data=await fetch(url+"qna/userData",{
            method:'GET',
            headers:{
                "x-auth-token":localStorage.getItem("chiefAdvisor_x-auth-token"),
            }
        });
        const json=await data.json();
        setQna(json.qnaArray);
        setIsQnaLoaded(true);

    }
    //////////////////////////////////////////////////



    // function to scroll to bottom
    const messageEndRef=useRef(null);
    const scrollToBottom=()=>{
        messageEndRef.current?.scrollIntoView({behavior:"smooth"})
    }
    useEffect(()=>{
        scrollToBottom()
    },[qna]);
    //////////////////////////////////////////////////



    

    // function to call api and get my answer
    async function getAnswer(){
        
        const data={"question":question};
        try{
        const res=await fetch(url+"qna/chat",{
            method:'POST',
            headers:{
                "x-auth-token":localStorage.getItem("chiefAdvisor_x-auth-token"),
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin':'*',
            },
            body:JSON.stringify(data)
        });
        const ans=await res.json();
        // console.log(ans.answer);
        let temp=qna;
        temp.push({from:"you",value:question});
        setIsloaded(false);
        setQna([...qna,{from:"ai",value:ans.answer}]);
        
      }
      catch(err){
        console.error("Error:  ",err);
        alert("Something went wrong!! \n1. Check your internet connection.\n2. Or please login again.");
      }
    }
    //////////////////////////////////////////////////

    return (
        <div className="" >

            {/* my header  */}
            <Header/>

            {/* my body component */}
            {isQnaLoaded?(<div className="mb-[4.5rem]">
                {qna.map((card)=>{
                    if(card.from==="you"){
                        return <UserCard key={qna.indexOf(card)} text={card.value}/>;
                    }
                    else{
                        return <BotCard key={qna.indexOf(card)} text={card.value}/>;
                    }
                })}
               
              <div className=" animate-pulse"> 
               {isLoaded?
                ( <BotCard key={394804} text={"typing..."}/>):(<></>)
                }
                </div>

            </div>):(<Shimmer/>)
            }
            
     

            {/* my search component */}
            <div className="bg-black fixed bottom-0 inset-x-0 py-2 pb-4">
             <div className="inset-x-0 h-11 bg-black  rounded-full px-4 border-[0.3px] border-[#424242] flex mx-8 ">
              <input type="text" value={txt} placeholder="Ask your chief advisor..." onChange={(e)=>{setTxt(e.target.value); setQuestion(e.target.value)}} onKeyDown={ async(e) => {
               if(e.key == "Enter"){
                setQna([...qna,{from:"you",value:question}]);
                setIsloaded(true);    //trigger shimmer for typing
                setTxt("");        //making search box clear/empty again
                getAnswer();      //calling api for answer
               }   
               }} className="grow m-2 bg-black p-2 text-sm font-light placeholder:text-[#494F55] text-white rounded-full focus:outline-none focus:placeholder:text-white" />
             </div>
            </div>

            <div ref={messageEndRef}/>
          
        </div>
    );
}

export default Body;
