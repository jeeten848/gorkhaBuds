import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Blog2500 from "../../../public/images/best earbuds in nepal.png"

export default function page() {
  return (
    <div className="blogsPage">
      <h1>
        GorkhaBuds - Blogs
      </h1>
      <p>
        Here are the blogs posted by GorkhaBuds. All these blogs are properly analyzed and compiled according to the experience of users.
      </p>
      <div className="blogsBox">
        <Link href="blogs/earbuds-under-2500">        
        <div className="blog">
          <Image src={Blog2500} alt='best earbuds under 2500' />
        <h2>Best earbuds in Nepal under 2500</h2>
        </div>
        </Link>
        <Link href="blogs/earbuds-under-2500">        
        <div className="blog">
          <Image src={Blog2500} alt='best earbuds under 2500' />
        <h2>Best earbuds in Nepal under 2500</h2>
        </div>
        </Link>
        <Link href="blogs/earbuds-under-2500">        
        <div className="blog">
          <Image src={Blog2500} alt='best earbuds under 2500' />
        <h2>Best earbuds in Nepal under 2500</h2>
        </div>
        </Link>
        <Link href="blogs/earbuds-under-2500">        
        <div className="blog">
          <Image src={Blog2500} alt='best earbuds under 2500' />
        <h2>Best earbuds in Nepal under 2500</h2>
        </div>
        </Link>
        <Link href="blogs/earbuds-under-2500">        
        <div className="blog">
          <Image src={Blog2500} alt='best earbuds under 2500' />
        <h2>Best earbuds in Nepal under 2500</h2>
        </div>
        </Link>
        <Link href="blogs/earbuds-under-2500">        
        <div className="blog">
          <Image src={Blog2500} alt='best earbuds under 2500' />
        <h2>Best earbuds in Nepal under 2500</h2>
        </div>
        </Link>
      </div>
    </div>
  )
}
