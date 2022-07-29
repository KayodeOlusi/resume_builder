const Preview = () => {
  const resumeName = localStorage.getItem("resumeName");

  return <div>{resumeName}</div>;
};

export default Preview;
