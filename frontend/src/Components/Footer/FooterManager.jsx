export default function FooterManager() {
  return (
    <footer className="flex items-center justify-between border-t border-gray-200 bg-white px-8 py-4 text-sm text-gray-400">
      <p>© 2026 RecruitDirect by LinkStack. Professional Recruitment Ecosystem.</p>

      <div className="flex items-center gap-3">
        <span className="rounded-md bg-gray-100 px-3 py-1 font-semibold text-indigo-600">
          SYSTEM ACTIVE
        </span>
        <span className="rounded-md bg-gray-100 px-3 py-1 font-semibold text-purple-600">
          2.4K ONLINE
        </span>
      </div>
    </footer>
  );
}