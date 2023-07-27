import {
    ComplexImage as ComplexImageType,
    Image as ImageType,
  } from "../types/autogen";
  import { Image } from "@yext/pages/components";
import Cta from "./Cta";
  
  interface ArticleProps {
    name: string;
    fins_articleDescription: string;
    fins_articlePhoto?: ComplexImageType | ImageType;
  }
  
  export default function Articles({ articles }: { articles: ArticleProps[] }) {
    if (articles === undefined || articles.length === 0) {
      return null;
    }
  
    const featuredArticle = articles[0];

  
    return (
      <div className="bg-white pb-5">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
          <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
            {featuredArticle.fins_articlePhoto && (
              <Image
                image={featuredArticle.fins_articlePhoto}
                className="rounded-lg"
              />
            )}
            <h2
              id="featured-post"
              className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              {featuredArticle.name}
            </h2>
            <p className="mt-4 text-lg  text-gray-600 line-clamp-4">
              {featuredArticle.fins_articleDescription}
            </p>
          </article>
          <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
            <div className="-my-12 divide-y divide-gray-900/10">
              {articles.map((article, idx) => (
                <article key={idx} className="py-12">
                  <div className="group relative max-w-xl">
                    <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {article.name}
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-gray-600 line-clamp-3">
                      {article.fins_articleDescription}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

      </div>
    );
  }