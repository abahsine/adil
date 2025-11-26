// IconAvantage.tsx
export function  IconAvantage({content , children}){
  return(
    <div className='flex flex-col  gap-8 items-center ' >
              <div className='w-[80px] h-[80px] bg-[#E4BB39] flex justify-center items-center rounded-[50%] '>
               {children}
              </div>
              <h3 className='prussColor font-medium text-2xl  whitespace-nowrap'>{content}</h3>

            </div>
  )
}


