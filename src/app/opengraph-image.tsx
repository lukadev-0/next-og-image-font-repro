import { ImageResponse } from "next/server";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const font = fs.promises.readFile(
  path.join(fileURLToPath(import.meta.url), "../Inter-Medium.ttf")
);

export default async function og() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ fontFamily: "Inter", fontWeight: 500 }}>
          The quick brown fox jumped over the lazy dog.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await font,
          weight: 500,
          style: "normal",
        },
      ],
    }
  );
}
