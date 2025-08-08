import { motion, AnimatePresence } from "framer-motion";
import { useDrag } from "@use-gesture/react";
import { Box } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";

interface PageData {
  key: string;
  component: React.ComponentType;
}

interface SwipeablePagesProps {
  readonly currentPage: number;
  readonly setCurrentPage: (page: number) => void;
  readonly pages: PageData[];
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export function SwipeablePages({
  currentPage,
  setCurrentPage,
  pages,
}: SwipeablePagesProps) {
  const prevPageRef = useRef(currentPage);

  const direction = currentPage > prevPageRef.current ? 1 : -1;

  const paginate = (newDirection: number) => {
    const newPage = currentPage + newDirection;
    if (newPage >= 0 && newPage < pages.length) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    prevPageRef.current = currentPage;
  });

  const bind = useDrag(
    ({ movement: [mx], swipe: [swipeX], velocity: [vx], cancel }) => {
      // First try swipe detection (works well on mobile)
      if (swipeX) {
        // swipeX is -1 for left, 1 for right
        // Swiping left (swipeX = -1) should go to next page (+1)
        // Swiping right (swipeX = 1) should go to prev page (-1)
        paginate(-swipeX);
        cancel();
        return;
      }

      // Fallback to movement detection (works well on desktop/trackpad)
      const threshold = 100; // pixels
      const velocityThreshold = 0.5;

      if (Math.abs(mx) > threshold || Math.abs(vx) > velocityThreshold) {
        if (mx > 0 && currentPage > 0) {
          // Moving right - go to previous page
          paginate(-1);
        } else if (mx < 0 && currentPage < pages.length - 1) {
          // Moving left - go to next page
          paginate(1);
        }
        cancel();
      }
    },
    {
      axis: "x",
      filterTaps: true,
      threshold: 10,
    }
  );

  const CurrentPageComponent = pages[currentPage]?.component;

  return (
    <Box
      {...bind()}
      style={{ touchAction: "pan-y" }}
      h="100%"
      w="100%"
      position="relative"
      overflow="hidden"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentPage}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 260, damping: 20, mass: 0.8 },
            opacity: { duration: 0.15 },
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          {CurrentPageComponent && <CurrentPageComponent />}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
