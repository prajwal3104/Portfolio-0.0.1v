import React from 'react';
import Head from 'next/head';
import styles from '../styles/404.module.css'; // Import your custom CSS file

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you were looking for could not be found." />
      </Head>

      <h1>404</h1>
      <p>Uh oh! Looks like the page you're looking for doesn't exist.</p>
      <p>Here are some options:</p>
      <ul>
        <li>
          <a href="/">Go back to the homepage</a>
        </li>
        <li>
          <a href="/search">Search for what you're looking for</a>
        </li>
        <li>
          <a href="/contact">Contact us if you need help</a>
        </li>
      </ul>
    </div>
  );
}
