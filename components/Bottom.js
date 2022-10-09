import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

function Bottom() {
  return (
    <div className="mt-[10rem] w-full pb-10 md:pb-2 block md:flex justify-center md:justify-between items-center">
      <p className="text-center pb-4">Copyright ® Harmonya</p>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between xl:px-[2rem]">
        <div className="flex gap-6 mb-5">
          <Link href="https://github.com/harmonyaID">
            <a target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                width="20"
                color="gray"
                className="cursor-pointer hover:text-indigo-500"
              />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/harmonya-indonesia/">
            <a target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                width="20"
                color="gray"
                className="cursor-pointer hover:text-indigo-500"
              />
            </a>
          </Link>
          <Link href="https://www.instagram.com/harmonyaindonesia/">
            <a target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                width="20"
                color="gray"
                className="cursor-pointer hover:text-indigo-500"
              />
            </a>
          </Link>
          <Link href="https://twitter.com/beinawair">
            <a target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                width="20"
                color="gray"
                className="cursor-pointer hover:text-indigo-500"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
