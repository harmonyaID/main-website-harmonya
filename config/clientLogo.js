import Image from 'next/image'
import React from 'react'

const ClientLogo = () => {
  return (
    <>
        <div className="flex justify-center items-center mx-auto">
            <Image
              src="/assets/images/clients/Blublub-Logo.png"
              width={150}
              height={99.75}
              alt="Logo Client 2"
              className="flex justify-center items-center"
            />
        </div>
        <div className="mx-auto">
          <Image
            src="/assets/images/clients/Armory-Reborn-Logo.png"
            width={150}
            height={99.75}
            alt="Logo CLient 1"
            className="z-0"
          />
        </div>
        <div className="mx-auto">
          <Image
            src="/assets/images/clients/Casa-Blanca-Resto-Bar-Bali-Logo.png"
            width={150}
            height={99.75}
            alt="Logo CLient 3"
            className="z-0"
          />
        </div>
        <div className="mx-auto">
          <Image
            src="/assets/images/clients/Phalani-Fabric-Printing-Logo.png"
            width={150}
            height={99.75}
            alt="Logo Client 4"
            className="z-0"
          />
        </div>
    </>
  )
}

export default ClientLogo;