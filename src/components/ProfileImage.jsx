import { useEffect, useState } from "react";
import defaultProfile from "../assets/images/profile.jpg";
import { getImageUrl } from "../utils/imageUrl";
import "./ProfileImage.css";

/**
 * Profile photo — hidden until the correct image has loaded (no flash of old/cached image).
 */
function ProfileImage({ profile, ready, className, alt = "profile" }) {
  const [loaded, setLoaded] = useState(false);

  const src =
    ready && profile?.image
      ? getImageUrl(profile.image, profile.updatedAt)
      : ready
        ? defaultProfile
        : null;

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  if (!ready || !src) {
    return <div className={`${className} profile-image-placeholder`} aria-hidden />;
  }

  return (
    <img
      className={`${className} ${loaded ? "profile-image-loaded" : "profile-image-loading"}`}
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      onError={() => setLoaded(true)}
    />
  );
}

export default ProfileImage;
