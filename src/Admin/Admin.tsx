/* eslint-disable @typescript-eslint/no-unused-vars */
import Subscribe from "../Subscribe/Subscribe";
import { useContextStore } from "../Store/Context";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

// Types
interface User {
  id: number;
  name: string;
  email: string;
  role: "tenant" | "agent" | "landlord";
  propertiesAdded: number;
}

interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  status: "pending" | "approved" | "rejected";
  ownerName: string;
  ownerId: number;
}

// Generate Dummy Users
const generateUsers = (count = 50): User[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(["tenant", "agent", "landlord"]),
    propertiesAdded: faker.number.int({ min: 0, max: 10 }),
  }));
};

// Generate Dummy Properties
const generateProperties = (users: User[], count = 50): Property[] => {
  return Array.from({ length: count }, (_, i) => {
    const owner = faker.helpers.arrayElement(users);
    return {
      id: i + 1,
      title: faker.lorem.words(3),
      price: faker.number.int({ min: 50000, max: 5000000 }),
      location: faker.location.city(),
      status: faker.helpers.arrayElement(["pending", "approved", "rejected"]),
      ownerName: owner.name,
      ownerId: owner.id,
    };
  });
};

const users: User[] = generateUsers();
const properties: Property[] = generateProperties(users);

const Admin = () => {
  const ITEMS_PER_PAGE = 10;
  const [userPage, setUserPage] = useState(1);
  const [propertyPage, setPropertyPage] = useState(1);

  const paginatedUsers = users.slice(
    (userPage - 1) * ITEMS_PER_PAGE,
    userPage * ITEMS_PER_PAGE
  );

  const paginatedProperties = properties.slice(
    (propertyPage - 1) * ITEMS_PER_PAGE,
    propertyPage * ITEMS_PER_PAGE
  );

  const totalUserPages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const totalPropertyPages = Math.ceil(properties.length / ITEMS_PER_PAGE);
  const { showModal, setShowModal } = useContextStore();

  const logOut = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("isLoggedIn", "false");
    location.reload();
  };

  useEffect(() => {
    setTimeout(() => {
      const subscribedValue = localStorage.getItem("isSubscribed");
      if (!subscribedValue) setShowModal(true);
    }, 5000);
  }, []);

  return (
    <div className="">
      Home Welcome to `Admin Page
      {/* <div className="mt-4">
        <div className="p-4 space-y-6">
          <h1 className="text-2xl font-bold text-blue-700">Admin Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg border shadow-sm bg-white p-4">
              <h2 className="text-lg font-semibold">Total Properties</h2>
              <p className="text-2xl text-blue-900">{properties.length}</p>
            </div>
            <div className="rounded-lg border shadow-sm bg-white p-4">
              <h2 className="text-lg font-semibold">Total Users</h2>
              <p className="text-2xl text-blue-900">{users.length}</p>
            </div>
            <div className="rounded-lg border shadow-sm bg-white p-4">
              <h2 className="text-lg font-semibold">Pending Properties</h2>
              <p className="text-2xl text-blue-900">
                {properties.filter((p) => p.status === "pending").length}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-blue-700">Users</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-left">#</th>
                    <th className="border px-4 py-2 text-left">Name</th>
                    <th className="border px-4 py-2 text-left">Email</th>
                    <th className="border px-4 py-2 text-left">Role</th>
                    <th className="border px-4 py-2 text-left">
                      Properties Added
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="border px-4 py-2">{user.id}</td>
                      <td className="border px-4 py-2">{user.name}</td>
                      <td className="border px-4 py-2">{user.email}</td>
                      <td className="border px-4 py-2 capitalize">
                        {user.role}
                      </td>
                      <td className="border px-4 py-2">
                        {user.propertiesAdded}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-blue-700">Properties</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-left">#</th>
                    <th className="border px-4 py-2 text-left">Title</th>
                    <th className="border px-4 py-2 text-left">Price</th>
                    <th className="border px-4 py-2 text-left">Location</th>
                    <th className="border px-4 py-2 text-left">Status</th>
                    <th className="border px-4 py-2 text-left">Owner</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((property) => (
                    <tr key={property.id} className="hover:bg-gray-50">
                      <td className="border px-4 py-2">{property.id}</td>
                      <td className="border px-4 py-2">{property.title}</td>
                      <td className="border px-4 py-2">
                        ₦{property.price.toLocaleString()}
                      </td>
                      <td className="border px-4 py-2">{property.location}</td>
                      <td className="border px-4 py-2 capitalize">
                        {property.status}
                      </td>
                      <td className="border px-4 py-2">{property.ownerName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
      <div className="p-4 space-y-6">
        <h1 className="text-2xl font-bold text-blue-700">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border shadow-sm bg-white p-4">
            <h2 className="text-lg font-semibold">Total Properties</h2>
            <p className="text-2xl text-blue-900">{properties.length}</p>
          </div>
          <div className="rounded-lg border shadow-sm bg-white p-4">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-2xl text-blue-900">{users.length}</p>
          </div>
          <div className="rounded-lg border shadow-sm bg-white p-4">
            <h2 className="text-lg font-semibold">Pending Properties</h2>
            <p className="text-2xl text-blue-900">
              {properties.filter((p) => p.status === "pending").length}
            </p>
          </div>
        </div>

        {/* Users Table */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-blue-700">Users</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="sticky left-0 z-10 bg-gray-100 border px-4 py-2 text-left">
                    #
                  </th>
                  <th className="border px-4 py-2 text-left">Name</th>
                  <th className="border px-4 py-2 text-left">Email</th>
                  <th className="border px-4 py-2 text-left">Role</th>
                  <th className="border px-4 py-2 text-left">
                    Properties Added
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="sticky left-0 z-10 bg-white border px-4 py-2">
                      {user.id}
                    </td>
                    <td className="border px-4 py-2">{user.name}</td>
                    <td className="border px-4 py-2">{user.email}</td>
                    <td className="border px-4 py-2 capitalize">{user.role}</td>
                    <td className="border px-4 py-2">{user.propertiesAdded}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end mt-2 space-x-2">
              <button
                onClick={() => setUserPage((prev) => Math.max(prev - 1, 1))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                disabled={userPage === 1}
              >
                Prev
              </button>
              <span className="px-3 py-1">
                Page {userPage} of {totalUserPages}
              </span>
              <button
                onClick={() =>
                  setUserPage((prev) => Math.min(prev + 1, totalUserPages))
                }
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                disabled={userPage === totalUserPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Properties Table */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-blue-700">Properties</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="sticky left-0 z-10 bg-gray-100 border px-4 py-2 text-left">
                    #
                  </th>
                  <th className="border px-4 py-2 text-left">Title</th>
                  <th className="border px-4 py-2 text-left">Price</th>
                  <th className="border px-4 py-2 text-left">Location</th>
                  <th className="border px-4 py-2 text-left">Status</th>
                  <th className="border px-4 py-2 text-left">Owner</th>
                </tr>
              </thead>
              <tbody>
                {paginatedProperties.map((property) => (
                  <tr key={property.id} className="hover:bg-gray-50">
                    <td className="sticky left-0  bg-white border-b-1 border-l-1 px-4 py-2">
                      {property.id}
                    </td>
                    <td className="border px-4 py-2">{property.title}</td>
                    <td className="border px-4 py-2">
                      ₦{property.price.toLocaleString()}
                    </td>
                    <td className="border px-4 py-2">{property.location}</td>
                    <td className="border px-4 py-2 capitalize">
                      {property.status}
                    </td>
                    <td className="border px-4 py-2">{property.ownerName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end mt-2 space-x-2">
              <button
                onClick={() => setPropertyPage((prev) => Math.max(prev - 1, 1))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                disabled={propertyPage === 1}
              >
                Prev
              </button>
              <span className="px-3 py-1">
                Page {propertyPage} of {totalPropertyPages}
              </span>
              <button
                onClick={() =>
                  setPropertyPage((prev) =>
                    Math.min(prev + 1, totalPropertyPages)
                  )
                }
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                disabled={propertyPage === totalPropertyPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <Subscribe />}
      <button
        onClick={logOut}
        className=" cursor-pointer w-full hover:font-bold bg-blue-800 text-white px-8 pointer rounded-lg py-2.5"
      >
        log out
      </button>
    </div>
    // </div>
  );
};

export default Admin;
