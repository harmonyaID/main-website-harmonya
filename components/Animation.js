import Image from 'next/image';
import Blob from './Blob';

function animation() {
  return (
    <div>
      <div className="min-h-[500px] flex items-center justify-center px-6 md:px-16">
        <div className="relative w-full max-w-lg">
          <Blob />
          <div className="-m-2 md:m-8 relative space-y-4 grid grid-cols-2 gap-5">
            <div className="transition duration-500 hover:scale-110">
              <Image
                src="https://source.unsplash.com/Xo4YvBp6IBM"
                width={500}
                height={590}
                objectFit="cover"
                alt="image"
                className="rounded-xl"
              />
            </div>
            <div className="transition duration-500 hover:scale-110">
              <Image
                src="https://source.unsplash.com/Xo4YvBp6IBM"
                width={400}
                height={400}
                objectFit="cover"
                alt="image"
                className="rounded-xl"
              />
            </div>
            <div className="transition duration-500 hover:scale-110">
              <Image
                src="https://source.unsplash.com/Xo4YvBp6IBM"
                width={400}
                height={400}
                objectFit="cover"
                alt="image"
                className="rounded-xl"
              />
            </div>
            <div className="transition duration-500 hover:scale-110">
              <Image
                src="https://source.unsplash.com/Xo4YvBp6IBM"
                width={500}
                height={590}
                objectFit="cover"
                alt="image"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default animation;
