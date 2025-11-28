// Pancarte.tsx
import { CallToAction } from './CallToAction';

export default function Pancarte ({content , title , img}){
  return(
          <div className='  lg:max-w-1/4 w-[90%] max-w-[400px] pt-0  rounded-3xl bg-white '  >
              <img src={img} alt="" className='h-[250px] w-full  pt-0  object-cover overflow-hidden rounded-t-3xl '/>
           
            <div className='flex flex-col gap-5 py-6 px-8 items-center '>
                   
                   <h4 className='font-semibold text-2xl prussColor'>{title}</h4>
                   <p className='montserrat text-start leading-5 md:leading-6 text-md font-light text-[#00000073]'>{content}</p>
            <CallToAction color={" "} />
            </div>
              
          </div>
  )
}
