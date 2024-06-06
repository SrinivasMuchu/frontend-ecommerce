
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const CarouselContainer = styled.div`
    display: flex;
    overflow: hidden;
    height:75vh;
    width: 100%; /* Adjust width as needed */
    position: relative;
`;

const Slide = styled.div`
    min-width: 100%;
    transition: transform 0.5s ease-in-out;
`;

const Image = styled.img`
    width: 100%;
    height:75vh
`;

const DotsContainer = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
`;

const Dot = styled.div`
    height: 10px;
    width: 10px;
    background-color: ${props => props.active ? 'black' : 'gray'};
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
`;
const images = [
    'https://img.freepik.com/free-photo/seafoam-lilac-background_23-2147735011.jpg?size=626&ext=jpg&uid=R116152838&ga=GA1.1.1462843302.1696500966&semt=ais',
    'https://portfolio-ks.s3.ap-south-1.amazonaws.com/contact-bg.png',
    'https://img.freepik.com/free-photo/blue-surface-with-study-tools_23-2147864592.jpg?size=626&ext=jpg&uid=R116152838&ga=GA1.1.1462843302.1696500966&semt=ais',
];
function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <CarouselContainer>
            <div style={{ display: 'flex', transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <Slide key={index}>
                        <Image src={image} alt={`Slide ${index}`} />
                    </Slide>
                ))}
            </div>
            <DotsContainer>
                {images.map((_, index) => (
                    <Dot
                        key={index}
                        active={index === currentIndex}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </DotsContainer>
        </CarouselContainer>
    );
};




export default Carousel

// import React from 'react'

// function Carousel() {
//   return (
//     <div>Carousel</div>
//   )
// }

// export default Carousel