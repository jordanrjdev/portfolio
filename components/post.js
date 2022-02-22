import { Icon } from "./UI/Icons";
import Link from "next/link";

export default function Post({ data, desc }) {
  return (
    <div className="flex flex justify-start space-x-5 items-center my-9">
      <div className="bg-gray-800">
        <Icon icon={data.tech} />
      </div>
      <div>
        <Link href={"/" + data.slug}>
          <a>
            <h5 className="hover:text-blue-800 font-semibold text-2xl">
              {data.title}
            </h5>
          </a>
        </Link>
        {desc && (
          <p className="text-gray-700 text-xl">
            {data.description.length > 150
              ? data.description.slice(0, 150) + "..."
              : data.description}
          </p>
        )}
        <p className="text-gray-600">{new Date(data.date).toDateString()}</p>
      </div>
    </div>
  );
}
