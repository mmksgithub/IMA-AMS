import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import sample images
import dr1 from "../assets/img/members/D.p.Singh.jpg"
import dr2 from "../assets/img/members/Dr.Sharrad.jpg"
import dr3 from "../assets/img/members/Dr.sahajanand.jpeg"
import dr4 from "../assets/img/members/DR.Anilkumar.jpg"
import dr5 from "../assets/img/members/Dr.shitij.jpg"
import dr6 from "../assets/img/members/Dr.Nomeeta.jpg"
import dr7 from "../assets/img/members/Dr.Pankaj.jpg"
import dr8 from "../assets/img/members/Dr.Nibedita.jpg"
import dr9 from "../assets/img/members/Dr.Srirang.jpg"
import dr10 from "../assets/img/members/Dr.Sanjeev.jpg"
import dr11 from "../assets/img/members/Dr.Ramesh.jpg"
import dr12 from "../assets/img/members/Dr.Prabhakara.jpg"
import dr13 from "../assets/img/members/Dr.Ramani.jpg"
import dr14 from "../assets/img/members/Dr.sarbeswar.jpg"
import dr15 from "../assets/img/members/Dr.rajiv ranjan.jpg"
import dr16 from "../assets/img/members/Dr.Rabin.jpg"
import dr17 from "../assets/img/members/Dr.sekhar.jpg"
import dr18 from "../assets/img/members/Dr.RajeshKumar.jpg"
import dr19 from "../assets/img/members/Dr.Sanjivkumar.jpg"
import dr20 from "../assets/img/members/Dr.Vandana.jpg"
import dr21 from "../assets/img/members/Dr.AbirKumar.jpg"
import dr22 from "../assets/img/members/doctor-dummy.jpg"


const GC_Members = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init();
  }, []);

  return (
    <>
      {/* Members Section */}
      <section id="members" className="section members">
        <div className="container">
          <h1 className="members-heading">IMA AMS GOVERNING COUNCIL MEMBERS 2022/2024</h1>
          <div className="row justify-content-center">
            {membersData.map((member, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 col-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 100}
              >
                <div className="member-card">
                  <img
                    src={member.image}
                    className="img-fluid rounded-circle"
                    alt={member.name}
                  />
                  <div className="member-content">
                    <h4>{member.name}</h4>
                    <span>{member.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Data for the members
const membersData = [ {
    image: dr2,
    name: "Dr.Sharad Kumar Aggarwal",
    role: "Elect National President IMA Hqrs-2022-2023",
},
{
    image: dr3,
    name: "Dr.PD.Sahajanand Singh",
    role: "National President -2021-2022, IMA Hqrs",
},
{
    image: dr4,
    name: "Dr.Anilkumar J. Nayak",
    role: "Hony. Secretary General IMA Hqrs 2022-2024",
  },
{
        image: dr5,
        name: "Dr.Shitij Bali",
        role: "Hony. Finance Secretary, IMA Hqrs 2022-2024",
},
{
    image: dr7,
    name: "Dr.Pankaj Mutneja",
    role: "Chairman, IMA AMS Hqrs -2022-2023",
  },
{
  image: dr6,
  name: "Dr.Nomeeta Shiv Gupta",
  role: "Chairman, IMA AMS Hqrs -2023-2024",
},
{
    image: dr8,
    name: "Dr.Nibedita Pani",
    role: "Vice Chairman IMA AMS Hqrs -2022-2024",
  },
  {
    image: dr9,
    name: "Dr.Srirang Abkari",
    role: "Hony. Secretary IMA AMS Hqrs -2022-2024",
  },
{
  image: dr10,
  name: "Dr. Sanjeev Singh Yadav",
  role: "Imm. Past Secretary, IMA AMS Hqrs",
},
{
  image: dr11,
  name: "Dr. Ramesh Babu Rayapu",
  role: "DEAN OF STUDIES,2022-23 IMA CGP Hqrs",
},
{
  image: dr12,
  name: "Dr.G.N. Prabhakara",
  role: "HONY. DIRECTOR, 2022-23, Akn Sinha",
},
{
  image: dr1,
  name: "Dr.D.P.Singh",
  role: "Chairman of IMA AMS Bihar State Chapter",
},
{
  image: dr13,
  name: "Dr.P.A.Ramani",
  role: "Chairman IMA AMS AP State Chapter",
},
{
  image: dr14,
  name: "Dr.Sarbeswar Borah",
  role: "Chairman IMA AMS Assam State Chapter",
},

// {
//   image: dr12,
//   name: "Dr.Prabhakar",
//   role: "Joint Secretary, IMA AMS Hqrs 2022-2024",
// },
// {
//   image: dr1,
//   name: "Dr.p singh",
//   role: "Joint Secretary, IMA AMS Hqrs 2022-2024",
// },
// {
//   image: dr13,
//   name: "Dr.Shilpa Basu Roy",
//   role: "Hony. Editor, IMA AMS Hqrs-2022-2024",
// },
// {
//   image: dr14,
//   name: "Dr.Rajiv Ranjan Prasad",
//   role: "Executive Editor, IMA AMS Hqrs-2022-2024",
// },





{
    image: dr15,
    name: "Dr.Rajiv Ranjan",
    role: "Hony. Secretary of IMA AMS Bihar State Chapter",
  },
  {
    image: dr16,
    name: "Dr.Rabin Chakraborty",
    role: "Hony. Secretary of IMA AMS Bihar State Chapter",
  },
  {
    image: dr17,
    name: "Dr.Sekhar Chakraborty",
    role: "Hony. Secretary IMA AMS Bengal State",
  },
  {
    image: dr18,
    name: "Dr.Rajesh Kumar Sinha",
    role: "Chairman IMA AMS Chhattisgarh State",
  },
  {
    image: dr19,
    name: "Dr.Sanjiv Kumar",
    role: "Hony. Secretary of IMA AMS Delhi State Chapter",
  },
  {
    image: dr20,
    name: "Dr.Vandana Narula",
    role: "Secretary of IMA AMS Haryana State",
  },
  {
    image: dr21,
    name: "Dr.Abir Kumar Chakraverty",
    role: "Chariman IMA AMS Jharkhand State Chapter",
  },
  {
    image: dr22,
    name: "Dr.Geeta J.Doppa",
    role: "Chairman IMA AMS Karnataka State",
  },
  {
    image: dr22,
    name: "Dr.R.Anuburajan",
    role: "HONY. SECRETARY, IMA CGP Hqrs",
  },
  {
    image: dr22,
    name: "Dr.Nandini Chatterjee",
    role: "HONY. EDITOR, JIMA 2022-23",
  },
  {
    image: dr22,
    name: "Dr.Sibabrata Banerjee",
    role: "HONY.SECRETARY, JIMA",
  },
  {
    image: dr22,
    name: "Dr.Sanjiv Ranjan Kumar Singh",
    role: "HONY.EXECUTIVE SECRETARY, AKN SINHA",
  },
  {
    image: dr22,
    name: "Dr. Rajiva Ranjan",
    role: "Hony. Secretary of IMA AMS Bihar State Chapter",
  },
  {
    image: dr22,
    name: "Dr.R.K.Sinha",
    role: "Chairman of IMA AMS Delhi State Chapter",
  },
  {
    image: dr22,
    name: "Dr. Ajay Arora",
    role: "Executive Editor, IMA AMS Hqrs-2022-2024",
  },


];


export default GC_Members;

