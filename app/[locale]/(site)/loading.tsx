const SkeletonProduct = () => {
  return (
    <div className='flex flex-col justify-between items-center text-center w-5/12 lg:w-1/5 p-6 border border-sky-50 rounded-md mx-2 my-4'>
      <img className='max-w-full rounded-md' />
      <div className='flex flex-col justify-between h-full'>
        <p className='text-sm md:text-base xl:text-lg font-semibold md:font-bold mt-2 md:mt-4'></p>
        <p className='text-sm md:text-base lg:text-sm dark:text-gray-300 mt-1 md:mt-2 line-clamp-2 xl:line-clamp-3'></p>
        <p className='text-sm md:text-base font-bold mt-1'></p>
      </div>
    </div>
  )
}

const ProductLoader = () => {
  return (
    <div className='flex flex-wrap justify-center m-auto w-full h-[1350px] sm:h-[1800px] md:h-[2300px] lg:h-[900px]'>
      {[...Array(8)].map((_, index) => (
        <SkeletonProduct key={index} />
      ))}
    </div>
  )
}

export default ProductLoader
