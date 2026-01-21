"use client";
import "quill/dist/quill.snow.css";
import { useEffect, useRef } from "react";

export default function QuillEditor() {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorRef.current) return;
    if (typeof window === "undefined") return; // 🟢 chặn SSR

    (async () => {
      const Quill = (await import("quill")).default;
      const Image = (await import("quill/formats/image")).default;
      Quill.register(Image, true);

      const Size = Quill.import("attributors/style/size") as any;
      Size.whitelist = ["10px", "12px", "14px", "18px", "24px"];
      Quill.register(Size, true);

      const quill = new Quill(editorRef.current!, {
        theme: "snow",
        modules: {
          toolbar: {
            container: [
              [{ size: ["10px", "12px", "14px", "18px", "24px"] }],
              ["bold", "italic", "underline"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image"],
            ],
            handlers: {
              image: imageHandler,
            },
          },
        },
      });

      async function imageHandler(this: any) {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.click();

        input.onchange = async () => {
          const file = input.files?.[0];
          if (!file) return;

          //      const formData = new FormData();
          //   formData.append("file", file);

          //   const res = await fetch("/api/upload", {
          //     method: "POST",
          //     body: formData,
          //   });

          //   const { url } = await res.json();

          const url =
            "https://res.cloudinary.com/dwmz39exs/image/upload/v1766746026/trip1_grmlyb.jpg";

          let range = quill.getSelection();
          if (!range) range = { index: quill.getLength(), length: 0 };

          quill.insertEmbed(range.index, "image", url, "user");
          quill.setSelection(range.index + 1);
        };
      }
    })();
  }, []);

  return <div ref={editorRef} />;
}
