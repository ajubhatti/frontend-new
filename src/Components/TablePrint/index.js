import { useCallback, useRef, useState, useEffect } from "react";
import ReactToPrint from "react-to-print";
import CustomTable from "../Tables/CustomTable";
import { FaPrint } from "react-icons/fa";

export const TablePrint = ({ data, columns, pageOptions }) => {
  const componentRef = useRef(null);
  const onBeforeGetContentResolve = useRef(null);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("old boring text");

  const handleOnBeforeGetContent = useCallback(() => {
    setLoading(true);
    setText("Loading new text...");

    return new Promise((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        setText("New, Updated Text!");
        resolve();
      }, 2000);
    });
  }, [setLoading, setText]);

  useEffect(() => {
    if (
      text === "New, Updated Text!" &&
      typeof onBeforeGetContentResolve.current === "function"
    ) {
      onBeforeGetContentResolve.current();
    }
  }, [onBeforeGetContentResolve.current, text]);

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const reactToPrintTrigger = useCallback(() => {
    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
    // to the root node of the returned component as it will be overwritten.

    // Bad: the `onClick` here will be overwritten by `react-to-print`
    // return <button onClick={() => alert('This will not work')}>Print this out!</button>;

    // Good
    return (
      <button>
        <FaPrint />
      </button>
    );
  }, []);

  return (
    <div>
      <ReactToPrint
        content={reactToPrintContent}
        documentTitle="AwesomeFileName"
        onBeforeGetContent={handleOnBeforeGetContent}
        removeAfterPrint
        trigger={reactToPrintTrigger}
      >
        {loading && <p className="indicator">onBeforeGetContent: Loading...</p>}
        <CustomTable
          showAddButton={false}
          pageOptions={pageOptions}
          keyField="wallet_id"
          data={data}
          columns={columns}
          showSearch={false}
          withPagination={false}
          loading={loading}
          withCard={false}
          text={text}
          ref={componentRef}
        ></CustomTable>
      </ReactToPrint>

      {/* <ComponentToPrint ref={componentRef} text={text} /> */}
    </div>
  );
};
