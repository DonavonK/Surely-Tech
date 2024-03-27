import React from "react";
import styles from "../styles/styles.module.css"
import BasicFilter from "./basicFilter";
import Row from "./row";

interface FilterBarProps {
  
}

const FilterBar: React.FC<FilterBarProps> = ({  }) => {
  return   <section className={styles.filterSection}>

    {/* <div style={{ borderRadius: "8px", display: "flex", width: "1050px", height: "120px" , backgroundColor: "#E8E8E8", alignItems: "center", justifyContent: "left", padding: "0 0 0 30px"}}> */}

    <div style={{ display: "flex", gap: "1rem"}}>

  <BasicFilter topImage={""} title={"Testing"} text={""}></BasicFilter>
  <BasicFilter topImage={""} title={"Testing"} text={""}></BasicFilter>
  <BasicFilter topImage={""} title={"Testing"} text={""}></BasicFilter>
  <BasicFilter topImage={""} title={"Testing"} text={""}></BasicFilter>
  <BasicFilter topImage={""} title={"Testing"} text={""}></BasicFilter>
    </div>

    {/* </div> */}
</section>
};

export default FilterBar;
