// config/sidebarConfig.js
import {
  Grid,
  Users,
  BarChart3,
  Calendar,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  KanbanSquare,
  User,
  Settings,
  Shield,
  Database,
} from "lucide-react";

const sidebarConfig = {
  superadmin: {
    main: [
      {
        name: "Super Dashboard",
        path: "/superadmin",
        icon: <Shield className="w-5 h-5" />,
      },
      {
        name: "All Users",
        path: "/superadmin/users",
        icon: <Users className="w-5 h-5" />,
      },
      {
        name: "System Analytics",
        path: "/superadmin/analytics",
        icon: <Database className="w-5 h-5" />,
      },
      {
        name: "Admin Access",
        path: "/dashboard/admin",
        icon: <Grid className="w-5 h-5" />,
      },
      {
        name: "Donor Access",
        path: "/dashboard/donor",
        icon: <HeartHandshake className="w-5 h-5" />,
      },
      {
        name: "Alumni Access",
        path: "/dashboard/alumni",
        icon: <GraduationCap className="w-5 h-5" />,
      },
      {
        name: "Faculty Access",
        path: "/dashboard/faculty",
        icon: <BookOpen className="w-5 h-5" />,
      },
    ],
    others: [
      {
        name: "System Settings",
        path: "/superadmin/settings",
        icon: <Settings className="w-5 h-5" />,
      },
    ],
  },
  admin: {
    main: [
      {
        name: "Dashboard",
        path: "/dashboard/admin",
        icon: <Grid className="w-5 h-5" />,
      },
      {
        name: "Users",
        path: "/dashboard/admin/users",
        icon: <Users className="w-5 h-5" />,
      },
      {
        name: "Analytics",
        path: "/dashboard/admin/analytics",
        icon: <BarChart3 className="w-5 h-5" />,
      },
    ],
    others: [
      {
        name: "Kanban",
        path: "/dashboard/admin/kanban",
        icon: <KanbanSquare className="w-5 h-5" />,
      },
      {
        name: "Profile",
        path: "/dashboard/admin/profile",
        icon: <User className="w-5 h-5" />,
      },
    ],
  },

  donor: {
    main: [
      {
        name: "Dashboard",
        path: "/dashboard/donor",
        icon: <Grid className="w-5 h-5" />,
      },
      {
        name: "My Donations",
        path: "/dashboard/donor/donations",
        icon: <HeartHandshake className="w-5 h-5" />,
      },
      {
        name: "History",
        path: "/dashboard/donor/history",
        icon: <BarChart3 className="w-5 h-5" />,
      },
    ],
    others: [
      {
        name: "Profile",
        path: "/dashboard/donor/profile",
        icon: <User className="w-5 h-5" />,
      },
    ],
  },

  alumni: {
    main: [
      {
        name: "Dashboard",
        path: "/dashboard/alumni",
        icon: <Grid className="w-5 h-5" />,
      },
      {
        name: "Events",
        path: "/dashboard/alumni/events",
        icon: <Calendar className="w-5 h-5" />,
      },
      {
        name: "Network",
        path: "/dashboard/alumni/network",
        icon: <Users className="w-5 h-5" />,
      },
    ],
    others: [
      {
        name: "Profile",
        path: "/dashboard/alumni/profile",
        icon: <User className="w-5 h-5" />,
      },
    ],
  },

  faculty: {
    main: [
      {
        name: "Dashboard",
        path: "/dashboard/faculty",
        icon: <Grid className="w-5 h-5" />,
      },
      {
        name: "Courses",
        path: "/dashboard/faculty/courses",
        icon: <BookOpen className="w-5 h-5" />,
      },
      {
        name: "Students",
        path: "/dashboard/faculty/students",
        icon: <GraduationCap className="w-5 h-5" />,
      },
    ],
    others: [
      {
        name: "Schedule",
        path: "/dashboard/faculty/schedule",
        icon: <Calendar className="w-5 h-5" />,
      },
      {
        name: "Profile",
        path: "/dashboard/faculty/profile",
        icon: <User className="w-5 h-5" />,
      },
    ],
  },
};

export default sidebarConfig;
