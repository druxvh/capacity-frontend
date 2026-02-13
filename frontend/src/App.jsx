import {
  AlertCircle,
  Bug,
  CheckCircle2,
  ChevronDown,
  Eye,
  Filter,
  Gift,
  Headphones,
  HelpCircle,
  Layout,
  LayoutDashboard,
  Mail,
  Menu,
  MessageSquare,
  MoreHorizontal,
  Search,
  Settings,
  Ticket,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { THREAD_HISTORY, TICKET_VIEWS, TICKETS } from "./data/mock-data";

function App() {
  const [active, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState("public");
  return (
    <div className="flex h-screen w-full bg-[#0B2147] overflow-hidden font-sans text-white">
      {/* Sidebar */}
      <aside className="w-16 h-full flex flex-col items-center gap-2 py-4">
        {/* Logo */}
        <div className="bg-blue-500 size-9 rounded-lg flex justify-center items-center">
          <span className="text-white font-bold font-mono text-2xl">C</span>
        </div>

        {/* Nav items */}
        <div className="flex flex-col items-center gap-1">
          <div
            className={`p-3 rounded-xl cursor-pointer transition-colors ${active ? "text-[#FF9B00]" : "text-[#0063F0] hover:text-white"}`}
          >
            <LayoutDashboard size={22} strokeWidth={1.5} />
          </div>
          <div
            className={`p-3 rounded-xl cursor-pointer transition-colors ${active ? "text-[#FF9B00]" : "text-[#0063F0] hover:text-white"}`}
          >
            <Ticket size={22} strokeWidth={1.5} />
          </div>
          <div
            className={`p-3 rounded-xl cursor-pointer transition-colors ${active ? "text-[#FF9B00]" : "text-[#0063F0] hover:text-white"}`}
          >
            <Users size={22} strokeWidth={1.5} />
          </div>
          <div
            className={`p-3 rounded-xl cursor-pointer transition-colors ${active ? "text-[#FF9B00]" : "text-[#0063F0] hover:text-white"}`}
          >
            <Layout size={22} strokeWidth={1.5} />
          </div>
          <div
            className={`p-3 rounded-xl cursor-pointer transition-colors ${active ? "text-[#FF9B00]" : "text-[#0063F0] hover:text-white"}`}
          >
            <MessageSquare size={22} strokeWidth={1.5} />
          </div>
          <div
            className={`p-3 rounded-xl cursor-pointer transition-colors ${active ? "text-[#FF9B00]" : "text-[#0063F0] hover:text-white"}`}
          >
            <Settings size={22} strokeWidth={1.5} />
          </div>
          <div
            className={`p-3 rounded-xl cursor-pointer transition-colors ${active ? "text-[#FF9B00]" : "text-[#0063F0] hover:text-white"}`}
          >
            <LayoutDashboard size={22} strokeWidth={1.5} />
          </div>
          <div
            className={`p-3 rounded-xl cursor-pointer transition-colors ${active ? "text-[#FF9B00]" : "text-[#0063F0] hover:text-white"}`}
          >
            <Ticket size={22} strokeWidth={1.5} />
          </div>
          <div
            className={`p-3 rounded-xl cursor-pointer transition-colors ${active ? "text-[#FF9B00]" : "text-[#0063F0] hover:text-white"}`}
          >
            <Users size={22} strokeWidth={1.5} />
          </div>
          <div
            className={`p-3 rounded-xl cursor-pointer transition-colors ${active ? "text-[#FF9B00]" : "text-[#0063F0] hover:text-white"}`}
          >
            <Layout size={22} strokeWidth={1.5} />
          </div>
          <div
            className={`p-3 rounded-xl cursor-pointer transition-colors ${active ? "text-[#FF9B00]" : "text-[#0063F0] hover:text-white"}`}
          >
            <MessageSquare size={22} strokeWidth={1.5} />
          </div>
          <div
            className={`p-3 rounded-xl cursor-pointer transition-colors ${active ? "text-[#FF9B00]" : "text-[#0063F0] hover:text-white"}`}
          >
            <Settings size={22} strokeWidth={1.5} />
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 ">
        {/* Topbar */}
        <header className="h-16 flex justify-between items-center px-2">
          <div>
            <p className="text-xl  text-white font-bold">Helpdesk</p>
          </div>
          <div className="relative rounded-md overflow-hidden w-full max-w-sm">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 "
              size={16}
            />
            <input
              type="text"
              placeholder="Search Capacity..."
              className="w-full bg-black/90 text-sm py-2 pl-10 pr-4 text-white placeholder-slate-300  transition-colors"
            />
          </div>
          <div className="flex gap-2 items-center justify-center">
            <button
              onClick={() => console.log("click")}
              className="flex items-center rounded-md overflow-hidden cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors duration-200"
            >
              <span className="px-4 py-3 border-r border-white/50 font-medium text-sm">
                Create
              </span>

              <span className="px-2.5 flex items-center">
                <ChevronDown className="size-5" />
              </span>
            </button>

            <button className="p-2 hover:bg-blue-800 rounded-full text-blue-200">
              <HelpCircle size={20} />
            </button>
            <button className="p-2 hover:bg-blue-800 rounded-full text-blue-200">
              <Gift size={20} />
            </button>
            <img
              src="https://i.pravatar.cc/150?u=3"
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-blue-400"
            />
          </div>
        </header>

        {/* Main Content (4 Columns) */}
        <div className="flex-1 flex h-full bg-[#F1F1F6] text-black rounded-t-2xl">
          {/* Column 1 */}
          <div className="w-64 h-full rounded-tl-2xl">
            <div className="py-4 px-2">
              <div className="flex items-center gap-2 text-[10px] font-bold text-black tracking-widest cursor-pointer uppercase mb-2 px-3 h-10 rounded-lg bg-slate-400/50">
                <ChevronDown size={16} />
                <span>Ticket Views</span>
              </div>

              <ul className="space-y-2">
                {TICKET_VIEWS.map((view) => (
                  <li
                    key={view.id}
                    className={`flex items-center justify-between px-3 h-10 rounded-lg text-sm cursor-pointer transition-colors ${view.active ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-300"}`}
                  >
                    <span className="font-semibold">{view.label}</span>
                    <span
                      className={`text-xs py-1 px-2 rounded-md ${view.active ? "bg-blue-900 text-white" : "bg-white text-gray-900"}`}
                    >
                      {view.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-5">
              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-5">
                <Headphones size={20} className="stroke-3" />
                <span>Live Chats</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                <Layout size={20} className="stroke-3" />
                <span>Boards</span>
              </div>
            </div>
          </div>

          {/* 3 cols */}
          <div className="flex-1 flex rounded-t-2xl">
            {/* Column 2 */}
            <div className="w-80 bg-white rounded-tl-2xl  shadow-2xl">
              <div className="h-14 border-b border-gray-300 flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center gap-4 font-semibold text-gray-800">
                  <Menu size={18} className="text-gray-400" />
                  <div className="flex gap-1 items-center justify-center">
                    My Tickets
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                </div>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Filter size={16} className="text-gray-500" />
                </button>
              </div>

              <div className="p-4 border-b border-gray-300">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={14}
                  />
                  <input
                    type="text"
                    placeholder="Search tickets"
                    className="w-full bg-gray-50 border border-gray-200 rounded-md text-sm py-1.5 pl-9 pr-3 text-gray-700 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                {TICKETS.map((ticket) => (
                  <div
                    key={ticket.id}
                    className={`p-4 h-20 border-b border-gray-300 cursor-pointer group ${ticket.selected ? "bg-blue-50/60 hover:bg-blue-50" : "hover:bg-gray-50"}`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-sm font-medium text-gray-800 line-clamp-1">
                        {ticket.title}
                      </span>
                      <span className="text-xs text-gray-400 shrink-0 ml-2">
                        {ticket.date}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${ticket.selected ? "border-blue-300 bg-white" : "border-gray-300"}`}
                        >
                          {ticket.selected && (
                            <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                          )}
                        </div>
                        <span className="text-xs text-gray-500 font-mono">
                          {ticket.id}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <img
                            src={ticket.assignee}
                            className="w-5 h-5 rounded-full ring-2 ring-white"
                            alt=""
                          />
                          <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex-1">
              <div className="border h-14 flex flex-col justify-center bg-white  border-gray-300 px-4 shrink-0">
                <h2 className="text-lg font-bold text-gray-800 tracking-wide">
                  Laudantium neque veritatis
                </h2>

                <div className="flex items-center justify-between text-xs text-gray-500 gap-3">
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1 font-medium">
                      <div className="p-0.5 rounded">
                        <Bug size={16} className="text-blue-500 stroke-3" />
                      </div>
                      OPS-102 (100669518)
                    </div>
                    <span className="text-gray-300">|</span>
                    <span>Created 11/14/22 12:32 PST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
                      <Mail size={16} className="stroke-3 cursor-pointer" />
                    </div>
                    <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
                      <Eye size={16} className="stroke-3 cursor-pointer" />
                      <span>2</span>
                    </div>
                    <MoreHorizontal
                      size={16}
                      className="cursor-pointer stroke-3 hover:text-blue-600"
                    />
                    <div className="flex -space-x-1">
                      <img
                        src="https://i.pravatar.cc/150?u=1"
                        className="w-5 h-5 rounded-full border border-white"
                      />
                      <img
                        src="https://i.pravatar.cc/150?u=2"
                        className="w-5 h-5 rounded-full border border-white"
                      />
                      <div className="w-5 h-5 rounded-full bg-blue-500 text-white text-[9px] flex items-center justify-center border border-white">
                        DK
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {/* Reply Box */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-4">
                  <div className="flex border-b border-gray-200">
                    <button
                      className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === "public" ? "border-gray-800 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700"}`}
                      onClick={() => setActiveTab("public")}
                    >
                      Public Reply
                    </button>
                    <button
                      className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === "private" ? "border-yellow-500 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700"}`}
                      onClick={() => setActiveTab("private")}
                    >
                      Private Comment
                    </button>
                  </div>

                  <div className="p-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600 w-full">
                      <span className="text-gray-400">To:</span>
                      <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-full pl-1 pr-2 py-0.5">
                        <img
                          src="https://i.pravatar.cc/150?u=9"
                          className="w-4 h-4 rounded-full"
                        />
                        <span className="text-xs">Allison Westervelt</span>
                        <span className="text-xs text-gray-400">
                          &lt;awestervelt@email.com&gt;
                        </span>
                        <X
                          size={12}
                          className="cursor-pointer hover:text-red-500 ml-1"
                        />
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 cursor-pointer hover:text-gray-600">
                      Cc
                    </span>
                  </div>

                  <div className="p-4">
                    <textarea
                      className="w-full min-h-[100px] resize-none outline-none text-sm text-gray-700 placeholder-gray-400"
                      placeholder="Add a reply..."
                    ></textarea>
                  </div>
                </div>

                {/* Thread Items */}
                {THREAD_HISTORY.map((thread) => (
                  <div
                    key={thread.id}
                    className="flex mb-4 group p-3 h-fit bg-white border border-gray-200 rounded-lg shadow-sm"
                  >
                    <img
                      src={thread.avatar}
                      className="size-8 rounded-full"
                      alt=""
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between px-3 border-b border-gray-50 bg-gray-50/50 rounded-t-lg">
                        <div className="flex flex-col justify-center gap-1">
                          <span className="text-sm font-bold text-gray-800">
                            {thread.author}
                          </span>
                          <span className="text-xs text-gray-500">
                            To Danny Amacher &lt;danny@capacity.com&gt;
                          </span>
                        </div>
                        <div className="flex flex-col items-end justify-center gap-1">
                          <span className="text-xs text-gray-400">
                            {thread.date}
                          </span>
                          <span className="p-1 bg-gray-200 border rounded-md border-gray-200">
                            <ChevronDown
                              size={16}
                              className="text-gray-400 stroke-3"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="px-4 text-sm text-gray-700 leading-relaxed">
                        <p className="mb-3 font-semibold">{thread.content}</p>
                        {thread.attachments.length > 0 && (
                          <div className="flex gap-3 mt-4">
                            {thread.attachments.map((file, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-3 p-2 bg-gray-100 rounded-md border border-gray-400 w-64"
                              >
                                <div className="flex flex-col overflow-hidden">
                                  <span className="text-xs font-medium text-gray-700 truncate">
                                    {file.name}
                                  </span>
                                  <span className="text-[10px] text-gray-400">
                                    {file.date}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4 */}
            <div className="w-80 bg-white rounded-tr-2xl  shadow-2xl">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1 cursor-pointer hover:bg-blue-600">
                    To Do
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <X size={18} />
                </button>
              </div>

              <div className="p-4 space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Priority
                  </label>
                  <div className="flex items-center justify-between p-2 border border-gray-200 rounded-md hover:border-gray-300 cursor-pointer bg-white">
                    <div className="flex items-center gap-2">
                      <AlertCircle size={16} className="text-orange-400" />
                      <span className="text-sm text-gray-700">Medium</span>
                    </div>
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      Assigned To
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-2 border border-gray-200 rounded-md hover:border-gray-300 cursor-pointer bg-white">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://i.pravatar.cc/150?u=8"
                        className="w-5 h-5 rounded-full"
                      />
                      <span className="text-sm text-gray-700">
                        Allie Harmon
                      </span>
                    </div>
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Project
                  </label>
                  <div className="flex items-center justify-between p-2 border border-gray-200 rounded-md hover:border-gray-300 cursor-pointer bg-white">
                    <span className="text-sm text-gray-700">
                      Administrative
                    </span>
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Ticket Type
                  </label>
                  <div className="flex items-center justify-between p-2 border border-gray-200 rounded-md hover:border-gray-300 cursor-pointer bg-white">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-blue-600" />
                      <span className="text-sm text-gray-700">Task</span>
                    </div>
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
