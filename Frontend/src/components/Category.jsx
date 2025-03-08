const Category = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-5">
      {[
        { name: "Serums", image: "/images/serum.jpg" },
        { name: "Toners", image: "/images/serum1.jpg" },
        { name: "Lotions", image: "/images/lotion.jpg" },
        { name: "Foundation", image: "/images/foundation.jpg" },
      ].map((item, index) => (
        <div
          key={index}
          className="relative bg-gray-300 h-[500px] w-full max-w-[400px] flex items-center justify-center rounded-lg overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <h2 className="relative font-semibold text-[30px] text-white">{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Category;