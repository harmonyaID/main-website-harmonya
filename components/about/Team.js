import Cards from '../Cards';

function Team() {
  return (
    <div className="bg-blue-700 flex flex-col justify-center py-10">
      <div>
        <h2 className="text-white section-title uppercase font-bold leading-tight text-center pb-10">
          Our Team
        </h2>
      </div>
      <div className="flex gap-2 justify-center flex-col items-center md:flex-row">
        <Cards
          img="/assets/images/team/Wawan_Rahmawan.jpeg"
          title="Wawan"
          desc="CEO"
        />
        <Cards
          img="/assets/images/team/Made_Sudiarta.jpeg"
          title="Sudi"
          desc="CFO"
        />
        <Cards
          img="/assets/images/team/Bayu_Starrhiawan.jpg"
          title="Bayu"
          desc="CMO"
        />
        <Cards
          img="/assets/images/team/Andi_Radita.jpeg"
          title="Andi"
          desc="CTO"
        />
      </div>
    </div>
  );
}

export default Team;
