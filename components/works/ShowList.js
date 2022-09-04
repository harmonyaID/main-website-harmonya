import Image from "next/image"
import { useState } from "react"
import Cards from "../Cards";

const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
}

const ShowList = ({ image, title, desc, tags, path }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <a href={'http://localhost:3000/works' + path} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg xl:aspect-w-7 xl:aspect-h-8 overflow-hidden">
                <Image 
                    alt=""
                    // src="https://bit.ly/placeholder-img"
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    className={cn(
                        'group-hover:opacity-75 duration-500 ease-in-out',
                        isLoading ? 'grayscale blur-2xl scale-110'
                        : 'grayscale-0 blur-0 scale-100'
                    )}
                    onLoadingComplete={ () => setIsLoading(false) }
                />
            </div>
            <h4 className="mt-4 text-xs text-blue-300">{tags.join(', ')}</h4>
            <h3 className="mt-2 font-semibold text-xl text-blue-700">{title}</h3>
            <p className="text-gray-800 mt-1 text-sm">{desc}</p>
        </a>
    )
}

export default ShowList