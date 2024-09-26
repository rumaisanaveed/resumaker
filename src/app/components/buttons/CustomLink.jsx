"use client";
import Link from "next/link";

const CustomLink = ({ className = "", href = "", children, ...props }) => {
  return (
    <Link className={className} {...props} href={href} prefetch={true}>
      {children}
    </Link>
  );
};

export default CustomLink;
