import React from "react";
import BadgeName from "../components/BadgeName";
import d_icon1 from "../assets/d_icon1.png";
import d_icon2 from "../assets/d_icon2.png";
const EducationSection = () => {
  return (
    <section className="education_section_parent_container bg-[var(--primary-bg)] text-white py-5">
      <div className="education_section_child_container w-[80%] py-10 mx-auto text-start flex flex-col lg:flex-row gap-y-10">

        <div className="inner_child_left  flex-1 project-card">
          <BadgeName content="EDUCATION" color="white" />
          <h1 className="lg:text-7xl text-4xl ">
            My Educational <br /> Qualification
          </h1>
        </div>

        <div className="inner_child_right  border-l-4 border-green-500 pl-5 flex-1 ">
          <div className="inner_child_right flex flex-col gap-5  ">
            <div className="degree_1 flex flex-col  gap-5 ">
              <div className="skill_name flex gap-5 project-card">
                <div className="bg-[var(--secondary-bgcolor)] p-5 h-fit rounded-full ">
                  <img
                    src={d_icon1}
                    alt="png"
                    className="aspect-square h-10 w-10  flex-shrink-0"
                  />
                </div>
                <div className="degree_name flex flex-col justify-center ">
                  <div className="degree_detail">
                    {/* <ul className="">
                      <li>UNDER GRADUATE</li>
                      <li className="">in</li>
                      <li className="font-light">
                        UI/UX Design And Development
                      </li>
                    </ul> */}
                    <p>Under Graduate in UI/UX <br/> deisgn and development</p>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            <div className="degree_1 flex flex-col  gap-5 project-card">
              <div className="skill_name flex gap-5">
                <div className="bg-[var(--secondary-bgcolor)] p-5 rounded-full">
                  <img
                    src={d_icon2}
                    alt="png"
                    className="aspect-square h-10 w-10 flex-shrink-0"
                  />
                </div>
                <div className="degree_name flex flex-col justify-center ">
                  <div className="degree_detail">
                    <p>Studied at <br/> deisgn and development</p>
                  </div>

                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
