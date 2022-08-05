var yesele = document.getElementById("yes");
var noele=document.getElementById("no");
const idarray=[1,2,3,4,5];
const orgpic=["resources/org1.webp","resources/org2.jpg","resources/org3.jpg","resources/org4.png","resources/org5.png"];
const namearray=["Greenspace India","Indian Youth Climate Network","Delhi Greens","Kalpavriksh","SusMafia"];
const jobarray=["Landfill Manager","Weather Intelligence Researcher","AgriTech Manager","Finance Head","BioFuel Researcher"];
const sector=["Earth","Air","Earth","Heart","Fire"];
const qualarray=["B. Sc./B. Tech.","B. Sc.","B. Sc.","B.B.A./B. Sc.","B. Tech./B. Sc."];
const skillarray=["Team Work, Analytical skills, Decision making skills", "Analytical skills, SQL, Artificial Intelligence", "Food Tech, SQL, Farmsoft Software", "SQL, Analytical and logical skills, Mathematically sound, SPSS, MS Excel","Chemistry, Decision Making Skills, Team Work"];
const exparray=["1 year", "2 years", "1 year", "2 years", "1.5 years"];
const descarray=["The Landfill Manager administers the efficient and cost effective operation of the landfill while meeting or exceeding the requirements of the landfill operating license and the environmental laws, rules and standards of the Indian Government. The manager administers the Landfill budget, approves purchases and payments related to Landfill operations.","You will be tasked with developing predictive models for accurate weather prediction. Also, your expretise in the areas of Natural Sciences will be used for developing algorithms for analyzing weather patterns.","Agricultural managers or farm managers are responsible for the daily planning, organisation, supervision and administration of activities on farm estates.","We are looking for a highly accurate head of finance to oversee all financial activities. The responsibilities of a head of finance include managing financial tasks and ensuring that finances are used beneficially. You should also ensure that investments and finances comply with regulations. To be successful as a head of finance, you should demonstrate excellent leadership qualities and experience in modeling financial strategies. Ultimately, a competent Head of Finance should maintain the finances of the organization effectively and increase profitability.","Biofuel process engineers are involved with determining ways to improve how biofuels are made so they need to have good problem-solving skills, and they also need analytical skills so that they can assess information and processes to determine their effectiveness. Since one of their objectives is to make the biofuel production process more cost-effective it is important that they have mathematical skills so that they can determine the potential savings from specific changes to the production process. They must have computer skills and be capable of using ChemCad software, MS Office programs and other relevant computer programs."];
const salaryarray=["14 lpa","10 lpa", "12 lpa", "11 lpa", "7 lpa"];
const matcharray=[];
var n=idarray.length;
var i=0;
document.getElementById("c_pic").src=orgpic[i];
document.getElementById("c_name").innerHTML=namearray[i];
document.getElementById("c_profile").innerHTML=jobarray[i];
document.getElementById("c_sector").innerHTML=sector[i];
document.getElementById("c_qual").innerHTML=qualarray[i];
document.getElementById("c_skills").innerHTML=skillarray[i];
document.getElementById("c_exp").innerHTML=exparray[i];
document.getElementById("c_desc").innerHTML=descarray[i];
document.getElementById("c_sal").innerHTML=salaryarray[i];
yesele.addEventListener("click",function(){
  matcharray.push(idarray[i]);
  orgpic.splice(i,1);
  idarray.splice(i,1);
  namearray.splice(i,1);
  jobarray.splice(i,1);
  sector.splice(i,1);
  qualarray.splice(i,1);
  skillarray.splice(i,1);
  exparray.splice(i,1);
  descarray.splice(i,1);
  salaryarray.splice(i,1);
  n--;
  if(n==0) alert("No more job roles");
  document.getElementById("c_pic").src=orgpic[i];
  document.getElementById("c_name").innerHTML=namearray[i];
  document.getElementById("c_profile").innerHTML=jobarray[i];
  document.getElementById("c_sector").innerHTML=sector[i];
  document.getElementById("c_qual").innerHTML=qualarray[i];
  document.getElementById("c_skills").innerHTML=skillarray[i];
  document.getElementById("c_exp").innerHTML=exparray[i];
  document.getElementById("c_desc").innerHTML=descarray[i];
  document.getElementById("c_sal").innerHTML=salaryarray[i];
  if(i==n-1) i=-1;
});
noele.addEventListener("click",function(){
  i++;
  if(n==0) alert("No more job roles");
  document.getElementById("c_pic").src=orgpic[i];
  document.getElementById("c_name").innerHTML=namearray[i];
  document.getElementById("c_profile").innerHTML=jobarray[i];
  document.getElementById("c_sector").innerHTML=sector[i];
  document.getElementById("c_qual").innerHTML=qualarray[i];
  document.getElementById("c_skills").innerHTML=skillarray[i];
  document.getElementById("c_exp").innerHTML=exparray[i];
  document.getElementById("c_desc").innerHTML=descarray[i];
  document.getElementById("c_sal").innerHTML=salaryarray[i];
  if(i==n-1) i=-1;
});
