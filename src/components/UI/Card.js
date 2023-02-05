import React from "react";

const Card = (props) => {
  return (
    <a
      href={props.data.url}
      className="flex flex-wrap flex-col bg-orange-50 border border-orange-200 rounded-lg shadow md:max-w-l hover:bg-orange-100 dark:border-orange-700 dark:bg-orange-800 dark:hover:bg-orange-700"
    >
      <div className="flex flex-wrap flex-col justify-between p-2 leading-normal w-fit	">
        <div className="mb-2 text-lg text-orange-900 dark:text-white break-all">
          <strong>{props.data.title}</strong> (
          {props.data.url ? props.data.url : "no link available"})
        </div>
      </div>
    </a>
  );
};

export default Card;
