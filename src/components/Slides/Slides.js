import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Slidesinfo from './Slidesinfo';
import Slidesinfo2 from './Slides2info';

function Slides() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <>
      <div
        className="embla card max-w-md rounded-3xl mt-5 bg-blue-950 p-4 text-white md:-ml-56 lg:-ml-36 sm:ml-40"
        ref={emblaRef}
      >
        <div className="embla__container ">
          <div className="embla__slide">
            <Slidesinfo />
          </div>
          <div className="embla__slide">
            <Slidesinfo2 />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-5">
        <div class="h-7 w-7 rounded-full bg-blue-900"></div>
        <div class="h-7 w-7 rounded-full bg-blue-900"></div>
      </div>
    </>
  );
}

export default Slides;
