import { useState } from "react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip } from "@material-tailwind/react";

function SideBar() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`text-white w-64 min-h-screen ${
          open ? "translate-x-0" : "-translate-x-64"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:block`}
      >
        <div className="py-6">
          <Typography variant="h6" className="text-center">
            Sidebar
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            E-Commerce
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </aside>

      {/* Content */}
      <main className="lg:ml-64 flex-1 p-4">
        <button
          onClick={toggleOpen}
          className="lg:hidden absolute top-4 left-4 p-2 rounded text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transform transition-transform ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2" 
              d="M4 6h16M4 12h16m-7 6h7"
            />
        </svg>

        </button>

        {/* Page content */}
        <div className="bg-white p-4 rounded shadow">
          {/* Your page content goes here */}
          <Typography variant="h6">Welcome to the Dashboard</Typography>
          <p>This is the main content area.</p>
        </div>
      </main>
    </div>
  );
}

export default SideBar;
