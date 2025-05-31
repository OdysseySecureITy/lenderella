export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm space-y-2 md:space-y-0">
        <p>&copy; 2025 IncrediFund. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://www.termsfeed.com/live/32795216-ed45-4b76-a2af-7554e6ea4153"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Terms and Conditions
          </a>
          <a
            href="https://www.termsfeed.com/live/4a7d4459-82d3-49cd-bd70-62be9477d9b5"
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