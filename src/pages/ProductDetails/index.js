import React from 'react';
import { Breadcrumbs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Slider from 'react-slick';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import product1 from '../../assets/images/product-1.jpg';
import product2 from '../../assets/images/product-2.jpg';
import product3 from '../../assets/images/product-3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledBreadCrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover , &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const ProductDetails = () => {
  const productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const productSliderSmallOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <>
      <div className='right-content w-100'>
        <div className='card shadow border-0 w-100 flex-row p-4'>
          <h5 className='mb-0'>Product View</h5>
          <Breadcrumbs aria-label='breadcrumb' className='ml-auto breadcrumbs_' separator="/">
            <StyledBreadCrumb
              component='a'
              href='#'
              label='Dashboard'
              icon={<HomeIcon fontSize='small' />}
            />
            <StyledBreadCrumb
              component='a'
              href='#'
              label='Products'
            />
            <StyledBreadCrumb
              label='Products View'
            />
          </Breadcrumbs>
        </div>

        <div className='card'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='sliderWrapper pt-3 pb-3 pl-4 pr-4'>
                <h6 className='mb-4'>Product Gallery</h6>
              <Slider {...productSliderOptions} className='sliderBig mb-2'>
                <div className='item'>
                  <img src={product1} alt='product-1' className='w-100' />
                </div>
              </Slider>

              <Slider {...productSliderSmallOptions} className='sliderSmall'>
                <div className='item'>
                  <img src={product2} alt='product-2' className='w-100' />
                </div>
                <div className='item'>
                  <img src={product3} alt='product-3' className='w-100' />
                </div>
                <div className='item'>
                  <img src={product1} alt='product-1' className='w-100' />
                </div>
                <div className='item'>
                  <img src={product2} alt='product-2' className='w-100' />
                </div>
                <div className='item'>
                  <img src={product3} alt='product-3' className='w-100' />
                </div>
                <div className='item'>
                  <img src={product2} alt='product-2' className='w-100' />
                </div>
              </Slider>
              </div>
            </div>
            <div className='col-md-7'>
            <div className="pt-3 pb-3 pl-4 pr-4">
            <h6 className='mb-4'>Product Details</h6>
            <h4>Casual Branded T-Shitrs For Men Slim Fit, All Sizes Available</h4>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
