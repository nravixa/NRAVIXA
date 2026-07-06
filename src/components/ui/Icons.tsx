import React from "react";

export const Icons = {
  Instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  X: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  ),
  LinkedIn: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Facebook: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Threads: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 18.5a6 6 0 1 1 5.3-8.8" />
      <path d="M12 18.5V12a3 3 0 0 0-3-3" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  ),
  GitHub: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  Reddit: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M22.062 12c0-5.556-4.506-10.062-10.062-10.062S1.938 6.444 1.938 12 6.444 22.062 12 22.062c5.556 0 10.062-4.506 10.062-10.062zm-6.223 5.45c-2.316 1.488-5.362 1.488-7.678 0a.394.394 0 0 1 .42-.66c1.996 1.258 4.603 1.258 6.598 0a.394.394 0 0 1 .66.66zm-5.06-2.57c-1.102 0-1.996-.894-1.996-1.996s.894-1.995 1.996-1.995c1.102 0 1.995.893 1.995 1.995s-.893 1.996-1.995 1.996zm6.27 0c-1.102 0-1.995-.894-1.995-1.996s.893-1.995 1.995-1.995 1.996.893 1.996 1.995-.894 1.996-1.996 1.996zm-4.707-4.47l-.924-4.55 3.23.682a2.44 2.44 0 0 1 4.708.281 2.44 2.44 0 0 1-4.708-.282l-2.457-.518.73 3.593c2.95.275 5.565 1.433 7.03 3.018a1.998 1.998 0 0 1 1.636-.88c1.102 0 1.995.894 1.995 1.996 0 .973-.7 1.785-1.63 1.96.06.33.09.664.09 1.002 0 3.344-3.784 6.056-8.444 6.056S3.556 16.344 3.556 13c0-.338.03-.672.09-1.002A1.995 1.995 0 0 1 2.016 10.04c0-1.102.893-1.996 1.995-1.996a1.998 1.998 0 0 1 1.636.88c1.465-1.585 4.08-2.743 7.03-3.018z" />
    </svg>
  ),
};
