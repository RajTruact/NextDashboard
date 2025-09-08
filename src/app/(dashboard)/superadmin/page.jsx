// app/superadmin/page.jsx
export default function SuperAdminDashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Super Admin Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Welcome Super Admin! You have access to all system modules.
        </p>
      </div>
      
      {/* Add super admin specific components here */}
    </div>
  );
}