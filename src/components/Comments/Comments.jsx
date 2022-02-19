import React, { useEffect, useRef } from "react";

const Comments = () => {
  const commentsRef = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "YSKuo/personal-site-comment");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "💬");
    script.setAttribute("theme", "github-light");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    if (commentsRef.current) {
      commentsRef.current.appendChild(script);
    }

    return () => {
      if (commentsRef.current) {
        commentsRef.current.innerHTML = "";
      }
    };
  }, []);
  return <div ref={commentsRef} />;
};

export default Comments;
