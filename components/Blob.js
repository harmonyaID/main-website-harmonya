function Blob() {
  return (
    <>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 md:animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 md:animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-7 lg:left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 md:animate-blob animation-delay-4000"></div>
    </>
  );
}

export default Blob;
