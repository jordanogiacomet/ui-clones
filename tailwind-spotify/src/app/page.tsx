import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume2, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import { Sidebar } from '@/components/Sidebar';


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar.Root>
          <Sidebar.Header>
            <Sidebar.Dot className='bg-red-500'/>
            <Sidebar.Dot className='bg-yellow-500'/>
            <Sidebar.Dot className='bg-green-500'/>
          </Sidebar.Header>
          <Sidebar.Nav className='space-y-5 mt-10'>
            <Sidebar.Link href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Sidebar.Icon icon={HomeIcon}/>
              Home
            </Sidebar.Link>
            <Sidebar.Link href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Sidebar.Icon icon={Search}/>
              Search
            </Sidebar.Link>
            <Sidebar.Link href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Sidebar.Icon icon={Library}/>
              Your Library
            </Sidebar.Link>
          </Sidebar.Nav>
          <Sidebar.Nav className='mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
            <Sidebar.Link className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              Hot Hits Brasil
            </Sidebar.Link>  
            <Sidebar.Link className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              Top 100 Brasil
            </Sidebar.Link>
            <Sidebar.Link className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              This is Avenged Sevenfold
            </Sidebar.Link>
            <Sidebar.Link className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              Mix JXDN
            </Sidebar.Link>
            <Sidebar.Link className="text-sm text-zinc-400 hover:text-zinc-100" href="">
              Radiohead Hits
            </Sidebar.Link>
          </Sidebar.Nav>
        </Sidebar.Root>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href='' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
              <Image width={104} height={104} src="/album.jpeg" alt='Capa do album'/>
              <strong>Nightmare</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
              <Image width={104} height={104} src="/album.jpeg" alt='Capa do album'/>
              <strong>Nightmare</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
              <Image width={104} height={104} src="/album.jpeg" alt='Capa do album'/>
              <strong>Nightmare</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
              <Image width={104} height={104} src="/album.jpeg" alt='Capa do album'/>
              <strong>Nightmare</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
              <Image width={104} height={104} src="/album.jpeg" alt='Capa do album'/>
              <strong>Nightmare</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
              <Image width={104} height={104} src="/album.jpeg" alt='Capa do album'/>
              <strong>Nightmare</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Jordano</h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <a href='' className="flex flex-col gap-2 bg-white/5 group rounded-md p-4 hover:bg-white/10 transition-colors">
              <Image className="w-full" width={150} height={150} src="/album.jpeg" alt='Capa do album'/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Avenged Sevenfold</span>
            </a>
            <a href='' className="flex flex-col gap-2 bg-white/5 p-4 group rounded-md hover:bg-white/10 transition-colors">
              <Image className="w-full" width={150} height={150} src="/album.jpeg" alt='Capa do album'/>
              <strong className="font-semibold">Daily Mix 2</strong>
              <span className="text-sm text-zinc-500">Avenged Sevenfold</span>
            </a>
            <a href='' className="flex flex-col gap-2 bg-white/5 p-4 group rounded-md hover:bg-white/10 transition-colors">
              <Image className="w-full" width={150} height={150} src="/album.jpeg" alt='Capa do album'/>
              <strong className="font-semibold">Daily Mix 3</strong>
              <span className="text-sm text-zinc-500">Avenged Sevenfold</span>
            </a>
            <a href='' className="flex flex-col gap-2 bg-white/5 p-4 group rounded-md hover:bg-white/10 transition-colors">
             <Image className="w-full" width={150} height={150} src="/album.jpeg" alt='Capa do album'/>
             <strong className="font-semibold">Daily Mix 4</strong>
             <span className="text-sm text-zinc-500">Avenged Sevenfold</span>
            </a>
            <a href='' className="flex flex-col gap-2 bg-white/5 p-4 group rounded-md hover:bg-white/10 transition-colors">
              <Image className="w-full" width={150} height={150} src="/album.jpeg" alt='Capa do album'/>
              <strong className="font-semibold">Daily Mix 5</strong>
              <span className="text-sm text-zinc-500">Avenged Sevenfold</span>
            </a>
          </div>
        </main>
      </div>
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image width={56} height={56} src="/album.jpeg" alt='Capa do album'/>
            <div className="flex flex-col">
              <strong className="font-normal">Natural Born Killer</strong>
              <span className="text-xs text-zinc-400">Avenged Sevenfold</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-6">
              <Shuffle size={20} className="text-zinc-200"/>
              <SkipBack size={20} className="text-zinc-200"/>
              <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                <Play />
              </button>
              <SkipForward size={20} className="text-zinc-200"/>
              <Repeat size={20} className="text-zinc-200"/>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400">0:31</span>
              <div className="h-1 rounded-full w-96 bg-zinc-600">
                <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
              </div>
              <span className="text-xs text-zinc-400">2:14</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Mic2 size={20}/>
            <LayoutList size={20}/>
            <Laptop2 size={20}/>
            <div className="flex items-center gap-2">
              <Volume2 size={20}/>
              <div className="h-1 rounded-full w-24 bg-zinc-600">
                <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
              </div>
            </div>
            <Maximize2 size={20}/>
          </div>
        </footer>
    </div>
  );
}
