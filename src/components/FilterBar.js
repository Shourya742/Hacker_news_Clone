import React from "react";

const FilterBar = (props) => {
  const storiesOptions = ["Stories", "All", "Comments"];
  const popularityOptions = ["Popularity", "Date"];
  const dateOptions = [
    "All Time",
    "Last 24 Hours",
    "Past Week",
    "Past Month",
    "Past Year",
  ];
  return (
    <div className="mx-1 my-2 flex w-fit">
      <label>Search</label>
      <select
        className="mx-0.5 bg-orange-100"
        onChange={props.onStoriesOptionChangeHandler}
      >
        {storiesOptions.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
      by
      <select
        className="mx-0.5 bg-orange-100"
        onChange={props.onPopularityOptionChangeHandler}
      >
        {popularityOptions.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
      for
      <select
        className="mx-0.5 bg-orange-100"
        onChange={props.onDateOptionChangeHandler}
      >
        {dateOptions.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default FilterBar;
