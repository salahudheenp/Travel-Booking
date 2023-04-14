import React from 'react'
import galleryImages from './galleryImages'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'


const MasonryImagesGallery = () => {
    console.log(galleryImages);

    console.log(Object.values(galleryImages));
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
            <Masonry gutter='1rem'>
                {Object.values(galleryImages)?.map((item, index) => (
                    <img
                        className='masory__img'
                        src={item}
                        key={index}
                        alt=''
                        style={{ width: "100%", display: "block", borderRadius: "10px" }} />
                ))}


            </Masonry>

        </ResponsiveMasonry>
    )
}

export default MasonryImagesGallery
