import Link from "next/link"
export default function Footer(){
    return(
<div className="footer">
    <ul className="footer_button">
        <Link href={"/"}
        >
        <li>⏩</li>
        </Link>
        <Link href={"/comment"}
        >
        <li>💬</li>
        </Link>
        <Link href={"/comment"}
        >
        <li>👍</li>
        </Link>
       
        
    </ul>
    
</div>
    )
}