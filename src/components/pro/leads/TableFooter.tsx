import React, { useEffect } from "react";
import styles from "../../../styles/TableFooter.module.css";
import Button from "../../UI/Button";

type TableFooterProps<DataType> = {
  slice: Array<DataType>;
  valid: boolean;
  page: number;
  prev: () => void;
  next: () => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
const TableFooter = <T,>({
  slice,
  valid,
  page,
  setPage,
  prev,
  next,
}: TableFooterProps<T>) => {
  const handlePrevPage = () => {
    prev();
  };

  const handleNextPage = () => {
    next();
  };

  return (
    <div className={styles.tableFooter}>
      <Button
        color="secondary"
        variant="filled"
        buttonClassName={`${styles.button}  !py-0 `}
        onClick={handlePrevPage}
      >
        <h1 className="!font-bold text-2xl ">{"<"}</h1>
      </Button>
      <Button
        color="secondary"
        variant="filled"
        buttonClassName={`${styles.button}  !py-0`}
        onClick={handleNextPage}
        disabled={valid}
      >
        <h1 className="!font-bold text-2xl  ">{`>`}</h1>
      </Button>
    </div>
  );
};

export default TableFooter;
