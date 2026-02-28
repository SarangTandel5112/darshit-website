import { Link } from "react-router-dom";
import { heroContent } from "../../data/pavanity-data";

export default function HeroSection() {
    return (
        <div className="relative bg-[#f5f5f5] dark:bg-dark-secondary overflow-hidden">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto">
                    <div className="flex flex-col items-center justify-center text-center py-20 sm:py-28 md:py-36 lg:py-44 px-4">
                        {/* H1 - Main Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-title dark:text-white leading-none max-w-4xl text-center">
                            {Array.isArray(heroContent.h1)
                                ? heroContent.h1.map((line, i) => (
                                      <span
                                          key={i}
                                          className={i === 1 ? "block text-center" : "block"}
                                      >
                                          {line}
                                      </span>
                                  ))
                                : heroContent.h1}
                        </h1>
                        {/* H2 - Sub Headline */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-title dark:text-white mt-6 max-w-3xl leading-none">
                            {heroContent.h2}
                        </h2>
                        {/* Description */}
                        <p className="text-base sm:text-lg text-title dark:text-white-light mt-4 md:mt-5 max-w-3xl">
                            {heroContent.description}
                        </p>
                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 w-full sm:w-auto">
                            <Link
                                to="/contact"
                                className="btn btn-primary"
                                data-text={heroContent.primaryCTA}
                            >
                                <span>{heroContent.primaryCTA}</span>
                            </Link>
                            <Link
                                to="/products"
                                className="btn btn-outline"
                                data-text={heroContent.secondaryCTA}
                            >
                                <span>{heroContent.secondaryCTA}</span>
                            </Link>
                        </div>
                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-10 md:mt-12">
                            {heroContent.trustIndicators.map(
                                (indicator, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center px-4 py-2 text-sm md:text-base text-title dark:text-white border border-title dark:border-white border-opacity-20 dark:border-opacity-20 rounded"
                                    >
                                        {indicator}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
