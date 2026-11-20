"use client";

import { useState } from "react";
import Image from "next/image";

const DEMO_PROFILE_IMAGE = "/images/members/demo-profile.svg";

export default function MemberImage({ src, alt, ...imageProps }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const source = src || DEMO_PROFILE_IMAGE;
  const imageSrc = failedSrc === source ? DEMO_PROFILE_IMAGE : source;

  return (
    <Image
      {...imageProps}
      src={imageSrc}
      alt={alt}
      onError={() => setFailedSrc(source)}
    />
  );
}
