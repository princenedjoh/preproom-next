import "./globals.css";
import Topbar from "@components/topbar/topbar";

const Template = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
      <div className="flex flex-col gap-2">
        <Topbar />
        <div className="flex flex-col items-center mt-[70px] lg:mt-[100px] w-full mb-[50px]">
            {children}
        </div>
      </div>
  );
}

export default Template