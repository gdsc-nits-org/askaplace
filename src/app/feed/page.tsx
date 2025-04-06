import React from 'react'


const hero = () => {
  return (

  <div className='relative w-full h-screen overflow-hidden  '>
  {/* background image */}
    <div
      className="absolute w-[1440px] h-[672.24px] bg-cover bg-center"
      style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/2074/028c/5cf782de29f4bf1813cb202d31d2742a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uYYtfFNoTxgjYK4sJDsF3~odKwTDuur66eO9eAkEAkLNLwoIF3KYL6htxtBxfP3mZ5Tbtinx7Za1xUow8n~wEjHyu8Jqfw9po3HdSsigGsNezX3l3Dkme5RXEo7rRz00GSqPfb7Ww6K9UDUUdT3gZjBMqiWQkkcyAeumGttoMLUwyyX7OMZx6Dw-sUC81UOzejdMceCPdkmnuIQnCd4p6pP8Gv2NQyHMvQte~cdbx6JoHZM9Ja~OKyO5xmxD3b9iXc-ZnjzrIsSDBaPpQsj8mWh7YXtVyVYGJWOhLuLe~G2m7511KYhmmmhxONC6gE-bVHHbkHOnsxmUc2wdl~SYLA__')" }}
    >
   
{/* triangle */}
  
    <div
        className="absolute top-[497px] left-[279px] w-[378px] h-[101px]  "
        style={{
          backgroundColor: "#09D364",
          clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
        }}
        
      >

    </div>

    </div>    

{/* rectangle */}
<div className='absolute top-[565px] left-[1px] h-[193px] w-[1440px]'
 style={{
  backgroundColor: "#09D364",
}}> 
 
 <div className='relative w-[501px] h-[100px] top-[10px] left-[300px] '>
  <h1 className='text-4xl font-semibold leading-relaxed '>ENJOY </h1>
 <h1 className='text-4xl text-white font-semibold'>WONDERFUL <span className='text-black'>FEELING</span> </h1>
</div>
  
</div>
   
      
  </div> 
  )
}

export default hero

