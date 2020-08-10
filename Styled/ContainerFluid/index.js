export default (props) => (
  <div style={props.style}>
    {props.children}
    <style jsx>{`
      div {
        width: 100%;
         {
          /* padding-right: 15px;
        padding-left: 15px; */
        }
      }
    `}</style>
  </div>
);
