import { useFormik } from "formik";

type PropertyFormValues = {
  title: string;
  description: string;
  files: File[]; // For multiple images/videos
  price: string;
  type: "rent" | "sale"; // Radio button
  address: string;
  state: string;
  lga: string;
};

const AddProperty = () => {
  const formik = useFormik<PropertyFormValues>({
    initialValues: {
      title: "",
      description: "",
      files: [],
      price: "",
      type: "rent",
      address: "",
      state: "",
      lga: "",
    },
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

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
    <div className="mx-auto text-navy-blue">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white border border-gray-300 shadow-md rounded-lg p-6 space-y-6 "
      >
        <h2 className="text-2xl font-bold text-navy-blue mb-5 text-center">Add Property</h2>

        <div className="md:flex md:space-x-4 md:space-y-0 space-y-4">
          <div className="w-full">
            <label
              htmlFor="title"
              className="block  font-medium mb-1"
            >
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
            <label
              htmlFor="price"
              className="block  font-medium mb-1"
            >
              Price
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
          <label
            htmlFor="description"
            className="block  font-medium mb-1"
          >
            Description
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
          <label
            htmlFor="files"
            className="block  font-medium mb-1"
          >
            Upload Images or Videos (Max 4)
          </label>
          <input
            type="file"
            name="files"
            id="files"
            multiple
            onChange={(event) =>
              formik.setFieldValue(
                "files",
                Array.from(event.currentTarget.files || [])
              )
            }
            className="w-full border border-gray-400 rounded p-2"
          />
        </div>

        <div className="flex items-center justify-between">
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
              Rent
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
              Sale
            </label>
          </div>
        </div>

        <div>
          <label
            htmlFor="address"
            className="block  font-medium mb-1"
          >
            Full Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            className="w-full border border-gray-400 rounded p-2"
          />
        </div>

        <div className="md:flex md:space-x-4 md:space-y-0 space-y-4">
          <div className="w-full">
            <label
              htmlFor="state"
              className="block  font-medium mb-1"
            >
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
            <label
              htmlFor="lga"
              className="block  font-medium mb-1"
            >
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

        <div className="w-full ">
          <button
            type="submit"
            className="bg-blue-700 w-full text-white py-2 px-4 rounded hover:bg-navy-blue transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
