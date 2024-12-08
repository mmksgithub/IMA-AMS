import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import sample images
import dr1 from "../assets/img/members/Dr.R.V Asokan.jpg"
import dr2 from "../assets/img/members/Dr.Sharrad.jpg"
import dr3 from "../assets/img/members/Dr.sahajanand.jpeg"
import dr4 from "../assets/img/members/DR.Anilkumar.jpg"
import dr5 from "../assets/img/members/Dr.shitij.jpg"
import dr6 from "../assets/img/members/Dr.Nomeeta.jpg"
import dr7 from "../assets/img/members/Dr.Pankaj.jpg"
import dr8 from "../assets/img/members/Dr.Nibedita.jpg"
import dr9 from "../assets/img/members/Dr.Srirang.jpg"
import dr10 from "../assets/img/members/Dr.Shekar.jpg"
import dr11 from "../assets/img/members/Dr.Hiren.jpg"
import dr12 from "../assets/img/members/Dr.Rajeev.jpg"
import dr13 from "../assets/img/members/Dr.Shilpa.jpg"
import dr14 from "../assets/img/members/Dr.Rajiv.jpg"

const Members = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init();
  }, []);

  return (
    <>
      {/* Members Section */}
      <section id="members" className="section members">
        <div className="container">
          <h1 className="members-heading">IMA Office Bearers 2022-2024</h1>
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
  image: dr1,
  name: "Dr.R.V.Asokan",
  role: "National President IMA Hqrs-2023-2024",
},
{
  image: dr2,
  name: "Dr.Sharad Kumar Aggarwal",
  role: "Imm.Past National President,IMA Hqrs-2022-2023",
},
{
  image: dr3,
  name: "Dr.PD.Sahajanand Singh",
  role: "Past National, President IMA Hqrs-2021-2022",
},
{
  image: dr4,
  name: "Dr.Anilkumar J Nayak",
  role: "Hony. Secretary General IMA Hqrs 2022-2024",
},
{
  image: dr5,
  name: "Dr.Shitij Bali",
  role: "Hony. Finance Secretary, IMA Hqrs 2022-2024",
},
{
  image: dr6,
  name: "Dr.Nomeeta Shiv Gupta",
  role: "Chairman, IMA AMS Hqrs -2023-2024",
},
{
  image: dr7,
  name: "Dr.Pankaj Mutneja",
  role: "Imm. Past Chairman IMA AMS Hqrs -2022-2023",
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
  name: "Dr.D.Shekhar Reddy",
  role: "Hony. Joint Secretary, IMA AMS Hqrs -2022-2024",
},
{
  image: dr11,
  name: "Dr.Hiren S Kothari",
  role: "Joint Secretary, IMA AMS Hqrs 2022-2024",
},
{
  image: dr12,
  name: "Dr.Rajeev Goel",
  role: "Joint Secretary, IMA AMS Hqrs 2022-2024",
},
{
  image: dr13,
  name: "Dr.Shilpa Basu Roy",
  role: "Hony. Editor, IMA AMS Hqrs-2022-2024",
},
{
  image: dr14,
  name: "Dr.Rajiv Ranjan Prasad",
  role: "Executive Editor, IMA AMS Hqrs-2022-2024",
},
];

export default Members;

