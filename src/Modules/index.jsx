import React, { useState } from 'react'

import "./css/index.css"
import "./css/font.css"
import { Link } from 'react-router-dom';
import img1 from "./img/Movie.png"
import img5 from "./images/search.svg"
import img2 from "./images/avatar.svg"
import img3 from "./images/shape (3).svg"
import img4 from "./images/shape (2).svg"
export default function Home() { 
  return( <body class="body">
  <div class="page">
    <nav class="navigation">
      <div class="navigation__items">
        <a>
          <img
            class="navigation__logo"
            src={img1}
            alt="movie"
          />
        </a>
        <ul class="navigation__list">
          <li class="navigation__item">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 0H8C8.6 0 9 0.4 9 1V8C9 8.6 8.6 9 8 9H1C0.4 9 0 8.6 0 8V1C0 0.4 0.4 0 1 0ZM1 11H8C8.6 11 9 11.4 9 12V19C9 19.6 8.6 20 8 20H1C0.4 20 0 19.6 0 19V12C0 11.4 0.4 11 1 11ZM19 0H12C11.4 0 11 0.4 11 1V8C11 8.6 11.4 9 12 9H19C19.6 9 20 8.6 20 8V1C20 0.4 19.6 0 19 0ZM12 11H19C19.6 11 20 11.4 20 12V19C20 19.6 19.6 20 19 20H12C11.4 20 11 19.6 11 19V12C11 11.4 11.4 11 12 11Z"
                fill="white"
              />
            </svg>
          </li>
          <li class="navigation__item">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.9556 0H3.04444C1.36304 0 0 1.36304 0 3.04444V16.9556C0 18.637 1.36304 20 3.04444 20H16.9556C17.763 20 18.5374 19.6792 19.1083 19.1083C19.6792 18.5374 20 17.763 20 16.9556V3.04444C20 2.23701 19.6792 1.46264 19.1083 0.891697C18.5374 0.320753 17.763 0 16.9556 0ZM4 9H2V7H4V9ZM4 11H2V13H4V11ZM18 9H16V7H18V9ZM18 11H16V13H18V11ZM18 2.74V4H16V2H17.26C17.4563 2 17.6445 2.07796 17.7833 2.21674C17.922 2.35552 18 2.54374 18 2.74ZM4 2H2.74C2.54374 2 2.35552 2.07796 2.21674 2.21674C2.07796 2.35552 2 2.54374 2 2.74V4H4V2ZM2 17.26V16H4V18H2.74C2.54374 18 2.35552 17.922 2.21674 17.7833C2.07796 17.6445 2 17.4563 2 17.26ZM17.26 18C17.6687 18 18 17.6687 18 17.26V16H16V18H17.26Z"
                fill="#5A698F"
              />
            </svg>
          </li>
          <li class="navigation__item">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.08 4.48109H20V20H0V4.48109H4.92L2.22 1.20272L3.78 0.029098L7 3.90883L10.22 0L11.78 1.20272L9.08 4.48109ZM2 6.42095V18.0601H12V6.42095H2ZM17 14.1804H15V12.2405H17V14.1804ZM15 10.3007H17V8.36082H15V10.3007Z"
                fill="#5A698F"
              />
            </svg>
          </li>
          <li class="navigation__item">
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3866 0C15.5893 0 15.7832 0.0396563 15.9683 0.118969C16.2591 0.233532 16.4904 0.414188 16.6623 0.660939C16.8341 0.907689 16.92 1.18088 16.92 1.4805V18.5195C16.92 18.8191 16.8341 19.0923 16.6623 19.3391C16.4904 19.5858 16.2591 19.7665 15.9683 19.881C15.8008 19.9515 15.607 19.9868 15.3866 19.9868C14.9636 19.9868 14.5979 19.8458 14.2895 19.5638L8.46001 13.959L2.63054 19.5638C2.31328 19.8546 1.94757 20 1.53338 20C1.33069 20 1.13681 19.9603 0.951751 19.881C0.660939 19.7665 0.42961 19.5858 0.257766 19.3391C0.085922 19.0923 0 18.8191 0 18.5195V1.4805C0 1.18088 0.085922 0.907689 0.257766 0.660939C0.42961 0.414188 0.660939 0.233532 0.951751 0.118969C1.13681 0.0396563 1.33069 0 1.53338 0H15.3866Z"
                fill="#5A698F"
              />
            </svg>
          </li>
        </ul>
      </div>
      <a class="navigation__avatar">
        <img src={img2} alt="avatar" />
      </a>
    </nav>
    <main class="main">
      <section class="search">
        <img class="search__img" src={img5} alt="search" />
        <input
          class="search__input"
          type="text"
          placeholder="Search for movies or TV series"
        />
      </section>
      <section class="trending">
        <h2 class="trending__title">Trending</h2>
        <div class="trending__slider">
          
          <div class="trending__container">
            <svg
              class="trending__favorite"
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>

            <div class="trending__play">
              <img
                class="trending__img"
                src={img3}
                alt="shape"
              />
              <button class="trending__button">Play</button>
            </div>
            <div class="trending__items">
              <p class="trending__item">2019</p>
              <span class="trending__dot"></span>
              <img
                class="trending__item"
                src={img4}
                alt="shape"
              />
              <span class="trending__dot"></span>
              <p class="trending__item">Movie</p>
              <span class="trending__dot"></span>
              <p class="trending__item">PG</p>
            </div>
            <h2 class="trending__name">Beyond Earth</h2>
          </div>
          
          <div class="trending__container">
            <svg
              class="trending__favorite"
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>

            <div class="trending__play">
              <img
                class="trending__img"
                src={img3}
                alt="shape"
              />
              <button class="trending__button">Play</button>
            </div>
            <div class="trending__items">
              <p class="trending__item">2021</p>
              <span class="trending__dot"></span>
              <img
                class="trending__item"
                src={img4}
                alt="shape"
              />
              <span class="trending__dot"></span>
              <p class="trending__item">Movie</p>
              <span class="trending__dot"></span>
              <p class="trending__item">PG</p>
            </div>
            <h2 class="trending__name">Bottom Gear</h2>
          </div>
         
        </div>
      </section>
      <section class="recommended">
        <h2 class="recommended__title">Recommended for you</h2>
        <div class="recommended__wrapper">
        <div>
          <div class="recommended__container">
              <svg
                class="recommended__favorite"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <div class="recommended__play">
                <img
                  class="recommended__img"
                  src={img3}
                  alt="shape"
                />
                <button class="recommended__button">Play</button>
              </div>
            </div>

            <div class="recommended__items">
              <p class="recommended__item">2021</p>
              <span class="recommended__dot"></span>
              <img
                class="recommended__item"
                src={img4}
                alt="shape"
              />
              <p class="recommended__item">Movie</p>
              <span class="recommended__dot"></span>
              <p class="recommended__item">PG</p>
            </div>
            <h3 class="recommended__name">The Great Lands</h3>
          </div>
          <div>
            <div class="recommended__container">
              <svg
                class="recommended__favorite"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <div class="recommended__play">
                <img
                  class="recommended__img"
                  src={img3}
                  alt="shape"
                />
                <button class="recommended__button">Play</button>
              </div>
            </div>
            <div class="recommended__items">
              <p class="recommended__item">2021</p>
              <span class="recommended__dot"></span>
              <img
                class="recommended__item"
                src={img4}
                alt="shape"
              />
              <p class="recommended__item">Movie</p>
              <span class="recommended__dot"></span>
              <p class="recommended__item">PG</p>
            </div>
            <h3 class="recommended__name">The Great Lands</h3>
          </div>
          <div>
            <div class="recommended__container">
              <svg
                class="recommended__favorite"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <div class="recommended__play">
                <img
                  class="recommended__img"
                  src={img3}
                  alt="shape"
                />
                <button class="recommended__button">Play</button>
              </div>
            </div>
            <div class="recommended__items">
              <p class="recommended__item">2021</p>
              <span class="recommended__dot"></span>
              <img
                class="recommended__item"
                src={img4}
                alt="shape"
              />
              <p class="recommended__item">Movie</p>
              <span class="recommended__dot"></span>
              <p class="recommended__item">PG</p>
            </div>
            <h3 class="recommended__name">The Great Lands</h3>
          </div>
          <div>
            <div class="recommended__container">
              <svg
                class="recommended__favorite"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <div class="recommended__play">
                <img
                  class="recommended__img"
                  src={img3}
                  alt="shape"
                />
                <button class="recommended__button">Play</button>
              </div>
            </div>
            <div class="recommended__items">
              <p class="recommended__item">2021</p>
              <span class="recommended__dot"></span>
              <img
                class="recommended__item"
                src={img4}
                alt="shape"
              />
              <p class="recommended__item">Movie</p>
              <span class="recommended__dot"></span>
              <p class="recommended__item">PG</p>
            </div>
            <h3 class="recommended__name">The Great Lands</h3>
          </div>
          <div>
            <div class="recommended__container">
              <svg
                class="recommended__favorite"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <div class="recommended__play">
                <img
                  class="recommended__img"
                  src={img3}
                  alt="shape"
                />
                <button class="recommended__button">Play</button>
              </div>
            </div>
            <div class="recommended__items">
              <p class="recommended__item">2021</p>
              <span class="recommended__dot"></span>
              <img
                class="recommended__item"
                src={img4}
                alt="shape"
              />
              <p class="recommended__item">Movie</p>
              <span class="recommended__dot"></span>
              <p class="recommended__item">PG</p>
            </div>
            <h3 class="recommended__name">The Great Lands</h3>
          </div>
          <div>
            <div class="recommended__container">
              <svg
                class="recommended__favorite"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <div class="recommended__play">
                <img
                  class="recommended__img"
                  src={img3}
                  alt="shape"
                />
                <button class="recommended__button">Play</button>
              </div>
            </div>
            <div class="recommended__items">
              <p class="recommended__item">2021</p>
              <span class="recommended__dot"></span>
              <img
                class="recommended__item"
                src={img4}
                alt="shape"
              />
              <p class="recommended__item">Movie</p>
              <span class="recommended__dot"></span>
              <p class="recommended__item">PG</p>
            </div>
            <h3 class="recommended__name">The Great Lands</h3>
          </div>
          <div>
            <div class="recommended__container">
              <svg
                class="recommended__favorite"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <div class="recommended__play">
                <img
                  class="recommended__img"
                  src={img3}
                  alt="shape"
                />
                <button class="recommended__button">Play</button>
              </div>
            </div>
            <div class="recommended__items">
              <p class="recommended__item">2021</p>
              <span class="recommended__dot"></span>
              <img
                class="recommended__item"
                src={img4}
                alt="shape"
              />
              <p class="recommended__item">Movie</p>
              <span class="recommended__dot"></span>
              <p class="recommended__item">PG</p>
            </div>
            <h3 class="recommended__name">The Great Lands</h3>
          </div>
          <div>
            <div class="recommended__container">
              <svg
                class="recommended__favorite"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <div class="recommended__play">
                <img
                  class="recommended__img"
                  src={img3}
                  alt="shape"
                />
                <button class="recommended__button">Play</button>
              </div>
            </div>
            <div class="recommended__items">
              <p class="recommended__item">2021</p>
              <span class="recommended__dot"></span>
              <img
                class="recommended__item"
                src={img4}
                alt="shape"
              />
              <p class="recommended__item">Movie</p>
              <span class="recommended__dot"></span>
              <p class="recommended__item">PG</p>
            </div>
            <h3 class="recommended__name">The Great Lands</h3>
          </div><div>
          <div class="recommended__container">
              <svg
                class="recommended__favorite"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <div class="recommended__play">
                <img
                  class="recommended__img"
                  src={img3}
                  alt="shape"
                />
                <button class="recommended__button">Play</button>
              </div>
            </div>

            <div class="recommended__items">
              <p class="recommended__item">2021</p>
              <span class="recommended__dot"></span>
              <img
                class="recommended__item"
                src={img4}
                alt="shape"
              />
              <p class="recommended__item">Movie</p>
              <span class="recommended__dot"></span>
              <p class="recommended__item">PG</p>
            </div>
            <h3 class="recommended__name">The Great Lands</h3>
          </div>
          <div>
            <div class="recommended__container">
              <svg
                class="recommended__favorite"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <div class="recommended__play">
                <img
                  class="recommended__img"
                  src={img3}
                  alt="shape"
                />
                <button class="recommended__button">Play</button>
              </div>
            </div>
            <div class="recommended__items">
              <p class="recommended__item">2021</p>
              <span class="recommended__dot"></span>
              <img
                class="recommended__item"
                src={img4}
                alt="shape"
              />
              <p class="recommended__item">Movie</p>
              <span class="recommended__dot"></span>
              <p class="recommended__item">PG</p>
            </div>
            <h3 class="recommended__name">The Great Lands</h3>
          </div>
          <div>
            <div class="recommended__container">
              <svg
                class="recommended__favorite"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <div class="recommended__play">
                <img
                  class="recommended__img"
                  src={img3}
                  alt="shape"
                />
                <button class="recommended__button">Play</button>
              </div>
            </div>
            <div class="recommended__items">
              <p class="recommended__item">2021</p>
              <span class="recommended__dot"></span>
              <img
                class="recommended__item"
                src={img4}
                alt="shape"
              />
              <p class="recommended__item">Movie</p>
              <span class="recommended__dot"></span>
              <p class="recommended__item">PG</p>
            </div>
            <h3 class="recommended__name">The Great Lands</h3>
          </div>
          <div>
            <div class="recommended__container">
              <svg
                class="recommended__favorite"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <div class="recommended__play">
                <img
                  class="recommended__img"
                  src={img3}
                  alt="shape"
                />
                <button class="recommended__button">Play</button>
              </div>
            </div>
            <div class="recommended__items">
              <p class="recommended__item">2021</p>
              <span class="recommended__dot"></span>
              <img
                class="recommended__item"
                src={img4}
                alt="shape"
              />
              <p class="recommended__item">Movie</p>
              <span class="recommended__dot"></span>
              <p class="recommended__item">PG</p>
            </div>
            <h3 class="recommended__name">The Great Lands</h3>
          </div>
          <div>
            <div class="recommended__container">
              <svg
                class="recommended__favorite"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <div class="recommended__play">
                <img
                  class="recommended__img"
                  src={img3}
                  alt="shape"
                />
                <button class="recommended__button">Play</button>
              </div>
            </div>
            <div class="recommended__items">
              <p class="recommended__item">2021</p>
              <span class="recommended__dot"></span>
              <img
                class="recommended__item"
                src={img4}
                alt="shape"
              />
              <p class="recommended__item">Movie</p>
              <span class="recommended__dot"></span>
              <p class="recommended__item">PG</p>
            </div>
            <h3 class="recommended__name">The Great Lands</h3>
          </div>
          <div>
            <div class="recommended__container">
              <svg
                class="recommended__favorite"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <div class="recommended__play">
                <img
                  class="recommended__img"
                  src={img3}
                  alt="shape"
                />
                <button class="recommended__button">Play</button>
              </div>
            </div>
            <div class="recommended__items">
              <p class="recommended__item">2021</p>
              <span class="recommended__dot"></span>
              <img
                class="recommended__item"
                src={img4}
                alt="shape"
              />
              <p class="recommended__item">Movie</p>
              <span class="recommended__dot"></span>
              <p class="recommended__item">PG</p>
            </div>
            <h3 class="recommended__name">The Great Lands</h3>
          </div>
          <div>
            <div class="recommended__container">
              <svg
                class="recommended__favorite"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <div class="recommended__play">
                <img
                  class="recommended__img"
                  src={img3}
                  alt="shape"
                />
                <button class="recommended__button">Play</button>
              </div>
            </div>
            <div class="recommended__items">
              <p class="recommended__item">2021</p>
              <span class="recommended__dot"></span>
              <img
                class="recommended__item"
                src={img4}
                alt="shape"
              />
              <p class="recommended__item">Movie</p>
              <span class="recommended__dot"></span>
              <p class="recommended__item">PG</p>
            </div>
            <h3 class="recommended__name">The Great Lands</h3>
          </div>
          <div>
            <div class="recommended__container">
              <svg
                class="recommended__favorite"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <div class="recommended__play">
                <img
                  class="recommended__img"
                  src={img3}
                  alt="shape"
                />
                <button class="recommended__button">Play</button>
              </div>
            </div>
            <div class="recommended__items">
              <p class="recommended__item">2021</p>
              <span class="recommended__dot"></span>
              <img
                class="recommended__item"
                src={img4}
                alt="shape"
              />
              <p class="recommended__item">Movie</p>
              <span class="recommended__dot"></span>
              <p class="recommended__item">PG</p>
            </div>
            <h3 class="recommended__name">The Great Lands</h3>
          </div>
          
        </div>
      </section>
    </main>
  </div>
</body>)
  
}
