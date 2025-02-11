// app/request-demo/page.js (or app/request-demo.js, depending on your Next.js version)

"use client";
import Timeline from "./TimeLine";
import FormComponent from "./FormComponent";


const RequestDemo = () => {
  const onFinish = (values) => {
    console.log("Request Demo Form values:", values);
  };

  return (
    <>
      <Timeline />
      <div className="container py-5 w-50 mx-auto">
      <FormComponent 
  title="Get Started" 
  buttonText="Submit" 
/>
      </div>
    </>
  );
};

export default RequestDemo;
