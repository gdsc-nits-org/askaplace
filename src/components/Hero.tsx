'use client';
import React from 'react'
import Image from "next/image";
function Hero() {
  return (
    <div>
     <Image 
       src="https://s3-alpha-sig.figma.com/img/43ac/2e20/d0aab18d1c1468eb9476074402cd5837?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DmFvn5TSfr1YG9XjCEn7lGSOI4xx8YEYQisSCJqJ-NZTYCm7GhNvgnF~Du0Hs1fN-e4x5KYPFgg6KJ9nDwvNSYaWZE7tDn0wZeBr7HmZC6A86JjsBgxgoAwDxSFldJc9llDr07weAQDY12hjVnw~tPeGiFBag~XgMZoruTQlgAUNBgEZPPvqCAmuLN~KReCGmC-4tOQlD0vWKVpWGPS0qSm8cMvHMOKPj2-QMpwhcoX68ECJx1XBN9WEo~XEUkt6dqYsta9Z-oGt4hQGqAOwo9Eo4wdZP4Ue6tzS~2v1Cukj2qhWTBsSeksKps3y9Kqxk~qkr5Ne7BQWV4ZzhWLvSg__"
       width={874}
       height={653}
       alt="A pic"
     />
     <Image 
       src="/ellipse.png"
       width={874}
       height={653}
       alt="A pic"
     />
    </div>
  )
}

export default Hero
