const ImageRenderer = (props) => {    
  return (
    <img src ={props.getValue()} alt="src"/>   
  );
};

export default ImageRenderer;