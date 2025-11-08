import { useState, useEffect } from 'react';
import type { JSX } from 'react';

interface Posts {
  id: number;
  created_at: string;
  user_id: number;
  country: string;
  category: string;
  title: string;
  text: string;
  image: string;
}

export default function Discover({ allData, screen, setScreen, newPostData }) {
  //state that holds a specific country data
  const [country, setCountry] = useState<Posts>();
  //array of all the categories
  const categories: string[] = ['food', 'games', 'customs', 'rituals', 'media'];
  //array of all data by category (array of arrays, corresponds to index of category array)
  const filterByCategory: [][] = categories.map((category) => {
    return allData.filter((data) => data.category === category);
  });

  let display;

  if (!country) {
    display = (
      <>
        {categories.map((category, index) => {
          const randomizedPosts: Posts[] = [];
          const currentCategoryArr: Posts[] | null = filterByCategory[index];
          let i = 0;
          if (currentCategoryArr.length >= 5) {
            while (i < 5) {
              let random = Math.floor(
                Math.random() * currentCategoryArr.length
              );
              randomizedPosts.push(currentCategoryArr[random]);
              i++;
            }
          } else {
            while (i < currentCategoryArr.length) {
              let random = Math.floor(
                Math.random() * currentCategoryArr.length
              );
              randomizedPosts.push(currentCategoryArr[random]);
              i++;
            }
          }
          return (
            <>
              <div className='galleryHeader'>
                <h2>{category}</h2>
              </div>
              <div className='galleryPosts'>
                {randomizedPosts.map((item) => {
                  return (
                    <div className='card'>
                      <img src={item.image} alt={item.title} />
                      <div className='card-text'>{item.title}</div>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </>
    );
  } else {
    display = <></>;
  }

  //logic for generating randomized posts for each category in gallery view

  return (
    <>
      <div className='galleryDisplay'>{display}</div>
    </>
  );
}
