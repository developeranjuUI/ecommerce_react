import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={'https://developeranjuui.github.io/product_images/about_img.png'} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, soluta repellat tempore ratione nihil eum harum fugit commodi, exercitationem consequatur similique delectus doloribus iure tenetur at modi dolorem repudiandae eos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque ab quo eligendi porro suscipit, dolor, unde accusamus vitae nostrum cumque perferendis voluptas pariatur dolorem commodi molestias, recusandae hic aliquid!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, deserunt exercitationem id explicabo autem ipsam laboriosam aliquid quibusdam provident architecto eum eaque quod voluptas esse nostrum magni reiciendis, suscipit sapiente?</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed assumenda inventore nobis, quidem quisquam impedit, velit minima repellendus doloremque perspiciatis dicta, quam deserunt placeat labore ut voluptatum vero vitae provident!
          Repudiandae excepturi ipsa dolorem laboriosam laudantium tenetur consequatur consequuntur quam ab reprehenderit at, nam facilis aut soluta rerum adipisci doloribus. Harum commodi natus magni minima quisquam minus tempore neque nemo!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed assumenda inventore nobis, quidem quisquam impedit, velit minima repellendus doloremque perspiciatis dicta, quam deserunt placeat labore ut voluptatum vero vitae provident!
          Repudiandae excepturi ipsa dolorem laboriosam laudantium tenetur consequatur consequuntur quam ab reprehenderit at, nam facilis aut soluta rerum adipisci doloribus. Harum commodi natus magni minima quisquam minus tempore neque nemo!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed assumenda inventore nobis, quidem quisquam impedit, velit minima repellendus doloremque perspiciatis dicta, quam deserunt placeat labore ut voluptatum vero vitae provident!
          Repudiandae excepturi ipsa dolorem laboriosam laudantium tenetur consequatur consequuntur quam ab reprehenderit at, nam facilis aut soluta rerum adipisci doloribus. Harum commodi natus magni minima quisquam minus tempore neque nemo!</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
};

export default About;
