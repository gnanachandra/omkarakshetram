import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const menuItems = [
    {
      name: "About",
      to: "about",
    },
    {
      name: "Temples",
      to: "temples",
    },
    {
      name: "Gallery",
      to: "gallery",
    },
    {
      name: "Contact",
      to: "contact",
    },
    {},
  ];

  const navList = (
    <ul className="mb-2 mt-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {menuItems.map((item, index) => {
        return (
          <ScrollLink
            key={index}
            activeClass="active"
            to={item.to}
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            className="cursor-pointer font-bold"
          >
            {item.name}
          </ScrollLink>
        );
      })}
    </ul>
  );

  const mobileNavList = (
    <ul className="mb-2 mt-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {menuItems.map((item, index) => {
        return (
          <ScrollLink
            key={index}
            activeClass="active"
            to={item.to}
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            className="cursor-pointer font-bold"
            onClick={() => setOpenNav(!openNav)}
          >
            {item.name}
          </ScrollLink>
        );
      })}
    </ul>
  );

  return (
    <div className="w-full bg-[#FF8C00]">
      <Navbar className="mx-auto w-screen shadow-none  rounded-none border-none bg-[#FF8C00]">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-bold text-lg"
          >
            ఓంకార క్షేత్రం
          </Typography>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">{navList}</div>
            <Link to={"/login"} className="hidden lg:block">
              <Button className="bg-deep-orange-600 shadow-none hover:shadow-none">
                Login
              </Button>
            </Link>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {mobileNavList}
          <Link to={"/login"} className="lg:block">
            <Button className="bg-deep-orange-600 shadow-none hover:shadow-none">
              Login
            </Button>
          </Link>
        </Collapse>
      </Navbar>
    </div>
  );
}
