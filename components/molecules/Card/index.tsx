import React from "react";
import styles from "./card.module.css";

interface Props {
  title: string;
  href: string;
  description: string;
}

const Card = ({ title, href, description }: Props) => {
  return (
    <a href={href} className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  );
};

export default Card;
