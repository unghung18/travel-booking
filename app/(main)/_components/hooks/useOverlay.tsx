"use client";
import { ReactNode, useState } from "react";

const useOverlay = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const showOverlay = (node: ReactNode) => {
    setContent(node);
    setOpen(true);
  };

  const hideOverlay = () => {
    setOpen(false);
    setContent(null);
  };

  const Overlay = () => {
    if (!open) return null;

    return (
      <div className="fixed inset-0 z-100 flex items-center justify-center p-6 bg-black/80 overlay-animate">
        <button
          onClick={hideOverlay}
          className="absolute top-6 right-6 text-white text-3xl"
        >
          ✕
        </button>

        {content}
      </div>
    );
  };

  return { showOverlay, hideOverlay, Overlay };
};

export default useOverlay;
