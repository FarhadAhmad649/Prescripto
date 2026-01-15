import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

function AddDoctor() {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 year");
  const [degree, setDegree] = useState("");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { aToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      // client-side validation to avoid server "Missing Requirements"
      if (
        !name ||
        !email ||
        !password ||
        !degree ||
        !experience ||
        !about ||
        !fees
      ) {
        console.log("AddDoctor: missing required fields", {
          name,
          email,
          password,
          degree,
          experience,
          about,
          fees,
        });
        return toast.error("Please fill all required fields");
      }

      if (!docImg) {
        console.log("AddDoctor: no image selected - showing toast");
        return toast.error("Image not selected");
      }

      const formData = new FormData();

      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("degree", degree);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`);
      });

      const { data } = await axios.post(
        backendUrl + `/api/admin/add-doctor`,
        formData,
        { headers: { aToken } }
      );

      console.log("AddDoctor: response from add-doctor", data);
      if (data.success) {

        setDocImg(false)
        setName('')
        setEmail('')
        setPassword('')
        setExperience('1 year')
        setDegree('')
        setFees('')
        setAbout('')
        setSpeciality('General physician')
        setAddress1('')
        setAddress2('')

        toast.success(data.message);

      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("AddDoctor: caught error", error);
      toast.error(error?.message || String(error));
    }
  };

  return (
    <div>
      <p className="mt-4 ml-5 text-2xl font-medium text-gray-800">Add Doctor</p>

      <form
        onSubmit={onSubmitHandler}
        noValidate
        className="items-center text-gray-700 bg-white  m-5 max-w-160 p-5 border border-gray-100 shadow-lg max-h-[82vh] overflow-y-auto scroll-smooth no-scrollbar"
        action=""
      >
        <div className="flex gap-3 items-center leading-4">
          <label htmlFor="doc-img">
            <img
              className="w-24 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="doctor"
            />
          </label>
          <input
            type="file"
            onChange={(e) => setDocImg(e.target.files[0])}
            id="doc-img"
            hidden
          />
          <p className="text-gray-600">Upload doctor picture</p>
        </div>
        <div>
          <div className=" grid grid-cols-1 sm:grid-cols-2">
            <div className="p-3">
              <label htmlFor="doc-name">Doctor name</label>
              <input
                className="w-full border-[0.5px] border-gray-300 px-2 py-1 rounded-sm my-2"
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                value={name}
                placeholder="Name"
              />
            </div>

            <div className="p-3">
              <label htmlFor="speciality">Speciality</label>
              <select
                className="w-full border-[0.5px] border-gray-300 px-2 py-1 rounded-sm my-2"
                onChange={(e) => setSpeciality(e.target.value)}
                name=""
                value={speciality}
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pedriatricians">Pedriatritions</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gestroenterologist">Gestroenterologist</option>
              </select>
            </div>

            <div className="p-3">
              <label htmlFor="doc-email">Doctor email</label>
              <input
                className="w-full border-[0.5px] border-gray-300 px-2 py-1 rounded-sm my-2"
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                value={email}
                required
                placeholder="Your email"
              />
            </div>

            <div className="p-3">
              <label htmlFor="degree">Degree (or Education)</label>
              <input
                className="w-full border-[0.5px] border-gray-300 px-2 py-1 rounded-sm my-2"
                onChange={(e) => setDegree(e.target.value)}
                type="text"
                value={degree}
                required
                placeholder="Degree (or use Education field)"
              />
            </div>

            <div className="p-3">
              <label htmlFor="doc-name">Doctor password</label>
              <input
                className="w-full border-[0.5px] border-gray-300 px-2 py-1 rounded-sm my-2"
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                value={password}
                required
                placeholder="password"
              />
            </div>

            <div className="p-3">
              <label htmlFor="address">Address</label>
              <input
                className="w-full border-[0.5px] border-gray-300 px-2 py-1 rounded-sm my-2"
                onChange={(e) => setAddress1(e.target.value)}
                type="text"
                value={address1}
                required
                placeholder="Address 1"
              />
              <input
                className="w-full border-[0.5px] border-gray-300 px-2 py-1 rounded-sm my-2"
                onChange={(e) => setAddress2(e.target.value)}
                type="text"
                value={address2}
                required
                placeholder="Address 2"
              />
            </div>

            <div className="p-3">
              <label htmlFor="experience">Experience</label>
              <select
                className="w-full border-[0.5px] border-gray-300 px-2 py-1 rounded-sm my-2"
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                required
                id=""
              >
                <option value="1 year">1 year</option>
                <option value="2 year">2 year</option>
                <option value="3 year">3 year</option>
                <option value="4 year">4 year</option>
                <option value="5 year">5 year</option>
                <option value="6 year">6 year</option>
                <option value="7 year">7 year</option>
                <option value="8 year">8 year</option>
                <option value="9 year">9 year</option>
                <option value="10 year">10 year</option>
              </select>
            </div>

            <div className="p-3">
              {" "}
              <label htmlFor="fees">Fees</label>
              <input
                className="w-full border-[0.5px] border-gray-300 px-2 py-1 rounded-sm my-2"
                onChange={(e) => setFees(e.target.value)}
                type="text"
                value={fees}
                required
                placeholder="Your fees"
              />
            </div>
          </div>

          <div className="p-3">
            <label htmlFor="about">About me</label>
            <textarea
              className="w-full border-[0.5px] border-gray-300 px-2 py-1 rounded-sm my-2"
              onChange={(e) => setAbout(e.target.value)}
              type="text"
              value={about}
              rows={5}
              required
              placeholder="Write about yourself"
            />
          </div>
        </div>

        <div className="w-full flex items-center">
          <button
            className="border border-gray-100 mt-5 text-white px-10 py-2 bg-[#5f6fff] hover:scale-105 transition-all duration-300 font-medium rounded-full mx-auto"
            type="submit"
          >
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddDoctor;
