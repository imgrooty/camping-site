"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  console.log("session: ", session);

  
  return (
    <div className="container h-full m-50 mx-auto px-4 py-20">
      {/* User Profile Section */}
      <div className="bg-stone-50 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        <div className="flex items-center space-x-4">
          <img 
            src={session.data?.user?.image || "/placeholder-avatar.png"} 
            alt="Profile" 
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="font-medium">{session.data?.user?.fullName}</h3>
            <p className="text-gray-600">{session.data?.user?.email}</p>
          </div>
        </div>
      </div>

      {/* Favorite Listings Section */}
      <div className="bg-stone-50 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Favorite Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add your favorite listings cards here */}
          <div className="border rounded-lg p-4">
            <p className="text-gray-600">No favorites yet</p>
          </div>
        </div>
      </div>

      {/* Camp Listing Form */}
      <div className="bg-stone-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Create New Listing</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Listing Title</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              rows={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Price per night</label>
            <input 
              type="number" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors"
          >
            Create Listing
          </button>
        </form>
      </div>
    </div>
  );
}