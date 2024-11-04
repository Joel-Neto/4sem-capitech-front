import React from "react";
import DOMPurify from "dompurify";

interface IRenderHtmlProps {
  htmlContent: string;
}

export default function RenderHtml({ htmlContent }: IRenderHtmlProps) {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} className="py-5" />
  );
}
