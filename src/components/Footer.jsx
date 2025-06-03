export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm space-y-2 md:space-y-0">
        <p>&copy; 2025 IncrediFund. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://www.termsfeed.com/live/e99b85d2-915e-46c4-9ddd-929e7eeb65f9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Terms and Conditions
          </a>
          <a
            href="https://www.termsfeed.com/live/412ce65b-4524-405f-8740-dcdb492fe1b2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}