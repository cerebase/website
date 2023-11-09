const image =
  "https://raw.githubusercontent.com/saga-labs/saga-gpt/main/public/assets/app.png";

export const Featured = () => {
  return (
    <section
      className="overflow-hidden h-screen bg-cover bg-top bg-no-repeat bg-gradient-to-r from-indigo-300 to-purple-400 flex items-end"
    //   style={{
    //     backgroundImage: `url(${image})`,
    //     textShadow: '4px 4px 2px rgba(150, 150, 150, 1)'
    //   }}
    >
      <div className="p-8 md:pb-24 lg:px-16 lg:pb-32">
        <div className="text-left">
          <h2 className="text-lg font-bold text-purple-600">Featured</h2>
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
