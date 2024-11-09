"use client";

import React from 'react';
import Image from 'next/image';
import styles from './CustomPolygonCard.module.css';

interface PolygonCardData {
  id: number;
  title: string;
  imageSrc: string;
  link: string;
}

const polygonData: PolygonCardData[] = [
  { id: 1, title: "Calculator", imageSrc: "/images/calculator.png", link: "https://github.com/Ummay480/simple-calculator" },
  { id: 2, title: "ATM", imageSrc: '/images/Atm.png', link: "https://github.com/Ummay480/atm" },
  { id: 3, title: "Number Guessing Game", imageSrc: '/images/number-guessing-game.jpg', link: "https://github.com/Ummay480/cli-number-guessing-game" },
  { id: 4, title: "Currency Converter", imageSrc: '/images/currency_converter.png', link: "https://github.com/Ummay480/currency-convertor" },
  { id: 5, title: "To-Do List", imageSrc: '/images/to-do-list.png', link: "https://github.com/Ummay480/to-do" },
  { id: 6, title: "Student Management", imageSrc: '/images/student-management.png', link: "https://github.com/Ummay480/student-management-system" },
];

const gradientPolygonColors = [
  'linear-gradient(45deg, red, yellow)',
  'linear-gradient(45deg, yellow, red)',
  'linear-gradient(45deg, red, orange)',
  'linear-gradient(45deg, yellow, orange)',
  'linear-gradient(45deg, red, gold)',
  'linear-gradient(45deg, yellow, gold)',
];

const CustomPolygonCard: React.FC = () => {
  const polygonCount = polygonData.length;
  const radius = 150;

  return (
    <div className={styles['relative-container']}>
      {polygonData.map((polygon, index) => {
        const angle = (index / polygonCount) * 360;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <div
            key={polygon.id}
            className="absolute"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <div
              className={`${styles.polygonCard} ${styles['animated-border']}`}
              style={{
                background: gradientPolygonColors[index % gradientPolygonColors.length],
              }}
            />
            <div
              className={`${styles.polygonCard} ${styles['glass-effect']} ${styles['animated-border']}`}
              style={{
                background: gradientPolygonColors[index % gradientPolygonColors.length],
              }}
            >
              <div
                className={styles['circle-overlay']}
                style={{
                  background: gradientPolygonColors[index % gradientPolygonColors.length],
                }}
              />
              <div className="absolute flex justify-center items-center">
                <Image
                  src={polygon.imageSrc}
                  alt="Polygon Image"
                  width={60}
                  height={40}
                  className="object-contain rounded-full"
                  onError={(e) => { e.currentTarget.src = '/images/default-image.png'; }} // Fallback image
                />
              </div>
              <div className={styles['project-card-overlay']}>
                <span className={styles['card-title']}>{polygon.title}</span>
                <a
                  href={polygon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['visit-link']}
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        );
      })}

      <div className={styles['center-card']}>
        <Image
          src="/images/api.png"
          alt="api"
          width={100}
          height={80}
          onError={(e) => { e.currentTarget.src = '/images/default-image.png'; }} // Fallback image
        />
      </div>
    </div>
  );
};

export default CustomPolygonCard;
