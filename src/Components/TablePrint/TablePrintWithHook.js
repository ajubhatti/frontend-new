import * as React from "react";
import { useReactToPrint } from "react-to-print";
import { FaPrint } from "react-icons/fa";
import ComponentToPrint2 from "./ComponentToPrint2";

export const TablePrintWithHook = ({ data, columns, pageOptions, type }) => {
  const componentRef = React.useRef(null);
  const onBeforeGetContentResolve = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("Loading...");

  const handleOnBeforeGetContent = React.useCallback(() => {
    // tslint:disable-line no-console
    setLoading(true);
    setText("Loading...");

    return new Promise((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        setText("New, Updated Text!");
        resolve();
      }, 2000);
    });
  }, [setLoading, setText]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "TransactionHistory",
    onBeforeGetContent: handleOnBeforeGetContent,
    removeAfterPrint: true,
  });

  React.useEffect(() => {
    if (
      text === "New, Updated Text!" &&
      typeof onBeforeGetContentResolve.current === "function"
    ) {
      onBeforeGetContentResolve.current();
    }
  }, [onBeforeGetContentResolve, text]);

  return (
    <div>
      {loading && <p className="indicator">onBeforeGetContent: Loading...</p>}
      <button onClick={handlePrint}>
        <FaPrint />
      </button>

      <ComponentToPrint2
        ref={componentRef}
        data={data}
        columns={columns}
        pageOptions={pageOptions}
        loading={loading}
        type={type}
      />
    </div>
  );
};
