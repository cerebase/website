import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-baseline md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        Saga Labs.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A european research lab focused on the future of the web.
      </h4>
    </section>
  );
};

export default Intro;
