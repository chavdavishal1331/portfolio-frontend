import defaultProfile from "../assets/images/profile.jpg";
import { getImageUrl } from "../utils/imageUrl";
import { usePreloadedSrc } from "../hooks/usePreloadedSrc";
import "./ProfileImage.css";

function ProfileImage({ profile, ready, className, alt = "profile" }) {
  const targetUrl =
    ready && profile?.image
      ? getImageUrl(profile.image, `${profile.updatedAt}-${profile.image}`)
      : ready
        ? defaultProfile
        : null;

  const { src, ready: imgReady } = usePreloadedSrc(targetUrl);

  if (!ready || !imgReady || !src) {
    return <div className={`${className} profile-image-placeholder`} aria-hidden />;
  }

  return (
    <img
      className={`${className} profile-image-loaded`}
      src={src}
      alt={alt}
    />
  );
}

export default ProfileImage;
