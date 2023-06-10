import Video from '@/components/WMuxPlayer'


export default async function Page() {
  const videoId = "no023mSspc654553LythZLRxMjhYgVqcSqSo00x01NY7YY"
  console.log("Hello")

  return (
    <div className="bg-slate-400 h-screen w-full">
      <div className="h-[600px] w-[600px] bg-yellow-400 mx-auto my-0">
        <Video name={"Learning"} videoId={videoId} autoplay={true} preloadAuto={true} cover={true}/>
      </div>
    </div>
  )
}
