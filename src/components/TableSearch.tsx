"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const TableSearch = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = (e.currentTarget[0] as HTMLInputElement).value;

    const params = new URLSearchParams(window.location.search);
    params.set("search", value);
    router.push(`${window.location.pathname}?${params}`);
  };

  // <div class="relative flex mr-auto w-full max-w-64 flex-col gap-1 text-black dark:text-neutral-200">
	// 	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="absolute left-2.5 top-1/2 size-5 -translate-y-1/2 text-black/50 dark:text-neutral-200/50"> 
	// 		<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
	// 	</svg>
	// 	<input type="search" name="search" placeholder="Search" aria-label="search" class="w-full rounded-none border border-black bg-neutral-50 py-2.5 pl-10 pr-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 disabled:cursor-not-allowed disabled:opacity-75 dark:border-neutral-300 dark:bg-neutral-800/50 dark:focus-visible:outline-violet-400" />
	// </div>

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex mr-auto w-full max-w-64 flex-col gap-1 text-black dark:text-neutral-200"
    >
      {/* <Image src="/search.png" alt="" width={14} height={14} /> */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="absolute left-2.5 top-1/2 size-5 -translate-y-1/2 text-black/50 dark:text-neutral-200/50"> 
			<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
		</svg>
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-none border border-black bg-neutral-50 py-2.5 pl-10 pr-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 disabled:cursor-not-allowed disabled:opacity-75 dark:border-neutral-300 dark:bg-neutral-800/50 dark:focus-visible:outline-violet-400"
      />
    </form>
  );
};

export default TableSearch;
