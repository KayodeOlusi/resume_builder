import ImageTemplates from "./ImageTemplates";

const Templates = () => {
  return (
    <div className="mt-20 px-8 lg:px-0">
      <h1 className="text-center text-alium font-semibold text-2xl lg:text-4xl">
        Choose your resume templates
      </h1>
      <p className="text-center text-herotext font-semibold text-base mt-5">
        You can always change the template at any time to suit your needs.
      </p>
      <ImageTemplates />
    </div>
  );
};

export default Templates;
