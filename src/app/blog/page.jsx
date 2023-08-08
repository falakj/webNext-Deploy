import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

{ /**
//FETCHING DATA
async function getData() {
  
    const apiEndpoint = process.env.NEXT_PUBLIC_API_URL || ''; // Define your API URL environment variable
  if (!apiEndpoint) {
    throw new Error('API URL is not defined');
  }
  
  const res = await fetch(`${apiEndpoint}/api/posts`, { 
    method: "GET",
    headers: {
      accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

*/ }

{/**

//FETCHING DATA
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

//A BLOG PAGE FOR OUTPUT (MAPPING) DATA
const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

 */}

 
 const Blog = () => {
   return (
     <div>Blog page</div>
   )
 }
 

export default Blog;
