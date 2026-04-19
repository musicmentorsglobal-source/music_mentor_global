const MusicCornerDecor = () => {
  return (
    <>
      <div
        aria-hidden="true"
        className="music-gradient pointer-events-none select-none absolute top-2 left-2 sm:top-5 sm:left-4 md:top-12 md:left-6 font-script leading-none -rotate-6 z-0 opacity-60 md:opacity-75"
      >
        <div className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl">𝄞 ♪ ♫ ♩</div>
        <div className="text-base sm:text-2xl md:text-4xl lg:text-5xl ml-2 sm:ml-4 md:ml-5 -mt-0.5 md:-mt-1 opacity-75">
          ♬ ♫ ♪
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-2 right-2 sm:top-5 sm:right-4 md:top-16 md:right-10 text-[#6b5f7d]/35 md:text-[#6b5f7d]/45 font-script leading-none rotate-6 z-0"
      >
        <div className="text-xl sm:text-3xl md:text-5xl lg:text-6xl">♭ ♮ ♯ ♪</div>
        <div className="text-base sm:text-2xl md:text-4xl lg:text-5xl ml-3 sm:ml-5 md:ml-8 -mt-0.5 md:-mt-1 opacity-70">
          ♫ ♬ 𝄢
        </div>
      </div>
    </>
  );
};

export default MusicCornerDecor;
