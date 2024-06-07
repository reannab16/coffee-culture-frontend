"use client"
import React, { useEffect, useState } from "react";
import { LongLogo } from "../icons";
import Button from "@mui/material/Button";
import { AppBar, alpha, Slide, Toolbar, useScrollTrigger } from "@mui/material";
import { primary } from "@/themes/customs/palette";
import useWindowDimensions from "@/utils/window";

// const inter = Inter({ subsets: ["latin"] });
interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export default function NavBar(props: Props) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { width } = useWindowDimensions() ?? { width: 0 };
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 56) {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const HideOnScroll = ({ children }: { children: React.ReactElement }) => {
  
    return (
      <Slide appear={false} direction="down" in={!visible}>
        {children}
      </Slide>
    );
  };




  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          className="flex items-center justify-center bg-[var(--backgroundColour)] p-4"
          elevation={0}
        >
          <div className="container flex items-center justify-between relative">
            <LongLogo className="h-6 w-auto" />
            <div className="flex items-center justify-center gap-x-1 absolute left-0 right-0">
              {navLinks.map((link) => {
                return (
                  <Button
                    key={link.title}
                    // className={`${inter.className} `}
                    color="primary"
                    sx={{
                      fontSize: "12px",
                      fontWeight: "300",
                      borderRadius: "9999px",
                      paddingX: "16px",
                      ":hover": {},
                    }}
                  >
                    {link.title}
                  </Button>
                );
              })}
            </div>
            <Button
              variant="contained"
              // className={`${inter.className}`}
              color="secondary"
              sx={{
                // boxShadow: '0',
                borderRadius: "9999px",
                fontWeight: "300",
                fontSize: "12px",
                "&:hover": {
                  backgroundColor: "#AFAF81",
                },
              }}
              disableElevation
            >
              Sign Up
            </Button>
          </div>
        </AppBar>
      </HideOnScroll>
    </>
  );
}

const navLinks = [
  {
    title: "For Shops",
    path: "/",
  },
  {
    title: "For Customers",
    path: "/",
  },
  {
    title: "Our Story",
    path: "/",
  },
  {
    title: "Guide",
    path: "/",
  },
  {
    title: "Contact Us",
    path: "/",
  },
];
