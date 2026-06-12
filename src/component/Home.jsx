import React, { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";

const Home = () => {
  const [query, setquery] = useState('')

  const handleChange = (e)=>{
    setquery(e.target.value)
  }
  const desbounceQuery = useDebounce(query, 2000)
  useEffect(()=>{
    console.log(desbounceQuery)
  },[desbounceQuery])
  return (
    <div>
      <input type="text" name="name" placeholder="search" className="border-2 " value={query}
      onChange={handleChange}/>
    </div>
    // <div className="max-w-3xl mx-auto flex flex-col gap-6">
    //   {/* Heading */}
    //   <span className="text-9xl font-bold leading-tight">
    //     Creative <br />
    //     Digital <br />
    //     Specialist
    //   </span>
    //   <div className="flex">

    //   {/* CTA */}
    //   <button className="mr-2 group flex items-center gap-2 w-fit px-6 py-3 border border-black rounded-full text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white">
    //     Let’s Talk
    //     <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
    //       →
    //     </span>
    //   </button>

    //   {/* Social Links */}
    //   <div className="flex items-center gap-4 text-sm font-medium">
    //     {[
    //       { name: "LinkedIn", url: "https://www.linkedin.com", hover: "hover:border-blue-600 hover:text-blue-600" },
    //       { name: "GitHub", url: "https://github.com", hover: "hover:border-gray-800 hover:text-gray-800" },
    //       { name: "Twitter", url: "https://twitter.com", hover: "hover:border-sky-500 hover:text-sky-500" },
    //     ].map((item) => (
    //       <a
    //         key={item.name}
    //         href={item.url}
    //         target="_blank"
    //         rel="noreferrer"
    //         className={`px-4 py-2 border border-black rounded-full transition-all duration-300 ${item.hover}`}
    //       >
    //         {item.name}
    //       </a>
    //     ))}
    //   </div>
    //   </div>
    // </div>
  );
};

export default Home;
