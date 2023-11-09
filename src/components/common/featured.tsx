const image =
  "https://raw.githubusercontent.com/saga-labs/saga-gpt/main/public/assets/app.png";
const image_new = "https://images.unsplash.com/photo-1699002971427-b3f9d306a8d1?q=80&w=3288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image_test = "https://66.media.tumblr.com/b219a23e0eda0e07c799fbf25e48be55/tumblr_ppakvyPDY31y9u9sko1_400.gifv";

export const Featured = () => {
  return (
    <section
      className="overflow-hidden h-screen bg-cover bg-top bg-no-repeat bg-gradient-to-r from-indigo-300 to-purple-400 flex items-end"
      style={{
        backgroundImage: `url(${image_test})`,
      }}
    >
      <div className="p-8 md:pb-24 lg:px-16 lg:pb-32">
        <div className="text-left">
          <h2 className="text-lg font-bold text-blue-600">Featured</h2>
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            SagaGPT: Revolutionize Your Desktop Conversations
          </h2>
          <p className="hidden max-w-xl text-white/90 md:mt-6 md:block md:text-sm md:leading-relaxed">
            Enhance your chat experience like never before with SagaGPT, the
            cutting-edge desktop plugable chat app. Communicate, collaborate,
            and create with powerful AI-driven features at your fingertips.
          </p>
        </div>
      </div>
    </section>
  );
};
