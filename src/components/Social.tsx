"use client";
import Link from "next/link";
import {
  RiPaypalFill,
  RiLinkedinFill,
  RiFacebookFill,
  RiSkypeFill,
  RiInstagramFill,
} from "react-icons/ri";

const icons = [
  { path: "/", name: <RiPaypalFill /> },
  { path: "/", name: <RiLinkedinFill /> },
  { path: "/", name: <RiFacebookFill /> },
  { path: "/", name: <RiSkypeFill /> },
  { path: "/", name: <RiInstagramFill /> },
];
interface SocialProps {
    iconStyles?: string;
    containerStyles?: string;
  }

const Social = ({ containerStyles, iconStyles }:SocialProps) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
