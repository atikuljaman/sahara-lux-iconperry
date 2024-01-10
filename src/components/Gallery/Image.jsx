const Image = ({ src, alt, onClick }) => {
  return <img src={src} alt={alt} onClick={onClick} className="img-fluid" />;
};

export default Image;
