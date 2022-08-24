import Image from 'next/image';

function Cards({ title, desc, img }) {
  return (
    <div className="bg-white w-[300px] md:w-[200px] lg:w-[300px] relative rounded-xl shadow-md hover:shadow-xl transition duration-150">
      <Image
        src={img}
        alt="image"
        width={500}
        height={300}
        objectFit="cover"
        className="hover:scale-125 transition duration-500 rounded-t-xl"
      />
      <div className="p-8">
        <h2 className="mt-4 font-semibold text-xl text-blue-700">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Cards;
