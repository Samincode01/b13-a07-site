import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-[calc(100vh-140px)] bg-[#F8FAFC] flex items-center justify-center px-6 py-10">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[36px] border border-[#E5E7EB] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

        <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-[#244D3F]/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#244D3F]/10 blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center px-8 py-20 text-center md:px-16">

          <div className="mb-6 flex items-center gap-3 rounded-full border border-[#D1D5DB] bg-[#F8FAFC] px-5 py-2">
            <div className="h-2.5 w-2.5 rounded-full bg-[#244D3F]"></div>
            <p className="text-sm font-medium text-[#244D3F]">
              Error • Page unavailable
            </p>
          </div>

          <h1 className="text-[110px] md:text-[170px] leading-none font-black tracking-[-6px] text-[#244D3F]">
            404
          </h1>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#1F2937] leading-tight">
            We couldn’t find <br className="hidden md:block" />
            the page you requested
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
            The page may have been moved, deleted, or the URL might be incorrect.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Link href="/">
              <button className="btn h-14 rounded-2xl border-none bg-[#244D3F] px-8 text-white hover:bg-[#1D4034] shadow-lg shadow-[#244D3F]/20">
                <FaArrowLeft className="text-sm" />
                Back to Home
              </button>
            </Link>

          </div>

          <div className="mt-14 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#244D3F]"></div>
            <div className="h-2 w-10 rounded-full bg-[#244D3F]/50"></div>
            <div className="h-2 w-2 rounded-full bg-[#244D3F]/30"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;