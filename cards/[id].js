import styles from "../../styles/Cardspage.module.css";
import Comment from "../../components/Comment";
import React, { useState } from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();

  const paths = data.map((card) => {
    return {
      params: { id: card.id.toString() }
    };
  });
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/photos/" + id);
  const res2 = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=5"
  );
  const data = await res.json();
  const json = await res2.json();

  return {
    props: { card: data, comments: json }
  };
};

const Details = ({ card, comments }) => {
  const [status, setStatus] = useState(false);

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.infoField}>
            <img
              src={card.thumbnailUrl}
              className={styles.image}
              alt={card.title}
            />
            <div className={styles.description}>
              <h1>Card</h1>
              <h2>{card.title}</h2>
              <hr className={styles.line}></hr>
              
            </div>
          </div>
        </div>
        <div className={styles.commentsSection}>
          <div
            onClick={(e) => setStatus(!status)}
            className={styles.commentDropdown}
          >
            <h3>Comments</h3>{" "}
            {status ? (
              <i className="fas fa-caret-up"></i>
            ) : (
              <i className="fas fa-caret-down"></i>
            )}
          </div>
          {status ? (
            <div>
              {comments.map((comment, key) => (
                <Comment comment={comment} key={comment.id} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Details;
