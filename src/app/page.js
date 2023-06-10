import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center h-screen w-full text-2xl">
      <Link href="/muxplayer" className="text-blue-500 hover:text-blue-700">
        Mux Player
      </Link>
      <Link href="/muxvideo" className="text-blue-500 hover:text-blue-700">
        Mux Video
      </Link>
    </div>
  );
}
