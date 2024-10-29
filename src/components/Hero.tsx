import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { RiBodyScanFill, RiBookmark3Fill, RiMenFill, RiServiceFill } from "react-icons/ri";
import Social from "./Social";
import HeroImg from "./HeroImg";
import Badge from "./Badge";
const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[auto] bg-bottom">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Photography
            </div>
            <h1 className="h1 uppercase">Let's Make Magic !</h1>
            <p className="subtitle maz-w-[590px] mt-4 mx-auto xl:mx-0">
              We are fine art,nature & portrait film phototgraphers from India ,
              with a special love for nature light, medium format film cameras &
              redheads with freckles.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <div className="flex w-full gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email Address
                </label>
                <Input type="email" id="email" placeholder="Email" />
                <Link href="/contact">
                  <Button className="gap-x-2 bg-black">
                    Subscribe <RiMenFill size={18} />
                  </Button>
                </Link>
              </div>
            </div>
            <Social
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <HeroImg
              imgSrc="/about/photography.svg"
              containerStyles="w-[550px] h-[475px] bg-no-repeat relative bg-bottom"
            />
          </div>
        </div>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">
                    Year of Experience
                    </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"> 
                   <Badge icon={<RiBookmark3Fill/>}
                   endCountNum={12}
                   endCountText="+"
                   />
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">
                    Followers
                    </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"> 
                   <Badge icon={<RiBodyScanFill/>}
                   endCountNum={800}
                   endCountText="k"
                   />
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">
                    Projects
                    </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"> 
                   <Badge icon={<RiServiceFill/>}
                   endCountNum={20}
                   endCountText="+"
                   />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
