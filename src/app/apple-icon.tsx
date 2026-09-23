import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0052ff",
          borderRadius: 40,
        }}
      >
        <svg width="112" height="112" viewBox="0 0 24 24" fill="none">
          <circle cx="6.5" cy="12" r="2.1" fill="#fff" />
          <circle cx="17.5" cy="6.5" r="2.1" fill="#fff" />
          <circle cx="17.5" cy="17.5" r="2.1" fill="#fff" />
          <path
            d="M8.4 11.2 15.6 7.4M8.4 12.8 15.6 16.6"
            stroke="#fff"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
