import Flex from "@styles/components/flex";
import "./globals.css";
import Topbar from "@components/topbar/topbar";

const Template = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
      <Flex
        direction="column"
      >
        <Topbar />
        <div className="flex flex-col mt-[70px] md:mt-[100px] w-full">
            {children}
        </div>
      </Flex>
  );
}

export default Template