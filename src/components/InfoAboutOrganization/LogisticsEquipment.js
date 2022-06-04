import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";

const Row = ({ index, style, data }) => (
  <div style={style}>
    <div className="table-body">
      <span>{data[index]["Наименование оборудованных учебных кабинетов"]}</span>
      <span>{data[index]["Оснащенность оборудованных учебных кабинетов"]}</span>
    </div>
  </div>
);

const LogisticsEquipment = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/files/LogisticsEquipment.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
          setIsLoaded(true);
        },
        (error) => {
          console.log("Error:\n", error);
        }
      );
  }, [data]);

  return (
    <div className="container">
      <div className="section-body">
        <div className="table">
          <div className="table-body">
            <span style={{ backgroundColor: "var(--accent-color)", color: "#ffffff", borderTopLeftRadius: "8px" }}>Наименование оборудованных учебных кабинетов</span>
            <span style={{ backgroundColor: "var(--accent-color)", color: "#ffffff", borderTopRightRadius: "8px" }}>Оснащенность оборудованных учебных кабинетов</span>
          </div>
          {isLoaded ? (
            <List height={530} itemCount={data.length} itemSize={100} width={1000} itemData={data}>
              {Row}
            </List>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LogisticsEquipment;
