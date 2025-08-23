import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their home.</p>
          <p>We believe that shopping should be an enjoyable and seamless experience, which is why we have curated a diverse selection of high-quality products to cater to every taste and preference. Our team is dedicated to ensuring that every customer finds exactly what they're looking for, and we are constantly updating our inventory to include the latest trends and must-have items.</p>
          <b className='text-gray-800'>Our Mission:</b>
          <p>To empower customers by providing a personalized and convenient shopping experience that exceeds their expectations.</p>

        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
         <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance</b>
            <p className='text-gray-600'>We take pride in offering only the highest quality products. Our team rigorously tests and reviews each item to ensure it meets our strict standards before it reaches our customers.</p>
         </div>
        <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>We understand that our customers lead busy lives, which is why we strive to make the shopping experience as easy and enjoyable as possible. With our user-friendly website and streamlined checkout process, you can find and purchase your favorite products with just a few clicks.</p>
        </div>
        <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>We believe in going above and beyond for our customers. Our dedicated support team is always ready to assist you with any inquiries or concerns you may have, ensuring a smooth and enjoyable shopping experience.</p>
        </div>

      </div>
      <NewsletterBox/>


    </div>
  )
}

export default About