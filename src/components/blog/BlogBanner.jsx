import { Image_URL } from '@/config/constants';
import { blogsApi } from '@/lib/api/blog';
import React, { useEffect, useState } from 'react'
import Image from "next/image";

const BlogBanner = () => {
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        blogsApi.getBanner().then((res) => {
            if (res?.data?.length > 0) {
                const bannerData = res.data[0];

                const fixedImageUrl = bannerData.imageUrl.replace(/\\/g, "/");

                setBanner({
                    ...bannerData,
                    imageUrl: fixedImageUrl,
                });
            }
        });
    }, []);

    return (
        <div className="px-4 pb-6 mt-3">
            <div className="relative h-96 w-full rounded-xl overflow-hidden">
                <Image
                    src={`${Image_URL}${banner?.imageUrl}`}
                    alt={banner?.title || "Banner"}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col ml-10 mt-10">

                    <h3 className="text-white font-bold text-2xl mb-1">{banner?.title || ""}</h3>
                    <h3 className="text-white font-bold text-2xl ml-4">{banner?.description || ""}</h3>
                </div>
            </div>
        </div>
    )
}

export default BlogBanner