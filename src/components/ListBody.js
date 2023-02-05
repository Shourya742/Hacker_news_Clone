import React from "react";
import Card from "./UI/Card";
import { Audio, ColorRing } from "react-loader-spinner";

const ListBody = (props) => {
  if (!props.data) {
    return (
      <div style={{ marginLeft: "30rem", marginRight: "30rem" }}>
        <ColorRing
          visible={true}
          height="400"
          width="400"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#b8c480", "#B2A3B5", "#F4442E", "#51E5FF", "#429EA6"]}
        />
      </div>
    );
  }
  const transformedData = props.data.filter((value, key) => value.title);

  return (
    <div className="break-normal px-5 py-5">
      {transformedData.map((value, key) => (
        <Card data={value} key={key} />
      ))}
    </div>
  );
};

export default ListBody;
