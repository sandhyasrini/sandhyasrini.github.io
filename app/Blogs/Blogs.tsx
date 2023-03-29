'use client';
import React, { useEffect, useRef, useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { useIsInViewport } from '../components/UseIsInViewPort';
import { getMediumStories } from '../api/RestClient';
import ExternalLink from '../components/icons/ExternalLink';
import MediumIcon from '../components/icons/MediumIcon';

function Blogs() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    getMediumStories()
      .then((data) => {
        console.log(data);
        setStories(data.items);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  const ref = useRef(null);

  const isInViewport = useIsInViewport(ref);
  return (
    <section id='blogs' className='mt-[10rem] text-white' ref={ref}>
      <SectionHeading id='04.' title='Blogs' isInView={isInViewport} />
      {!error && (
        <div className='grid gap-3 lg:grid-cols-3 my-[1.8rem] py-[3.5rem]'>
          {stories.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                    window.open(item.link);
                  }}
                className='rounded border-white border-[1px] m-4 p-7 hover:scale-105 cursor-pointer h-[25rem]'
              >
                <div className='text-white w-[100%] grid grid-cols-2 justify-between'>
                <MediumIcon />
                <div className='flex justify-end hover:scale-105'>
                <ExternalLink />
                </div>
                </div>

                <h3 className='font-bold font-calibre py-5 text-[#009d68] lext-md lg:text-lg h-[7rem] '>
                  {item.title}
                </h3>
                <p className='h-[10rem]'>
                  {item.description
                    .replace(/(<([^>]+)>)/gi, '')
                    .substring(0, 150)}
                  {'...'}
                </p>
                <footer className='rounded-lg shadow static bottom-0'>
                  {item.categories.map((skill, ind) => {
                    return (
                      <span
                        key={ind}
                        className=' text-white font-light mx-[4px] my-4 py-4 text-[12px] font-mono'
                      >
                        {skill}
                      </span>
                    );
                  })}
                </footer>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Blogs;
