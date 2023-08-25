// eslint-disable-next-line react/prop-types
const About = () => {
  return (
    <div id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2  md:px-10 gap-6 justify-center">
        {/* Left side content */}
        <div className="flex items-center justify-center p-4 md:p-8 shadow-2xl rounded-3xl bg-white mx-4 md:mx-0 ">
          <div>
            <h2 className="font-Telugu text-center font-semibold text-2xl lg:text-3xl text-heading">
              ఆలయం గురించి
            </h2>
            <p className="font-Telugu leading-8 lg:leading-loose font-medium text-lg mt-1">
              షుమారు మూడు దశాబ్దాలుగా నిస్వార్థంగా సేవలందిస్తున్న అమ్మ ఛారిటబుల్
              ట్రస్ట్, గుంటూరు బాబా గారి ఆశీస్సులతో వారి సేవకులు కొంతమంది కలిసి
              గుంటూరు జిల్లా, ఫిరంగిపురం మండలం, వేమవరం గ్రామంలో కోటి లింగాల
              క్షేత్రాన్ని నిర్మించాలని సంకల్పించి శంకుస్థాపన కాబడి, నిర్మాణం
              జరుగుతూ ఉంది. ఈ క్షేత్రంలో 101 అడుగుల ఎత్తు గల రాతి శివలింగం, 33
              అడుగులు ఎత్తు, 50 అడుగులు పొడవు గల అతి సుందరమైన నంది, దాదాపు 200
              కిలోల బరువు గల మరకత శివలింగం, నాగ సాధువలచే ప్రతిష్టించిన
              బ్రహ్మసూత్రం గల 500 సం॥ల పురాతన నల్లరాతి శివలింగం, భక్తులు స్వయంగా
              అభిషేకించుకునేవిధంగా 108 శ్రీ చక్రాల మందిరం, 10 వేల ఏకశిల పాలరాతి
              శివలింగాలతో శివుని మందిరం భూగర్భంలో దాదాపు నాలుగు అంతస్థుల లోతులో
              పాతాల కాళి అమ్మవారి మందిరం, కోటి లింగాలు నిర్మాణం జరుగుతూ ఉంది .
            </p>
          </div>
        </div>
        {/* Right side photo */}
        <div className="p-4 md:p-8 flex items-center">
          <img
            src="/aboutsection/aboutLaptop.jpg"
            alt="about image"
            className="hidden md:block rounded-md"
          />
          <img
            src="/aboutsection/aboutMobile.jpg"
            alt="about image mobile"
            className="block md:hidden scale-95"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
