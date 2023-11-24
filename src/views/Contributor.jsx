import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Contributor = () => {
  const [ContributorData, setContributorData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    number: "",
    country: "",
    brief: "",
  });
  const [errors, setErrors] = useState({});
  const Navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContributorData({
      ...ContributorData,
      [name]: value,
    });
  };
  //   const regex = /^\d{3}d{3}\d{4}$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!ContributorData.firstname.trim()) {
      validationErrors.firstname = "First name is required";
    }
    if (!ContributorData.brief.trim()) {
      validationErrors.brief = "Reason is required to become contributor";
    }
    if (!ContributorData.lastname.trim()) {
      validationErrors.lastname = "last name is required";
    }
    if (!ContributorData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(ContributorData.email)) {
      validationErrors.email = "Enter valid email";
    }
    if (!ContributorData.number.trim()) {
      validationErrors.number = "Number is required";
    } // else if (!regex.test(ContributorData.number)) {
    //   validationErrors.number = "Enter valid Number";
    // }
    if (!ContributorData.country.trim()) {
      validationErrors.country = "country is required";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      //   <span>Your Form is received"</span>;
    }
    Navigate("/AddFoods");
    console.log(ContributorData);
    setContributorData({
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      number: "",
      country: "",
      brief: "",
    });
  };
  const colorcss = {
    color: "red",
    display: "block",
    width: "100%",
  };
  return (
    <>
      <h1 className="font-serif text-3xl text-gray-800 text-center mt-2 leading-normal ">
        Become an Contributor
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100vh",
          margin: "50px 20px",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "fit-content",
          }}
        >
          <h1 className="font-serif font-bold leading-10">
            What is an Contributor?
          </h1>
          <p className="font-serif">
            Contributor is an person who contributes in expanding the food
            catalog and help users to get the variety of foods available for
            them. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia beatae vitae nulla error dignissimos adipisci sequi,
            pariatur optio. Perspiciatis aliquid asperiores ipsum harum et
            itaque soluta, maxime repellat laborum. Optio. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eveniet id quod non fugiat
            expedita fugit et, reprehenderit ab sint minima eum nam praesentium
            aperiam similique quidem enim esse! Saepe, aperiam. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Natus, placeat. Veniam
            deserunt a dolores sequi eaque mollitia amet obcaecati magnam, nisi
            voluptatibus possimus ex soluta dolorem asperiores architecto illo
            at? Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
          <p>
            Hicasperiores, iusto dolorum odio ducimus quaerat aspernatur quod
            sunt similique perspiciatis eligendi dolore culpa nesciunt voluptate
            nulla, praesentium aliquid laudantium! Tenetur!
          </p>
        </div>
        <div
          style={{
            width: "50%",
            height: "fit-content",
            display: "flex",
            justifyContent: "Center",
          }}
        >
          <form>
            <div
              style={{
                width: "87%",
                display: "flex",
                flexDirection: "row",
                flexFlow: "wrap",
              }}
            >
              <div
                style={{
                  width: "25%",
                }}
              >
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  //   autoComplete="given-name"
                  className=" m-2 p-2 border border-red-500"
                  placeholder="Enter your First Name"
                  value={ContributorData.firstname}
                  onChange={handleChange}
                />
                {errors.firstname && (
                  <span style={colorcss}>{errors.firstname}</span>
                )}
              </div>
              <div
                style={{
                  width: "25%",
                }}
              >
                <input
                  type="text"
                  name="middlename"
                  id="middlename"
                  //   autoComplete="given-name"
                  className=" m-2 p-2 border border-red-500 "
                  placeholder="Enter your Middle Name"
                  value={ContributorData.middlename}
                  onChange={handleChange}
                />
              </div>
              <div
                style={{
                  width: "35%",
                  display: "block",
                }}
              >
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  //   autoComplete="given-name"
                  className=" m-2 p-2 border border-red-500 "
                  placeholder="Enter your Last Name"
                  onChange={handleChange}
                  value={ContributorData.lastname}
                  style={{
                    display: "block",
                  }}
                />
                {errors.lastname && (
                  <span style={colorcss}>{errors.lastname}</span>
                )}
              </div>
              <div
                style={{
                  width: "25%",
                }}
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  //   autoComplete="given-email"
                  className=" m-2 p-2 border border-red-500 "
                  placeholder="Enter your Email Address"
                  onChange={handleChange}
                  value={ContributorData.email}
                />
                {errors.email && <span style={colorcss}>{errors.email}</span>}
              </div>
              <div
                style={{
                  width: "25%",
                }}
              >
                <input
                  type="text"
                  name="number"
                  id="number"
                  //   autoComplete="given-number"
                  className=" m-2 p-2 border border-red-500 "
                  placeholder="Enter Phone Number"
                  onChange={handleChange}
                  value={ContributorData.number}
                />
                {errors.number && <span style={colorcss}>{errors.number}</span>}
              </div>
              <div
                style={{
                  width: "25%",
                }}
              >
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  //   autoComplete="given-country"
                  className=" m-2 p-2 border border-red-500 "
                  onChange={handleChange}
                  value={ContributorData.country}
                />
                {errors.country && (
                  <span style={colorcss}>{errors.country}</span>
                )}
              </div>
              <div
                style={{
                  width: "77%",
                  display: "flex",
                  flexFlow: "wrap",
                }}
              >
                <textarea
                  name="brief"
                  id="brief"
                  cols="79"
                  rows="10"
                  className=" m-2 p-2 border border-red-500 "
                  onChange={handleChange}
                  value={ContributorData.brief}
                  placeholder="Why you want to become an Contributor"
                  style={{
                    display: "block",
                  }}
                ></textarea>
                {errors.brief && <span style={colorcss}>{errors.brief}</span>}
                <div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 px-8 ml-2 mt-2 full rounded"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
