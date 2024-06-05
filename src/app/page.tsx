import Image from "next/image";
import Button from "@mui/material/Button";
import { primary, secondary } from "@/themes/customs/palette";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-48px)] flex-col items-center justify-center w-full">
      <div className="flex h-[calc(100vh-48px)] items-center justify-start container">
        <div className="flex flex-col items-start justify-center gap-y-2 px-16">
          <div className="uppercase text-md text-[var(--darkBrown)] opacity-50">
            Digital subscription & loyalty
          </div>
          <div className="text-4xl font-semibold text-[var(--darkBrown)] w-80">
            Supporting your <span className="italic font-medium">local</span>{" "}
            coffee shop
          </div>
          <div className="text-base font-light">
            Our mission is to help coffee shop owners bring in loyal customers{" "}
            <br />
            and guarantee revenue.
          </div>
          <div className="text-base font-light">
            Find a cup of coffee with a story and a saving with our <br />
            subscription and stamp schemes.
          </div>
          <div className="flex gap-x-2 pt-2">
            <Button
              variant="contained"
              color="secondary"
              sx={{
                fontWeight: "300",
                fontSize: "12px",
                paddingX: "24px",

                "&:hover": {
                  backgroundColor: "#AFAF81",
                },
              }}
              disableElevation
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                fontWeight: "300",
                fontSize: "12px",
                paddingX: "24px",
                color: secondary.contrastText,
                border: 'solid 2px secondary.main',
                borderColor: secondary.main,
                

                
              }}
              disableElevation
            >
              Check out our guide!
            </Button>
          </div>
        </div>
        <img
          src="https://raw.githubusercontent.com/reannab16/coffee-culture-frontend/main/public/hero.png"
          alt=""
          className="absolute h-screen w-auto right-0 -z-10"
        />
      </div>
    </main>
  );
}
