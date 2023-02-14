// "use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface loadingElConfig {
  circle?: boolean;
  width?: string;
  height?: "small" | "medium" | "large" | "xLarge" | string;
  count?: number;
}

interface loadingProps {
  skeletons?: loadingElConfig[] | [];
}

export default function Loading({ skeletons }: loadingProps) {
  if (!skeletons || skeletons.length === 0) {
    return null;
  }

  function getHeight(height: string): string {
    switch (height) {
      case "small":
        return "1.5rem";
      case "medium":
        return "3rem";
      case "large":
        return "8rem";
      case "xLarge":
        return "16rem";
      default:
        return height;
    }
  }

  return (
    <>
      {skeletons.map((skeleton, index) => {
        const {
          width = "100%",
          height = "100%",
          circle = false,
          count = 1,
        } = skeleton;
        return (
          <Skeleton
            key={`skeleton-${index}`}
            circle={circle}
            style={{
              width,
              height: getHeight(height),
              margin: ".5rem 0",
            }}
            count={count}
          />
        );
      })}
    </>
  );
}
