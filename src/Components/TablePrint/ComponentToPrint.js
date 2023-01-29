import * as React from "react";

export class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { checked: false };
  }

  setRef = (ref) => (this.canvasEl = ref);

  render() {
    const { text } = this.props;

    return (
      <div className="relativeCSS">
        <style type="text/css" media="print">
          {
            "\
   @page { size: landscape; }\
"
          }
        </style>
        <div className="flash" />
        <table className="testClass">
          <thead>
            <tr>
              <th className="column1">Test Name</th>
              <th>Test</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Canvass</td>
              <td>
                <canvas height="100" ref={this.setRef} width="200">
                  Your browser does not support the HTML5 canvas tag.
                </canvas>
              </td>
            </tr>
            <tr>
              <td>Dynamic Content From Prop</td>
              <td>{text ?? "Custom Text Here"}</td>
            </tr>
            <tr>
              <td>Image: URL</td>
              <td>
                <img
                  alt="Google logo"
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                  width="200"
                />
              </td>
            </tr>
            <tr>
              <td>SVG</td>
              <td>
                <svg height="100" width="100">
                  <circle
                    cx="50"
                    cy="50"
                    fill="yellow"
                    r="40"
                    stroke="green"
                    strokeWidth="4"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export const FunctionalComponentToPrint = React.forwardRef((props, ref) => {
  // eslint-disable-line max-len
  return <ComponentToPrint ref={ref} text={props.text} />;
});
