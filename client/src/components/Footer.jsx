export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p>Serving clients worldwide from [City, State]</p>
      </div>
    </footer>
  );
}
