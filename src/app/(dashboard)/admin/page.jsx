export const metadata = {
  title: "Admin Dashboard",
};

export default function AdminDashboard() {
  return (
    <div>
      <div className="col-span-12">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Welcome Admin! You have access to all system modules.
        </p>
      </div>
    </div>
  );
}
