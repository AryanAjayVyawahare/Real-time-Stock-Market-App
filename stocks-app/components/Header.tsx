import Link from "next/link"


const header = () => {
  return (
    <header className="sticky top-0 header">
        <div className="container header-wrapper">
            <Link href="/">
            <image src  ="/assets/icons/logo.svg"alt="Signalist logo"width={140} height={32}className="h-8 w-auto cursor-pointer"/>
            
            </Link>
        </div>
    </header>
  )
}

export default header