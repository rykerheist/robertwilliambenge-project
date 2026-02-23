import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="h-screen w-full relative flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      {/* Full-width background image */}
      <Image
        src="/images/hero.png"
        alt="Robert William Benge hero"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Opaque coloured overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(10, 10, 10, 0.40)" }} />

      <div className="max-w-4xl z-10 flex flex-col items-center gap-8">

        {/* The Main Editorial Headline */}
        <h1 style={{ fontSize: "9vw", lineHeight: 1.05 }} className="font-black tracking-tight uppercase text-white w-full text-center">
          The Art of Millinery
        </h1>

        {/* The Subtext */}
        <p className="text-sm md:text-xl max-w-2xl text-white font-semibold tracking-wider md:tracking-widest uppercase leading-relaxed px-4 md:px-0">
          Bespoke, handcrafted headwear designed to elevate your silhouette. Discover our exclusive collection of sculptural hats and fascinators.
        </p>

        {/* The Call to Action */}
        <LocalizedClientLink href="/store" className="mt-8">
          <button style={{ color: "white", borderColor: "white", borderWidth: "1px", borderStyle: "solid", padding: "12px 24px", background: "transparent", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}>
            Explore the Collection
          </button>
        </LocalizedClientLink>

      </div>
    </div>
  )
}

export default Hero