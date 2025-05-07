import Appbar from './Appbar'

const FullblogSkeleton = () => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 pt-10 w-full max-w-screen-xl">
          {/* Blog Content Skeleton */}
          <div className="col-span-8 text-center">
            <div className="h-10 w-3/4 mx-auto bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="h-4 w-1/3 mx-auto bg-gray-300 rounded mt-3 animate-pulse"></div>
            <div className="mt-4 space-y-3">
              <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 w-4/6 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Author Section Skeleton */}
          <div className="col-span-4 text-slate-600 text-lg">
            <div className="h-5 w-20 bg-gray-300 rounded animate-pulse"></div>
            <div className="flex mt-4">
              <div className="pr-2 flex flex-col justify-center">
                <div className="h-12 w-12 bg-gray-300 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="h-5 w-32 bg-gray-300 rounded animate-pulse"></div>
                <div className="mt-2 h-4 w-40 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullblogSkeleton
