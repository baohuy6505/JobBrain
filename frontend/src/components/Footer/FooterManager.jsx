export default function FooterManager() {
  return (
    <footer className="border-t border-gray-200 bg-white px-3 py-3 sm:px-4 lg:px-8">
      <div className="flex flex-col gap-3 text-xs text-gray-400 sm:text-sm xl:flex-row xl:items-center xl:justify-between">
        <p className="leading-6">
          © 2026 RecruitDirect by LinkStack. Professional Recruitment Ecosystem.
        </p>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="rounded-md bg-gray-100 px-3 py-1 font-semibold text-indigo-600">
            SYSTEM ACTIVE
          </span>
          <span className="rounded-md bg-gray-100 px-3 py-1 font-semibold text-purple-600">
            2.4K ONLINE
          </span>
        </div>
      </div>
    </footer>
  );
}