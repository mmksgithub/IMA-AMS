import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import sample images
import dr1 from "../assets/img/members/Dr.-Sahajanand-PD.-Singh-5.jpg";
import dr2 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs.jpg-copy.jpg"
import dr3 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-2.jpg-copy-2.jpg";
import dr4 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-4.jpg-copy-4.jpg";
import dr5 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-5.jpg-copy-5.jpg"
import dr7 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-6.jpg-copy-6.jpg"
import dr8 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-7.jpg-copy-7.jpg"
import dr9 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-14.jpg-copy-14.jpg"
import dr10 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-1.jpg-copy-1.jpeg"
import dr11 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-8.jpg-copy-8.jpg"
import dr12 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-9.jpg-copy-9.jpg"
import dr13 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-10.jpg-copy-10.jpg"
import dr14 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-12.jpg-copy-12.jpg"
import dr6 from "../assets/img/members/Dr-M-Bhaskaran-Past-Chairman-IMA-AMS-HQrs.jpg"
import dr16 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-15.jpg-copy-15.jpg"
import dr17 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-16.jpg-copy-16.jpg"
import dr18 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-17.jpg-copy-17.jpg"
import dr19 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-3.jpg-copy-3.jpg"
import dr20 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-11.jpg-copy-11.jpg"
import dr21 from "../assets/img/members/Dr-O-P-Tewari-Past-National-Chairman-IMA-AMS-HQrs-13.jpg-copy-13.jpg"






const PastBearers = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init();
  }, []);

  return (
    <>
      {/* Members Section */}
      <section id="members" className="section members">
        <div className="container">
          <h1 className="members-heading">Past National Chairman IMA-AMS</h1>
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
      
      <section id="members" className="section members">
        <div className="container">
          <h1 className="members-heading">Past Hony. National Secretary IMA-AMS</h1>
          <br />
          <div className="row justify-content-center">
            {membersData1.map((member, index) => (
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

const membersData = [ 
  {
    image: dr1,
    name: "Dr.D.Shreehari Rao",
    role: "2020-2021",
  },

  {
    image: dr13,
    name: "Dr. M. S. Ashraf",
    role: "2019-2020",
  },
  {
    image: dr12,
    name: "Dr. Natwar Sharda",
    role: "2018-2019",
  },
  {
    image: dr11,
    name: "Dr. Madhuchanda Kar",
    role: "2017-2018",
  },
  {
    image: dr8,
    name: "Dr. Joseph Mani",
    role: " 2016-2017",
  },
  {
    image: dr7,
    name: "Dr. Kiranshankar Wasudeo Deoras",
    role:"2015-2016",
  },
  {
    image: dr5,
    name: "Dr. Ajoy Kumar Singh",
    role: "2014-2015",
  },
  {
    image: dr4,
    name: "Dr. Satish Kumar Raj",
    role: "2013-2014",
  },
   
  {
    image: dr19,
    name: "Dr. Ravi Wankhedkar",
    role: "2012-2013",
  },
  {
    image: dr3,
    name: "Dr.Surendra Daga",
    role: "2011-2012",
  },
  {
    image: dr10,
    name: "Dr.Zameer Pasha",
    role: "2010-2011",
  },
  {
    image: dr2,
    name: "Dr. O.P.Tewari",
    role: "2009-2010",
  },
  {
    image: dr6,
    name: "Dr.M.Bhaskaran",
    role: "2008-2009",
  },

  ];


const membersData1 = [ 
  
{
  image: dr18,
  name: "Dr. Mohan Gupta",
  role: "2019-2020",
},
{
  image: dr17,
  name: "Dr. V. S. Rao",
  role: "2017-2018",
},
{
  image: dr16,
  name: "Dr. P. Pulla Rao",
  role: "2015-2016",
},
{
  image: dr9,
  name: "Dr.E.Prabhavathi",
  role:"2013-2014",
},
{
  image: dr21,
  name: "Dr.M. S.Hari Babu",
  role: "2011-2012",
},
{
  image: dr14,
  name: "Dr.B.N.Reddy",
  role: "2009-2010",
},
{
  image: dr20,
  name: "Dr.G.Suresh",
  role: "2008",
},





];

export default PastBearers;

