import type { MetaFunction } from "@remix-run/node";
import Mycard from "./mycard";

export const meta: MetaFunction = () => {
  return [
    { title: "Patipat" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-12 bg-teal-700 rounded-xl">
      <Mycard />
      <h1 className="text-3xl">Welcome</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
      <hr />
      <h1 className="text-3xl">My Profile</h1>
      <img src="\image\profileme.jpg" alt="" style={{ width: "25%;"}} />
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>Patipat Chanseetid</li>
        <li>Class : Information Technology</li>
        <li>Email : <a href="mailto:patipat.cha@rmutto.ac.th">Contact me</a></li>
          </ul>
    </div>
  );
}
