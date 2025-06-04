import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="text-center py-32 bg-gradient-to-b from-black to-gray-900 relative">
        <h1 className="text-5xl font-bold mb-4">SUNNEX BV</h1>
        <p className="text-xl italic mb-6">Where Brilliance Begins.</p>
        <Button className="bg-white text-black hover:bg-gray-300 mr-4">Explore Our Legacy</Button>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <Button className="bg-green-500 text-white hover:bg-green-600">WhatsApp Us</Button>
        </a>
      </div>

      {/* About Us */}
      <section className="py-20 px-8 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-10">About Us</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-300">
          <p className="mb-4">
            SUNNEX BV was founded in 1968 by M. Jayantilal M Shah with a vision to redefine excellence in the diamond industry. From humble beginnings, our passion for precision and integrity has helped us expand globally.
          </p>
          <p className="mb-4">
            Today, we operate in major diamond hubs including Belgium, South Africa, and Surat, with our head office proudly located in Mumbai. Our journey continues with the same founding principles: trust, craftsmanship, and brilliance.
          </p>
          <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3" alt="Founder's Vision" className="rounded-2xl shadow-xl my-6 w-full object-cover max-h-96" />
        </div>
      </section>

      {/* Custom Orders */}
      <section className="py-20 px-8 bg-black">
        <h2 className="text-3xl font-semibold text-center mb-10">Custom Orders</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-300">
          <p>
            We specialize in custom diamond pieces tailored to your vision. From concept to creation, our process is collaborative, precise, and luxurious.
          </p>
          <div className="mt-8 text-center">
            <Button className="bg-white text-black hover:bg-gray-300">
              Start Your Custom Design
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-8 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-10">Contact Us</h2>
        <div className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
          <p>Email: contact@sunnexbv.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: Antwerp, Belgium</p>
        </div>
        <form className="max-w-2xl mx-auto text-black bg-white rounded-xl shadow-lg p-6">
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Name</label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email</label>
            <input type="email" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Message</label>
            <textarea className="w-full p-2 border rounded" rows="4" required></textarea>
          </div>
          <Button type="submit" className="bg-black text-white hover:bg-gray-800">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-6 border-t border-gray-700">
        <p className="text-sm text-gray-500">© 2025 SUNNEX BV. All rights reserved.</p>
      </footer>
    </div>
  );
}

