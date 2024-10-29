// import { motion } from "framer-motion";
// import Link from "next/link";
// import React from "react";
// import { usePathname } from "next/navigation";
// const links = [
//   {
//     path: "/",
//     name: "home",
//   },
//   {
//     path: "/about",
//     name: "about",
//   },
//   {
//     path: "portfolio/",
//     name: "portfolio",
//   },
//   {
//     path: "/pricing",
//     name: "pricing",
//   },
//   {
//     path: "/contact",
//     name: "contact",
//   },
// ];
// interface NavProps {
//   containerStyles?: string; 
//   linkStyles?: string; 
//   underlineStyles?: string;
// }

// const Nav: React.FC<NavProps> = ({
//   containerStyles = "",
//   linkStyles = "",
//   underlineStyles = "",
// }) => {
//     const path=usePathname();
//   return (
//     <nav className={`${containerStyles}`}>
//       {
//           links.map((link,index)=>{
//             return(
//                 <Link href={link.path}
//                 key={index}>
//                     {link.path === path && (
//                         <motion.main
//                         initial={{y:'-100%'}}
//                         animate={{y:0}}
//                         transition={{type:'tween'}}
//                         layoutId="underline"
//                         className={`${underlineStyles}`}
//                         >

//                         </motion.main>
//                     )}
//                 {link.name}
//                 </Link>
//             )
//           })
//       }
//     </nav>
//   );
// };

// export default Nav;


import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/portfolio", name: "Portfolio" },  // Fixed incorrect path
  { path: "/pricing", name: "Pricing" },
  { path: "/contact", name: "Contact" },
];

interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
}

const Nav: React.FC<NavProps> = ({
  containerStyles = "",
  linkStyles = "",
  underlineStyles = "",
}) => {
  const pathname = usePathname();  // Get the current pathname

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <div key={index} className="relative">  {/* Added relative positioning */}
            <Link href={link.path} className={`${linkStyles}`}>
              {link.name}
            </Link>
            {isActive && (
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Nav;
