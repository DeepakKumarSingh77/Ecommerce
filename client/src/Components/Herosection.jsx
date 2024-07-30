import { Typography,Box,styled} from '@mui/material'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { bannerData } from '../constant/data';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
const Component=styled(Box)`
   display: flex;
   justify-content: center;
   gap: 8rem;
   margin-top: 30px;
`;
const Image=styled('img')`
   width:100%;
   height:370px;
`;
const SideBar=styled(Box)`
   width: 17vw;
   background-color: white;
   border: 1px solid #d1d1d1;
   object-fit: cover;
  border-radius: 5px;
  padding: 10px;
  box-shadow:31.2px 1.2px 2.2px rgba(0,0,0,.02),-5.5px -5.5px 5.3px rgba(0,0,0,.028),-12px -12px 10px rgba(0,0,0,.035),-8.5px -8.5px 17.9px rgba(0,0,0,.042),19.5px 19.5px 33.4px rgba(0,0,0,.05),100px 100px 80px rgba(0,0,0,.07);
  display: flex;
  flex-direction: column;
  
`;
const Picture=styled(Box)`
   width: 15rem;
   height: 15rem;
`;
const Herosection = () => {
  return (
    <Component>
        <SideBar>
            <Typography style={{fontSize:"18px",fontWeight:"600"}}>Our Happy Customers 😊</Typography> 
            <div style={{backgroundColor:"#d1d1d1",width:"15vw",height:"0.5px",margin:"8px 0 15px 0"}}></div>
            <Typography style={{margin:"10px"}}>Amazing Experience on the site 😊😊</Typography> 
            <div style={{backgroundColor:"#d1d1d1",width:"15vw",height:"0.5px",margin:"8px 0 15px 0"}}></div>
            <Typography  style={{margin:"10px"}}>Got the best products 💖💖</Typography> 
            <div style={{backgroundColor:"#d1d1d1",width:"15vw",height:"0.5px",margin:"8px 0 15px 0"}}></div>
            <Typography  style={{margin:"10px"}}>Amazing Qualtiy 🤘🎉</Typography> 
            <div style={{backgroundColor:"#d1d1d1",width:"15vw",height:"0.5px",margin:"8px 0 15px 0"}}></div>
            <Typography  style={{margin:"10px"}}>You have amazing variety of products 🎉</Typography> 
            <div style={{backgroundColor:"#d1d1d1",width:"15vw",height:"0.5px",margin:"8px 0 15px 0"}}></div>
            <Typography  style={{margin:"10px"}}>Products quality is amazing 👍👍👍👍</Typography> 
            <div style={{backgroundColor:"#d1d1d1",width:"15vw",height:"0.5px",margin:"8px 0 15px 0"}}></div>
            <Typography  style={{margin:"10px"}}>How one can keep so much amazing products all on one site, Hats of to you sir :))</Typography> 
            <div style={{backgroundColor:"#d1d1d1",width:"15vw",height:"0.5px",margin:"8px 0 15px 0"}}></div>  
            <Typography  style={{margin:"10px"}}>You have amazing build quality, Won my trust 👍🎉</Typography> 
            <div style={{backgroundColor:"#d1d1d1",width:"15vw",height:"0.5px",margin:"8px 0 15px 0"}}></div> 
        </SideBar>
        <Box style={{width:"60vw",display:"flex",flexDirection:"column"}}>
            <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={1}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            showDots={false}
            slidesToSlide={1}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            {
                bannerData.map(temp=>(
                    <div>
                        <Image src={temp.url}/>
                    </div>

                ))
            }
            </Carousel>
            <Box style={{width:"60vw",display:"flex",justifyContent:"space-evenly"}}>
                <Picture>
                     <img src="https://ecom-avez.netlify.app/static/media/img1.fb14afd683861ce40d70.png" alt="photo" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                </Picture>
                <Picture>
                    <img src='https://ecom-avez.netlify.app/static/media/watch.b54a619315a5bf751a64.jpg' alt='photo' style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                </Picture>
                <Picture>
                    <img src='https://ecom-avez.netlify.app/static/media/kids.bb8447bebcc2c72f5830.jpg' alt='photo' style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                </Picture>
            </Box>   
        </Box>
        
    </Component>
  )
}

export default Herosection