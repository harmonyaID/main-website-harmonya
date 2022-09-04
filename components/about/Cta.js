import Link from 'next/link';

function Cta() {
  return (
    <div className="flex flex-col justify-center w-full max-w-[1200px] mx-auto">
      <p className="p-10 text-center text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam id,
        nisi soluta explicabo, saepe obcaecati itaque ullam quidem quis,
        incidunt earum labore quasi odit! Minima tempora suscipit consectetur ut
        est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
        accusantium quod assumenda non, consequuntur optio exercitationem porro
        temporibus illum consequatur accusamus itaque sit quas facere, harum
        voluptate sequi nostrum consectetur.
      </p>
      <div className="flex justify-center">
        <Link href="https://www.harmonya.id/file/Portfolio-2022.pdf">
          <a target="_blank" className="border-2 border-blue-700 bg-blue-700 text-white py-2 px-4 rounded-xl hover:bg-blue-700 hover:shadow-md hover:scale-90 transition duration-500 tracking-wide uppercase text-sm lg:text-lg">
            Download Portofolio
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Cta;
