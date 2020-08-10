export default (props) => (
  <div style={props.style}>
    {props.children}
    <style jsx>{`
      div {
        display: flex;
        flex-wrap: wrap;
         {
          /* margin-right: -10px;
        margin-left: -10px; */
        }
      }
    `}</style>
  </div>
);
