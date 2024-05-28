import Link from "next/link"
import { Tabs } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export function NavbarDarkMode() {
  return (
    (<div
      className="flex flex-col md:flex-row justify-between items-center p-4 border-b dark:border-gray-800">
      <div className="flex items-center space-x-2">
        <Link className="text-sm font-medium dark:text-gray-300" href="#">
          My Workspace
        </Link>
        <span className="dark:text-gray-400">/</span>
        <h1 className="text-lg font-bold dark:text-gray-100 hover:cursor-pointer">My new form</h1>
      </div>
      <Tabs>
        <div className="flex space-x-2">
          <a className="dark:text-gray-300 hover:cursor-pointer" href="#">Create</a>
          <a className="dark:text-gray-300 hover:cursor-pointer" href="/connect">Connect</a>
          <a className="dark:text-gray-300 hover:cursor-pointer" href="/">Share</a>
          <a className="dark:text-gray-300 hover:cursor-pointer" href="#">Results</a>
        </div>
      </Tabs>
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <Button
          className="flex items-center border-slate-950 space-x-2 bg-neutral-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-800"
          variant="secondary">
          <FontAwesomeIcon icon={faEye} />
        </Button>
        <Button
          className="flex items-cente bg-gray-950 hover:bg-zinc-800 text-slate-100 space-x-2 dark:bg-bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-700"
          variant="secondary">
          <span>Publish</span>
        </Button>
        <UserIcon
          className="h-8 w-8 hover:cursor-pointer rounded-full bg-gray-300 dark:bg-gray-700 dark:text-gray-400" />
      </div>
    </div>)
  );
}



function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}
