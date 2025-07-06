import Autoplay from 'embla-carousel-autoplay'

import type { ProjectProp } from 'types/type.ts'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from 'components/ui/carousel.tsx'

export function CarouselHero({
  formattedProjects
}: {
  formattedProjects: ProjectProp[] | undefined
}) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 5000
        })
      ]}
    >
      <CarouselContent className="-ml-12">
        {formattedProjects?.map(({ data }, idx) => (
          <CarouselItem className="pl-12 lg:basis-1/3" key={idx}>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col items-center justify-between sm:flex-row">
                <p className="text-center text-lg uppercase">{data.title}</p>

                <p className="text-dark/70 dark:text-light/70 text-lg uppercase">
                  {data.subtitle}
                </p>
              </div>

              <a
                className="[&>*]:grid-stack group grid rounded-md shadow-md"
                href={data.link}
                target="_blank"
                rel="prefetch"
              >
                <IView
                  className="invisible relative top-5 right-5 z-[1] ml-auto transition-all delay-200 ease-in group-hover:visible"
                  link={data.link}
                />

                <img
                  className="aspect-auto w-full rounded-md object-cover opacity-80 transition-all delay-200 ease-in group-hover:opacity-100"
                  src={data.image.src}
                  alt={data.image.alt}
                  width={data.image.width}
                  height={data.image.height}
                  loading="lazy"
                />
              </a>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="top-0 left-1/2 translate-y-[-3.5rem] translate-x-[-2.5rem] bg-transparent hover:bg-teal/20"
        variant="none"
      />
      <CarouselNext
        className="top-0 right-1/2 translate-y-[-3.5rem] translate-x-[2.5rem] bg-transparent hover:bg-teal/20"
        variant="none"
      />
    </Carousel>
  )
}

export function IView({
  link,
  className
}: {
  link: string
  className: string
}) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      viewBox="0 0 122.6 122.88"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <title>{link}</title>
      <g>
        <path
          d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"
          fill="#1C9DB6"
        ></path>
      </g>
    </svg>
  )
}
