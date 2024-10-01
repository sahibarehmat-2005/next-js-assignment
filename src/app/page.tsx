import Image from "next/image";

export default function Home() {
  return (
    <div className="home_container">
   
   <div className="child_container">Hey,<br/>Sahiba is here.<br/>I am a Next JS Developer✨

   </div>
   <div >
    <Image className="image_container" src={"/girlimage.png"} alt="user image" width={200} height={200}/>
  

   </div>
   
   </div>
  );
}
