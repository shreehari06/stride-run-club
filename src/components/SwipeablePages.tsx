import { motion, AnimatePresence } from "framer-motion";
import { useDrag } from "@use-gesture/react";
import { Box } from "@chakra-ui/react";

interface PageData {
  key: string;
  component: React.ComponentType;
}

interface SwipeablePagesProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pages: PageData[];
}

export function SwipeablePages({
  currentPage,
  setCurrentPage,
  pages,
}: SwipeablePagesProps) {
  const bind = useDrag(
    ({ offset: [ox], velocity: [vx], direction: [dx], cancel }) => {
      // Only trigger on significant swipe
      if (Math.abs(ox) > 50 || Math.abs(vx) > 0.5) {
        if (dx > 0 && currentPage > 0) {
          setCurrentPage(currentPage - 1);
        } else if (dx < 0 && currentPage < pages.length - 1) {
          setCurrentPage(currentPage + 1);
        }
        cancel();
      }
    },
    {
      axis: "x",
      filterTaps: true,
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
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.3,
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          {CurrentPageComponent && <CurrentPageComponent />}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
