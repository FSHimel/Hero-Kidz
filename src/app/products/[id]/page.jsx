import { getSingleProduct } from "@/actions/server/product";
import Image from "next/image";
import { Star, CheckCircle2, HelpCircle, FileText } from "lucide-react";
import ProductActions from "./ProductActions";

const siteUrl = "https://hero-kidzz-two.vercel.app";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  const title = `${product.title} | Hero Kidzz`;

  const description =
    product.description?.slice(0, 160) ||
    `View ${product.title} on Hero Kidzz.`;

  const image = product.image || "https://i.ibb.co/jZHgJmms/image.png";

  return {
    title,

    description,

    openGraph: {
      type: "website",
      url: `${siteUrl}/products/${params.id}`,
      title,
      description,

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    alternates: {
      canonical: `${siteUrl}/products/${params.id}`,
    },
  };
}

const SingleProduct = async ({ params }) => {
  const { id } = await params;
  const rawProduct = await getSingleProduct(id);

  // Convert MongoDB / server-side document to a plain object
  const product = JSON.parse(JSON.stringify(rawProduct));

  return (
    <div className="min-h-screen bg-base-100 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Grid: Gallery & Buying Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image Gallery */}
        <div className="flex flex-col gap-4">
          <div className="aspect-square relative overflow-hidden rounded-2xl border border-base-200 bg-base-200/50 shadow-inner">
            <Image
              src={product.image}
              alt={product.title}
              className="object-contain p-4"
              width={700}
              height={600}
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-base-content tracking-tight">
              {product.title}
            </h1>
            <p className="text-lg font-medium text-base-content/70 font-sans">
              {product.bangla}
            </p>

            {/* Ratings & Sold Stats */}
            <div className="flex items-center gap-4 text-sm pt-1">
              <div className="flex items-center gap-1 bg-warning/10 text-warning-content px-2.5 py-1 rounded-full">
                <Star size={16} className="fill-warning text-warning" />
                <span className="font-bold">{product.ratings}</span>
                <span className="text-xs text-base-content/60">
                  ({product.reviews} reviews)
                </span>
              </div>
              <div className="divider divider-horizontal mx-0"></div>
              <span className="text-base-content/60 font-medium">
                {product.sold} Units Sold
              </span>
            </div>
          </div>

          {/* Key Feature Highlights */}
          {product.info && product.info.length > 0 && (
            <div className="bg-base-200/50 rounded-xl p-4 border border-base-200 space-y-2">
              <p className="text-xs font-semibold text-base-content/50 uppercase tracking-wider">
                Key Highlights
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.info.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-base-content/80"
                  >
                    <CheckCircle2 size={16} className="text-success shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Client-side Action Buttons */}
          <ProductActions product={product} />
        </div>
      </div>

      {/* Bottom Tabs: Detailed Description & Q&A */}
      <div className="mt-12 pt-8 border-t border-base-200">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Detailed Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 border-b border-base-200 pb-3">
              <FileText className="text-primary" size={22} />
              <h2 className="text-xl font-bold text-base-content">
                পণ্যের বিস্তারিত বিবরণ
              </h2>
            </div>
            <div className="prose prose-slate max-w-none text-base-content/80 whitespace-pre-line leading-relaxed">
              {product.description}
            </div>
          </div>

          {/* Q&A Accordion */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-base-200 pb-3">
              <HelpCircle className="text-primary" size={22} />
              <h2 className="text-xl font-bold text-base-content">
                সাধারণ জিজ্ঞাসা (Q&A)
              </h2>
            </div>

            {product.qna && product.qna.length > 0 ? (
              <div className="space-y-3">
                {product.qna.map((item, index) => (
                  <div
                    key={index}
                    className="collapse collapse-plus bg-base-200/60 border border-base-200 rounded-xl"
                  >
                    <input
                      type="radio"
                      name="product-qna"
                      defaultChecked={index === 0}
                    />
                    <div className="collapse-title text-sm font-semibold text-base-content">
                      {item.question}
                    </div>
                    <div className="collapse-content text-sm text-base-content/70">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-base-content/50">
                No questions available for this product yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
