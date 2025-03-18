import { useFormik } from "formik";
import axios, { AxiosError } from "axios";
import { useState } from "react";

type PropertyFormValues = {
  title: string;
  description: string;
  files: File[]; // For multiple images/videos
  price: string;
  type: "rent" | "sale"; // Radio button
  location: string;
  state: string;
  lga: string;
  property: string;
  bathroom: string;
  bedroom: string;
  landSize: string;
  titleDocument: string;
  ownershipType: string;
  propertyID: string;
  purpose: string;
};

const AddProperty = () => {
  const [propertyStatus, setPropertyStatus] = useState<string>("");
  // const [propertyStatusError, setPropertyStatusError] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const formik = useFormik<PropertyFormValues>({
    initialValues: {
      title: "",
      description: "",
      files: [],
      price: "",
      type: "rent",
      location: "",
      state: "",
      lga: "",
      property: "House",
      bathroom: "",
      bedroom: "",
      landSize: "",
      titleDocument: "",
      ownershipType: "Freehold",
      propertyID: "",
      purpose: "Residential",
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("type", values.type);
      formData.append("location", values.location);
      formData.append("property", values.property);
      formData.append("state", values.state);
      formData.append("lga", values.lga);
      formData.append("bedroom", values.bedroom);
      formData.append("bathroom", values.bathroom);
      formData.append("landSize", values.landSize);
      formData.append("titleDocument", values.titleDocument);
      formData.append("ownershipType", values.ownershipType);
      formData.append("propertyID", values.propertyID);
      formData.append("purpose", values.purpose);

      values.files.forEach((file) => {
        formData.append("images", file); // 'images' matches backend multer field
      });

      try {
        setIsSaving(true);
        const saveProperty = await axios.post(
          "http://localhost:3001/add-property",
          // "https://foland-realty-server.onrender.com/add-property",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const { data } = await saveProperty;
        setPropertyStatus(data.message);
        setTimeout(() => {
          setPropertyStatus('');
        }, 2500);
      } catch (error) {
        const axiosError = error as AxiosError<{ message?: string }>;
        const errorMessage =
        axiosError.response?.data?.message || "An unexpected error occurred.";
        setPropertyStatus(errorMessage);
        setTimeout(() => {
          setPropertyStatus('');
        }, 2500);
      } finally {
        setIsSaving(false);
      }
    },
  });

  const { property } = formik.values;

  const statesOfNigeria = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  return (
    <div className="mx-auto w-full text-navy-blue">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white border  border-gray-300 shadow-md rounded-lg p-6 max-md:p-2 space-y-6 "
      >
        <div className="mx-auto w-[90%] py-6 space-y-10  ">
          <h2 className="text-2xl font-bold text-navy-blue mb-5 text-center">
            Add Property
          </h2>

          <div className="md:flex md:space-x-4 md:space-y-0 space-y-4">
            <div className="w-full">
              <label htmlFor="title" className="block  font-medium mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                className="w-full border border-gray-400 rounded p-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="price" className="block  font-medium mb-1">
                Price in Naira (#)
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                className="w-full border border-gray-400 rounded p-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block  font-medium mb-1">
              Description with features
            </label>
            <textarea
              name="description"
              id="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              className="w-full border border-gray-400 rounded p-2"
              rows={4}
            />
          </div>

          <div>
            <label htmlFor="files" className="block  font-medium mb-1">
              Upload Images or Videos (Max 4)
            </label>
            <input
              type="file"
              name="files"
              id="files"
              multiple
              accept="image/*,"
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                if (files.length > 4) {
                  alert("You can only upload 4 files");
                  return;
                }
                formik.setFieldValue("files", files);
              }}
              className="w-full border border-gray-400 rounded p-2"
            />
          </div>
          <div>
            <div className="flex items-center justify-between max-md:flex-col max-md:gap-6">
              <div className="w-[50%] max-md:w-full">
                <label htmlFor="state" className="block font-medium">
                  Property
                </label>
                <select
                  name="property"
                  id="property"
                  value={formik.values.property}
                  onChange={formik.handleChange}
                  className="w-full border border-gray-400 rounded p-2"
                >
                  <option value="">Select Property</option>
                  <option value="House">House</option>
                  <option value="Land">Land</option>
                  {/* Add all Nigerian states */}
                </select>
              </div>
              <div className="flex items-center justify-between w-[30%] max-md:w-full">
                <span className="block font-medium">Type:</span>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="type"
                      value="rent"
                      checked={formik.values.type === "rent"}
                      onChange={formik.handleChange}
                      className="mr-2"
                    />
                    For Rent
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="type"
                      value="sale"
                      checked={formik.values.type === "sale"}
                      onChange={formik.handleChange}
                      className="mr-2"
                    />
                    For Sale
                  </label>
                </div>
              </div>
            </div>
            {property === "House" ? (
              <div className="flex justify-between mt-8 max-md:flex-col max-md:gap-7">
                <div className="basis-[30%]">
                  <label htmlFor="bedroom" className="block  font-medium mb-1">
                    How many bedroom(s)
                  </label>
                  <input
                    type="number"
                    name="bedroom"
                    id="bedroom"
                    value={formik.values.bedroom}
                    onChange={formik.handleChange}
                    className="w-full border border-gray-400 rounded p-2"
                  />
                </div>
                <div className="basis-[30%]">
                  <label htmlFor="bathroom" className="block  font-medium mb-1">
                    How many bathroom(s)
                  </label>
                  <input
                    type="number"
                    name="bathroom"
                    id="bathroom"
                    value={formik.values.bathroom}
                    onChange={formik.handleChange}
                    className="w-full border border-gray-400 rounded p-2"
                  />
                </div>
                <div className="basis-[30%]">
                  <label htmlFor="landSize" className="block  font-medium mb-1">
                    Land Size in Square Meters(m2)
                  </label>
                  <input
                    type="number"
                    name="landSize"
                    id="landSize"
                    value={formik.values.landSize}
                    onChange={formik.handleChange}
                    className="w-full border border-gray-400 rounded p-2"
                  />
                </div>
              </div>
            ) : (
              <div className="flex justify-between mt-8 max-md:flex-col max-md:gap-7">
                <div className="w-[30%] max-md:w-full">
                  <label htmlFor="purpose" className="block  font-medium mb-1">
                    Purpose
                  </label>
                  <select
                    name="purpose"
                    id="purpose"
                    value={formik.values.purpose}
                    onChange={formik.handleChange}
                    className="w-full border border-gray-400 rounded p-2"
                  >
                    <option value="">Select</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Agricultural">Agricultural</option>
                    <option value="Mixed Use">Mixed Use</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="landSize" className="block  font-medium mb-1">
                    Land Size in Square Meters(m2)
                  </label>
                  <input
                    type="number"
                    name="landSize"
                    id="landSize"
                    value={formik.values.landSize}
                    onChange={formik.handleChange}
                    className="w-full border border-gray-400 rounded p-2"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8 max-md:flex-col max-md:gap-7">
              <div className="basis-[30%]">
                <label
                  htmlFor="titleDocument"
                  className="block  font-medium mb-1"
                >
                  Do you have a title document
                </label>
                <select
                  name="titleDocument"
                  id="titleDocument"
                  value={formik.values.titleDocument}
                  onChange={formik.handleChange}
                  className="w-full border border-gray-400 rounded p-2"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  {/* Add all Nigerian states */}
                </select>
              </div>
              <div className="basis-[30%]">
                <label
                  htmlFor="ownershipType"
                  className="block  font-medium mb-1"
                >
                  Ownership Type
                </label>
                <select
                  name="purpose"
                  id="purpose"
                  value={formik.values.purpose}
                  onChange={formik.handleChange}
                  className="w-full border border-gray-400 rounded p-2"
                >
                  <option value="">Select</option>
                  <option value="Freehold">Freehold</option>
                  <option value="Leasehold">Leasehold</option>
                </select>
              </div>
              <div className="basis-[30%]">
                <label htmlFor="propertyID" className="block  font-medium mb-1">
                  Property ID/Ref Number
                </label>
                <input
                  type="number"
                  name="propertyID"
                  id="propertyID"
                  value={formik.values.propertyID}
                  onChange={formik.handleChange}
                  className="w-full border border-gray-400 rounded p-2"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="location" className="block  font-medium mb-1">
              Full Address or Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={formik.values.location}
              onChange={formik.handleChange}
              className="w-full border border-gray-400 rounded p-2"
            />
          </div>

          <div className="md:flex md:space-x-4 md:space-y-0 space-y-10">
            <div className="w-full">
              <label htmlFor="state" className="block  font-medium mb-1">
                State
              </label>
              <select
                name="state"
                id="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                className="w-full border border-gray-400 rounded p-2"
              >
                <option value="">Select State</option>
                {statesOfNigeria.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
                {/* Add all Nigerian states */}
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="lga" className="block  font-medium mb-1">
                Local Government Area
              </label>
              <input
                type="text"
                name="lga"
                id="lga"
                value={formik.values.lga}
                onChange={formik.handleChange}
                className="w-full border border-gray-400 rounded p-2"
              />
            </div>
          </div>

          <div className="text-center">
            <p
              className={`${
                propertyStatus === "Property Saved"
                  ? "text-green-500"
                  : "text-red-500"
              } text-lg`}
            >
              {propertyStatus && propertyStatus}
            </p>
          </div>
          <div className="w-full ">
            <button
              disabled={isSaving ? true : false}
              type="submit"
              className={` ${
                isSaving ? "opacity-[.7]" : ""
              } bg-blue-800 w-full text-white py-2 px-4 rounded-sm cursor-pointer transition duration-200`}
            >
              {isSaving ? "Please Wait ..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
