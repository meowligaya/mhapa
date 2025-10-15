import { useState } from "react";
import {
  FaUsers, FaBookOpen, FaClipboardList, FaRegLightbulb, FaRegLifeRing, FaRegUser, FaCog, FaBell, FaMoon, FaSun,
} from "react-icons/fa";
import { MdDashboard, MdMenu, MdClose } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import { IoMdFlash } from "react-icons/io";

// Sidebar item type
type SidebarItem = {
  key: string;
  label: string;
  icon: JSX.Element;
  color?: string;
};


const SIDEBAR_ITEMS: SidebarItem[] = [
  { key: "dashboard", label: "Dashboard", icon: <MdDashboard size={20} /> },
  { key: "users", label: "Users", icon: <FaUsers size={18} /> },
  { key: "lessons", label: "Lessons", icon: <FaBookOpen size={18} /> },
  { key: "modules", label: "General Modules", icon: <GiBookshelf size={18} /> },
  { key: "quizzes", label: "Quizzes", icon: <FaRegLightbulb size={18} /> },
  { key: "flashcards", label: "Flashcards", icon: <IoMdFlash size={18} /> },
  { key: "reports", label: "Reports", icon: <FaClipboardList size={18} /> },
  { key: "support", label: "Support", icon: <FaRegLifeRing size={18} /> },
];

// Dashboard summary cards
const DASHBOARD_CARDS = [
  {
    label: "Active Users",
    value: "2,300",
    change: "+3%",
    icon: <FaUsers size={24} className="text-blue-500" />,
    changeColor: "text-green-600",
  },
  {
    label: "Lessons Completed",
    value: "1,245",
    change: "+5%",
    icon: <FaBookOpen size={24} className="text-blue-500" />,
    changeColor: "text-green-600",
  },
  {
    label: "Quizzes Taken",
    value: "890",
    change: "-2%",
    icon: <FaRegLightbulb size={24} className="text-blue-500" />,
    changeColor: "text-red-500",
  },
  {
    label: "New Signups",
    value: "76",
    change: "+8%",
    icon: <FaRegUser size={24} className="text-blue-500" />,
    changeColor: "text-green-600",
  },
];

// Demo chart
function BarChartDemo() {
  return (
    <svg width="100%" height="80" viewBox="0 0 180 80">
      <rect x="15" y="40" width="15" height="40" fill="#60a5fa" rx="2"/>
      <rect x="40" y="30" width="15" height="50" fill="#2563eb" rx="2"/>
      <rect x="65" y="50" width="15" height="30" fill="#3b82f6" rx="2"/>
      <rect x="90" y="10" width="15" height="70" fill="#60a5fa" rx="2"/>
      <rect x="115" y="60" width="15" height="20" fill="#2563eb" rx="2"/>
      <rect x="140" y="20" width="15" height="60" fill="#3b82f6" rx="2"/>
    </svg>
  );
}

const MOCK_USERS = [
  { id: 1, name: "Juan Dela Cruz", type: "Student", status: "Active" },
  { id: 2, name: "Maria Santos", type: "Staff", status: "Active" },
  { id: 3, name: "Miguel Reyes", type: "Student", status: "Inactive" },
];

const MOCK_LESSONS = [
  { id: 1, title: "Study Habits", completed: 1200 },
  { id: 2, title: "Time Management", completed: 1100 },
  { id: 3, title: "Coping with Stress", completed: 950 },
];

const MOCK_MODULES = [
  { id: 1, title: "General Wellness", uploader: "Admin" },
  { id: 2, title: "Mental Health Basics", uploader: "Admin" },
];

const MOCK_QUIZZES = [
  { id: 1, title: "Stress Awareness Quiz", attempts: 320 },
  { id: 2, title: "Healthy Habits Quiz", attempts: 280 },
];

const MOCK_FLASHCARDS = [
  { id: 1, title: "Coping Skills", cards: 15 },
  { id: 2, title: "Mindfulness Tips", cards: 12 },
];

const MOCK_REPORTS = [
  { id: 1, title: "Engagement Q3 2025", date: "09/01/2025" },
  { id: 2, title: "Resource Usage Aug 2025", date: "08/31/2025" },
];

const MOCK_SUPPORT = [
  { id: 1, user: "Juan Dela Cruz", issue: "Login problem", status: "Resolved" },
  { id: 2, user: "Miguel Reyes", issue: "Lesson not loading", status: "Pending" },
];

function renderTabContent(tab: string, darkMode: boolean) {
  switch (tab) {
    case "dashboard":
      return (
        <div className="w-full flex flex-col gap-6">
          {/* Top Section: Breadcrumb */}
          <div className="flex items-center gap-2 mb-2">
            <MdDashboard size={22} className={darkMode ? "text-blue-300" : "text-blue-500"} />
            <span className={`text-base ${darkMode ? "text-blue-100" : "text-blue-600"}`}>Dashboard</span>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-2">
            {DASHBOARD_CARDS.map(card => (
              <div key={card.label} className={`rounded-xl shadow-sm flex items-center gap-4 px-6 py-5
                ${darkMode ? "bg-[#232b3a] border border-[#232b3a]" : "bg-white border border-blue-50"}
              `}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-50">
                  {card.icon}
                </div>
                <div>
                  <div className={`text-xs ${darkMode ? "text-blue-300" : "text-gray-500"}`}>{card.label}</div>
                  <div className={`text-lg font-bold ${darkMode ? "text-blue-100" : "text-blue-700"}`}>{card.value}</div>
                  <div className={`text-xs flex items-center gap-1 ${card.changeColor}`}>
                    {card.change.startsWith("+") ? (
                      <svg width={12} height={12} className="inline" viewBox="0 0 12 12"><path d="M6 2l4 8H2z" fill="currentColor" /></svg>
                    ) : (
                      <svg width={12} height={12} className="inline" viewBox="0 0 12 12"><path d="M6 10L2 2h8z" fill="currentColor" /></svg>
                    )}
                    {card.change}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Section: Chart and Recent Reports */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart Card */}
            <div className={`rounded-xl shadow-sm p-6 flex flex-col
              ${darkMode ? "bg-[#232b3a] border border-[#232b3a]" : "bg-white border border-blue-50"}
            `}>
              <div className={`text-sm mb-2 ${darkMode ? "text-blue-200" : "text-blue-700"}`}>User Engagement Trend</div>
              <div className="w-full h-20 mb-2 flex items-end">
                <BarChartDemo />
              </div>
              <div className="flex gap-2 text-xs">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Users</span>
                <span className="bg-blue-50 text-blue-500 px-2 py-1 rounded">Lessons</span>
                <span className="bg-blue-50 text-blue-400 px-2 py-1 rounded">Quizzes</span>
              </div>
            </div>
            {/* Recent Reports Card */}
            <div className={`rounded-xl shadow-sm p-6 flex flex-col
              ${darkMode ? "bg-[#232b3a] border border-[#232b3a]" : "bg-white border border-blue-50"}
            `}>
              <div className={`font-semibold mb-2 ${darkMode ? "text-blue-100" : "text-blue-700"}`}>Recent Reports</div>
              <div className="flex flex-col gap-2 text-sm">
                <div className={`flex justify-between ${darkMode ? "text-blue-300" : "text-gray-700"}`}>
                  <span><FaClipboardList className="inline mr-1" /> Engagement Q3 2025</span>
                  <span>09/01/2025</span>
                </div>
                <div className={`flex justify-between ${darkMode ? "text-blue-300" : "text-gray-700"}`}>
                  <span><FaClipboardList className="inline mr-1" /> Resource Usage Aug 2025</span>
                  <span>08/31/2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "users":
      return (
        <div className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-[#232b3a] border border-[#232b3a]" : "bg-white border border-blue-50"}`}>
          <div className={`font-semibold mb-4 ${darkMode ? "text-blue-100" : "text-blue-700"}`}>User Accounts</div>
          <table className="w-full text-sm">
            <thead>
              <tr className={darkMode ? "text-blue-300" : "text-gray-700"}>
                <th className="py-2">Name</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_USERS.map(user => (
                <tr key={user.id} className={darkMode ? "text-blue-100" : "text-gray-800"}>
                  <td className="py-2">{user.name}</td>
                  <td>{user.type}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "lessons":
      return (
        <div className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-[#232b3a] border border-[#232b3a]" : "bg-white border border-blue-50"}`}>
          <div className={`font-semibold mb-4 ${darkMode ? "text-blue-100" : "text-blue-700"}`}>Lessons Overview</div>
          <ul className="space-y-3">
            {MOCK_LESSONS.map(lesson => (
              <li key={lesson.id} className={`flex justify-between ${darkMode ? "text-blue-100" : "text-gray-800"}`}>
                <span>{lesson.title}</span>
                <span className="text-xs">{lesson.completed} completed</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "modules":
      return (
        <div className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-[#232b3a] border border-[#232b3a]" : "bg-white border border-blue-50"}`}>
          <div className={`font-semibold mb-4 ${darkMode ? "text-blue-100" : "text-blue-700"}`}>General Modules</div>
          <ul className="space-y-3">
            {MOCK_MODULES.map(mod => (
              <li key={mod.id} className={`flex justify-between ${darkMode ? "text-blue-100" : "text-gray-800"}`}>
                <span>{mod.title}</span>
                <span className="text-xs text-blue-400">{mod.uploader}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "quizzes":
      return (
        <div className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-[#232b3a] border border-[#232b3a]" : "bg-white border border-blue-50"}`}>
          <div className={`font-semibold mb-4 ${darkMode ? "text-blue-100" : "text-blue-700"}`}>Quizzes</div>
          <ul className="space-y-3">
            {MOCK_QUIZZES.map(qz => (
              <li key={qz.id} className={`flex justify-between ${darkMode ? "text-blue-100" : "text-gray-800"}`}>
                <span>{qz.title}</span>
                <span className="text-xs">{qz.attempts} attempts</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "flashcards":
      return (
        <div className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-[#232b3a] border border-[#232b3a]" : "bg-white border border-blue-50"}`}>
          <div className={`font-semibold mb-4 ${darkMode ? "text-blue-100" : "text-blue-700"}`}>Flashcards</div>
          <ul className="space-y-3">
            {MOCK_FLASHCARDS.map(fc => (
              <li key={fc.id} className={`flex justify-between ${darkMode ? "text-blue-100" : "text-gray-800"}`}>
                <span>{fc.title}</span>
                <span className="text-xs">{fc.cards} cards</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "reports":
      return (
        <div className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-[#232b3a] border border-[#232b3a]" : "bg-white border border-blue-50"}`}>
          <div className={`font-semibold mb-4 ${darkMode ? "text-blue-100" : "text-blue-700"}`}>Reports</div>
          <ul className="space-y-3">
            {MOCK_REPORTS.map(rp => (
              <li key={rp.id} className={`flex justify-between ${darkMode ? "text-blue-100" : "text-gray-800"}`}>
                <span>{rp.title}</span>
                <span className="text-xs">{rp.date}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "support":
      return (
        <div className={`rounded-xl shadow-sm p-6 ${darkMode ? "bg-[#232b3a] border border-[#232b3a]" : "bg-white border border-blue-50"}`}>
          <div className={`font-semibold mb-4 ${darkMode ? "text-blue-100" : "text-blue-700"}`}>Support Tickets</div>
          <table className="w-full text-sm">
            <thead>
              <tr className={darkMode ? "text-blue-300" : "text-gray-700"}>
                <th className="py-2">User</th>
                <th>Issue</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_SUPPORT.map(ticket => (
                <tr key={ticket.id} className={darkMode ? "text-blue-100" : "text-gray-800"}>
                  <td className="py-2">{ticket.user}</td>
                  <td>{ticket.issue}</td>
                  <td>{ticket.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-[#1a2332]" : "bg-[#f8fafc]"} min-h-screen w-full flex font-sans transition-colors duration-300`}>
      {/* Sidebar */}
      <aside className={`flex flex-col justify-between shadow-sm
        ${sidebarOpen ? "w-56" : "w-16"} transition-all duration-300
        ${darkMode
          ? "bg-[#232b3a] border-r border-[#232b3a]"
          : "bg-white border-r border-gray-100"
        } py-6 px-2`}
      >
        {/* Top Section */}
        <div>
          <div className="flex items-center gap-2 mb-7 px-2">
            <MdDashboard size={24} className={darkMode ? "text-blue-300" : "text-blue-400"} />
            {sidebarOpen && (
              <span className={`font-semibold text-lg tracking-tight ${darkMode ? "text-blue-100" : "text-blue-700"}`}>MHapa Admin</span>
            )}
          </div>
          {/* Menu */}
          <nav className="flex flex-col gap-1">
            {SIDEBAR_ITEMS.map(item => (
              <button
                key={item.key}
                className={`flex items-center gap-3 px-2 py-2 rounded text-left font-medium transition
                  ${activeTab === item.key
                    ? darkMode
                      ? "bg-blue-900/30 text-blue-100"
                      : "bg-blue-50 text-blue-800"
                    : darkMode
                      ? "text-blue-300 hover:bg-[#232b3a]"
                      : "text-blue-600 hover:bg-blue-50"
                  }
                `}
                style={item.color ? { color: item.color } : {}}
                onClick={() => setActiveTab(item.key)}
                aria-label={item.label}
              >
                {item.icon}
                {sidebarOpen && <span className={item.color ? "font-semibold" : ""}>{item.label}</span>}
              </button>
            ))}
          </nav>
        </div>
        {/* Sidebar bottom controls */}
        <div className="flex items-center justify-between px-1 pb-1">
          {/* Dark mode toggle */}
          <button
            className={`w-8 h-8 flex items-center justify-center rounded-full
              ${darkMode ? "bg-[#232b3a] text-yellow-200 hover:bg-[#1a2332]" : "bg-gray-100 text-blue-400 hover:bg-gray-200"}
            `}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <button
            className={`w-8 h-8 flex items-center justify-center rounded-full
              ${darkMode ? "bg-[#232b3a] text-blue-300 hover:bg-[#1a2332]" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}
            `}
            title="Settings"
          >
            <FaCog size={18} />
          </button>
          <button
            className={`w-8 h-8 flex items-center justify-center rounded-full
              ${darkMode ? "bg-[#232b3a] text-blue-300 hover:bg-[#1a2332]" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}
            `}
            title={sidebarOpen ? "Hide sidebar" : "Show sidebar"}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <MdClose size={18} /> : <MdMenu size={22} />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className={`w-full flex items-center justify-between px-8 py-4
          ${darkMode ? "bg-[#232b3a] border-b border-[#232b3a]" : "bg-white border-b border-gray-100"}
        `}>
          <div className="flex items-center gap-4">
            <span className={`text-base ${darkMode ? "text-blue-200" : "text-blue-600"}`}>
              Hello, <span className={`font-semibold ${darkMode ? "text-blue-100" : "text-blue-900"}`}>Administrator!</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="relative w-44">
              <input
                className={`rounded px-3 py-2 text-sm w-full transition-colors
                  ${darkMode
                    ? "bg-[#1a2332] border border-[#232b3a] text-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-800"
                    : "bg-blue-50 border border-blue-100 text-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-200"
                  }
                `}
                placeholder="Search..."
              />
            </div>
            {/* Notification */}
            <button
              className={`w-8 h-8 flex items-center justify-center rounded-full
                ${darkMode ? "bg-[#232b3a] text-blue-300" : "bg-blue-50 text-blue-400"}
              `}
              title="Notifications"
            >
              <FaBell size={17} />
            </button>
            {/* User Avatar */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center
              ${darkMode ? "bg-[#232b3a] text-blue-300" : "bg-blue-50 text-blue-400"}
            `}>
              <FaRegUser size={18} />
            </div>
          </div>
        </header>
        {/* Main Content Area */}
        <main className={`flex-1 p-6 ${darkMode ? "bg-[#1a2332]" : "bg-[#f8fafc]"}`}>
          {renderTabContent(activeTab, darkMode)}
        </main>
      </div>
    </div>
  );
}