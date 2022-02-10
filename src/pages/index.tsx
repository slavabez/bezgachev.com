import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex w-auto max-w-xs flex-col items-center justify-start md:max-w-md lg:max-w-3xl">
      <div className="p-10">
        <span className="text-4xl font-bold italic">slava.b</span>
      </div>
      <div>
        <p className="mb-8">
          My name is Slava Bezgachev and I’m a full stack web developer. I’m from Kazakhstan, and I
          lived in the UK for 10 years. I consider myself pretty good at both front-end and back-end
          development with Javascript, focusing on Node and React.
        </p>
        <p>
          You can download my CV here, check out my GitHub page here and also there’s a neat Stack
          Overflow Story where you can see my education and work history timeline.
        </p>
      </div>
    </div>
  );
};

export default Home;
