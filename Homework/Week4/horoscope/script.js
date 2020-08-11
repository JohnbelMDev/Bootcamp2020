// Definitions are from https://www.astrology-zodiac-signs.com/zodiac-signs/taurus/

var answer = document.getElementById('answer');
answer.onclick= clicking;

function clicking()
{
  var month =document.getElementById('month').value;
  var day = document.getElementById('day').value;
  const horroscope = ["Arie","Taurus","Gemini","Cancer","Leo",
  "Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"
];

const meaning=[
  "Strenghts:Courageous, determined, confident, enthusiastic, optimistic, honest, passionate\nWeanesses: Impatient, moody, short-tempered, impulsive, aggressive\nAries likes: Comfortable clothes, taking on leadership roles, physical challenges, individual sports",
  "Strengths: Reliable, patient, practical, devoted, responsible, stable\n Weaknesses: Stubborn, possessive, uncompromising",
  "Strengths: Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas\nWeaknesses: Nervous, inconsistent, indecisive",
  "Strengths: Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive\nWeaknesses: Moody, pessimistic, suspicious, manipulative, insecure",
  "Strengths: Creative, passionate, generous, warm-hearted, cheerful, humorous\nWeaknesses: Arrogant, stubborn, self-centered, lazy, inflexible",
  "Strengths: Loyal, analytical, kind, hardworking, practical\nWeaknesses: Shyness, worry, overly critical of self and others, all work and no play",
  "Strengths: Cooperative,diplomatic, gracious, fair-minded, social\nWeaknesses: Indecisive, avoids confrontations, will carry a grudge, self-pity",
  "Strengths: Resourceful, brave, passionate, stubborn, a true friend\nWeaknesses: Distrusting, jealous, secretive, violent",
  "Strengths: Generous, idealistic, great sense of humor\nWeaknesses: Promises more than can deliver, very impatient, will say anything no matter how undiplomatic",
  "Strengths: Responsible, disciplined, self-control, good managers\nWeaknesses: Know-it-all, unforgiving, condescending, expecting the worst",
  "Strengths: Progressive, original, independent, humanitarian\nWeaknesses: Runs from emotional expression, temperamental, uncompromising, aloof",
  "Strengths: Compassionate, artistic, intuitive, gentle, wise, musical\nStrengths: Compassionate, artistic, intuitive, gentle, wise, musical"

]

if((month==1 && day >=20 && day<=30 || month==2 && day>=1 && day<=18)){
  document.getElementById("message").innerHTML =horroscope[10];
  document.getElementById("horroscope").innerHTML =meaning[10];

}


else if((month==2 && day >=19 && day<=29|| month==3 && day<=20 && day>=1 )){

  document.getElementById("message").innerHTML =horroscope[11];
  document.getElementById("horroscope").innerHTML =meaning[11];



}

else if((month==3 && day >=21 && day<=30 || month==4 && day<=19 && day>=1 )){
  document.getElementById("message").innerHTML =horroscope[0];
  document.getElementById("horroscope").innerHTML =meaning[0];



}
else if((month==4 && day >=20 && day<=30 || month==5 && day<=20  && day>=1)){
  document.getElementById("message").innerHTML =horroscope[1];
  document.getElementById("horroscope").innerHTML =meaning[1];


}
else if((month==5 && day >=21 && day<=31|| month==6 && day<=20  && day>=1)){

  document.getElementById("message").innerHTML =horroscope[2];
  document.getElementById("horroscope").innerHTML =meaning[2];



}
else if((month==6 && day >=22 && day<=31 || month==7 && day<=22 && day>=1)){
  name="Aries";
  console.log(horroscope[0]);
  document.getElementById("message").innerHTML =horroscope[3];
  document.getElementById("horroscope").innerHTML =meaning[3];



}
else if((month==7 && day >=23 && day<=31|| month==8 && day<23 && day>=1)){
  name="Aries";
  console.log(horroscope[0])
  document.getElementById("message").innerHTML =horroscope[4];
  document.getElementById("horroscope").innerHTML =meaning[4];



}
else if((month==8 && day >=23 && day<=31|| month==9 && day<=23 && day>=1)){
  console.log(horroscope[5])
  document.getElementById("message").innerHTML =horroscope[5];
  document.getElementById("horroscope").innerHTML =meaning[5];



}
else if((month==9 && day>=24 && day<=31|| month==10 && day<=23 && day>=1)){

  console.log(horroscope[0])

  document.getElementById("message").innerHTML =horroscope[6];
  document.getElementById("horroscope").innerHTML =meaning[6];



}
else if((month==10 && day >=24 && day<31 || month==11 && day<=22 && day>=1)){

  document.getElementById("message").innerHTML =horroscope[7];
  document.getElementById("horroscope").innerHTML =meaning[7];



}
else if((month==11 && day >=23 && day<=31|| month==12 && day<=21 && day>=1 )){
  name=horroscope[8];
  document.getElementById("message").innerHTML =name;
  document.getElementById("horroscope").innerHTML =meaning[8];

}



else if((month==12 && day >=22 && day<=31|| month==1 && day<=19 && day>=1 )){
  name=horroscope[9];
  document.getElementById("message").innerHTML =name;
  document.getElementById("horroscope").innerHTML =meaning[9];

}




else {
  document.getElementById("message").innerHTML ="Sorry, we can't find yor horroscope";

}

}
