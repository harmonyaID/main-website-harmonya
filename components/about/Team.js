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
          img="https://media-exp1.licdn.com/dms/image/C5603AQE5Z9zsuMsaBw/profile-displayphoto-shrink_800_800/0/1595149620670?e=1656547200&v=beta&t=XQLNSz4r1O-K_rjpVzYKy9CUn5d5SDNZOuh5CD4OWL4"
          title="Wawan"
          desc="CEO"
        />
        <Cards
          img="https://media-exp1.licdn.com/dms/image/C5603AQHrZqMIWReQIg/profile-displayphoto-shrink_800_800/0/1644236654450?e=1656547200&v=beta&t=bxcsk_l7twIeLhI7mtiphAaxMOJCZv6NSMQGudmrcKk"
          title="Sudi"
          desc="CFO"
        />
        <Cards
          img="https://media-exp1.licdn.com/dms/image/C5603AQEvG3KSBtkPYg/profile-displayphoto-shrink_800_800/0/1637300605498?e=1656547200&v=beta&t=MBarVklDdlIza_OIJy3sKxIaeTFIiJarp_lQ0QmsUZo"
          title="Bayu"
          desc="CCC"
        />
        <Cards
          img="https://media-exp1.licdn.com/dms/image/C5603AQE5Z9zsuMsaBw/profile-displayphoto-shrink_800_800/0/1595149620670?e=1656547200&v=beta&t=XQLNSz4r1O-K_rjpVzYKy9CUn5d5SDNZOuh5CD4OWL4"
          title="Andi"
          desc="CTO"
        />
      </div>
    </div>
  );
}

export default Team;
