const idarray=[1,2,3,4,5];
const profilepic=["resources/profile1.jpg","resources/profile2.jpg","resources/profile3.jpg","resources/profile4.jpg","resources/profile5.jpg"];
const namearray=["Dev", "Hrishikesh", "Abhishek", "Nishi", "Mrudula"];
const genderarray=["M","M","M","F","F"];
const dobarray=["08-06-2001","25-07-2000","12-11-1999","13-06-2000","05-01-2001"];
const mobilearray=["8700439145","9876543210","9867564765","8796789324","8002345679"];
const emailarray=["dev@gmail.com","hrishi@gmail.com","abhi@gmail.com","nishi@gmail.com","mrud@gmail.com"];
const applyarray=["Water Intelligence","Impact Investor","HR Expert", "Bio Researcher","Sus Consulting"];
const qualarray=["B. Tech.","MBA","M. Sc.","M. Tech.","B. Sc."];
const exparray=["2 years","1 year","4 years","3.5 years","2 years"];
const cgpaarray=["9.21","8.98","8.46","8.56","7.75"];
const bioarray=["I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do.","I am very skilled at thinking on my feet and can make brilliant finanacial decisions based on my in depth knowledge in the field. I want to leverage this skill to optimize sustainable NGOs.","I am an excellent observer and I have keep insight on people. My management is flawless and I want to give back to the society through sustainability.","I am the Sr. Director of AI at Tesla, where I lead the team responsible for all neural networks on the Autopilot. Previously, I was a Research Scientist at OpenAI working on Deep Learning in Computer Vision, Generative Modeling and Reinforcement Learning.","I am a proficient in the areas of natural science and very passionate about the idea of sustainability. It has been my life long dream to help drive the era of change."];
const skillarray=["C++, Python, JS, Node, Express, Django, React","Persuasiveness, Problem-solving, Decision-making, Detail-oriented, Financial planning, Budgeting","Analytical thinking, Verbal communication, Decision-making skills, Training and developmental skills, Empathic skills","PyTorch, TensorFlow, Blockchain, MxNet, NLP","Sustainability, Biology, Consultancy, Geology, Waste Management"];
const matcharray=[];
var n=idarray.length;
var yesele = document.getElementById("yes");
var noele=document.getElementById("no");
var i=0;
document.getElementById("m_pic").src=profilepic[i];
document.getElementById("m_name").innerHTML=namearray[i];
document.getElementById("m_gender").innerHTML=genderarray[i];
document.getElementById("m_dob").innerHTML=dobarray[i];
document.getElementById("m_email").innerHTML=emailarray[i];
document.getElementById("m_mobile").innerHTML=mobilearray[i];
document.getElementById("m_apply").innerHTML=applyarray[i];
document.getElementById("m_qual").innerHTML=qualarray[i];
document.getElementById("m_exp").innerHTML=exparray[i];
document.getElementById("m_cgpa").innerHTML=cgpaarray[i];
document.getElementById("m_bio").innerHTML=bioarray[i];
document.getElementById("m_skill").innerHTML=skillarray[i];

yesele.addEventListener("click",function(){
  matcharray.push(idarray[i]);
  idarray.splice(i,1);
  namearray.splice(i,1);
  genderarray.splice(i,1);
  dobarray.splice(i,1);
  emailarray.splice(i,1);
  mobilearray.splice(i,1);
  applyarray.splice(i,1);
  qualarray.splice(i,1);
  exparray.splice(i,1);
  cgpaarray.splice(i,1);
  bioarray.splice(i,1);
  skillarray.splice(i,1);
  profilepic.splice(i,1);
  n--;
  if(n==0) alert("No more applicants");
  document.getElementById("m_name").innerHTML=namearray[i];
  document.getElementById("m_pic").src=profilepic[i];
  document.getElementById("m_gender").innerHTML=genderarray[i];
  document.getElementById("m_dob").innerHTML=dobarray[i];
  document.getElementById("m_email").innerHTML=emailarray[i];
  document.getElementById("m_mobile").innerHTML=mobilearray[i];
  document.getElementById("m_apply").innerHTML=applyarray[i];
  document.getElementById("m_qual").innerHTML=qualarray[i];
  document.getElementById("m_exp").innerHTML=exparray[i];
  document.getElementById("m_cgpa").innerHTML=cgpaarray[i];
  document.getElementById("m_bio").innerHTML=bioarray[i];
  document.getElementById("m_skill").innerHTML=skillarray[i];
  if(i==n-1) i=-1;
});
noele.addEventListener("click",function(){
  i++;
  if(n==0) alert("No more applicants");
  document.getElementById("m_name").innerHTML=namearray[i];
  document.getElementById("m_pic").src=profilepic[i];
  document.getElementById("m_gender").innerHTML=genderarray[i];
  document.getElementById("m_dob").innerHTML=dobarray[i];
  document.getElementById("m_email").innerHTML=emailarray[i];
  document.getElementById("m_mobile").innerHTML=mobilearray[i];
  document.getElementById("m_apply").innerHTML=applyarray[i];
  document.getElementById("m_qual").innerHTML=qualarray[i];
  document.getElementById("m_exp").innerHTML=exparray[i];
  document.getElementById("m_cgpa").innerHTML=cgpaarray[i];
  document.getElementById("m_bio").innerHTML=bioarray[i];
  document.getElementById("m_skill").innerHTML=skillarray[i];
  if(i==n-1) i=-1;
});
