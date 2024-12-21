import React from 'react'

export default function page() {
  return (
    <div
    class="bg-moviedb-black min-h-screen flex items-center justify-center p-4"
  >
    <div class="w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl">
      <div class="text-center">
        <h1 class="text-white text-3xl font-bold mb-6">Create Your Account</h1>

        <form id="signupForm" class="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            class="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            class="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            class="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
            required
          />
          <input
            type="password"
            placeholder="Create Password"
            class="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            class="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
            required
          />

          <div class="text-left text-moviedb-gray text-sm">
            <label class="flex items-center">
              <input type="checkbox" class="mr-2" required />
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          <button
            type="submit"
            class="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div class="mt-6 text-moviedb-gray">
          Already have an account?
          <a href="#" class="text-white hover:underline">Sign in</a>
        </div>
      </div>
    </div>
  </div>
  )
}